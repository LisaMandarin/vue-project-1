<script setup>
    import { onMounted, ref, watch } from 'vue'
    const api_url = 'https://api.github.com/repos/vuejs/core/commits?per_page=3&sha='
    const branches = ref(['main', 'minor'])
    const currentBranch = ref('main')
    const commits = ref([])

    async function fetchData() {
        const url =  `${api_url}${currentBranch.value}`
        const res = await fetch(url)
        commits.value = await res.json()
    }
    function truncate(v) {
        const newline = v.indexOf('\n')
        return v.slice(0, newline)
    }
    function formatDate(v) {
        return v.replace(/T|Z/g, ' ')
    }
    onMounted(fetchData)
    watch(currentBranch, fetchData)
    
</script>

<template>
    <h1 class="font-bold text-2xl text-center">
        Fetch Data
    </h1>
    <div class="w-sm mx-auto">
        <h2 class="font-bold text-lg">Latest Vue Core Commits</h2>
        <template v-for="branch in branches">
            <input type="radio" :id="branch" name="branch" :value="branch" v-model="currentBranch"/>
            <label :for="branch" class="ml-1 mr-2">{{ branch }}</label>
        </template>
        <p>vuejs/core@{{ currentBranch }}</p>
        <ul v-if="commits.length > 0">
            <li v-for="{html_url, sha, commit, author} in commits" :key="sha">
                <a :href="html_url" target="_blank" class="link">
                    {{ sha.slice(0, 7) }}
                </a>
                <span> - {{ truncate(commit.message) }}</span>
                <p>
                    by 
                    <a :href="author.html_url" class="link">
                        {{ commit.author.name }}
                    </a>
                    <span class="font-bold">at {{ formatDate(commit.author.date) }}</span>
                </p>
            </li>
        </ul>
        <p v-else>No commits</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [1,2,3],
                isShow: true
            }
        }
    }
</script>

<template>
    <div class="flex justify-center gap-4">
        <button class="custom-btn" @click="isShow = !isShow">Toggle List</button>
        <button class="custom-btn" @click="list.push(list.length+1)">Push Number</button>
        <button class="custom-btn" @click="list.pop()">Pop Number</button>
        <button class="custom-btn" @click="list.reverse()">Reverse List</button>
    </div>

    <ul class="w-fit mx-auto" v-if="isShow && list.length > 0">
        <li v-for="number in list">{{ number }}</li>
    </ul>

    <p class="w-fit mx-auto" v-else-if="list.length > 0">List is hidden</p>
    <p class="w-fit mx-auto" v-else>List is empty</p>
</template>
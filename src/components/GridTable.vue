<script setup>
import { computed, watch, ref, onMounted } from "vue";
import { AiFillCaretDown, AiFillCaretUp } from "vue-icons-plus/ai";

const props = defineProps({
  searchQuery: String,
  columns: Array,
  data: Array,
});
const sortKey = ref("");
const sortOrder = ref(
  props.columns.reduce((object, key) => {
    object[key.toLowerCase()] = 1;
    return object;
  }, {})
);

const filteredData = computed(() => {
  const filterKey = props.searchQuery.toLowerCase();
  if (filterKey) {
    let result = props.data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
      });
    });
    sort(result)
    return result;
  } else {
    const result = sort(props.data)
    return result ? result : props.data;
  }
});

function sort(result) {
  const key = sortKey.value.toLowerCase();
  if (key) {
    const order = sortOrder.value[key];
    result = result.sort((a, b) => {
      a = a[key];
      b = b[key];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
}

function sortBy(key) {
  sortKey.value = key;
  sortOrder.value[key.toLowerCase()] *= -1;
  console.log("updated sortOrder: ", sortOrder.value);
}
</script>
<template>
  <table class="border-2 border-green-500">
    <thead>
      <tr>
        <th
          class="bg-green-500 p-2 w-[120px] text-center border border-white cursor-pointer"
          v-for="key in props.columns"
          @click="sortBy(key)"
        >
          {{ key }}
          <span v-if="sortOrder[key.toLowerCase()] === 1">
              <AiFillCaretDown class="inline w-4" />
          </span>
          <span v-else>
              <AiFillCaretUp class="inline w-4"/>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in filteredData">
        <td
          class="bg-gray-100 p-2 w-[120px] border border-white"
          v-for="key in columns"
        >
          {{ record[key.toLowerCase()] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

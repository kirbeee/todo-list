<template>
  <ul>
    <li v-for="task in getTasks" :key="task">
      {{ task }}
    </li>
  </ul>
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";

export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");
    return{
      newTask,
      getTasks: taskStore.getTasks
    }
  },
  props: {
    text:{
      type: String,
      required: true
    }
  }
}
</script>
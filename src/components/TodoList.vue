<template>
  <ul>
    <li v-for="task in getTasks" :key="task">
      <Task :taskText="task" />
    </li>
  </ul>
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";
import Task from "./Task.vue";

export default {
  components: {
    Task
  },
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
<template>
  <div class="flex justify-between items-center my-2">
    <h3 CLASS="mr-4">{{ taskText }}</h3>
    <button @click="deleteTask" class="button is-danger">Remove</button>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/task";


export default {
  setup(props) {
    const taskStore = useTaskStore();
    return {
      deleteTask: () => {
        taskStore.removeTask(taskStore.tasks.indexOf(props.taskText));
      }
    };
  },
  props: {
    taskText: {
      type: String,
      required: true
    },

  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
.mr-4 {
  margin-right: 1rem; /* Adjust the spacing as needed */
}
</style>
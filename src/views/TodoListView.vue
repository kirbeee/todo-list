<template>
  <input
      type="text"
      v-model="newTask"
      placeholder="please input the task"
      @keyup.enter="addTask(newTask)"
  >
  <TodoList :text="task" />
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/task.js";
import TodoList from "@/components/TodoList.vue";
import {ref} from "vue";

export default {
  setup(){
    const taskStore = useTaskStore();
    const newTask = ref("");

    return {
      newTask,
      addTask: taskStore.addTask,
      getTasks: taskStore.getTasks
    }
  },
  components: {
    TodoList
  },
  methods: {
    handleEnter() {
      this.task = this.inputValue;
      this.inputValue = ""
    }
  },
  data() {
    return {
      inputValue: "",
      task: ""
    };
  }

}


</script>
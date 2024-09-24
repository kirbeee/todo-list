<template>
  <div class='car-form panel'>
    <h4 class="subtitle is-3">Welcome</h4>
    <div class="field-group">
      <div class="field">
      <label class="label">Today's Task</label>
      <input
          type="text"
          v-model="newTask"
          placeholder="please input the task"
          @keyup.enter="addTask(newTask)"
          class="input my-2"/>
      <button @click="addTask(newTask)" class="button is-link">Add Task</button>
      </div>
    </div>
  <TodoList :text="task" />
  </div>
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/task.js";
import TodoList from "@/components/TodoList.vue";
import { onMounted, ref} from "vue";

export default {
  setup(){
    const taskStore = useTaskStore();
    const newTask = ref("");
    onMounted(() => {
      // taskStore.getTasks();
    });
    return {
      newTask,
      addTask: taskStore.addTask,
      getTasks: taskStore.getTasks
    }
  },
  components: {
    TodoList
  },
  data() {
    return {
      inputValue: "",
      task: ""
    };
  }
}
</script>
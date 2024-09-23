import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: []
    }),
    actions: {
        addTask: function (task: string)  {
            if(task === '') {
                return;
            }
            this.tasks.unshift(task);
        },
        removeTask: function (index: number) {
            this.tasks.splice(index, 1);
        }
    },
    getters: {
        getTasks: (state) => state.tasks
    }
});

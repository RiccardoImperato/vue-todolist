'use strict';

const { createApp } = Vue;

const toDos = [
    {
        task: 'Fare la spesa',
        done: true
    },
    {
        task: 'lavare la macchina',
        done: false
    },
    {
        task: 'pagare bolletta',
        done: true
    },
    {
        task: 'chiamare la zia',
        done: true
    },
    {
        task: 'andare dal medico',
        done: false
    }
];

createApp({
    data() {
        return {
            toDos,
            currentIndex: 0,
            newTask: null
        }
    },
    methods: {
        deleteTask(index) {
            this.currentIndex = index;
            this.toDos.splice(index, 1);
        },
        addTask() {
            if (this.newTask.trim !== null) {
                this.toDos.push({ task: this.newTask, done: false });
                console.log(this.newTask);
            };
            this.newTask = null;
        },
        doneUndone(index) {
            this.toDos[index].done = !this.toDos[index].done;
        }
    }
}).mount('#app');

'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDos: [
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
            ]
        }
    }
}).mount('#app');
<template>
<div class="todos">
    <lottie-player src="https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json" speed="1" loop autoplay />
    <h1>Hello {{name}}</h1>
    <div class="">
        <input v-model="newTodo" type="text" />
        <button @click="addTodo">Add</button>
    </div>
    <div v-for="todo in todos" :key="todo.id">
        <div class="text">
            <label>
                <input type="checkbox" :checked="todo.done" @input="changeTodo($event,todo)">
                <todo :todo="todo" />
            </label>
            <button @click="removeTodo(todo)">Remove</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    lottiePlayer
} from 'lottie-player-vue';
import todo from '../components/todo';
export default {
    name: 'todos-page',
    data() {
        return {
            newTodo: ''
        }
    },
    created() {
        if (!this.$store.getters.name) {
            this.$store.dispatch('init')
        }
        this.$store.dispatch('initTodos')
    },
    computed: {
        name() {
            return this.$store.getters.name
        },
        todos() {
            return this.$store.getters.todos
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch('addTodo', this.newTodo)
            this.newTodo = ''
        },
        changeTodo(ev, todo) {
            todo = JSON.parse(JSON.stringify(todo))
            todo.done = ev.target.checked
            this.$store.dispatch('changeTodo', todo)
        },
        removeTodo(todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    components: {
        lottiePlayer,
        todo
    }
}
</script>

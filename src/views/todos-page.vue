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

<script lang="ts">
import {
    lottiePlayer
} from 'lottie-player-vue';
import Vue from 'vue';
import todo from '../components/todo.vue';
interface Idata{
    newTodo:string
}
export default Vue.extend({
    name: 'todos-page',
    data():Idata {
        return {
            newTodo: '',
        }
    },
    created() {
        if (!this.$store.getters.name) {
            this.$store.dispatch('init')
        }
        this.$store.dispatch('initTodos')
    },
    computed: {
        name():string {
            return this.$store.getters.name
        },
        todos():Itodo[] {
            return this.$store.getters.todos
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch('addTodo', this.newTodo)
            this.newTodo = ''
        },
        changeTodo(ev:any, todo:Itodo) {
            todo = JSON.parse(JSON.stringify(todo))
            todo.done = ev.target.checked
            this.$store.dispatch('changeTodo', todo)
        },
        removeTodo(todo:Itodo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    components: {
        lottiePlayer,
        todo
    }
})
</script>

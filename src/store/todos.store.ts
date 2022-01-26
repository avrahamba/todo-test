import utils from '../services/utils';
import {Module} from 'vuex';
interface Imodule {
    todos:Itodo[]
}

const todo:Itodo={
    id:'dsfdsf',
    text2:'sadsada',
    done:true
}
type todoKey = 'id'|'text2' 
let a:todoKey  = 'id'
a = 'text2'
todo[a] ='dsfdsf'

const mudule : Module<Imodule,any> ={
    state: {
        todos: []
    },
    getters: {
        todos({ todos }) {
            return todos
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
        addTodo(state, todo:Itodo) {
            state.todos.push(todo)
        },
        changeTodo(state, todo) {
            const index = state.todos.findIndex(currTodo => currTodo.id === todo.id);
            state.todos.splice(index, 1, todo)
        },
        removeTodo(state, todoId) {
            const index = state.todos.findIndex(currTodo => currTodo.id === todoId);
            state.todos.splice(index, 1)
        }
    },
    actions: {
        initTodos({ commit }) {
            let todos:string|null|Itodo[] = localStorage.getItem('todos')
            if (!todos) {
                localStorage.setItem('todos', '[]')
            }else{
                todos = JSON.parse(todos)
            }
            commit('setTodos', todos)
        },
        addTodo({ commit, state }, text2) {
            const todo:Itodo = {
                text2,
                id: utils.makeid(),
                done: false
            }
            commit('addTodo', todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        changeTodo({ commit, state }, todo) {
            commit('changeTodo', todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo({ commit, state }, todo) {
            commit('removeTodo', todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },
}
export default mudule
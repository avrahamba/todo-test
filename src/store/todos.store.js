import utils from '../services/utils';
export default {
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
        addTodo(state, todo) {
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
            let todos = localStorage.getItem('todos')
            if (!todos) {
                todos = []
                localStorage.setItem('todos', todos)
            }else{
                todos = JSON.parse(todos)
            }
            commit('setTodos', todos)
        },
        addTodo({ commit, state }, text) {
            const todo = {
                text,
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
<template>
<div class="home">
    <h1>Please enter your name</h1>
    <input v-model="name" type="text" />
    <router-link to="/todo">Enter</router-link>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'home',
    created() {
        this.$store.dispatch('init')
    },
    computed: {
        name: {
            get() {
                return this.$store.getters.name
            },
            set(val) {
                this.$store.dispatch('setName', val)
            }
        }
    },
    components: {

    }
})
</script>

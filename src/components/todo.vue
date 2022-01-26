<template>
<span>
    {{ text }}
</span>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'todo',
    props: {
        todo: Object as ()=>Itodo
    },
    computed: {
        text():string {
            return this.todo.text2
        }
    }
})
</script>

<style>

</style>

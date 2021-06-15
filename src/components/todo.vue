<template>
<span>
    {{ text }}
</span>
</template>

<script>
export default {
    name: 'todo',
    props: {
        todo: Object
    },
    computed: {
        text() {
            return this.todo.text
        }
    }
}
</script>

<style>

</style>

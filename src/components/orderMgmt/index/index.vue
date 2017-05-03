<template>
    <div>
        <v-banner></v-banner>
        <v-nav></v-nav>
        <v-todoList></v-todoList>
    </div>
</template>
<script>
    import vBanner from './banner.vue';
    import vNav from './nav.vue';
    import vTodoList from './todoList.vue';

    export default {
        components: {
            vBanner,
            vNav,
            vTodoList,
        }
    }
</script>
<style>

</style>
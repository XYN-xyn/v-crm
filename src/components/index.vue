<template>
    <div>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import orderIndex from './orderMgmt/index/index.vue';
    import vFooter from './orderMgmt/index/footer.vue';
    export default {
        components: {
            orderIndex,
            vFooter
        }
    }
</script>
<style>

</style>
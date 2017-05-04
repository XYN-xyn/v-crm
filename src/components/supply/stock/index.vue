<template>
    <div class="stock-container">
        <tab active-color="#64C0F4" defaultColor="#333" bar-active-color="#64C0F4">
            <tab-item :selected="index == 0" @on-item-click="onItemClick(0)">企业</tab-item>
            <tab-item :selected="index == 1" @on-item-click="onItemClick(1)">商品</tab-item>
        </tab>
    </div>
</template>
<script>
    import {Tab, TabItem, Swiper, SwiperItem} from 'vux';
    export default {
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        created() {
            if(this.$route.path == '/stock'){
                this.index = 0;
            } else {
                this.index = 1;
            }
        },
        mounted() {
            this.setTitle();
        },
        data() {
            return {
                index: 0
            }
        },
        methods: {
            onItemClick(i) {
                this.index = i;
                if(i == 0){
                    this.$router.push('stock');
                } else {
                    this.$router.push('stockItem');
                }
            }
        }
    }
</script>
<style lang="less">
    .stock-container{

    }
</style>
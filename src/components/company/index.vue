<template>
    <div class="compony">
        <tab active-color="#64C0F4" defaultColor="#333" bar-active-color="#64C0F4">
            <tab-item :selected="selected == 'company'" @on-item-click="onItemClick(1)">企业</tab-item>
            <tab-item :selected="selected == 'companyItems'" @on-item-click="onItemClick(2)">商品</tab-item>
        </tab>
        <router-view></router-view>
    </div>
</template>
<script>
    import {Tab, TabItem} from 'vux';
    import companyInfo from './index/companyInfo.vue';
    import companyItems from './index/companyItems.vue';
    export default {
        components: {
            Tab,
            TabItem,
            companyInfo,
            companyItems
        },
        beforeMount(){
            //console.log(this.$route,this.$router);
            if(this.$route.path == '/company'){
                this.selected = 'company';
            } else {
                this.selected = 'companyItems'
            }
        },
        mounted(){
            this.setTitle();
        },
        data(){
            return {
                selected: '',
            }
        },
        methods: {
            onItemClick(index) {
                if(index == 1){
                    this.$router.push('company');
                } else {
                    this.$router.push('companyItems');
                }
            }
        }
    }
</script>
<style lang="less">
    .compony{
        height: 100%;
        position: relative;
    }
</style>
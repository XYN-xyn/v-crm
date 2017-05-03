<template>
    <div class="compony">
        <tab>
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
            document.title = this.$route.name;
        },
        data(){
            return {
                selected: '',
            }
        },
        methods: {
            onItemClick(index) {
                //console.log(this.$router);
                if(index == 1){
                    this.$router.push('company');
                } else {
                    this.$router.push('companyItems');
                }
            }
        }
    }
</script>
<style lang="less" scope>
    @blue: #64C0F4;
    .compony{
        height: 100%;
        position: relative;
        .vux-tab {
            .vux-tab-item{
                color: #333;
            }
            .vux-tab-item.vux-tab-selected {
                color: @blue;
                border-bottom: 2px solid @blue;
            }
        }
        .vux-tab-ink-bar{
            background-color: @blue;
        }
    }
</style>
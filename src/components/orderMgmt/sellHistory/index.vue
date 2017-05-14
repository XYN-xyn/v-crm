<template>
    <div class="sellHistory-container">
        <tab active-color="#64C0F4" defaultColor="#333" bar-active-color="#64C0F4">
            <tab-item :selected="index == 0" @on-item-click="onItemClick(0)">全部</tab-item>
            <tab-item :selected="index == 1" @on-item-click="onItemClick(1)">待审核</tab-item>
            <tab-item :selected="index == 2" @on-item-click="onItemClick(2)">待收款</tab-item>
            <tab-item :selected="index == 3" @on-item-click="onItemClick(3)">已收款</tab-item>
            <tab-item :selected="index == 4" @on-item-click="onItemClick(4)">待发货</tab-item>
        </tab>
        <swiper v-model="index" :show-dots="false" @on-index-change="itemChange">
            <swiper-item v-for="(item,index) in itemList" :key="index">
                <sell-item></sell-item>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import {Tab, TabItem, Swiper, SwiperItem} from 'vux';
    import sellItem from './sub/sellItem.vue';
    export default {
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            sellItem
        },
        created() {
            const _this = this;
            this.itemList.forEach(function (el,index) {
                if(_this.$route.path == el.path){
                    _this.index = index;
                }
            });
        },
        mounted () {
            this.setTitle();
        },
        data () {
            return {
                index: 0,
                itemList: [
                    {
                        name: '全部',
                        path: '/sellItem0'
                    },
                    {
                        name: '待审核',
                        path: '/sellItem1'
                    },
                    {
                        name: '待收款',
                        path: '/sellItem2'
                    },
                    {
                        name: '已收款',
                        path: '/sellItem3'
                    },
                    {
                        name: '待发货',
                        path: '/sellItem4'
                    }
                ]
            }
        },
        methods: {
            onItemClick(i) {
                this.index = i;

                this.$router.push(this.itemList[i].path);
            },
            itemChange(i) {
                this.$router.push(this.itemList[i].path);
            }
        }
    }
</script>
<style lang="less">
    .sellHistory-container{
        background-color: #f5f5f5;
        .vux-slider{
            height: calc(~ '100% - 44px');
        }
        .vux-swiper{
            height: 100% !important;
        }
        .vux-swiper-item{
            overflow: scroll;
        }
    }
</style>
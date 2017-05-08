<template>
    <div class="stock-container">
        <tab active-color="#64C0F4" defaultColor="#333" bar-active-color="#64C0F4">
            <tab-item :selected="index == 0" @on-item-click="onItemClick(0)">物料</tab-item>
            <tab-item :selected="index == 1" @on-item-click="onItemClick(1)">商品</tab-item>
        </tab>
        <swiper v-model="index" :show-dots="false" height="atuo">
            <swiper-item>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
                <div class="stock-list">
                    <div class="stock-list-l">
                        <img src="../../../assets/img/stock-item.png">
                    </div>
                    <div class="stock-list-m">
                        <span style="font-size: 15px;padding: 20px 0 10px 0;">商品名称：塑料置物架</span>
                        <span>库存数量：<span style="display: inline;color: #666;">8000个</span></span>
                        <span>商品说明：<span style="display: inline;color: #666;">A型号优质类商品</span></span>
                    </div>
                    <div class="stock-list-r">
                        <span>参考单价</span>
                        <span style="color: #ed0737;">￥10000</span>
                    </div>
                </div>
            </swiper-item>
        </swiper>
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
        data() {
            return {
                index: 0
            }
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
    .stock-list{
        display: flex;
        width: 100%;
        font-size: 12px;
        color: #333;
        border-bottom: 1px solid #d6d6d6;
        background-color: #fff;
        span{
            display: block;
        }
        .stock-list-l{
            flex-basis: 81px;
            flex-shrink: 0;
            height: 81px;
            margin: 15px 10px;
            img{
                display: block;
                width: 100%;
            }
        }
        .stock-list-m{
            flex-basis: 169px;
            flex-grow: 1;
            font-size: 12px;
            color: #333;
        }
        .stock-list-r{
            flex-basis: 50px;
            flex-shrink: 0;
            font-size: 12px;
            color: #333;
            padding-top: 30px;
            .list-r-r{
                float: right;
            }
            .list-r-l{
                float: left;
            }
        }
    }
    .stock-container{
        .vux-slider{
            height: calc(~'100% - 44px');
            .vux-swiper{
                height: 100% !important;
                background-color: #f5f5f5;
            }
        }
    }
</style>
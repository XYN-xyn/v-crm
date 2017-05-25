<template>
    <div class="reviewItem-container">
        <div class="reviewItem-list">
            <div class="reviewItem-container-h">
                <span>当当塑料制品有限公司</span>
                <span>订单审核</span>
            </div>
            <!--<div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-bottom: 10px;">
                <span>订单编号：11023432523</span>
            </div>-->
            <div class="reviewItem-container-c">
                <div class="reviewItem-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>
                <div class="reviewItem-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewItem-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div class="reviewItem-container-c">
                <div class="reviewItem-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>

                <div class="reviewItem-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewItem-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-top: 10px;">
                <span>订单说明：加双蛋，少盐</span>
            </div>
            <div class="reviewItem-container-b">
                <div class="reviewItem-container-b-l">
                    <div>
                        <div class="payType">
                            <span>付款状态</span>
                        </div>
                        <div>
                            <span>已付款：</span><span style="color: #666;">￥0</span>
                        </div>
                        <div>
                            <span>待付款：</span><span style="color: #666;">￥1000.00</span>
                        </div>
                    </div>
                </div>
                <div class="reviewItem-container-b-r">
                    <div>
                        <span>合计</span><span style="font-size: 14px;color: #ed0737;">￥10000</span>
                    </div>
                    <div style="background-color: #64C0F4;color: #fff;line-height: 2.0em;">
                    <span @click="toReviewInfo(1)">
                        订单审核
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="reviewItem-list">
            <div class="reviewItem-container-h">
                <span>当当塑料制品有限公司</span>
                <span>定制审核</span>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-bottom: 10px;">
                <span>定制说明：</span>
                <span style="display: block;color: #666;text-indent: 2em;">定制”一词起源于萨维尔街，意思是为个别客户量身剪裁。萨维尔街(Savile Row)是一个在伦敦中央梅费尔(Mayfair)的购物街区，因为传统的定制男士服装行业(bespoke tailoring)而闻名</span>
            </div>
            <div class="reviewItem-files clearfloat">
                <div class="file-name">
                    <span>附件：</span>
                </div>
                <div class="file-list">
                    <img src="../../../../assets/img/stream-item.png" alt="">
                </div>
                <div class="file-list">
                    <img src="../../../../assets/img/stream-item.png" alt="">
                </div>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-top: 10px;">
                <span>定制数量：1000件</span>
            </div>
            <div class="reviewItem-container-b">
                <div class="reviewItem-container-b-l">
                    <div>

                    </div>
                </div>
                <div class="reviewItem-container-b-r">
                    <div>
                        <span>合计</span><span style="font-size: 14px;color: #ed0737;">￥10000</span>
                    </div>
                    <div style="background-color: #64C0F4;color: #fff;line-height: 2.0em;">
                    <span @click="toReviewInfo(2)">
                        定制审核
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="reviewItem-list">
            <div class="reviewItem-container-h">
                <span>当当塑料制品有限公司</span>
                <span>退货审核</span>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;">
                <span>订单编号：11023432523</span>
            </div>
            <div class="reviewItem-container-c">
                <div class="reviewItem-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>

                <div class="reviewItem-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewItem-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div class="reviewItem-container-c">
                <div class="reviewItem-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>

                <div class="reviewItem-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewItem-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-top: 10px;">
                <span>订单说明：加双蛋，少盐</span>
            </div>
            <div class="reviewItem-container-b">
                <div class="reviewItem-container-b-l">
                    <div>
                        <div class="payType">
                            <span>付款状态</span>
                        </div>
                        <div>
                            <span>已付款：</span><span style="color: #666;">￥0</span>
                        </div>
                        <div>
                            <span>待付款：</span><span style="color: #666;">￥1000.00</span>
                        </div>
                    </div>
                </div>
                <div class="reviewItem-container-b-r">
                    <div>
                        <span>合计</span><span style="font-size: 14px;color: #ed0737;">￥10000</span>
                    </div>
                    <div style="background-color: #64C0F4;color: #fff;line-height: 2.0em;">
                    <span @click="toReviewInfo(3)">
                        退货审核
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            toReviewInfo(type) {
                switch (type) {
                    case 1 : this.$router.push('/reviewInfo');break;
                    case 2 : this.$router.push();break;
                    case 3 : this.$router.push();break;
                }
            }
        }
    }
</script>
<style lang="less">
    .reviewItem-container{
        .reviewItem-list{
            background-color: #fff;
            margin-top: 10px;

            .reviewItem-container-h{
                display: flex;
                /*margin-top: 10px;*/
                justify-content: space-between;
                padding: 10px 0;
                span{
                    font-size: 14px;
                    &:first-child{
                        margin-left: 10px;
                    }
                    &:last-child{
                        margin-right: 10px;
                         color: #64C0F4;
                    }
                }
            }
            .reviewItem-files{
                background-color: #f5f5f5;
                >div{
                    float: left;
                }
                 .file-name{
                     margin-left: 10px;
                     font-size: 12px;
                     padding-top: 10px;
                 }
                 .file-list{
                    width: 58px;
                    height: 58px;
                    margin: 10px 0 10px 10px;
                    img{
                        display: block;
                        width: 100%;
                    }
                 }
            }
            .reviewItem-container-c{
                display: flex;
                font-size: 12px;
                line-height: 1.5em;
                background-color: #f5f5f5;
                .reviewItem-l{
                    flex-basis: 65px;
                    flex-shrink: 0;
                    height: 65px;
                    margin: 10px;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .reviewItem-m{
                    flex-grow: 1;
                    flex-shrink: 1;
                    margin: 8px 0 10px 0;
                    span{
                        display: block;
                    }
                }
                .reviewItem-r{
                    flex-basis: 50px;
                    flex-shrink: 0;
                    margin-top: 10px;
                    margin-right: 10px;
                    span{
                        display: block;
                        text-align: right;
                    }
                }
            }
            .reviewItem-container-b{
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                font-size: 12px;
                padding: 5px 0 10px 0;
                .reviewItem-container-b-l{
                    padding-left: 10px;
                    flex-grow: 1;
                    height: 67px;
                    .payType{
                        padding: 5px 0;
                    }
                }
                .reviewItem-container-b-r{
                    padding-right: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    text-align: center;
                    height: 67px;
                }
            }
        }
    }
</style>
<template>
    <div class="reviewInfo-container">
        <div class="reviewInfo-list">
            <div class="address">
                <div class="address-name">
                    <div>
                        <span>收货人</span><span>:</span>
                    </div>
                    <div>
                        <span>收货地址</span><span>:</span>
                    </div>
                </div>
                <div class="address-info">
                    <div>
                        <span>ALTABA集团科技公司</span>
                        <span style="color:#fff;background-color: #64C0F4;width: 60px;text-align: center;line-height: 2.0em;">沟通</span>
                    </div>
                    <div>
                        <span>北京朝阳区奥运街道鸟巢运动场,北京朝阳区奥运街道鸟巢运动场,北京朝阳区奥运街道鸟巢运动场</span>
                    </div>
                </div>
            </div>
            <div class="reviewInfo-container-h">
                <span>当当塑料制品有限公司</span>
                <span>2017-05-13</span>
            </div>
            <div class="reviewInfo-container-c">
                <div class="reviewInfo-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>
                <div class="reviewInfo-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewInfo-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div class="reviewInfo-container-c">
                <div class="reviewInfo-l">
                    <img src="../../../../assets/img/stock-item.png" alt="">
                </div>

                <div class="reviewInfo-m">
                    <span>A类1型号商品</span>
                    <span>高级定制版黑色塑料置物架</span>
                    <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                    <span style="color: #666;">发货时间：2017-04-01前</span>
                </div>
                <div class="reviewInfo-r">
                    <span style="color: #ed0737">￥5000</span>
                    <span style="color: #64C0F4;">X100件</span>
                </div>
            </div>
            <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-top: 10px;">
                <span>订单说明：加双蛋，少盐</span>
            </div>
            <div class="reviewInfo-container-b">
                <div class="reviewInfo-container-b-l">
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
                <div class="reviewInfo-container-b-r">
                    <div>
                        <span>合计</span><span style="font-size: 14px;color: #ed0737;">￥10000</span>
                    </div>
                    <div style="background-color: #64C0F4;color: #fff;line-height: 2.0em;">
                    </div>
                </div>
            </div>
            <div class="reviewInfo-group">
                <div>
                    <span>审核结果：</span>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Checklist } from 'vux';
    export default {
        components: {
            Checklist
        }
    }
</script>
<style lang="less">
    .reviewInfo-container{
        background-color: #f5f5f5;
        .reviewInfo-list{
            background-color: #fff;
            .address{
                font-size: 14px;
                color: #666;
                display: flex;
                padding-top: 10px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
                .address-name{
                    flex-basis: 60px;
                    flex-shrink: 0;
                    margin-left: 10px;
                    div{
                        display: flex;
                        justify-content: space-between;
                        &:last-child{
                            margin-top: 5px;
                        }
                    }
                }
                .address-info{
                    flex-grow: 1;
                    flex-shrink: 1;
                    margin-left: 10px;
                    margin-right: 10px;
                    div{
                        &:first-child{
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }
            }
            .reviewInfo-container-h{
                display: flex;
                justify-content: space-between;
                /*padding: 5px 0;*/
                padding-top: 10px;
                background-color: #f5f5f5;
                span{
                    font-size: 14px;
                    flex-grow: 1;
                    flex-shrink: 1;
                    background-color: #fff;
                    padding: 5px 0;
                    border-top: 1px solid #ccc;
                    &:first-child{
                        padding-left: 10px;
                    }
                    &:last-child{
                        padding-right: 10px;
                        font-size: 12px;
                        color: #666;
                        text-align: right;
                    }
                }
            }
            .reviewInfo-files{
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
            .reviewInfo-container-c{
                display: flex;
                font-size: 12px;
                line-height: 1.5em;
                background-color: #f5f5f5;
                .reviewInfo-l{
                    flex-basis: 65px;
                    flex-shrink: 0;
                    height: 65px;
                    margin: 10px;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .reviewInfo-m{
                    flex-grow: 1;
                    flex-shrink: 1;
                    margin: 8px 0 10px 0;
                    span{
                        display: block;
                    }
                }
                .reviewInfo-r{
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
            .reviewInfo-container-b{
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                font-size: 12px;
                padding: 5px 0 10px 0;
                .reviewInfo-container-b-l{
                    padding-left: 10px;
                    flex-grow: 1;
                    height: 67px;
                    .payType{
                        padding: 5px 0;
                    }
                }
                .reviewInfo-container-b-r{
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
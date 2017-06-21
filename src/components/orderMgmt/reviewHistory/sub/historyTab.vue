<template>
    <div class="historyTab-container">
        <div class="historyTab-container-h">
            <span>当当塑料制品有限公司</span>
            <span>2017-05-13</span>
        </div>
        <div class="historyTab-container-c">
            <div class="historyTab-l">
                <img src="../../../../assets/img/stock-item.png" alt="">
            </div>
            <div class="historyTab-m">
                <span>A类1型号商品</span>
                <span>高级定制版黑色塑料置物架</span>
                <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                <span style="color: #666;">发货时间：2017-04-01前</span>
            </div>
            <div class="historyTab-r">
                <span style="color: #ed0737">￥5000</span>
                <span style="color: #64C0F4;">X100件</span>
            </div>
        </div>
        <div class="historyTab-container-c">
            <div class="historyTab-l">
                <img src="../../../../assets/img/stock-item.png" alt="">
            </div>

            <div class="historyTab-m">
                <span>A类1型号商品</span>
                <span>高级定制版黑色塑料置物架</span>
                <span style="color: #666;">采购说明：请准时交货,并保证商品质量</span>
                <span style="color: #666;">发货时间：2017-04-01前</span>
            </div>
            <div class="historyTab-r">
                <span style="color: #ed0737">￥5000</span>
                <span style="color: #64C0F4;">X100件</span>
            </div>
        </div>
        <div style="font-size: 12px;background-color: #f5f5f5;padding: 5px 0 5px 10px;margin-top: 10px;">
            <span>订单说明：加双蛋，少盐</span>
        </div>
        <div class="historyTab-container-b">
            <div class="historyTab-container-b-l">
                <div>
                    <div>
                        <span>采购员：</span><span style="color: #666;">张三</span>
                    </div>
                    <div>
                        <span>电话：</span><span style="color: #666;">15654321234</span>
                    </div>
                </div>
            </div>
            <div class="historyTab-container-b-r">
                <div>
                    <span>合计</span><span style="font-size: 14px;color: #ed0737;">￥10000</span>
                </div>
                <div style="background-color: #64C0F4;color: #fff;line-height: 2.0em;">
                    <router-link tag="span" to="/historyInfo">
                        查看详情
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less">
    .historyTab-container{
        .historyTab-container-h{
            display: flex;
            justify-content: space-between;
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
        .historyTab-files{
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
        .historyTab-container-c{
            display: flex;
            font-size: 12px;
            line-height: 1.5em;
            background-color: #f5f5f5;
            .historyTab-l{
                flex-basis: 65px;
                flex-shrink: 0;
                height: 65px;
                margin: 10px;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .historyTab-m{
                flex-grow: 1;
                flex-shrink: 1;
                margin: 8px 0 10px 0;
                span{
                    display: block;
                }
            }
            .historyTab-r{
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
        .historyTab-container-b{
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            font-size: 12px;
            padding: 10px 0 10px 0;
            .historyTab-container-b-l{
                padding-left: 10px;
                flex-grow: 1;
                .payType{
                    padding: 5px 0;
                }
            }
            .historyTab-container-b-r{
                padding-right: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                text-align: center;
            }
        }
    }
</style>

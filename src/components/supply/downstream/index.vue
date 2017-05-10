<template>
    <div class="downStream-container">
        <div class="downStream-list">
            <div class="list-l">
                <img src="../../../assets/img/stream-item.png">
                <span>合作方式</span>
            </div>
            <div class="list-m">
                <span>阿里巴巴CEO</span>
                <span>马云</span>
                <span>手机：136741741</span>
            </div>
            <div class="list-r">
                <span>历史订单</span>
                <span>沟通</span>
            </div>
        </div>
        <div class="downStream-list">
            <div class="list-l">
                <img src="../../../assets/img/stream-item.png">
                <span>合作方式</span>
            </div>
            <div class="list-m">
                <span>阿里巴巴CEO</span>
                <span>马云</span>
                <span>手机：136741741</span>
            </div>
            <div class="list-r">
                <span>历史订单</span>
                <span>沟通</span>
            </div>
        </div>
        <div class="downStream-list">
            <div class="list-l">
                <img src="../../../assets/img/stream-item.png">
                <span>合作方式</span>
            </div>
            <div class="list-m">
                <span>阿里巴巴CEO</span>
                <span>马云</span>
                <span>手机：136741741</span>
            </div>
            <div class="list-r">
                <span>历史订单</span>
                <span>沟通</span>
            </div>
        </div>
        <div class="downStream-list">
            <div class="list-l">
                <img src="../../../assets/img/stream-item.png">
                <span>合作方式</span>
            </div>
            <div class="list-m">
                <span>阿里巴巴CEO</span>
                <span>马云</span>
                <span>手机：136741741</span>
            </div>
            <div class="list-r">
                <span>历史订单</span>
                <span>沟通</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.setTitle();
        }
    }
</script>
<style lang="less">
    .downStream-container{
        background-color: #f5f5f5;
        .downStream-list{
            display: flex;
            font-size: 14px;
            background-color: #fff;
            border-bottom: 1px solid #d6d6d6;
            .list-l{
                flex-basis: 64px;
                flex-shrink: 0;
                padding: 10px;
                img{
                    display: block;
                    width: 100%;
                }
                span{
                    color: #64C0F4;
                }

            }
            .list-m {
                flex-shrink: 1;
                flex-grow: 1;
                padding-top: 10px;
                span{
                    display: block;
                    &:not(:first-child){
                        color: #666;
                        font-size: 13px;

                     }
                }

            }
            .list-r{
                flex-shrink: 0;
                flex-basis: 75px;
                margin-right: 10px;
                span{
                    display: block;
                    text-align: center;
                    border: 1px solid #64C0F4;
                    margin-top: 20px;
                    margin-bottom: 20px;

                    &:first-child{
                        color: #64C0F4;
                    }
                    &:last-child{
                        color: #fff;
                         background-color: #64C0F4;
                    }
                }
            }
        }
    }
</style>
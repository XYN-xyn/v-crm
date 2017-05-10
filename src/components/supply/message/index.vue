<template>
    <div class="message-container">
        <search
                position="absolute"
                auto-scroll-to-top top="0" left="0"
        >
        </search>
        <div class="message-content">
            <div class="message-list">
                <div class="message-list-l">
                    <img src="../../../assets/img/message-logo.png">
                </div>
                <div class="message-list-m">
                    <span>苹果集团有限公司</span>
                    <span>赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！</span>
                </div>
                <div class="message-list-r">
                    <span>下午12：20</span>
                </div>
            </div>
            <div class="message-list">
                <div class="message-list-l">
                    <img src="../../../assets/img/message-logo.png">
                </div>
                <div class="message-list-m">
                    <span>苹果集团有限公司</span>
                    <span>赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！</span>
                </div>
                <div class="message-list-r">
                    <span>下午12：20</span>
                </div>
            </div>
            <div class="message-list">
                <div class="message-list-l">
                    <img src="../../../assets/img/message-logo.png">
                </div>
                <div class="message-list-m">
                    <span>苹果集团有限公司</span>
                    <span>赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！</span>
                </div>
                <div class="message-list-r">
                    <span>下午12：20</span>
                </div>
            </div>
            <div class="message-list">
                <div class="message-list-l">
                    <img src="../../../assets/img/message-logo.png">
                </div>
                <div class="message-list-m">
                    <span>苹果集团有限公司</span>
                    <span>赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！赶快发货，要造ipnone8了！！</span>
                </div>
                <div class="message-list-r">
                    <span>下午12：20</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Search} from 'vux';
    export default {
        components: {
            Search
        },
        mounted(){
            this.setTitle();
        }
    }
</script>
<style lang="less">
    .message-container{
        position: relative;
        background-color: #f5f5f5;
        overflow: scroll;
        .message-content{
            width: 100%;
            position: absolute;
            top: 44px;
            left: 0;
            background-color: #fff;
            .message-list{
                display: flex;
                color: #333;
                border-bottom: 1px solid #d6d6d6;
                .message-list-l{
                    flex-basis: 41px;
                    flex-shrink: 0;
                    height: 41px;
                    margin: 10px;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                .message-list-m{
                    flex-grow: 1;
                    flex-shrink: 1;
                    padding: 10px 0;
                    overflow: hidden;
                    white-space:nowrap;
                    text-overflow: ellipsis;
                    span{
                        display: block;
                        width: 100%;
                        &:first-child{
                             font-size: 15px;
                        }
                        &:last-child{
                            font-size: 12px;
                            color: #666;
                            overflow: hidden;
                            white-space:nowrap;
                            text-overflow: ellipsis;
                         }
                    }
                }
                .message-list-r{
                    flex-basis: 100px;
                    flex-shrink: 0;
                    padding-top: 15px;
                    span{
                        display: block;
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }
</style>
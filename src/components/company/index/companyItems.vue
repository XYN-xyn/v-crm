<template>
    <div class="companyItems">
        <search
            position="absolute"
            auto-scroll-to-top top="0" left="0"
            >
        </search>
        <div class="item-container clearfloat">
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../../../assets/img/company-item.png"></div>
                <div class="item-name"><span>离合器及制作系统</span></div>
                <div class="item-type"><span>型号：zz-250</span></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Search} from 'vux';
    export default {
        components: {
            Search
        }
    }
</script>
<style lang="less">
    .companyItems{
        height: calc(~'100% - 44px');
        background-color: #f5f5f5;
        padding: 0 5px 0 0;
        position: relative;
        overflow: scroll;
        .weui-search-bar{
            background-color: #f5f5f5;
            &:before{
                 border-top: none;
            }
            &:after{
                 border-bottom: none;
            }
        }
        .weui-search-bar__cancel-btn{
            color: #64C0F4;
            font-size: 14px;
        }
        .item-container{
            /*width: 100%;*/
            width: calc(100% - 5px);
            position: absolute;
            left: 0;
            top: 46px;
            .item{
                width: calc(~'50% - 5px');
                margin-left: 5px;
                margin-bottom: 5px;
                background-color: #fff;
                padding: 5px;
                float: left;
                box-sizing: border-box;
                .item-img{
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
        }

    }
</style>
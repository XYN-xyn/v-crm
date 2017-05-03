<template>
    <div class="companyItems">
        <search
            position="absolute"
            auto-scroll-to-top top="46px"
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
    import { Search, Group} from 'vux';
    export default {
        components: {
            Search
        }
    }
</script>
<style lang="less" scope>
    .companyItems{
        height: calc(~'100% - 44px');
        background-color: #f5f5f5;
        padding: 0 5px 0 0;
        .weui-search-bar{
            background-color: #f5f5f5;
            &:before{
                 border-top: none;
            }
            &:after{
                 border-bottom: none;
            }
        }
        .item-container{
            width: 100%;
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
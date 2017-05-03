<template>
    <div>
        <header>
            <span><a href="javascript:">消息</a></span>
            <h1>企业供应链-订单管理</h1>
        </header>
        <swiper :list="list" auto loop dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>
<script>
    import { Swiper } from 'vux';
    var img1 = require('../../../assets/img/banner_3_02.jpg');
    var img2 = require('../../../assets/img/360f91fde81076f6e0b9d60e76bb053f.jpg');
    var img3 = require('../../../assets/img/603ee3dbb461c140d13c94166fd86b2d.jpg');
    var img4 = require('../../../assets/img/063cfbfe6f71107cf6290f1524685c82.jpg');
    var img5 = require('../../../assets/img/19608195092537b859edc0e5c3fddfb8.jpg');
    export default {
        components: {
            Swiper
        },
        data () {
            return {
                list: [{
                    url: '',
                    img: img1,
                    title: ''
                },{
                    url: '',
                    img: img2,
                    title: ''
                },{
                    url: '',
                    img: img3,
                    title: ''
                },{
                    url: '',
                    img: img4,
                    title: ''
                },{
                    url: '',
                    img: img5,
                    title: ''
                }
                ]
            }
        }
    }
</script>
<style scoped lang="less">
    header {
        background: #fff;
         h1{
             color: #333;
             font-size: 18px;
             line-height: 40px;
             text-align: center;
         }
        span {
            color: #666;
            float: right;
            font-size: 16px;
            line-height: 40px;
            display: inline-block;
            padding-right: 15px;
            a {
                text-decoration: none;
            }
        }
    }
</style>
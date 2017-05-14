<template>
    <div class="supplyIndex-container">
        <div class="supplyIndex-container-h">
            <div class="container-h-man">
                <div class="container-h-man-l">
                    <span>马云</span>
                    <span>15655811234</span>
                </div>
                <div class="container-h-man-r">
                    <img src="../../assets/img/supply-manlogo.png">
                </div>
            </div>
            <div class="container-h-info">
                <span>CEO</span>
                <span>阿里巴巴集团</span>
            </div>
        </div>
        <div class="supplyIndex-container-list">
            <router-link tag="div" class="list-item" v-for="(item,index) in supplyList" :key="index" :to="item.path">
                <i :style="{backgroundImage: item.img}"></i><span>{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    const supply_1 = require('../../assets/img/supply-1.png');
    const supply_2 = require('../../assets/img/supply-2.png');
    const supply_3 = require('../../assets/img/supply-3.png');
    const supply_4 = require('../../assets/img/supply-4.png');
    const supply_5 = require('../../assets/img/supply-5.png');
    const supply_6 = require('../../assets/img/supply-6.png');
    const supply_7 = require('../../assets/img/supply-7.png');
    export default {
        components: {

        },
        data() {
            return {
                supplyList: [
                    {
                        img: `url(${supply_1})`,
                        name: '我的库存',
                        path: '/stock'
                    },{
                        img: `url(${supply_2})`,
                        name: '我的消息',
                        path: '/message'
                    },{
                        img: `url(${supply_3})`,
                        name: '我的上游',
                        path: '/upstream'
                    },{
                        img: `url(${supply_4})`,
                        name: '我的下游',
                        path: '/downstream'
                    },{
                        img: `url(${supply_5})`,
                        name: '智能报表',
                        path: '/report'
                    },{
                        img: `url(${supply_6})`,
                        name: '我的收货地址',
                        path: '/adress'
                    },{
                        img: `url(${supply_7})`,
                        name: '设置',
                        path: '/setting'
                    },
                ]
            }
        },
        mounted(){
            this.setTitle();
        }
    }
</script>
<style lang="less">
    .supplyIndex-container{
        height: calc(~'100% - 50px');
        background-color: #f5f5f5;
        color: #333;
        font-size: 14px;
        padding-top: 1px;
        overflow: scroll;
        .supplyIndex-container-h{
            background-color: #fff;
            border-radius: 4px;
            width: calc(~'100% - 20px');
            margin: 10px;
        }
        .container-h-man{
            display: flex;
            padding: 20px 0 15px 0;
            .container-h-man-l{
                flex-basis: 188.72px;
                line-height: 48px;
                span{
                    /*display: inline-block;*/
                    font-size: 18px;
                &:first-child{
                     margin: 0 20px;
                 }
                }
            }
            .container-h-man-r{
                flex-grow: 1;
                img{
                    display: block;
                    width: 48px;
                    height: 48px;
                    border-radius: 24px;
                    overflow: hidden;
                    float: right;
                    margin-right: 15px;
                }
            }
        }
        .container-h-info{
            padding-left: 20px;
            padding-bottom: 10px;
            line-height: 1.8em;
            span{
                display: block;
            }
        }
        .supplyIndex-container-list{
            border-top: 1px solid #d6d6d6;
            .list-item{
                background-color: #fff;
                border-bottom: 1px solid #d6d6d6;
                padding: 14px 0;
                font-size: 15px;
                i{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    padding: 0 10px 0 10px;
                    vertical-align: middle;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-origin: content-box;
                }
                span{
                    vertical-align: middle;
                }
                &:nth-child(6){
                    border-top: 1px solid #d6d6d6;
                    margin-top: 9px;
                }
            }
        }
    }
</style>
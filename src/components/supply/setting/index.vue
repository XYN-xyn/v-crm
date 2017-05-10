<template>
    <div class="setting-container">
        <div class="setting-container-list">
            <router-link tag="div" class="list-item" v-for="item in settingList" :to="item.path">
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
    export default {
        data() {
            return {
                settingList: [
                    {
                        img: `url(${supply_1})`,
                        name: '新消息通知',
                        path: '/stock'
                    },{
                        img: `url(${supply_2})`,
                        name: '隐私',
                        path: '/message'
                    },{
                        img: `url(${supply_3})`,
                        name: '通用',
                        path: '/upstream'
                    },{
                        img: `url(${supply_4})`,
                        name: '帮助与反馈',
                        path: '/downstream'
                    },{
                        img: `url(${supply_5})`,
                        name: '关于供应链管理平台',
                        path: '/report'
                    }
                ]
            }
        },
        mounted(){
            this.setTitle();
        }
    }
</script>
<style lang="less">
    .setting-container{
        .setting-container-list{
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
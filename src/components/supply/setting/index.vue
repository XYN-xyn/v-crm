<template>
    <div class="setting-container">
        <div class="setting-container-list">
            <router-link tag="div" class="list-item" v-for="item in settingList" :to="item.path">
                <i :style="{backgroundImage: item.img}"></i><span>{{item.name}}</span>
            </router-link>
        </div>
        <div class="setting-loginout">
            <x-button type="primary" class="confirmItem">退出登录</x-button>
        </div>
    </div>
</template>
<script>
    const setting_1 = require('../../../assets/img/设置_03.png');
    const setting_2 = require('../../../assets/img/设置_06.png');
    const setting_3 = require('../../../assets/img/设置_08.png');
    const setting_4 = require('../../../assets/img/设置_10.png');
    const setting_5 = require('../../../assets/img/设置_12.png');
    import {XButton} from 'vux'
    export default {
        components: {
            XButton
        },
        data() {
            return {
                settingList: [
                    {
                        img: `url(${setting_1})`,
                        name: '新消息通知',
                        path: '/newMessage'
                    },{
                        img: `url(${setting_2})`,
                        name: '隐私',
                        path: '/privacy'
                    },{
                        img: `url(${setting_3})`,
                        name: '通用',
                        path: '/currency'
                    },{
                        img: `url(${setting_4})`,
                        name: '帮助与反馈',
                        path: '/help'
                    },{
                        img: `url(${setting_5})`,
                        name: '关于供应链管理平台',
                        path: '/about'
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
        background-color: #f5f5f5;
        .setting-container-list{
            border-top: 1px solid #d6d6d6;
            .list-item{
                background-color: #fff;
                border-bottom: 1px solid #d6d6d6;
                padding: 14px 0;
                font-size: 15px;
                &:nth-child(4){
                    margin-top: 10px;
                    border-top: 1px solid #d6d6d6;
                 }
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
        .setting-loginout{
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            .weui-btn{
                border-radius: 0;
                &:after{
                     border: none;
                }
            }
            .confirmItem{
                background-color: #64C0F4;
                color: #fff;
                &:active{
                     color: rgba(255, 255, 255, 0.6) !important;
                     background-color: rgba(100, 192, 244, 0.6) !important;
                }
            }
        }
    }
</style>
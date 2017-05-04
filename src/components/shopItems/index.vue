<template>
    <div class="shopItem-contanier">
        <div class="shopItem-h">
            <div class="shopItem-h-l"><img src="../../assets/img/item-logo.png"></div>
            <div class="shopItem-h-m">
                <span>离合器及制动系统</span>
                <span style="font-size: 14px;padding: 8px 0 3px 0;">型号：ZZ-520</span>
                <span>参考价格：<span style="color: #E23F4B;">￥2500</span></span>
            </div>
            <div class="shopItem-h-r">
                <span>沟通</span>
            </div>
        </div>
        <div class="shopItem-sel" @click="popupshow = true">
            <span>请选择颜色分类，具体规格</span>
            <i></i>
        </div>
        <div class="shopItem-des">
            <span>商品简介：</span>
            <div class="shopItem-des-text" :style="{height: !isHeight ? '66px' : 'auto'}">
                <span>发动机（Engine）是一种能够把其它形式的能转化为机械能的机器，包括如内燃机（汽油发动机等）、外燃机（斯特林发动机、蒸汽机等）、电动机等。如内燃机通常是把化学能转化为机械能。发动机既适用于动力发生装置，也可指包括动力装置的整个机器（如：汽油发动机、航空发动机）。发动机最早诞生在英国，所以，发动机的概念也源于英语，它的本义是指那种“产生动力的机械装置”。明白了什么是外燃机，也就知道了什么是内燃机.这一类型的发动机与外燃机的最大不同在于它的燃料在其内部燃烧。内燃机的种类十分繁多，常见的汽油机、柴油机是典型的内燃机。不常见的火箭发动机和飞机上装配的喷气式发动机也属于内燃机。不过，由于动力输出方式不同，前两者和后两者又存在着巨大的差异。一般地，在地面上使用的多是前者，在空中使用的多是后者。当然有些汽车制造者出于创造世界汽车车速新纪录的目的，也在汽车上装用过喷气式发动机，但这总是很特殊的例子，并不存在批量生产的适用性。</span>
            </div>
            <i @click="autoHight" :class="{active: isHeight}"></i>
        </div>
        <div class="shopItem-img">
            <div class="shopItem-img-h">
                <span>商品展示</span>
            </div>
            <div class="shopItem-img-list">
                <img src="../../assets/img/company-item.png">
            </div>
            <div class="shopItem-img-list">
                <img src="../../assets/img/company-item.png">
            </div>
            <div class="shopItem-img-list">
                <img src="../../assets/img/company-item.png">
            </div>
            <div class="shopItem-img-list">
                <img src="../../assets/img/company-item.png">
            </div>
            <div class="shopItem-img-list">
                <img src="../../assets/img/company-item.png">
            </div>
        </div>
        <footer>
            <span>加入采购计划</span>
        </footer>
        <popup v-model="popupshow">
            <div class="shopItemPopup">
                <div class="shopItem-h-l"><img src="../../assets/img/item-logo.png"></div>
                <div class="shopItem-h-m">
                    <span>离合器及制动系统</span>
                    <span style="font-size: 14px;padding: 8px 0 3px 0;">型号：ZZ-520</span>
                    <span>参考价格：<span style="color: #E23F4B;">￥2500</span></span>
                </div>
                <div class="shopItem-h-r vux-close" @click="popupshow = false">
                </div>
            </div>
            <div class="select">
                <span>颜色分类：</span>
                <div>
                    <checker v-model="selectColor" default-item-class="default-color" selected-item-class="selected-color">
                        <checker-item v-for="(item,index) in colorArr" :key="index" :value="item">{{item.name}}</checker-item>
                    </checker>
                </div>
            </div>
            <div class="select">
                <span>规格：</span>
                <div>
                    <checker v-model="selectType" default-item-class="default-color" selected-item-class="selected-color">
                        <checker-item v-for="(item,index) in typeArr" :key="index" :value="item">{{item.name}}</checker-item>
                    </checker>
                </div>
            </div>
            <div class="number">
                <x-number title="订单数量：" :sep="1" :min="0" width="28px" style="padding: 10px"></x-number>
            </div>
            <div>
                <x-button type="primary" class="confirmItem">确定</x-button>
            </div>
        </popup>
    </div>
</template>
<script>
    import {Popup, Checker, CheckerItem, XNumber, XButton} from 'vux';
    export default {
        components: {
            Popup,
            Checker,
            CheckerItem,
            XNumber,
            XButton
        },
        mounted(){
            this.setTitle();
        },
        data(){
            return {
                isHeight: false,
                popupshow: false,
                colorArr: [
                    {id: '1',name: '红色'},
                    {id: '2',name: '紫色'},
                    {id: '3',name: '蓝色'}
                ],
                typeArr: [
                    {id: '1',name: '1.0*2.5m'},
                    {id: '2',name: '2.0*2.5m'},
                    {id: '3',name: '2.5*3.0m'}
                ],
                selectColor: {id: '1',name: '红色'},
                selectType: {id: '1',name: '1.0*2.5m'},
            }
        },
        methods: {
            autoHight () {
                if(this.isHeight){
                    this.isHeight = false;
                } else {
                    this.isHeight = true;
                }
                console.log(this.isHeight);
            }
        }
    }
</script>
<style lang="less">
    .shopItem-contanier{
        background-color: #f5f5f5;
        padding-bottom: 45px;
        .shopItem-h{
            display: flex;
            padding: 0 10px;
            border-bottom: 1px solid #d6d6d6;
            background-color: #fff;
            .shopItem-h-l{
                flex-basis: 90px;
                height: 69px;
                padding: 10px 10px 10px 0;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .shopItem-h-m{
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                font-size: 14px;
                color: #333;
                padding-top: 10px;
            }
            .shopItem-h-r{
                flex-basis: 75px;
                height: 25px;
                text-align: center;
                border-radius: 2px;
                background-color: #64C0F4;
                color: #fff;
                margin-top: 10px;
            }
        }
        .shopItem-sel{
            display: flex;
            padding: 10px;
            margin: 10px 0;
            font-size: 15px;
            background-color: #fff;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6;
            span{
                flex-grow: 1;
            }
            i{
                flex-basis: 22px;
                height: 22px;
                background-image: url("../../assets/img/right.png");
                background-size: cover;
            }
        }
        .shopItem-des{
            padding: 10px 10px 0px 10px;
            background-color: #fff;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6;
            margin-bottom: 10px;
            font-size: 15px;
            .shopItem-des-text{
                color: #666;
                font-size: 13px;
                line-height: 1.3em;
                height: 66px;
                overflow: hidden;
            }
            i{
                display: block;
                width: 22px;
                height: 22px;
                margin: 0 auto;
                background-image: url("../../assets/img/down.png");
                background-size: cover;
            }
            .active{
                transform:rotate(180deg);
            }
        }
        .shopItem-img{
            background-color: #fff;
            .shopItem-img-h{
                font-size: 15px;
                padding: 0 10px;
                line-height: 30px;
                border-top: 1px solid #d6d6d6;
                border-bottom: 1px solid #d6d6d6;
            }
            .shopItem-img-list{
                padding: 10px 10px 0 10px;
                width: 100%;
                box-sizing: border-box;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                &:last-child{
                    padding-bottom: 10px;
                 }
            }
        }
        footer{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 45px;
            background-color: #64C0F4;
            line-height: 45px;
            text-align: center;
            color: #fff;
        }
        .shopItemPopup{
            display: flex;
            padding: 0 10px;
            border-bottom: 1px solid #d6d6d6;
            background-color: #fff;
            .shopItem-h-l{
                flex-basis: 90px;
                height: 69px;
                padding: 10px 10px 10px 0;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .shopItem-h-m{
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                font-size: 14px;
                color: #333;
                padding-top: 6px;
            }
            .shopItem-h-r{
                flex-basis: 22px;
                height: 22px;
                text-align: center;
                border-radius: 11px;
                background-color: #fff;
                border: 1px solid #98979d;
                color: #fff;
                margin-top: 10px;
            }
        }
        .select{
            background-color: #fff;
            padding: 10px;
            font-size: 13px;
            color: #333;
            border-bottom: 1px solid #d6d6d6;
            span{
                display: block;
                padding-bottom: 10px;
            }
            div{
                font-size: 13px;
                color: #333;
            }
            .default-color{
                background-color: #ddd;
                border-radius: 4px;
                border: 1px solid transparent;
                margin-right: 20px;
                padding: 2px 10px;
            }
            .selected-color{
                background-color: #64C0F4;
                color: #fff;
            }
        }
        .number{
            background-color: #fff;
            .vux-number-input{
                font-size: 13px;
            }
            .vux-number-selector{
                svg {
                    fill: #333;
                }
            }
            .vux-number-disabled{
                svg {
                    fill: #ececec;
                }
            }
            .vux-number-selector-sub{
                padding: 4px 5px 2px 5px;
            }
            .vux-number-selector-plus{
                padding: 4px 5px 2px 5px;
                margin-right: 0;
            }
        }
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
</style>
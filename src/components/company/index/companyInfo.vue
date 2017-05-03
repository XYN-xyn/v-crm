<template>
    <div>
        <div class="compony-logo">
            <img src="../../../assets/img/063cfbfe6f71107cf6290f1524685c82.jpg">
        </div>
        <div class="compony-des">
            <div class="compony-des-name"><span>北京天天汽车零件有限公司</span></div>
            <div>
                <div class="compony-des-adr"><i class="compony-des-icon"></i><span>地址：北京市昌平区天通西苑二区</span></div>
                <div class="compony-des-phone"><i class="compony-des-icon"></i><span>联系电话：15655871234</span></div>
            </div>
        </div>
        <div class="compony-intro">
            <span class="compony-intro-h">企业简介：</span>
            <div class="compony-intro-c">
                <span>
                    中兴通讯坚持以持续技术创新为客户不断创造价值。公司在美国、法国、瑞典、印度、中国等地共设有20个全球研发机构，近3万名国内外研发人员专注于行业技术创新；PCT专利申请量近5年均居全球前三，2011、2012年PCT蝉联全球前一。公司依托分布于全球的107个分支机构，凭借不断增强的创新能力、突出的灵活定制能力、日趋完善的交付能力赢得全球客户的信任与合作。
                </span>
            </div>
        </div>
        <footer>
            <span>加工定制</span>
        </footer>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
    div{
        font-size: 14px;
        color: #333;
    }
    .compony-logo{
        padding: 10px;
        box-sizing: content-box;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .compony-des{
        .compony-des-name{
            padding-left: 33px;
        }
        .compony-des-icon{
            display: inline-block;
            width: 22px;
            height: 22px;
            background-size: cover;
            vertical-align: middle;
        }
        .compony-des-adr{
            padding: 0 10px;
            .compony-des-icon{
                background-image: url('../../../assets/img/adress.png');
            }
            span{
                vertical-align: middle;
            }
        }
        .compony-des-phone{
            padding: 0 10px;
            .compony-des-icon{
                background-image: url('../../../assets/img/phone.png');
            }
            span{
                vertical-align: middle;
            }
        }
    }
    .compony-intro{
        padding: 10px 10px 45px 10px;
        .compony-intro-h{
            padding-left: 32px;
        }
        .compony-intro-c{
            padding: 0 10px;
            text-indent: 36px;
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
</style>
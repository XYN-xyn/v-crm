<template>
    <div>
        <footer>
            <ul class="footerDeatl">
                <router-link tag="li" to="/" class="active">
                    <img src="../../../assets/img/footer_01_a.jpg">
                    <p>订单管理</p>
                </router-link>
                <router-link tag="li" to="/">
                    <img src="../../../assets/img/footer_02.jpg">
                    <p>财务中心</p>
                </router-link>
                <li>
                    <img src="../../../assets/img/footer_03.jpg">
                    <p>供应链</p>
                </li>
                <li>
                    <img src="../../../assets/img/footer_04.png">
                    <p>自媒体</p>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>

</script>
<style scoped lang="less">
    footer {
        background: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 49px;
        .footerDeatl {
            display: flex;
            justify-content : space-around;
            height: 100%;
            align-items: center;
            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                line-height: 1.5em;
                color : #333;
                &.active {
                     color : #3eb5fa;
                 }
                img {
                    width: 28px;
                    display: block;
                }
                p {
                    font-size: 12px;
                }
            }
        }
    }
</style>
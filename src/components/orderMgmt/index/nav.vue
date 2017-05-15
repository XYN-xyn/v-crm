<template>
    <div class="nav">
        <ul class="navList">
            <router-link tag="li" to="/">
                <img src="../../../assets/img/index_nav_01.jpg">
                <div>采购订单</div>
            </router-link>
            <li>
                <img src="../../../assets/img/index_nav_02.jpg">
                <div>销售订单</div>
            </li>
            <li>
                <img src="../../../assets/img/index_nav_03.jpg">
                <div>待审核</div>
            </li>
            <li>
                <img src="../../../assets/img/index_nav_04.jpg">
                <div>采购退货</div>
            </li>
        </ul>
        <ul class="navList">
            <router-link tag="li" to="/sellItem0">
                <img src="../../../assets/img/index_nav_05.jpg">
                <div>销售历史</div>
            </router-link>
            <router-link tag="li" to="/shoppingItem0">
                <img src="../../../assets/img/index_nav_06.jpg">
                <div>采购历史</div>
            </router-link>
            <li>
                <img src="../../../assets/img/index_nav_07.jpg">
                <div>扫码下单</div>
            </li>
            <li>
                <img src="../../../assets/img/index_nav_08.jpg">
                <div>购物车</div>
            </li>
        </ul>
    </div>
</template>
<script>

</script>
<style scoped lang="less">
    .nav {
        background: #fff;
        border-bottom: 1px solid #ddd;
        padding-top: 14px;
        margin-bottom: 7.5px;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                width: 42px;
                padding-top: 10px;
            }
            div {
                font-size: 12px;
                color: #333;
                padding: 26px 0;
            }
        }
    }
    .navList {
        display: flex;
        justify-content : space-around;
    }
</style>
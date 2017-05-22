<template>
    <div class="nav">
        <ul class="navList">
            <router-link tag="li" to="/sellItem0">
                <img src="../../../assets/img/boss_05.png">
                <div>销售历史</div>
            </router-link>
            <router-link tag="li" to="/shoppingItem0">
                <img src="../../../assets/img/boss_07.png">
                <div>采购历史</div>
            </router-link>
            <router-link tag="li" to="/reviewItem0">
                <img src="../../../assets/img/boss_09.png">
                <div>订单审核</div>
            </router-link>
            <li>
                <img src="../../../assets/img/boss_11.png">
                <div>报批历史</div>
            </li>
        </ul>
        <ul class="navList">
            <router-link tag="li" to="/">
                <img src="../../../assets/img/boss_18.png">
                <div>评价订单</div>
            </router-link>
            <li>
                <img src="../../../assets/img/boss_20.png">
                <div>采购退货</div>
            </li>
            <li>
                <img src="../../../assets/img/boss_23.png">
                <div>绩效考核</div>
            </li>
            <li>
                <img src="../../../assets/img/boss_25.png">
                <div>操作历史</div>
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
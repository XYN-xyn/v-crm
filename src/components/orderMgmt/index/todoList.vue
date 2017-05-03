<template>
    <div class="dealt">
        <div class="dealtHeader">
            <img src="../../../assets/img/dealt_title.jpg" alt="">
            <h2>待办事项</h2>
        </div>
        <ul class="dealtList">
            <li>
                <div>
                    <img src="../../../assets/img/dealt_verify.jpg" alt="">
                    <div class="dealtDesc">
                        <h3>待审核订单</h3>
                        <p>您有一笔222222的订单等待审核</p>
                    </div>
                </div>
                <a href="javascript:" class="button">审核订单</a>
            </li>
            <li>
                <div>
                    <img src="../../../assets/img/dealt_appr.jpg" alt="">
                    <div class="dealtDesc">
                        <h3>待评价订单</h3>
                        <p>您有一笔222222的订单等待审核</p>
                    </div>
                </div>
                <a href="javascript:" class="button">审核订单</a>
            </li>
            <li>
                <div>
                    <img src="../../../assets/img/dealt_verify.jpg" alt="">
                    <div class="dealtDesc">
                        <h3>待审核订单</h3>
                        <p>您有一笔222222的订单等待审核</p>
                    </div>
                </div>
                <a href="javascript:" class="button">审核订单</a>
            </li>
            <li>
                <div>
                    <img src="../../../assets/img/dealt_verify.jpg" alt="">
                    <div class="dealtDesc">
                        <h3>待审核订单</h3>
                        <p>您有一笔222222的订单等待审核</p>
                    </div>
                </div>
                <a href="javascript:" class="button">审核订单</a>
            </li>
        </ul>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
    .dealt {
        background-color: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin-bottom: 49px;
    }
    .dealtHeader {
        display: flex;
        align-items : center;
        height: 50px;
        padding-left: 15px;
        border-bottom: 1px solid #ddd;
        img {
            width: 19px;
        }
        h2 {
            font-size: 15px;
            color: #333;
            padding-left: 15px;
        }
    }
    .dealtList {
        li {
            height: 50px;
            display: flex;
            align-items: center;
            margin: 0 15px;
            border-bottom: 1px solid #ddd;
            justify-content: space-between;
            &:nth-last-child(1) {
                 border: none;
             }
            img {
                width: 34px;
                height: 33px;
            }
            .button {
                display: inline-block;
                background: #40C2F9;
                color: #fff;
                font-size: 14px;
                padding: 5px 8px;
                border-radius: 5px;
            }
        }
        .dealtDesc {
            display: inline-block;
            h3 {
                font-size: 14px;
                color: #333;
            }
        }
        p {
            font-size: 12px;
            color: #999;
        }
    }
</style>
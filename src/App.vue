<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
    import index from './components/index.vue';//首页
    import companyIndex from './components/company/index.vue';//企业详情-首页
    import shopItem from './components/shopItems/index.vue';//商品详情
    import stockIndex from './components/supply/stock/index.vue';//我的库存
    import downStream from './components/supply/downstream/index.vue';//我的上游
    export default {
        name: 'app',
        components: {
            index,
            companyIndex,
            shopItem,
            stockIndex,
            downStream
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/close.less';

    @import './assets/scss/style.less';
    html,body{
        overflow: scroll;
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
        max-width: 750px;
        min-width: 320px;
        margin:  0 auto;
        /*background: #f0f0f0;*/
        &>div{
            width: 100%;
            height: 100%;
        }
    }
</style>

<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
    import index from './components/index.vue';
    import companyIndex from './components/company/index.vue';
    import shopItem from './components/shopItems/index.vue';
    export default {
        name: 'app',
        components: {
            index,
            companyIndex,
            shopItem
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
    a{
        font-family: inherit;
        color: inherit;
    }
    #app {
        width: 100%;
        height: 100%;
        max-width: 750px;
        min-width: 320px;
        margin:  0 auto;
        /*background: #f0f0f0;*/
    }
</style>

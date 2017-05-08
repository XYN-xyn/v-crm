/**
 * Created by xuyanan on 2017/4/8.
 */
import App from './App.vue'
//import Index from './components/index.vue';
/*企业详情*/
//import Company from './components/company/index.vue';
export default [
    //首页
    {
        path: '/',
        component: resolve => System.import('./components/index.vue'),//App.components.index,
        children: [
            {
                name: '订单管理',
                path: '/',
                alias: '/order',
                component: resolve => System.import('./components/orderMgmt/index/index.vue')
            },
            {
                name: '供应链',
                path: '/supply',
                component: resolve => System.import('./components/supply/index.vue'),
            }
        ]
    },
    // 企业详情
    {
        path: '/',
        component: resolve => System.import('./components/company/index.vue'),
        children: [
            {
                name: '企业详情',
                path: '/company',
                component: resolve => System.import('./components/company/index/companyInfo.vue')
            },
            {
                name: '企业详情',
                path: '/companyItems',
                component: resolve => System.import('./components/company/index/companyItems.vue')
            }
        ]
    },
    //商品详情
    {
        name: '商品详情',
        path: '/shopItem',
        component: resolve => System.import('./components/shopItems/index.vue'),
        children: [

        ]
    },
    //我的库存
    {
        name: '我的库存',
        path: '/stock',
        alias: '/stockItem',
        component: resolve => System.import('./components/supply/stock/index.vue'),
    },
    //我的下游
    ,{
        name: '我的下游',
        path: '/downstream',
        //component: resolve => System.import('./components/supply/downstream/index.vue'),
        component: App.components.downStream,
    }
    //我的上游
    ,{
        name: '我的上游',
        path: '/upstream',
        //component: resolve => System.import('./components/supply/downstream/index.vue'),
        component: App.components.downStream,
    }
]
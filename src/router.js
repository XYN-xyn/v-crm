/**
 * Created by xuyanan on 2017/4/8.
 */
//import App from './App.vue'
//import Index from './components/index.vue';
/*企业详情*/
//import Company from './components/company/index.vue';
export default [
//首页
    {
        name: '订单管理',
        path: '/',
        component: resolve => System.import('./components/index.vue'),//App.components.index,
        children: [
            {
                name: '订单管理',
                path: '/',
                component: resolve => System.import('./components/orderMgmt/index/index.vue'),//Index.components.orderIndex
            },
            {
                name: '订单管理',
                path: '/order',
                component: resolve => System.import('./components/index.vue')//App.components.index,
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
        name: '企业详情',
        path: '/company',
        component: resolve => System.import('./components/company/index.vue'),//App.components.companyIndex,
        children: [
            {
                name: '企业详情',
                path: '/',
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
        component: resolve => System.import('./components/shopItems/index.vue'),//App.components.shopItem,
        children: [

        ]
    }
]
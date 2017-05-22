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
    }
    //销售历史
    ,{
        path: '/',
        component: resolve => System.import('./components/orderMgmt/sellHistory/index.vue'),
        children: [
            {
                name: '销售历史',
                path: '/sellItem0',
                alias: ['/sellItem1','/sellItem2','/sellItem3','/sellItem4'],
                component: resolve => System.import('./components/orderMgmt/sellHistory/sub/sellItem.vue'),
            }
        ]
    }
    //采购历史
    ,{
        path: '/',
        component: resolve => System.import('./components/orderMgmt/shoppingHistory/index.vue'),
        children: [
            {
                name: '采购历史',
                path: '/shoppingItem0',
                alias: ['/shoppingItem1','/shoppingItem2','/shoppingItem3','/shoppingItem4'],
                component: resolve => System.import('./components/orderMgmt/shoppingHistory/sub/shoppingItem.vue'),
            }
        ]
    }
    //订单审核
    ,{
        path: '/',
        component: resolve => System.import('./components/orderMgmt/orderReview/index.vue'),
        children: [
            {
                name: '订单审核',
                path: '/reviewItem0',
                alias: ['/reviewItem1','/reviewItem2','/reviewItem3'],
                component: resolve => System.import('./components/orderMgmt/orderReview/sub/reviewItem.vue'),
            }
        ]
    }
    ,
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
        component: resolve => System.import('./components/supply/downstream/index.vue'),
        //component: App.components.downStream,
    }
    //我的上游
    ,{
        name: '我的上游',
        path: '/upstream',
        component: resolve => System.import('./components/supply/downstream/index.vue'),
        //component: App.components.downStream,
    }
    //我的消息
    ,{
        name: '我的消息',
        path: '/message',
        component: resolve => System.import('./components/supply/message/index.vue'),
    }
    //设置
    ,{
        name: '设置',
        path: '/setting',
        component: resolve => System.import('./components/supply/setting/index.vue'),
    }
]
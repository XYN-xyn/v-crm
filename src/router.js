/**
 * Created by xuyanan on 2017/4/8.
 */
import App from './App.vue'
import Index from './components/index.vue';
/*企业详情*/
import Company from './components/company/index.vue';
export default [
    {
        path: '/',
        component: App.components.index,
        children: [
            {
                path: '/',
                component: Index.components.orderIndex
            }
        ]
    },
    {
        path: '/order',
        component: App.components.index,
    },
//    企业详情
    {
        name: '企业详情',
        path: '/company',
        component: App.components.companyIndex,
        children: [
            {
                name: '企业详情',
                path: '/',
                component: Company.components.companyInfo
            },
            {
                name: '企业详情',
                path: '/companyItems',
                component: Company.components.companyItems
            }
        ]
    },
//商品详情
    {
        name: '商品详情',
        path: '/shopItem',
        component: App.components.shopItem,
        children: [

        ]
    }
]
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'

Vue.use(VueRouter);

Vue.prototype.setTitle = function () {
    return document.title = this.$route.name;
};

const router = new VueRouter({
    mode: 'history',
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.config.productionTip = false
// console.log(require('qs'));
/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')

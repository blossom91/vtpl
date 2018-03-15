import Vue from 'vue'
import App from './App'
import router from './router'
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

import Vue from 'vue'
import App from './App'
import './main.scss'
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
})

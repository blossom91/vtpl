import '@/assets/js/common'
import Vue from 'vue'
import App from './main.vue'
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

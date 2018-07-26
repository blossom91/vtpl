import '@/assets/js/common'
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
    {{#router}}
    router,
    {{/router}}
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// import axios from "axios";

Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://127.0.0.1:3333/' // 全局定义的URL，在组件中就不需要加这个开头了

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

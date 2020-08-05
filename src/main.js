import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper.less'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.js'
import 'wowjs/css/libs/animate.css'

Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//接口错误拦

axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return  res.data;

  }else if(res.status==10){
       window.location.href='/#/login'; 
  }else{
    alert(res.msg);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

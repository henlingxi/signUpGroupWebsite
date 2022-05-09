import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Sign from '../components/Sign'
import StdInfo from '../components/StdInfo'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            component:Sign
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/StdInfo',
            component:StdInfo,
            beforeEnter: function (to,from,next) {
                if (sessionStorage.getItem("token")) {
                    next();
                  } else {
                    alert("请先登录");
                    next("/login");
                  }
            }
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* import Find from "../views/find/Find.vue"
import Boke from "../views/boke/Boke.vue" */
const Find = ()=>import("../views/find/Find")
const Boke = ()=>import("../views/boke/Boke")
const YunCun = ()=>import("../views/yuncun/YunCun")
const Kge= ()=>import("../views/kge/Kge")
const Mine = ()=>import("../views/mine/Mine")
Vue.use(Router)

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [

    {
      path:"",
      redirect:"/find",
    },
  {
      path:"/find",
      component:Find,
    },
    {
      path:"/boke",
      component:Boke,
    },
    {
      path:"/mine",
      component:Mine,
    },
    {
      path:"/yuncun",
      component:YunCun,
    },
    {
      path:"/kge",
      component:Kge,
    },
  ]
})

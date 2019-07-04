import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../view/home/index.vue"
import Classfiy from "../view/classfiy/index.vue"
import Recognize from "../view/recognize/index.vue"
import Car from "../view/shopingcar/index.vue"
import Mine from "../view/mine/index.vue"

Vue.use(VueRouter);
const router =  new VueRouter({
    mode:'hash',
    routes:[
        {
            path:"/home",
            component:Home,
            name:'home'
        },
        {
            path:"/classfiy",
            component:Classfiy,
            name:'classfiy'
        },
        {
            path:"/recognize",
            component:Recognize,
            name:'recognize'
        },
        {
            path:"/shopingcar",//动态路由
            component:Car,
            name:'shopingcar'
        },
        {
            path:"/mine/:id/:name",
            component:Mine,
            name:'mine'
        },
    ]
})
export default router;
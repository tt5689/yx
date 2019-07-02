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
        },
        {
            path:"/classfiy",
            component:Classfiy,
        },
        {
            path:"/recognize",
            component:Recognize,
        },
        {
            path:"/shopingcar",
            component:Car,
        },
        {
            path:"/mine",
            component:Mine,
        },
    ]
})
export default router;
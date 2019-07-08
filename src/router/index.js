import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../view/home/index.vue"
import Classfiy from "../view/classfiy/index.vue"
import Recognize from "../view/recognize/index.vue"
import Car from "../view/shopingcar/index.vue"
import Mine from "../view/mine/index.vue"
import Canteen from "../view/home/canteen/canteen.vue"

Vue.use(VueRouter);
const router =  new VueRouter({
    mode:'hash',
    routes:[
        {
            path:"/home",
            component:Home,
            name:'home',
            meta:{
                flag:true
            }
        },
        {
            path:"/canteens", 
            component:Canteen,
            name:"canteens",
            meta:{
                flag:false
            }
        },
        {
            path:"/classfiy",
            component:Classfiy,
            name:'classfiy',
            meta:{
                flag:true
            }
        },
        {
            path:"/recognize",
            component:Recognize,
            name:'recognize',
            meta:{
                flag:true
            }
        },
        {
            path:"/shopingcar",//动态路由
            component:Car,
            name:'shopingcar',
            meta:{
                flag:true
            }
        },
        {
            path:"/mine/:id/:name",
            component:Mine,
            name:'mine',
            meta:{
                flag:true
            }
        },
    ]
})
export default router;
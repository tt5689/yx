<template>
    <footer id="u_foot">
        <ul>
            <router-link v-for="(item ,index) in tarBars" 
            :key="index" 
            :to="item.path" tag="li">
                <i :class="item.icon" class ="iconfont" ></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </footer>
</template>

<<script>
export default {
    data() {
        return {
            tarBars:[
                {
                    icon:"iconyemian",
                    title:"首页",
                    path:"/home"
                },
                {
                    icon:'iconleimupinleifenleileibie1-outline',
                    title:"分页",
                    path:"/classfiy"
                },
                {
                    icon:'icontupian',
                    title:'识物',
                    path:'/recognize'
                },
                {
                    icon:'icongouwuche',
                    title:'购物车',
                    path:'/shopingcar'
                },
                {
                    icon:'iconuser',
                    title:'个人',
                    path:'/mine'
                }
            ],
            activeIndex:0,
        }
    },
    methods: {
        handlerClick(index){
            this.activeIndex = index;
        }
    },
}
</script>
<style lang="scss" scoped>
    #u_foot{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .98rem;
        box-sizing: border-box;
        border-top:1px solid #d9d9d9;
        zoom: .5;
        background: #fff;
        .router-link-active{
            color: #b5262d;
        }
        ul{
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #7f7f7f;
                i{
                    font-size: .34rem;
                }
            }
        }
    }
</style>
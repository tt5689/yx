<template>
<div class="t_h_nav">
        <div class="thisisNav">
            <div class="h_nav">
                <nav class="header_nav" v-if="flage">
                    <li v-for="(item,index) in data" :key="index">{{item}}</li>
                </nav>
                <div class="all_pind" v-if="!flage">全部频道</div>
            </div>
            <div class="arraw" @click="handlerClick()">
                <span class="arraw_bottom iconfont iconxiala" v-if="flage"></span>
                <span class="arraw_bottom iconfont iconup" v-if="!flage"></span>
            </div>
            
            <ul class="all_nav" v-if="!flage">
                <li v-for="(item,index) in data" 
                :key="index"
                :class="activeIndex == index?'active':''"
                >{{item}}</li>
            </ul>
        </div>
        <div class="mask" v-if="!flage"></div>
</div>

</template>
<script>
export default {
    data() {
        return {
            flage:'true',
            data:['shou','推挤','推挤','推挤','推挤','推挤','推挤','推挤'],
            activeIndex:0
        }
    },
    methods: {
        handlerClick(){
            this.flage = !this.flage;
        }
    },
}
</script>
<style lang="scss" scoped>
.t_h_nav{
    position: relative;
}
.thisisNav{
position: absolute;
    left:0;
    top:0;
    z-index: 99;
    background:#fff;
}
.all_nav{
    
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    li{
        width: 1.5rem;
        height: .56rem;
        line-height: .56rem;
        background: #fafafa;
        border-radius: .04rem;
        color: #333333;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: .02rem solid #cccccc;
        margin-bottom: .4rem;
    }
    .active{
        color: #b4282d;
        border-color: #b4282d;
    }
}

.t_h_nav{
    // overflow: hidden;
    height:100%;
    .all_pind{
        padding: 0 .3rem;
    }
    .mask{
        height: auto;
        position: absolute;
        z-index: 1;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        background: #000;
        opacity: 0.5;
    }
}
.h_nav{
    float: left;
    width:90%;
    height:0.6rem;
    line-height:.6rem;
}
.header_nav{
    height:0.6rem;
    line-height:.6rem;
    display:flex;
    flex-direction: row;
    overflow-x:scroll;
    box-sizing: border-box;
    li{
        padding:0 .16rem;
        margin-left:.2rem;
        flex: none;
    }
}
.arraw{
    float: right;
    width: 10%;
    height: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header_nav::-webkit-scrollbar{
        display: none;
    }
    
</style>
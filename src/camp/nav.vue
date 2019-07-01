<template>
<div>
    <nav class="header_nav">
        <li>shou</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
        <li>推挤</li>
    </nav>
    <div class="arraw" @click="handlerClick()">
        <span class="arraw_bottom iconfont iconxiala"></span>
    </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        handlerClick(){

        }
    },
}
</script>
<style lang="scss" scoped>
.header_nav{
    float: left;
    width:90%;
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
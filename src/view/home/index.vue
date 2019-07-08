<template>
<div id="wrap">
    <div id="header_wrap">
        <Header/>
        <Nav/>
    </div>
    <MainContent/>
    <div class="toTop iconfont iconup"></div>
<TabBar v-if = "$route.meta.flag"/>
</div>
</template>

<script>
import Header from './camp/header.vue';
import Nav from './camp/nav.vue';
import MainContent from './camp/main_content.vue'
import TabBar from '../../TabBar/tabbar.vue'
export default {
    components:{
        Header,
        Nav,
        MainContent,
        TabBar
    },
    created() {
       console.log(this.$route.meta.flag); 
    },
}
</script>
<style lang="scss" scoped>
    #header_wrap{
        width: 100%;
        height:1.48rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }
    .toTop{
        width: .8rem;
        height: .8rem;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: fixed;
        bottom: 1.2rem;
        right: .24rem;
        z-index: 999;
        text-align: center;
        line-height: .8rem;
    }
</style>
<template>
<div id="wrap">
    <div id="header_wrap">
        <Header/>
        <Nav/>
    </div>
<TabBar/>
</div>
</template>

<script>
import Header from '../camp/header.vue';
import Nav from '../camp/nav.vue';

export default {
    components:{
        Header,
        Nav
    }
}
</script>
<style lang="scss" scoped>
    #header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
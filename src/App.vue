<template>
<div>
    <router-view></router-view>
    <TarBar/>
</div>
</template>

<script>
import TarBar from './TabBar/tabbar.vue';
export default {
    components:{
        TarBar
    }
}
</script>
<style>
</style>
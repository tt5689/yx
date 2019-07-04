<template>
    <div class="newItemModule">
        <CommHead :val="title"/>
        <TGoodList/>
    </div>
</template>

<script>
import CommHead from './commHead.vue'
import TGoodList from './tgoodList.vue'
export default {
     components:{
        CommHead,
        TGoodList
    },
    data() {
        return {
            title:'新品首发'
        }
    },
}
</script>

<style lang="scss" scoped>
    .newItemModule{
        min-height: 8.38rem;
        background: #fff;
        padding: 0 .3rem;
        margin-bottom: .2rem;
    }
</style>
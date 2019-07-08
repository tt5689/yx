<template>
    <div class="centeen_wrap">
        <CenTHeader/>
        <div class="canmain">
            <CanBann/>
            <Welfare/>
            <CanNav/>
            <TicketCenter/>
            <!-- 这里要用利用父传子 -->
            <Lowerprice/>
            <ComposeWrap/>
            <Amazing/>
        </div>
    </div>
</template>
<script>
import CenTHeader from './canheader.vue';
import CanBann from './canBanner.vue';
import Welfare from './welfareBar.vue';
import CanNav from './canNav.vue';
import TicketCenter from './ticketCenter.vue';
import Lowerprice from './aboutlowerp.vue';
import ComposeWrap from './composeWrap.vue';
import Amazing from './amazing.vue'
export default {
    components:{
        CenTHeader,
        CanBann,
        Welfare,
        CanNav,
        TicketCenter,
        Lowerprice,
        ComposeWrap,
        Amazing
    }
}
</script>
<style lang="scss" scoped>
   .centeen_wrap{
       width: 100%;
        height: 100%;
   }
   .canmain{
       flex: 1;
       margin-top: .88rem;
       background: #f4f4f4;
       margin-bottom: .98rem;
   }
</style>
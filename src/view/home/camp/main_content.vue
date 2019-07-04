<template>
    <div class="main_wrap">
        <Banner>
            <template v-slot:banner="props">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in props.content" :key="index">
                        <img :src="item"/>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </template>
        </Banner>
        <TClassList/>
        <Gift/>
        <TopWiew/>
        <HotsaleModule/>
        <Recommend/>
        <Limited/>
        <NewGuid/>
        <GuidModule/>
        <CategoryModule/>
        <FooterSelect/>
    </div>
</template>

<script>
import Banner from './content/banner.vue';
import TClassList from './content/t-clasfiy-list.vue';
import Gift from './content/gift.vue';
import TopWiew from './content/topwiew.vue';
import HotsaleModule from './content/hotsalwModule.vue';
import Recommend from './content/recommend.vue';
import Limited from './content/limited.vue';
import NewGuid from './content/shopGuidList.vue';
import GuidModule from './content/GuidModule.vue';
import CategoryModule from './content/CategoryModule.vue';
import FooterSelect from './content/footers.vue'


export default {
    components:{
        Banner,
        TClassList,
        Gift,
        TopWiew,
        HotsaleModule,
        Recommend,
        Limited,
        NewGuid,
        GuidModule,
        CategoryModule,
        FooterSelect
    }
}
</script>

<style scoped>
.main_wrap{
    width: 100%;
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    background: #eeeeee;
    margin-top: 1.48rem;
    margin-bottom: .98rem;
}
</style>

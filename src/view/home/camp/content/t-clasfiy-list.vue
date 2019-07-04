<template>
    <div class="t-classfiy">
        <ul class="g_tips">
            <li>网易自营品牌</li>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
        </ul>
        <div class="t-list">
            <a href="javascript:;" v-for="(item,index) in data" :key="index">
                <img :src="imgs"/>
                <p>{{item}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
             data:['shou','推挤','推挤','推挤','推挤','推挤','推挤','推挤','推挤','推挤']
        }
    },
}
</script>

<style lang="scss" scoped>
.t-classfiy{
    min-height: 4.45rem;
    margin-bottom: .2rem;
    background: #fff;
    .g_tips{
        height: .72rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .t-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        a{
            display: block;
            width: 1.02rem;
            height: 1.4rem;
            text-align: center;
            margin: .18rem .24rem .16rem;
            img{
                width: 100%;
                height: 1rem;
                border-radius: .3rem;
            }
        }
    }
}
</style>

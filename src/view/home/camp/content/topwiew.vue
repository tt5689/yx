<template>
    <div class="topwiew_wrap">
        <CommHead :val="title"/>
        <div class="tagList">
            <a href="javascript:;">
                <h4>sssssss</h4>
                <p>sssssssss</p>
            </a>
        </div>
    </div>
</template>

<script>
import CommHead from './commHead.vue'
export default {
    components:{
        CommHead
    },
    data() {
        return {
            title:'品牌制造商只供'
        }
    },
}
</script>

<style lang="scss" scoped>
    .topwiew_wrap{
        min-height: 6.56rem;
        background: #fff;
        margin-bottom: .2rem;
        padding:  0 .3rem;
       
        .tagList{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: space-between;
            a{
                display: block;
                width: 3.42rem;
                height: 2.6rem;
                border-radius: .04rem;
                h4{
                    text-align: center;
                    padding-top: .2rem;
                    font-size: .26rem;
                }
                p{
                    font-size: .24rem;
                    color: #7f7f7f;
                    text-align: center;
                }
            }
        }
    }
</style>
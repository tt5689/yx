<template>
    <div class="recommend_wrap">
        <CommHead :val="title"/>
        <div class="recom_top">
            <a href="javascript:;">
                <img/>
                <div class="good_tip">
                    <p>特惠</p>
                    <h3>单行审理</h3>
                    <span>cdscsdcds</span><br/>
                    <strong>价格</strong>
                </div>
            </a>
        </div>
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
            title:'人气推荐'
        }
    },
}
</script>

<style lang="scss" scoped>
.recommend_wrap{
    min-height: 7.84rem;
    background: #fff;
    margin-bottom: .2rem;
    padding: 0 .3rem;
    .recom_top{
        height: 2.8rem;
        background: #fef0df;
        a{
            display: block;
            width: 100%;
            height: 100%;
            img{
                width: 33.33%;
                height: 100%;
            }
            .good_tip{
                float: right;
                width: 66.67%;
                height: 100%;
                padding: .6rem 0 0 .3rem;
                box-sizing: border-box;
                p{
                    width: 1.02rem;
                    height: .3rem;
                    color: #b4282d;
                    font-size: .18rem;
                    border: 1px solid #b4282d;
                    zoom: .5;
                    border-radius: .04rem;
                    text-align: center;
                    line-height: .3rem;
                }
                h3{
                    width: 3.36rem;
                    font-size: .28rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: .48rem;
                }
                span{
                    color: #7f7f7f;
                    font-size: .24rem;
                }
                strong{
                    color: #b4282d;
                    font-size: .24rem;
                }
            }
        }
    }
    
}
</style>


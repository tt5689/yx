<template>
    <div id="t-floorWrap">
        <div class="m-banner">
            <p class="title">sweeee</p>
            <p class="subtitle">dewfrefr</p>
        </div>
        <!-- 遍历数组 -->
        <div class="saleListGood">
            <div class="goodGrid">
                <a href="javascript:;">
                    <div class="left">
                        <img/>
                    </div>
                    <div class="right">
                        <div class="tagWrap">
                            <!-- 要遍历 -->
                            <span>德哈卡</span>
                        </div>
                        <p>dhsdfidsfsjfbdj</p>
                        <span class="selling">ewfregthyujukjiuk</span>
                        <span class="price">sdef</span>
                    </div>
                </a>
            </div>
            <div class="goodGrid">
                <a href="javascript:;">
                    <div class="left">
                        <img/>
                    </div>
                    <div class="right">
                        <div class="tagWrap">
                            <!-- 要遍历 -->
                            <span>德哈卡</span>
                        </div>
                        <p>dhsdfidsfsjfbdj</p>
                        <span class="selling">ewfregthyujukjiuk</span>
                        <span class="price">sdef</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.saleListGood{
    background: #fff;
}
    #t-floorWrap{
        margin-bottom: .2rem;
        .m-banner{
            height: 2.6rem;
            .title{
                padding-top: .8rem;
                line-height: .54rem;
                font-size: .42667rem;
                font-weight: 700;
                color: #333;
                text-align: center;
                margin-bottom: .05333rem;
        }
        .subtitle{
            line-height: .52rem;
            font-size: .37333rem;
            color: #7f7f7f;
            text-align: center;
        }
        }
        .goodGrid
        {
            width: 100%;
            height: 2.8rem;
            margin-bottom: .06rem;
            padding-top: .04rem;
            a{
            display: flex;
            height: 100%;
            margin-left: .4rem;
            border-bottom: 1px solid #d9d9d9;
            flex-direction: row;
            .left{
                width:  2.64rem;
                height: 2.64rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                width:4.56rem;
                box-sizing: border-box;
                padding-left: .24rem;
                padding: .58rem;
                .tagWrap{
                    margin-bottom: .06667rem;
                    span{
                        padding: 0 .08rem;
                        line-height: .3333rem;
                        text-align: center;
                        color: #B4282D;
                        background: rgba(255,255,255,.9);
                        border: 1px solid #B4282D;
                        border-radius: .02667rem;
                    }
                }
                p{
                    width: 3.33333rem;
                    line-height: .53333rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .selling{
                    display: block;
                    font-size: .22rem;
                    line-height: .32rem;
                    color: #F48F18;
                    margin-bottom: .13333rem;
                    width: 3.26667rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .price{
                    font-size: .26rem;
                    color: #b4282d;
                }
            }
        }
        } 
    }
</style>
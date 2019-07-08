<template>
    <div id="lowerPrice">
        <div class="priceTop">
            <p>dfdsfefe</p>
            <span>dewfregtrhytjuyj</span>
        </div>
        <div class="tgoodsList">
            <a>
                <img />
                <p class="gname">dfsfsfresrf</P>
                <div class="tpri"><span>dddddd</span><i>defregr</i></div>
                <div class="tag">
                    <p>dewde</p>
                    <p>dewde</p>
                </div>
            </a>
             <a>
                <img />
                <p class="gname">dfsfsfresrf</P>
                <div class="tpri"><span>dddddd</span><i>defregr</i></div>
                <div class="tag">
                    <p>dewde</p>
                    <p>dewde</p>
                </div>
            </a>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #lowerPrice{
        min-height: 7rem;
        background: #fff;
        .priceTop{
            height: 2.6rem;
            background: pink;
            text-align: center;
            p{
                padding-top: .88rem;
                font-size: .32rem;
                font-weight: 900;
            }
            span{
                line-height: .66rem;
                font-size: .28rem;
                color: #7f7f7f;
            }
        }
        .tgoodsList{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            a{
                display: block;
                width: 3.72rem;
                height: 4.38rem;
                background: #fff;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                padding: .04rem .44rem 0;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 2.8rem;
                }
                .gname{
                    line-height: .52rem;
                    font-size: .28rem;
                    font-weight: 900;
                }
                .tpri{
                    line-height: .42rem;
                    span{
                        font-size: .2rem;
                        color: #b42b2d;
                        margin-right: .2rem;
                        font-weight: 900;
                    }
                    i{
                        font-size: .2rem;
                        color: #999999;
                        text-decoration: line-through;
                        font-weight: 900;
                    }
                }
            }
        }
        .tag{
            display: flex;
            flex-direction: row;
            p{
                padding: .08rem;
                line-height: .26rem;
                border: 1px solid #b42b2d;
                border-radius: .04rem;
                margin-right: .08rem;
            }
        }
    }
</style>

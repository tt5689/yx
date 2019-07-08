<template>
    <div class="welfareWrap">
        <div>
            <strong>福利栏目</strong>
            <span>吃穿家清, 每周有新折扣</span>
        </div>
        <ul>
            <li>
                <a href="#">
                    <img src="https://yanxuan.nosdn.127.net/da3a9f3d81bda520c769a0fceb4f128e.jpg"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://yanxuan.nosdn.127.net/da3a9f3d81bda520c769a0fceb4f128e.jpg"/>
                </a>
            </li>
        </ul>
        <div class="plogin">
            <a href="#"><strong>福利社红包: </strong>领取请先登录</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .welfareWrap{
        height: 5.78rem;
        background: #fff;
        margin-bottom: .2rem;
        padding: 0 .3rem;
        overflow-x: scroll;
        strong{
            line-height: .8rem;
            font-size: .3rem;
            color: #333333;
            font-weight: 600;
        }
        span{
            font-size: .22rem;
            color: #7f7f7f;
        }
        ul{
            display: flex;
            flex-direction: row;
            margin-bottom: .24rem;
            li{
                width: 3.4rem;
                height: 3.7rem;
                flex-shrink: 0;
                margin-right: .1rem;
                a,img{
                    display: block;
                    width: 100%;
                    height: 100%
                }
            }
        }
        .plogin{
            width: 100%;
            height: .72rem;
            background: #ffe8e9;
            line-height: .72rem;
            border-radius: .06rem;
            a{
                display: block;
                padding-left: .4rem;
                color: #b4282d;
                font-size: .24rem;
                strong{
                   color: #b4282d; 
                }
            }
        }
    }
    .welfareWrap::-webkit-scrollbar {
  display: none;
}
</style>
<template>
    <div class="t-hotsale">
        <h2>类目热销榜</h2>
        <ul>
            <li>
                <a href="#"><p>热销榜</p></a>
            </li>
            <li>
                <a href="#"><p>好评榜</p></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .t-hotsale{
        min-height: 7.12rem;
        background: #fff;
        padding: 0 .3rem;
        margin-bottom: .2rem;
        h2{
            line-height: 1rem;
            font-size: .3rem;
        }
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-content: flex-start;
            li{
                width: 1.66rem;
                height: 1.8rem;
                background: pink;
                margin-bottom: .12rem;
                p{
                    font-size: .22rem;
                }
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            li:nth-of-type(1),li:nth-of-type(2){
                width: 48%;
                height: 2rem;
                background: pink;
                p{
                    font-size: .28rem;
                    padding: .56rem 0 0 .26rem;
                }
            }
        }
        
    }
</style>

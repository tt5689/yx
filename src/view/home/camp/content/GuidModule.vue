<template>
    <div class="guidM_wwrap">
        <ul>
            <li>
                <a>
                    <p>2222222</p>
                    <span>111111111</span>
                    <div class="imgS">
                        <img />
                        <img/>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.guidM_wwrap{
    min-height: 5.76rem;
    background: #fff;
    margin-bottom: .2rem;
    padding: .1rem .3rem 0;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        li{
            width: 3.44rem;
            height: 2.64rem;
            background: #f5f5f5;
            a{
                display: block;
                padding: .24rem 0 0  .3rem;
                p{
                    font-size: .32rem;
                    color: #333;
                    line-height: .42rem;
                }
                span{
                    display: block;
                    line-height: .36rem;
                    color: #7f7f7f;
                }
                .imgS{
                    width: 100%;
                    img{
                        width: 48%;
                        height: 1.5rem;
                        background: #333;
                    }
                }
            }
        }
    }
}
</style>


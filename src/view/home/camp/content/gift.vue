<template>
    <div class="git_wrap">
        <h1>- 新人专享礼 -</h1>
        <div class="gift_c">
            <a href="#" class="gitBag">
                <h4>新人专享礼</h4>
                <img/>
            </a>
            <div class="git_right">
                <div class="canteen">
                    <a href="javascript:;" @click="handlerClick()"> 
                        <h4>福利社</h4>
                        <p>今日特价</p>
                        <img/>
                    </a>
                </div>
                <div class="group">
                    <a href="#">
                        <h4>新人拼团</h4>
                        <p>一元起拼</p>
                        <img/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handlerClick(){
             this.$router.replace('/canteens');
        }
    },
}
</script>

<style lang="scss" scoped>
.git_wrap{
    min-height: 5.57rem;
    margin-bottom: .2rem;
    background: #fff;
    padding: .04rem  .3rem 0;
    h1{
        font-size:.32rem;
        line-height: .88rem;
        text-align: center;
    }
    .gift_c{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .gitBag{
            display: block;
            width: 3.42rem;
            height: 4.32rem;
            background: #f9e9cf;
            border-radius: .08rem;
            h4{
                line-height: 1.08rem;
                padding-left: .3rem;
                color: #333;
                font-size: .32rem;
            }
            img{
                margin-top: .07rem;
                margin-left: .48rem;
                width: 2.44rem;
                height: 1.88rem;
                border: 0;
            }
        }
        .git_right{
            width: 3.42rem;
            display: flex;
            flex-direction: column;
            .canteen{
                height: 2.14rem;
                background: #fbe2d3;
                border-radius: .08rem;
                padding-left: .3rem;
                position: relative;
                a{
                    display: block;
                    h4{
                        padding-top: .22rem;
                        font-size: .32rem;
                        line-height: .40rem;
                    }
                    p{
                        color: #837f7f;
                        font-size: 0.22rem;
                    }  
                    img{
                        position: absolute;
                        top: .1rem;
                        right: .3rem;
                        width: 1.5rem;
                        height: 1.8rem;
                    } 
                }
                
            }
            .group{
                margin-top: .04rem;
                 height: 2.14rem;
                background: #ffecc2;
                border-radius: .08rem;
                padding-left: .3rem;
                position: relative;
                a{
                    display: block;
                    h4{
                        padding-top: .22rem;
                        font-size: .32rem;
                        line-height: .40rem;
                    }
                    p{
                        width: 1.2rem;
                        height: .32rem;
                        background: rgba($color: #000000, $alpha: .3);
                        color: #fff;
                        border-radius: .04rem;
                        text-align: center;
                    }   
                    img{
                        position: absolute;
                        top: .1rem;
                        right: .3rem;
                        width: 1.5rem;
                        height: 1.8rem;
                    } 
                }
            }
        }
    }
    
}
</style>

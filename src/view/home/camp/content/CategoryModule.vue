<template>
    <div class="categorywrap">
        <div>
            <a>
                <img/>
            </a>
        </div>
        <ul>
            <li>
                <a>
                    <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png"/>
                    <p>shangpinmaishu<i>价格</i></p>
                    <span>tagCnts</span>
                </a>
            </li>
            <li>
            <a>
                <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png"/>
                <p>shangpinmaishu<i>价格</i></p>
                <span>tagCnts</span>
            </a>
        </li>
        <li>
            <a>
                <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png"/>
                <p>shangpinmaishu<i>价格</i></p>
                <span>tagCnts</span>
            </a>
        </li>
        <li>
            <a>
                <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png"/>
                <p>shangpinmaishu<i>价格</i></p>
                <span>tagCnts</span>
            </a>
        </li>
        <li>
            <a>
                <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png"/>
                <p>shangpinmaishu<i>价格</i></p>
                <span>tagCnts</span>
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
    .categorywrap{
        min-height: 7.82rem;
        background: #fff;
        margin-bottom: .2rem;
        div{
            height: 3.7rem;
            a{
                display: block;
                height: 100%;
                img{
                    width: 100%;
                    height:100%;
                    background: #ccc;
                }
            }
        }
        ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow-x: scroll;
        padding-left: .3rem;
        li{
            width: 2.16rem;
            margin-left: .2rem;
            margin-top:.2rem;
            a{
                display: block;
                img{
                    width: 100%;
                    height: 2.14rem;
                    margin-bottom: .12rem;
                    background: #f4f4f4;
                }
                p{
                   font-size: .23rem;
                   line-height: .4rem;
                   i{
                       color: #b4282d;
                   } 
                }
                span{
                    width: auto;
                    display: inline-block;
                    padding: 0 .12rem;
                    border: 1px solid #b4282d;
                    height: .28rem;
                    line-height: .28rem;
                    text-align: center;
                }
            }
        }
    }
    ul::-webkit-scrollbar{
        display: none;
    }
    }
</style>
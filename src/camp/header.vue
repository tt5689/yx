<template>
<div class="index_header">
<a href="javascript:;">网易严选</a>
<div>
    <i class="iconfont iconfangdajing"></i>
    <input type="text" placeholder="搜索商品, 共22438款好物"/>
</div>
<div class="login-btn">登陆</div>
</div>
</template>

<script>


</script>

<style lang="scss" scoped>
.index_header{
    height:.58rem;
    background:#fff;
    line-height:.58rem;
    padding:.16rem .3rem;
    a{
        display:inline-block;
        width:1rem;
        height:0.58rem;
        float:left;
        margin-right:.2rem;
    }
    div{
        position:relative;
        height:100%;
        line-height:100%;
        float:left;
        input{
            width:3.64rem;
            height:100%;
            padding-left:0.8rem;
            background:#ededed;
            border-radius:.1rem;
            color:#666666;
            font-size:.3rem;
            line-height:100%;
        }
        i{
            display:inline-block;
            position:absolute;
            left:.42rem;
            top: 0.16rem;
        }
    }
    .login-btn{
        margin-left:.16rem;
        width:.74rem;
        height:.4rem;
        margin-top:.1rem;
        border:1px solid #b4282d;
        color:#b4282d;
        border-radius:.08rem;
        line-height:.4rem;
        text-align:center;
    }
}
</style>
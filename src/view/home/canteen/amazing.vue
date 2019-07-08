<template>
    <div id="amazingWrap">
        <h2>我的福利</h2>
        <div class="nologin">
            <div class="tcard">你还没有登陆</div>
            <div class="loginBtn">请先登录</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#amazingWrap{
    min-height: 6.37rem;
    background: #fff;
    h2{
        line-height: 1.2rem;
        height: 1.2rem;
        font-size: .4rem;
        color: #333;
        text-align: center;
        font-weight: 700;
    }
    .nologin{
        padding-top: .9rem;
        padding-bottom: .72rem;
        .tcard{
            height: 1rem;
            margin-bottom: .3rem;
            text-align: center;
            color: #7f7f7f;
            line-height: .3rem;
        }
        .loginBtn{
            width: 3.36rem;
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            border: 1px solid #B4282D;
            border-radius: .05333rem;
            margin: auto;
            color: #B4282D;
            font-size: .37333rem;
        }
    }
}
</style>

<template>
    <div class="canNavwarp">
        <a href="#ticketCent">领券中心</a>
        <a href="#lowerPrice">今日折扣</a>
        <a href="#t-floorWrap">量贩组合</a>
        <a href="#amazingWrap">我的福利</a>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .canNavwarp{
        height: .82rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        a{
            display: inline-block;
            width: 24%;
            line-height: .82rem;
            color: #7f7f7f;
            font-size: .24rem;
            text-align: center;
        }
        a:hover{
            background: #ffeeef;
            color: #b4286b;
        }
        .active{
            background: #ffeeef;
            color: #b4286b;
        }
    }
</style>
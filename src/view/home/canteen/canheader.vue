<template>
        <div class="svheader">
            <i class ="iconfont iconshouye" ></i>
            <h2 v-text="viptitle" class="zyywyxttitle"></h2>
            <i  class ="iconfont iconfangdajing"></i>
            <i  class ="iconfont iconcart" ></i>
        </div>
</template>

<script>
export default {
    data() {
        return {
            viptitle:"网易严选"
        }
    },
}
</script>

<style scoped>
    .svheader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content:space-between;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        z-index: 99
    }
    .svheader .zyywyxttitle {
        font-family: KaiTi;
        color: #333;
        font-size: .5rem;
        font-weight: 900;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .svheader i {
        color: #222;
        font-size: .5rem;
        padding: 0 .3rem;
    }
    .vipsearch {
        position: absolute;
        left: 5.4rem;
    }
    .vipcar {
        font-weight: 900;
    }
</style>
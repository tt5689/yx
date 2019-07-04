<template>
  <div class="swiper-container" ref="banner">
    <slot name="banner" :content="banners"></slot>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "banner",
  data() {
    return {
      banners: [
        "https://yanxuan.nosdn.127.net/f5008ea7bd994a9f0b9be7783b910991.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/a189be874717ac5641f47c7c9aeee9d8.jpg?imageView&quality=75&thumbnail=750x0"
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.banner, {
      autoplay: {
        disableOnInteraction: false
      },
      // 如果需要分页器
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 3.7rem;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-slide > img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet{
    width: .4rem;
    height: .05rem;
    background: #fff;
    opacity: .4;
}
.swiper-pagination-bullet-active{
    background: #fff;
    opacity: 1;
}
</style>

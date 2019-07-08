<template>
    <div class="canbanner">
        <a href="javascript">
          <img src="https://yanxuan.nosdn.127.net/ad119d556cb9f10c1ad55f5bac36585e.jpg" />
        </a>
        <a href="javascript">
          <img src="https://yanxuan.nosdn.127.net/ad119d556cb9f10c1ad55f5bac36585e.jpg" />
        </a>
      </div>
</template>

<script>
export default {
};
</script>
<style lang="scss" scoped>
.canbanner {
  height: 3.8rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  a {
    display: block;
    width: 6.68rem;
    height: 3.28rem;
    padding: 0.2rem;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.canbanner::-webkit-scrollbar {
  display: none;
}
</style>

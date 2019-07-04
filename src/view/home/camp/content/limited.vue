<template>
  <div class="time_by">
      <CommHead :val="title"/>
      <ul>
          <li>
              <a>
                  <img src="https://yanxuan.nosdn.127.net/c42809e7f5968367edc8f34058a4da08.png"/>
                  <p>1111<i>2222</i></p>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import CommHead from './commHead.vue';
export default {
  components: {
    CommHead
  },
  data() {
    return {
      hour:'',
      min:'',
      seconds:'',
      title: `限时购<span><i>00</i>:<i>11</i>:<i>22</i></span>`,
    };
  },
  mounted() {
    var timer3 = setInterval(function () {
      var data = new Date();
      var obj = 24 * 60 * 60;
      var obj1 = data.getHours() * 60 * 60 + data.getMinutes() * 60 + data.getSeconds();
      var sub = obj - obj1;
      this.hour = parseInt(sub / 3600);
      this.min = parseInt((sub - this.hour * 3600) / 60);
      this.seconds = sub - this.hour * 3600 - this.min * 60;
      this.hour = this.hour < 10 ? ('0' + this.hour) : this.hour;
      this.min = this.min < 10 ? ('0' + this.min) : this.min;
      this.seconds = this.seconds < 10 ? ('0' + this.seconds) : this.seconds;
      }.bind(this), 1000);
  }, 
      
  watch: {
    seconds(){
      this.title= `限时购<span><i>${this.hour}</i>:<i>${this.min}</i>:<i>${this.seconds}</i></span>`
    }
  },
};
</script>

<style lang="scss" scoped>
.time_by {
  min-height: 7rem;
  background: #fff;
  margin-bottom: 0.2rem;
  padding:0 .3rem;
  ul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;
      li{
          width: 2.16rem;
          margin-top: .2rem;
          a{
              display: block;
              img{
                  width: 100%;
                  height: 2.16rem;
                  background: #f5f5f5;
              }
              p{
                  padding-left: .2rem;
                  font-size: .2rem;
                  color: #b4282d;
                  line-height: .64rem;
                  i{
                      padding-left: .2rem;
                      text-decoration: line-through;
                      color: #7f7f7f;
                  }
              }
          }
      }
  }
}
</style>

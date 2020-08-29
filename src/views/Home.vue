<template>
  <!-- 主页大屏窗口 -->
  <div>
    <!-- header -->
    <header>
      <div class="colum">
      </div>
      <div class="colum">
        <div class="header-middle">
          <h1>油污监测数据可视化平台</h1>
          <div class="showTime">当前时间：{{date | formatDateTime}}</div>
        </div>
      </div>
      <div class="colum">3</div>
    </header>
    <!-- 主界面实现 -->
    <section class="mainbox">
      <!-- 路由跳转 -->
      <router-view></router-view>
      <div class="box"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      date: new Date()
    }
  },
  filters: {
    formatDateTime (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '年' + MM + '月' + d + '日' + ' ' + h + ':' + m + ':' + s
    }
  },
  mounted () {
    var that = this
    this.timer = setInterval(() => {
      that.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
header {
  position: relative;
  display: flex;
  height: 1.25rem;
  background: url(../assets/images/homeBg/head_bg.png);
  background-size: 100% 100%;

  .colum {
    position: relative;
    flex: 3;
    //   background-color: pink;
    &:nth-child(2) {
      flex: 5;
    }
  }
  .header-middle {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    // border: 1px solid red;
    h1 {
      font-size: 0.475rem;
      color: #fff;
    }
    .showTime {
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
    }
  }
}
.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  height: auto;
  margin: 0 auto;
  padding: 0 0.125rem 0;
  background-color: #081832;

}
</style>

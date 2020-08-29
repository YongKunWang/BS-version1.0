<template>
  <div>
    <header>
      <div class="colum">
        <ul>
          <li>
            <a href="javascript:void(0);" @click.prevent="backMain">
              <div class="menu">
                <span class="iconfont bsDots"></span>
                <span>&nbsp;&nbsp;数据概览</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click.prevent="backMain">
              <div class="menu">
                <span class="iconfont bsjiankong"></span>
                <span>&nbsp;&nbsp;监控详情</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="colum">
        <div class="logo">
          <h2>
            <strong>油污监测管理服务平台</strong>
          </h2>
          <p>当前时间：{{date | formatDateTime}}</p>
        </div>
      </div>
      <div class="colum">
        <ul>
          <li>
            <a href="javascript:void(0);" @click.prevent="backMain">
              <div class="menu">
                <span class="iconfont bslishishuju1"></span>
                <span>&nbsp;&nbsp;历史数据</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click.prevent="backMain">
              <div class="menu">
                <span class="iconfont bsyonghuzhongxin"></span>
                <span>&nbsp;&nbsp;用户中心</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Manage',
  data () {
    return {
      date: new Date()
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
    backMain () {
      this.$router.push('/main')
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
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  background-color: #030829;
  height: 1.333333rem;
  color: #fff;
  font-size: 14px;
  text-align: center;
  .colum {
    flex: 1;
  }
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    li {
      flex: 1;
      position: relative;
    }
    .menu {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2rem;
      height: 0.833333rem;
      // background-color: pink;
      line-height: 0.833333rem;
      font-size: 18px;
      font-weight: 400;
      &:hover {
        box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
          10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .logo {
    width: 100%;
    height: 100%;
    background: url(../assets/images/manage/logoBg.png);
    background-size: 100% 100%;
    text-align: center;
    padding-top: 15px;
    p {
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
    }
  }
}
</style>

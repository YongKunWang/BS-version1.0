<template>
  <div class="mainbox">
    <!-- 第一列 -->
    <div class="colum">
      <!-- 第一行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/warningIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
      <!-- 第二行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/normalIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
      <!-- 第三行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/normalIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
    </div>
    <div class="colum">
      <div class="no">
        <div class="no-hd">
          <ul>
            <li>000011</li>
            <li>000010</li>
          </ul>
        </div>
        <div class="no-bd">
            <ul>
              <li>污染预警次数</li>
              <li>未处理预警剩余</li>
            </ul>
        </div>
      </div>
      <div class="showbox">
        <div class="show-continer">
          <div class="show-title">大屏监控</div>
          <div class="show-hd">
            <img class="clip1" src="../assets/images/mainBg/4851.jpg" alt="">
          </div>
          <div class="showContiner-footer"></div>
        </div>
        <div class="show-bd">
          <div class="bd-left">
            <dv-border-box-8>
            </dv-border-box-8>
          </div>
          <div class="bd-right">
            <a href="javascript:void(0);" @click.prevent="jumpWebPage">
              <dv-border-box-1>
                <div class="location">
                  <dv-decoration-9 style="width:130px;height:130px; color:#fff;font-size:20px;font-weight: 700;">
                    进&nbsp;&nbsp;入
                  </dv-decoration-9>
                </div>
              </dv-border-box-1>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="colum">
      <!-- 第一行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/normalIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
      <!-- 第二行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/normalIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
      <!-- 第三行 -->
      <div class="panel monitorOne">
        <h2>西门-监控摄像头1</h2>
        <img class="warningFlag" src="../assets/images/mainBg/normalIcon.png" alt="">
        <div class="monitorShow">
          <img class="clip" src="../assets/images/mainBg/4851.jpg" alt="">
        </div>
        <div class="panel-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    jumpWebPage () {
      this.$router.push('/manage')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/fonts/digit.css";
.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  padding: 0;
  margin: 0;
  background-color: #081832;
  .colum {
    flex: 3;
    // background-color: pink;
  }
  .colum:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.1875rem;
    overflow: hidden;
  }
  .panel {
    position: relative;
    height: 3.9rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: url(../assets/images/mainBg/line.png);
    padding: 0 0.1875rem;
    margin-bottom: 0.15rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }

    .panel-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
    }
    h2 {
      height: 0.41rem;
      line-height: 0.41rem;
      text-align: center;
      color: #fff;
      font-size: 0.25rem;
      font-weight: 400;
    }
  }
  .panel:nth-child(3) {
    margin-bottom: 0px;
  }
  .monitorShow {
    height: 3.3rem;
    position: relative;
    // background-color: pink;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
    .clip {
      position: absolute;
      top: -78px;
      left: 0;
      clip: rect(78px 357px 274px 0px);
    }
  }
  .monitorOne {
    .warningFlag {
      position: absolute;
      top: -3px;
      right: 5px;
  }
  }
  .no {
    width: 100%;
    height: auto;
    background: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;
    .no-hd {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 30px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        width: 30px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
      ul {
          display: flex;
          li {
              position: relative;
              flex: 1;
              line-height: 1rem;
              font-size: 0.875rem;
              color: #ffeb7b;
              text-align: center;
              font-family: "electronicFont";
              &::after {
                  content: "";
                  position: absolute;
                  top: 20%;
                  right: 0;
                  height: 50%;
                  width: 1px;
                  background: rgba(255, 255, 255, 0.2);
              }
          }
      }
    }
    .no-bd {
        ul {
            display: flex;
            li {
                flex: 1;
                text-align: center;
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.225rem;
                height: 0.5rem;
                line-height: 0.5rem;
                padding-top: 0.125rem;
            }
        }
    }
  }
  .showbox {
    margin-top: 0.5rem;
    width: 100%;
    height: 100%;
    // border: 1px solid red;
    .show-continer {
      position: relative;
      height: 6.748rem;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background: url(../assets/images/mainBg/line.png);
      padding: 0.5rem 0.1875rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }

      .showContiner-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
        }
      }
      .show-title {
        background-color: #122443;
        border-radius: 18px;
        position: absolute;
        height: 35px;
        width: 60%;
        top: -15px;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
        left: 20%;
        line-height: 35px;
        text-align: center;
        opacity: 0.8;
      }
      .show-hd {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        // background-color: red;
        img {
          width: 100%;
          height: auto;
        }
        .clip1 {
          position: absolute;
          top: -134px;
          left: 0px;
          clip: rect(134px 620px 476px 0px);
        }
      }
    }
    .show-bd {
      position: relative;
      width: 100%;
      height: 2.65rem;
      text-align: center;
      padding: 0;
      margin: 5px 0 0;
      display: flex;
      .bd-left {
        flex: 2;
        margin-right: 5px;
        // background-color: red;
      }
      .bd-right {
        flex: 1;
        position: relative;
      }
      .location {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
// 还是有比较大的问题的！可以进行组件的抽离！

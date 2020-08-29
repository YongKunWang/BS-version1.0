<template>
    <ul class="slide-box">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</template>

<script>
export default {
  name: 'bgAnimation'
}
</script>

<style lang="less" scoped>
.slide-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 134, 179, .5);
  top: 0;
  left: 0;
  z-index: 0;

  li {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    /*color属性值为transparent时，文本显示为黑色*/
    color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /*完全透明*/
    opacity: 0;
    /*z-index 较大的元素会覆盖较小的元素在上层进行显示*/
    z-index: 0;
    /*不显示底面*/
    -webkit-backface-visibility: hidden;
    -webkit-animation: imgAnimation 48s linear infinite 0s;
    -moz-animation: imgAnimation 48s linear infinite 0s;
    -o-animation: imgAnimation 48s linear infinite 0s;
    -ms-animation: imgAnimation 48s linear infinite 0s;
    animation: imgAnimation 48s linear infinite 0s;

    &:nth-child(1) {
      background-image: url(../../assets/images/loginBg/bg-4.jpg);
    }

    &:nth-child(2) {
      background-image: url(../../assets/images/loginBg/bg-5.jpg);
      background-size: 100% 100%;
      -webkit-animation-delay: 12s;
      -moz-animation-delay: 12s;
      -o-animation-delay: 12s;
      -ms-animation-delay: 12s;
      animation-delay: 12s;
    }

    &:nth-child(3) {
      background-image: url(../../assets/images/loginBg/bg-2.jpg);
      background-size: 100% 100%;
      -webkit-animation-delay: 24s;
      -moz-animation-delay: 24s;
      -o-animation-delay: 24s;
      -ms-animation-delay: 24s;
      animation-delay: 24s;
    }

    &:nth-child(4) {
      background-image: url(../../assets/images/loginBg/bg-1.png);
      background-size: 100% 100%;
      animation-delay: 36s;
    }
  }
}
  @-webkit-keyframes imgAnimation {
    0% {
      opacity: 0;
      -webkit-animation-timing-function: ease-in;
    }
    8% {
      opacity: 1;
      -webkit-transform: scale(1.1);
      -webkit-animation-timing-function: ease-out;
    }
    17% {
      opacity: 1;
      -webkit-transform: scale(1.2);
    }
    25% {
      opacity: 0;
      -webkit-transform: scale(1.3);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes imgAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    8% {
      opacity: 1;
      transform: scale(1.1);
      animation-timing-function: ease-out;
    }
    17% {
      opacity: 1;
      transform: scale(1.2);
    }
    25% {
      opacity: 0;
      transform: scale(1.3);
    }
    100% {
      opacity: 0;
    }
}
</style>

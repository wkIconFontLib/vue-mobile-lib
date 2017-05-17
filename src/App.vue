<template>
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
  // 引入 字体图标库
  import 'mobile-ui-lib/src/stylesheets/global/iconfont.scss'
  // 引入动画库
  import 'animate.css'
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/mobile-ui-lib.scss";
  @import "~mobile-ui-lib/src/stylesheets/modules/header.scss";
  @import "~mobile-ui-lib/src/stylesheets/modules/search.scss";
  @import "~mobile-ui-lib/src/stylesheets/modules/tabBar.scss";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>

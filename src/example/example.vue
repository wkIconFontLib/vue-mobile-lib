<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <router-link :to="{ name: 'index'}" >
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </router-link>
      </div>
      <h1 class="m-header-title">{{ hdTitle }}</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      hdTitle: {
        type: String,
        default () {
          return ''
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  @import "~mobile-ui-lib/src/stylesheets/helps/mixin.scss";
  // 按钮
  h1 {
    font-size: .36rem;
    font-weight: bold;
    padding: .3rem;
    text-align: center;
  }
  h2 {
    font-size: .3rem;
    font-weight: bold;
    padding: .3rem;
    text-align: left;
  }
  .m-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: .9rem;
    box-sizing: border-box;
    h1 {
      font-weight: 500;
      font-size: .36rem;
      padding: 0;
    }
    a {
      margin: 0;
    }
  }
  .content {
    position: absolute;
    left: 0;
    top:0;
    z-index: 101;
    width: 100%;
    height: 100%;
    background-color: $bgSecColor;
    @include displayFlex;
    box-orient:vertical;
    flex-direction:column;
    .main {
      box-sizing: border-box;
      padding-top: .9rem;
      @include flex(1);
    }
  }
</style>

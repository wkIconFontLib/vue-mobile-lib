<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <a href="../../page/iframe.html">
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </a>
      </div>
      <h1 class="m-header-title">标签栏</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <div class="m-tabBar">
        <a class="m-tabBar-item" href="javascript:;">
          <i class="icon iconfont icon-shouye-shouye"></i>
          <label>首页</label>
        </a>
        <a class="m-tabBar-item" href="javascript:;">
          <i class="icon iconfont icon-fenlei"></i>
          <label>分类</label>
        </a>
        <a class="m-tabBar-item" href="javascript:;">
          <i class="icon iconfont icon-gouwuche2"></i>
          <label>购物车</label>
        </a>
        <a class="m-tabBar-item m-tabBar-item-active" href="javascript:;">
          <i class="icon iconfont icon-huiyuan"></i>
          <label>我的</label>
        </a>
      </div>
    </div>
  </div>
</template>
<script type="text/babel"></script>
<style scoped lang="scss" rel="stylesheet/scss">
  // @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  // @import "~mobile-ui-lib/src/stylesheets/helps/mixin.scss";
  @import "~mobile-ui-lib/src/stylesheets/modules/tabBar.scss";
  body {
    background-color: $bgPrimaryColor;
  }
  .m-tabBar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>

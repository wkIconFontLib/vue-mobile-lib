<template>
  <example :hdTitle="hdTitle">
    <div slot="main" class="header-list">
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
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'tabBar'
      }
    },
    components: {
      Example
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
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

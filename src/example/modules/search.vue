<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <a href="../../page/iframe.html">
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </a>
      </div>
      <h1 class="m-header-title">搜索框</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <h1>普通搜索框</h1>
      <div class="m-search">
        <i class="icon iconfont icon-sousuo"></i>
        <input type="search" value="" placeholder="输入搜索内容">
      </div>
      <h1>带搜索类型的搜索框</h1>
      <div class="m-search m-search-border">
        <span class="m-search-type"><label>店铺</label><i class="icon iconfont icon-zhankai"></i></span>
        <i class="icon iconfont icon-sousuo"></i>
        <input type="search" value="" placeholder="输入搜索内容">
      </div>
      <h1>带取消按钮的搜索框</h1>
      <div class="m-search-outer">
        <div class="m-search m-search-border">
          <span class="m-search-type"><label>店铺</label><i class="icon iconfont icon-zhankai"></i></span>
          <i class="icon iconfont icon-sousuo"></i>
          <input type="search" value="" placeholder="输入搜索内容">
        </div>
        <a href="javascript:;" class="m-search-close">取消</a>
      </div>
      <h1>带搜索按钮的搜索框</h1>
      <div class="m-search-outer">
        <div class="m-search m-search-border">
          <i class="icon iconfont icon-sousuo"></i>
          <input type="search" value="" placeholder="输入搜索内容">
          <button class="m-search-btn">搜索</button>
        </div>
      </div>

      <!--
      <div class="m-search-outer">
          <div class="m-search-inner">
              <span class="m-search-type">店铺<i class="m-search-arrow"></i></span>
              <input type="search" name="search" class="m-search" placeholder="输入商品/店铺名称">
          </div>
      </div>-->
      <!--<h1>普通搜索框</h1>
      <input type="text" name="search" class="m-search" placeholder="输入商品/店铺名称">
      <h1>带搜索类型的搜索框</h1>
      <div class="m-search-outer">
          <div class="m-search-inner">
              <span class="m-search-type">店铺<i class="m-search-arrow"></i></span>
              <input type="text" name="search" class="m-search" placeholder="输入商品/店铺名称">
          </div>
      </div>
      <h1>带取消按钮的搜索框</h1>
      <div class="m-search-outer">
          <div class="m-search-inner">
              <input type="text" name="search" class="m-search" placeholder="输入商品/店铺名称">
          </div>
          <a href="javascript:;" class="m-search-close">取消</a>
      </div>
      <h1>搜索二</h1>
      <div class="m-search-outer">
          <div class="m-search-inner">
              <span class="m-search-type">店铺<i class="m-search-arrow"></i></span>
              <input type="text" name="search" class="m-search" placeholder="输入商品/店铺名称">
          </div>
          <a href="javascript:;" class="m-search-close">取消</a>
      </div>-->
    </div>
  </div>
</template>
<script type="text/babel"></script>
<style scoped lang="scss" rel="stylesheet/scss">
  // @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  // @import "~mobile-ui-lib/src/stylesheets/helps/mixin.scss";
  @import "~mobile-ui-lib/src/stylesheets/modules/search.scss";
  body {
    background-color: $bgPrimaryColor;
  }
  h1 {
    font-size: .36rem;
    font-weight: bold;
    padding: .3rem;
    text-align: center;
  }
  .m-header {
    position: absolute;
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
    height: 100%;
    @include displayFlex;
    box-orient:vertical;
    flex-direction:column;
    .main {
      box-sizing: border-box;
      padding-top: .9rem;
      @include flex(1);
      height: 100%;
    }
  }
  .m-search {
    margin: 0 auto;
  }
</style>

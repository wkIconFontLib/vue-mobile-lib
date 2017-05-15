<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <a href="../../page/iframe.html">
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </a>
      </div>
      <h1 class="m-header-title">列表</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <h2>带副标题</h2>
      <div class="g-cells">
        <div class="g-cell">
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题</div>
        </div>
        <div class="g-cell">
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题</div>
        </div>
      </div>
      <h2>带副标题带箭头</h2>
      <div class="g-cells">
        <div class="g-cell g-cell-access">
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题<i class="icon iconfont icon-gengduo4"></i></div>
        </div>
        <div class="g-cell g-cell-access">
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题<i class="icon iconfont icon-gengduo4"></i></div>
        </div>
      </div>
      <h2>带图标带副标题</h2>
      <div class="g-cells">
        <div class="g-cell">
          <div class="g-cell-hd"><i class="icon iconfont icon-wuliu1"></i></div>
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题</div>
        </div>
        <div class="g-cell">
          <div class="g-cell-hd"><i class="icon iconfont icon-icon_lianxi"></i></div>
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题</div>
        </div>
      </div>
      <h2>带图标带副标题带箭头</h2>
      <div class="g-cells">
        <div class="g-cell g-cell-access">
          <div class="g-cell-hd"><i class="icon iconfont icon-wuliu1"></i></div>
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题<i class="icon iconfont icon-gengduo4"></i></div>
        </div>
        <div class="g-cell g-cell-access">
          <div class="g-cell-hd"><i class="icon iconfont icon-icon_lianxi"></i></div>
          <div class="g-cell-bd">标题</div>
          <div class="g-cell-ft">副标题<i class="icon iconfont icon-gengduo4"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel"></script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  @import "~mobile-ui-lib/src/stylesheets/helps/mixin.scss";
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
  html, body {
    background-color: $bgPrimaryColor;
  }
  .g-cells {
    .g-cell-hd i {
      margin-right: .1rem;
    }
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
</style>

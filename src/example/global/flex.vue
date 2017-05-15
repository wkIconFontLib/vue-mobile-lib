<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <a href="../../page/iframe.html">
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </a>
      </div>
      <h1 class="m-header-title">flex</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <!--flex-->
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-2">g-col-2</div>
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-1">g-col-1</div>
        <div class="g-col-3">g-col-3</div>
        <div class="g-col-1">g-col-1</div>
      </div>
      <div class="g-row">
        <div class="g-col-2">g-col-2</div>
        <div class="g-col-10">g-col-10</div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel"></script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  @import "~mobile-ui-lib/src/stylesheets/helps/mixin.scss";
  // flex
  %gCol {
    background-color: $bgPrimaryColor;
    font-size: .20rem;
    text-align: center;
    color: $fontSecColor;
    padding: .20rem;
  }
  .g-row {
    @for $i from 1 through 10 {
      .g-col-#{$i} {
        @extend %gCol;
      }
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

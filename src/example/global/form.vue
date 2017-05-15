<template>
  <div class="content">
    <header class="m-header">
      <div class="m-header-left">
        <a href="../../page/iframe.html">
          <i class="icon iconfont icon-fanhui"></i>
          <label class="g-header-text">返回</label>
        </a>
      </div>
      <h1 class="m-header-title">表单</h1>
      <div class="m-header-right"></div>
    </header>
    <div class="main">
      <h1>普通文本框</h1>
      <div class="g-cells g-cells-form">
        <div class="g-cell">
          <div class="g-cell-hd">普通文本框：</div>
          <div class="g-cell-bd">
            <input class="g-text" type="text">
          </div>
        </div>
        <div class="g-cell">
          <div class="g-cell-hd">普通文本框：</div>
          <div class="g-cell-bd">
            <input class="g-text"  type="text">
          </div>
        </div>
        <div class="g-cell">
          <div class="g-cell-hd">普通文本框：</div>
          <div class="g-cell-bd">
            <input class="g-text"  type="text">
          </div>
        </div>

      </div>
      <h1>开关按钮</h1>
      <div class="g-cells">
        <div class="g-cell g-cell-switch">
          <div class="g-cell-bd">开关按钮-关：</div>
          <div class="g-cell-ft">
            <input class="g-switch"  type="checkbox">
          </div>
        </div>
        <div class="g-cell g-cell-switch">
          <div class="g-cell-bd">开关按钮-开：</div>
          <div class="g-cell-ft">
            <input class="g-switch"  type="checkbox" checked>
          </div>
        </div>
      </div>
      <h1>单选按钮</h1>
      <div class="g-cells">
        <div class="g-cell g-cell-radio">
          <div class="g-cell-bd">单选按钮-未选中：</div>
          <div class="g-cell-ft">
            <input class="g-radio"  name="radio1" type="radio">
          </div>
        </div>
        <div class="g-cell g-cell-radio">
          <div class="g-cell-bd">开关按钮-已选中：</div>
          <div class="g-cell-ft">
            <input class="g-radio" name="radio1" type="radio" checked>
          </div>
        </div>
      </div>
      <h1>多选按钮</h1>
      <div class="g-cells">
        <div class="g-cell g-cell-checkbox">
          <div class="g-cell-bd">多选按钮-未选中：</div>
          <div class="g-cell-ft">
            <input class="g-checkbox"  name="checkbox" type="checkbox">
          </div>
        </div>
        <div class="g-cell g-cell-checkbox">
          <div class="g-cell-bd">多选按钮-已选中：</div>
          <div class="g-cell-ft">
            <input class="g-checkbox" name="checkbox" type="checkbox" checked>
          </div>
        </div>
      </div>
      <h1>文本编辑器</h1>
      <div class="g-cells">
        <div class="g-cell g-cell-textArea">
          <div class="g-cell-hd">文本编辑器：</div>
          <div class="g-cell-bd">
            <textarea class="g-textArea" rows="3" placeholder="请输入文本"></textarea>
          </div>
        </div>
        <div class="g-cell g-cell-textArea">
          <div class="g-cell-hd">带输入文本限制：</div>
          <div class="g-cell-bd">
            <textarea class="g-textArea" rows="3" placeholder="请输入文本"></textarea>
            <div class="g-textArea-counter"><span>0</span>/200</div>
          </div>
        </div>
        <div class="g-cell g-cell-textArea">
          <div class="g-cell-hd">带输入文本限制及删除：</div>
          <div class="g-cell-bd g-cell-bd-textArea">
            <textarea class="g-textArea" rows="3" placeholder="请输入文本"></textarea>
            <div class="g-textArea-counter"><span>0</span>/200</div>
            <div class="g-textArea-del"><i class="icon iconfont icon-guanbi1"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel"></script>
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

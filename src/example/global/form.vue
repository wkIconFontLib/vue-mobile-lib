<template>
  <example :hdTitle="hdTitle">
    <div slot="main">
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
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'form'
      }
    },
    components: {
      Example
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>

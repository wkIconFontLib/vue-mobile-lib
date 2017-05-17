<template>
  <example :hdTitle="hdTitle">
    <div slot="main" class="list-content">
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
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'list'
      }
    },
    components: {
      Example
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .list-content {
    height: 100%;
    overflow-y: auto;
  }
</style>

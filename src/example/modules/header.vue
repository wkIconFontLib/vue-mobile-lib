<template>
  <example :hdTitle="hdTitle">
    <div slot="main" class="header-list">
      <header class="m-header">
        <div class="m-header-left"></div>
        <h1 class="m-header-title">标题居中</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="g-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="m-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <i class="icon iconfont icon-gengduo"></i>
          </a>
        </div>
      </header>
      <header class="m-header">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="m-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <label class="m-header-text">更多</label>
          </a>
        </div>
      </header>
      <header class="m-header">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <i class="icon iconfont icon-gengduo"></i>
          </a>
        </div>
      </header>
      <!--居左-->
      <header class="m-header m-headerLeft">
        <div class="m-header-left"></div>
        <h1 class="m-header-title">标题居中</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header m-headerLeft">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header m-headerLeft">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="g-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right"></div>
      </header>
      <header class="m-header m-headerLeft">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="m-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <i class="icon iconfont icon-gengduo"></i>
          </a>
        </div>
      </header>
      <header class="m-header m-headerLeft">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
            <label class="m-header-text">返回</label>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <label class="m-header-text">更多</label>
          </a>
        </div>
      </header>
      <header class="m-header m-headerLeft">
        <div class="m-header-left">
          <a href="javascript:;">
            <i class="icon iconfont icon-fanhui"></i>
          </a>
        </div>
        <h1 class="m-header-title">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
        <div class="m-header-right">
          <a href="javascript:;">
            <i class="icon iconfont icon-gengduo"></i>
          </a>
        </div>
      </header>
    </div>
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'header'
      }
    },
    components: {
      Example
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .header-list {
    .m-header {
      position: inherit;
      margin-top: .20rem;
    }
  }
</style>

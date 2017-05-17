<template>
  <example :hdTitle="hdTitle">
    <div slot="main" class="button-content">
      <h1>按钮一</h1>
      <button class="g-button g-big-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary大按钮</button>
      <button class="g-button g-big-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary大按钮禁用</button>
      <button class="g-button g-mid-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary中按钮</button>
      <button class="g-button g-mid-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary中按钮禁用</button>
      <button class="g-button g-small-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary小按钮</button>
      <button class="g-button g-small-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary小按钮禁用</button>

      <button class="g-button g-big-radius-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary大按钮带圆角</button>
      <button class="g-button g-big-radius-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary大按钮禁用带圆角</button>
      <button class="g-button g-mid-radius-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary中按钮带圆角</button>
      <button class="g-button g-mid-radius-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary中按钮禁用带圆角</button>
      <button class="g-button g-small-radius-button g-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary小按钮带圆角</button>
      <button class="g-button g-small-radius-button g-disabled-primary-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;primary小按钮禁用带圆角</button>
      <h1>按钮二</h1>
      <button class="g-button g-big-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second大按钮</button>
      <button class="g-button g-big-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second大按钮禁用</button>
      <button class="g-button g-mid-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second中按钮</button>
      <button class="g-button g-mid-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second中按钮禁用</button>
      <button class="g-button g-small-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second小按钮</button>
      <button class="g-button g-small-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second小按钮禁用</button>

      <button class="g-button g-big-radius-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second大按钮带圆角</button>
      <button class="g-button g-big-radius-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second大按钮禁用带圆角</button>
      <button class="g-button g-mid-radius-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second中按钮带圆角</button>
      <button class="g-button g-mid-radius-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second中按钮禁用带圆角</button>
      <button class="g-button g-small-radius-button g-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second小按钮带圆角</button>
      <button class="g-button g-small-radius-button g-disabled-second-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;second小按钮禁用带圆角</button>
      <h1>按钮三</h1>
      <button class="g-button g-big-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three大按钮</button>
      <!--<button class="g-button g-big-button g-disabled-three-button">three大按钮禁用</button>-->
      <button class="g-button g-mid-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three中按钮</button>
      <!--<button class="g-button g-mid-button g-disabled-second-button">three中按钮禁用</button>-->
      <button class="g-button g-small-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three小按钮</button>
      <!--<button class="g-button g-small-button g-disabled-three-button">three小按钮禁用</button>-->

      <button class="g-button g-big-radius-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three大按钮带圆角</button>
      <!--<button class="g-button g-big-radius-button g-disabled-three-button">three大按钮禁用带圆角</button>-->
      <button class="g-button g-mid-radius-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three中按钮带圆角</button>
      <!--<button class="g-button g-mid-radius-button g-disabled-three-button">three中按钮禁用带圆角</button>-->
      <button class="g-button g-small-radius-button g-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three小按钮带圆角</button>
      <!--<button class="g-button g-small-radius-button g-disabled-three-button">three小按钮禁用带圆角</button>-->
      <h1>按钮四</h1>
      <button class="g-button g-big-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮大按钮</button>
      <!--<button class="g-button g-big-button g-disabled-three-button">three大按钮禁用</button>-->
      <button class="g-button g-mid-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮中按钮</button>
      <!--<button class="g-button g-mid-button g-disabled-second-button">three中按钮禁用</button>-->
      <button class="g-button g-small-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮小按钮</button>
      <!--<button class="g-button g-small-button g-disabled-three-button">three小按钮禁用</button>-->

      <button class="g-button g-big-radius-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮大按钮带圆角</button>
      <!--<button class="g-button g-big-radius-button g-disabled-three-button">three大按钮禁用带圆角</button>-->
      <button class="g-button g-mid-radius-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮中按钮带圆角</button>
      <!--<button class="g-button g-mid-radius-button g-disabled-three-button">three中按钮禁用带圆角</button>-->
      <button class="g-button g-small-radius-button g-press-three-button"><i class="icon iconfont icon-dianhua"></i>&nbsp;three高亮小按钮带圆角</button>
      <!--<button class="g-button g-small-radius-button g-disabled-three-button">three小按钮禁用带圆角</button>-->
    </div>

  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'button'
      }
    },
    components: {
      Example
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .button-content {
    overflow-y: auto;
    height: 100%;
  }

  button, a {
    margin: .3rem auto;
  }
</style>

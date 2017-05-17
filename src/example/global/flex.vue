<template>
  <example :hdTitle="hdTitle">
    <div slot="main">
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
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  export default {
    data () {
      return {
        hdTitle: 'flex'
      }
    },
    components: {
      Example
    }
  }
</script>
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
</style>

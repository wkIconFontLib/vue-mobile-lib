<template>
<div>
  <h2>基础组件</h2>
  <div class="g-cells">
    <router-link :to="{ name: 'button' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">button</div>
      <div class="g-cell-ft">按钮<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'flex' }" class="g-cell g-cell-access">
      <div class="g-cell-bd">flex</div>
      <div class="g-cell-ft">布局<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'form' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">form</div>
      <div class="g-cell-ft">表单<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link  :to="{ name: 'icon' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">icon</div>
      <div class="g-cell-ft">图标<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'list' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">list</div>
      <div class="g-cell-ft">列表<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
  </div>
  <h2>扩展组件</h2>
  <div class="g-cells">
    <router-link :to="{ name: 'header' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">header</div>
      <div class="g-cell-ft">顶部<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'tabBar' }" class="g-cell g-cell-access" >
      <div class="g-cell-bd">tabBar</div>
      <div class="g-cell-ft">标签栏<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'search' }" class="g-cell g-cell-access">
      <div class="g-cell-bd">search</div>
      <div class="g-cell-ft">搜索<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
    <router-link :to="{ name: 'slider' }" class="g-cell g-cell-access">
      <div class="g-cell-bd">slider</div>
      <div class="g-cell-ft">轮播图<i class="icon iconfont icon-gengduo4"></i></div>
    </router-link>
  </div>
  <transition  name="custom-classes-transition"
               enter-active-class="animated bounceInRight"
               leave-active-class="animated bounceOutRight">
    <router-view></router-view>
  </transition>
</div>
</template>
<script type="text/babel">
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  // index
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
</style>

<template>
    <div id="app" class="container">
      <!-- 导航 -->
      <!-- 组件名称 -->
      <app-nav></app-nav>
      <!-- 左边列表 -->
    <div class="col-md-2">
      <div class="row">
        <app-slider></app-slider>
      </div>
    </div>

    <!-- 列表显示栏 -->
    <div class="col-md-10">
      <router-view></router-view>
    </div>

  </div>
    
</template>

<script>
  import appNav from './components/AppNav.vue'
  import appSlider from './components/Appslider.vue'
 
  export default {
    name:'app',
    components:{
      appNav,
      appSlider,
     
    }
  }
</script>

<style>

</style>

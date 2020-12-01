<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
     <tab-bar-item path="/find">
       <img slot="item-icon" src="./assets/img/tabbar/find.png" alt="">
       <img slot="item-icon-active" src="./assets/img/tabbar/find_bg_red.png" alt="">
       <div slot="item-text">发现</div>
     </tab-bar-item>
     <tab-bar-item path="/boke">
       <img slot="item-icon" src="./assets/img/tabbar/boke.png" alt="">
       <img slot="item-icon-active" src="./assets/img/tabbar/boke_bg_red.png" alt="">
       <div slot="item-text">播客</div>
     </tab-bar-item>
     <tab-bar-item path="/mine">
       <img slot="item-icon" src="./assets/img/tabbar/me.png" alt="">
       <img slot="item-icon-active" src="./assets/img/tabbar/me_bg_red.png" alt="">

       <div slot="item-text">我的</div>
     </tab-bar-item>
     <tab-bar-item path="/kge">
       <img slot="item-icon" src="./assets/img/tabbar/kge.png" alt="">
       <img slot="item-icon-active" src="./assets/img/tabbar/kge_bg_red.png" alt="">
       <div slot="item-text">K歌</div>
     </tab-bar-item>
     <tab-bar-item path="/yuncun">
       <img slot="item-icon" src="./assets/img/tabbar/yuncun.png" alt="">
       <img slot="item-icon-active" src="./assets/img/tabbar/yuncun_bg_red.png" alt="">
       <div slot="item-text">云村</div>
     </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>


    <!-- <img src="../../assets/img/tabbar/find.png" alt="">
     <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    data() {
      return {
        //isActive: true,
      }
    },
    methods:{
      itemClick(){
       this.$router.replace(this.path);
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color: #ccc;

  }

  .tab-bar-item img {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    vertical-align: middle !important;

  }

  .active {
    color: red;
  }
</style>

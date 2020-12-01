<template>
  <div id="tab-bar">
     <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
   /*  background-color:#fffff; */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 5px rgba(65, 96, 100, 0.2);
    background-color:white ;
  }


</style>

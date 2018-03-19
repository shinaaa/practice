<template>
  <div>
    <div class="title" v-if="isShow">
      <p style="cursor:pointer" @click="close">
        <img src="../../assets/img/close.jpg" alt="">
      </p>
      <p>
        <img src="../../assets/img/app_125_360_20170323.gif" alt="">
      </p>
      
    </div>
  </div>
</template>

<script>
  export default({
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      close(){
        this.isShow = false
      }
    }
  })
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    position:fixed;
    bottom:0;
    left:0;
    p:first-child{
        position: absolute;
        top:-0.93rem;
    }
  }
</style>
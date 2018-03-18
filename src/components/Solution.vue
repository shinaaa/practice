<template>
  <div>
    <p v-if="list.length==0" class="nothing">此厂商还未上传解决方案，敬请期待！</p>
    <div v-if="list.length>0"></div>
  </div>
</template>

<script>
  export default({
    data(){
      return {
        list:[]
      }
    }
  })
</script>

<style scoped>
  .nothing{
    width:100%;
    text-align:center;
    height:60px;
    line-height:60px;
    font-size:14px;
  }
</style>
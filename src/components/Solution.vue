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

<style scoped lang="less" rel="stylesheet/less">
  .nothing{
    width:100%;
    text-align:center;
    height:.6rem;
    line-height:.6rem;
    font-size:.14rem;
  }
</style>
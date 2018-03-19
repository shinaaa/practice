<template>
  <div>
    <ul class="list clear">
      <li v-for="(item,i) of list" :key="i" :class="showIdx==i?'list_item lf active':'list_item lf'" @click="changePage(item.path,i)">{{item.title+"("+item.count+")"}}</li>
    </ul>
    <Query></Query>
    <router-view class="route"></router-view>
    
  </div>
</template>
<script>
  import Query from '../components/common/Query.vue'
  export default({
    components:{Query},
    data(){
      return {
        list:[
          {title:'仪器',count:8,path:'/instrument',active:true},
          {title:'耗材配件',count:0,path:'/accessory',active:false},
          {title:'试剂标物',count:0,path:'/reagent',active:false},
          {title:'新品',count:0,path:'/new',active:false},
          {title:'品牌',count:1,path:'/brand',active:false},
          {title:'促销',count:0,path:'/sale',active:false}
        ],
        showIdx:0
      }
    },
    methods:{
      changePage(p,i){
        this.showIdx = i;
        this.$router.push(p)
      }
    }
  })
</script>

<style scoped lang="less" rel="stylesheet/less">
  .list_item{
    cursor: pointer;
    width:1.16rem;
    text-align:center;
    padding:.08rem 0;
    border-bottom:1px solid #D7D7D7;
    border-right:1px solid #D7D7D7;
    background:#F2F3F5;
    font-size:.14rem;
    font-weight:bold
  }
  .list_item:hover{
    color:#C90000
  }
  .active{
    background:#fff;
    border-bottom:none;
  }
  .route{
    min-height:.5rem;
  }
</style>
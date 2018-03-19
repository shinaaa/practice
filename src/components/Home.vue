<template>
  <div>
    <ul class="products clear">
        <li class="items lf" v-for="(item,i) in list" :key="i">
          <router-link tag="p" :to="{path:item.path}">
            <img :src="item.src" alt="">
          </router-link>
          <div class=""><a href="">{{item.title}}</a></div>
          <div><a href="">{{item.type}}</a></div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default({
    data(){
      return {
        list:[
          {
            src:require('../assets/img/home/C104388.jpg'),
            title:'Elab-TOC/DWT总有机碳分析仪',
            type:'型号：Elab-TOC/DWT',
            path: ''
          },
          {
            src:require('../assets/img/home/C104389.jpg'),
            title:'Elab-TOC/DT总有机碳分析仪',
            type:'型号：Elab-TOC/DT',
            path: ''
          },
          {
            src:require('../assets/img/home/C104390.jpg'),
            title:'Elab-TOC/WT总有机碳分析仪',
            type:'型号：Elab-TOC/WT',
            path: ''
          },
          {
            src:require('../assets/img/home/C110737.jpg'),
            title:'Elab9100S总硫元素分析仪',
            type:'型号：Elab9100S',
            path: ''
          },
          {
            src:require('../assets/img/home/C110741.jpg'),
            title:'Elab9100N总氮元素分析仪',
            type:'型号：Elab9100N',
            path: ''
          },
          {
            src:require('../assets/img/home/C110743.jpg'),
            title:'Elab-TOC总有机碳分析仪',
            type:'型号：Elab-TOC'
          }
        ]
      }
    }
  })
</script>

<style scoped lang="less" rel="stylesheet/less">
  
  .items{
    margin:.2rem .25rem;
    width:1.7rem;
    p{
      display:table-cell;
      border:1px solid #ddd;
      padding:.05rem;
      text-align:center;
      cursor: pointer;

      img{
        vertical-align:middle;
      }
     
    }
    div{
      margin:.05rem 0 0 0;
      font-size:.12rem;
      text-align:center;
      a{
        color:#666;
        &:hover{
          color:#CC0000
        }
      }
    }
  }
  
</style>
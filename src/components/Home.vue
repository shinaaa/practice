<template>
  <div>
    <ul class="products clear">
        <li class="pro-items" v-for="(item,i) in list" :key="i">
          <router-link tag="p" :to="{path:item.path}">
            <img :src="item.src" alt="">
          </router-link>
          <p><a href="">{{item.title}}</a></p>
          <p><a href="">{{item.type}}</a></p>
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

<style scoped>
  .pro-items{
    float:left;
    margin:20px 25px;
    width:170px;
  }
  .pro-items a{
    font-size:12px;

  }
  .pro-items p:first-child{
    border:1px solid #ddd;
    padding:5px;
    text-align:center;
    cursor: pointer;
  }
  .pro-items p:nth-child(2),.pro-items p:last-child{
    text-align:center
  }
  .pro-items p:nth-child(2)>a:hover,.pro-items p:last-child>a:hover{
    color:#CC0000
  }
</style>
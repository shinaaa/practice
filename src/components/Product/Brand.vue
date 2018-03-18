<template>
  <div class="main">
    <div class="list clear" v-for="(item,i) of list" :key="i">
      <div class="img lf">
        <img :src="item.src" alt="">
      </div>
      <div class="lf">
        <h3 style="font-weight:normal;margin-left:5px">{{item.title}}</h3>
        <table>
          <tr>
            <td>仪器总共有：<span>{{item.instrument}}</span> 台</td>
            <td>耗材配件总共有：<span>{{item.accessory}}</span> 台</td>
            <td>试剂标物总共有：<span>{{item.reagent}}</span> 台</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default({
    data(){
      return {
        list:[
          {
            src:require('../../assets/img/products/005128498.jpg'),
            title:'(江苏) 埃兰/Elab',
            instrument:8,
            accessory:0,
            reagent:0
          }
        ]
      }
    }
  })
</script>

<style scoped>
  .main{
    padding:20px 30px;
  }
  table{
    font-size:12px;
    margin:5px 0;
  }
  table td{
    padding:0 8px;
  }
  .list{
    padding:10px;
    margin:10px 0;
    border-bottom:1px solid #ddd
  }
  td>span{
    color:#E0513F;
  }
</style>
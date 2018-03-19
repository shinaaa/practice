<template>
  <div class="main">
    <div class="list clear" v-for="(item,i) of list" :key="i">
      <img :src="item.src" alt="" class="lf">
      <div class="lf">
        <h3 style=";">{{item.title}}</h3>
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

<style scoped lang="less" rel="stylesheet/less">
  .main{
    padding:.1rem .3rem;

    .list{
      padding:.1rem;
      margin:.1rem 0;
      border-bottom:1px solid #ddd;
      h3{
        font-size:.22rem;
        font-weight:normal;
        margin-left:.05rem;
      }
      table{
        font-size:.12rem;
        margin:.05rem 0;
        td{
          padding:0 .08rem;

          span{
            color:#E0513F;
          }
        }
      }
    }
  } 
</style>
<template>
  <div class="main">
    <div class="list clear" v-for="(item,i) of list" :key="i">
      <div class="img lf">
        <img :src="item.src" alt="">
      </div>
      <div class="right lf">
        <h3 style="font-weight:normal;margin-left:10px">{{item.title}}</h3>
        <table>
          <tr>
            <td>参考报价：<span style="color:#D8513E">{{item.price}}</span></td>
            <td>型号：<span>{{item.type}}</span></td>
          </tr>
          <tr>
            <td>品牌：<span>{{item.brand}}</span></td>
            <td>产地：<span>{{item.place}}</span></td>
          </tr>
          <tr>
            <td>信息完整度：
              <img src="../../assets/img/products/star_red.gif" alt="">
              <img src="../../assets/img/products/star_red.gif" alt="">
              <img src="../../assets/img/products/star_half.gif" alt="">
              <img src="../../assets/img/products/star_gray.gif" alt="">
              <img src="../../assets/img/products/star_gray.gif" alt="">
            </td>
          </tr>
        </table>
        <a href="" style="font-size:12px">一键咨询</a>
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
            src:require('../../assets/img/products/58ce250ccd88.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/68018a08d8fc.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C104388.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C104389.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C104390.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C110737.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C110741.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
          {
            src:require('../../assets/img/products/C110743.jpg'),
            title:'Elab5600N总氮元素分析仪',
            price:'面议',
            type:'Elab5600N',
            brand:'埃兰',
            place:'江苏'
          },
        ]
      }
    }
  })
</script>

<style scoped>
  .main{
    padding:10px 20px;
  }
  .list{
    padding:15px 0;
    border-bottom:1px solid #ddd;
  }
  table{
    font-size:12px;
    margin:0 0 0 10px;
  }
  td{
    color:#666
  }
  td>span{
    color:#000
  }
  td{
    width:240px;
    padding:3px 0;
  }
  td>img{
    transform:translateY(2px);
  }
  .right{
    position:relative
  }
  .right>a{
    position:absolute;
    right:50px;
    width:85px;
    height:23px;
    line-height:23px;
    text-align:center;
    color:#fff;
    border-radius:3px;
    background:linear-gradient(to bottom,#6CC3FE,#59B4F2)
  }
  .right>a:hover{
    background:linear-gradient(to bottom,#4EAEFD,#2F8FED)
  }
</style>
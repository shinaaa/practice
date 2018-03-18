<template>
  <div class="query">
    <img src="../../assets/img/bee.gif" alt="" class="bee">
    <div class="ask" @click="showQuery">
      我要咨询<img :src="src" alt="">
    </div>
    <form action="" :class="isShow?'down show':'down'">
      <div>
        
        <label><span style="color:#FB7C4C">*</span>留言类型：</label>
        <input type="radio" name="msgtype" checked>采购咨询
        <input type="radio" name="msgtype">售后咨询
        <p style="color:#FB7C4C;font-size:12px;transform:translateX(90px)">
          (提示：请选择您的留言类型)
        </p>
      </div>
      <div>
        
        <label><span style="color:#FB7C4C">*</span>联系人：</label>
        <input type="text" name="person" class="ipt">
      </div>
      <div>
        
        <label><span style="color:#FB7C4C">*</span>联系电话：</label>
        <input type="tel" name="phone" class="ipt">
      </div>
      <div>
        
        <label><span style="color:#FB7C4C">*</span>电子邮箱：</label>
        <input type="email" name="email" class="ipt">
      </div>
      <div>
        
        <label><span style="color:#FB7C4C">*</span>单位名称：</label>
        <input type="text" name="company" class="ipt">
      </div>
      <div>
        
        <label><span style="color:#FB7C4C">*</span>联系地址：</label>
        <input type="text" name="address" class="ipt">
      </div>
      <div>
        <label>职位：</label>
        <input type="text" name="duty" class="ipt">
      </div>
      <div>
        <label>传真：</label>
        <input type="text" name="fax" class="ipt">
      </div>
      <div style="line-height:100%">
        
        <label style="transform:translateY(-40px)"><span style="color:#FB7C4C">*</span>留言内容：</label>
        <textarea name="msgcontent" id="" cols="19" rows="4" style=""></textarea>
      </div>
      <div>
        <label></label>
        <input type="checkbox" name="getmore" style="transform:translateY(2px)">获取更多优质厂商精准报价
      </div>
      <div>
        <label></label>
        <button class="btn">发送留言</button>
      </div>
      <div>
        <label></label>
        <a href="">发布更多采购信息>>></a>
      </div>
    </form>
  </div>
</template>

<script>
  export default({
    data(){
      return {
        src:require('../../assets/img/down.png'),
        isShow:true
      }
    },
    methods:{
      showQuery(){
        if(this.src==require('../../assets/img/up.png')){
          this.src=require('../../assets/img/down.png');
          this.isShow = true

        }else{
          this.src=require('../../assets/img/up.png');
          this.isShow = false
        }
      }
    },
    mounted(){
      this.src=require('../../assets/img/up.png');
      this.isShow = false
    }
  })
</script>

<style scoped>
  .query{
    width:320px;
    position:fixed;
    right:0;
    bottom:0px;
    z-index:100;
  }
  .ask{
    cursor: pointer;
    width:100%;
    height:30px;
    border-radius:3px;
    color:#fff;
    text-align:center;
    line-height:30px;
    font-size:14px;
    background:linear-gradient(to bottom,#DE6858,#DA513F)
    
  }
  .ask:hover{
    background:linear-gradient(to bottom,#CF4234,#DA513F);
  }
  .ask>img{
    vertical-align:middle;
  }
  .bee{
    position:absolute;
    width:75px;
    top:-75px;
    right:0;
  }
  .down{
    width:100%;
    height:0px;
    background:#F1F3F5;
    overflow:hidden;
    font-size:14px;
    transition:height .3s linear;
  }
  .show{
    height:500px;
    transition:height .3s linear;
    border:1px solid #D7D7D7;
    padding:10px 0 0 20px;
  }
  .down>div{
    margin:10px 0
  }
  label{
    display:inline-block;
    width:84px;
    text-align:right;
  }
  .ipt{
    width:190px;
    height:25px;
    padding:0 3px;
    border-radius:3px;
    border:1px solid #D7D7D7;
    outline:none;
  }
  textarea{
    width:190px;
    padding:3px;
    border-radius:3px;
    border:1px solid #D7D7D7;
    outline:none;
    resize: none
  }
  .ipt:focus,textarea:focus{
    border:1px solid #9FC2FA
  }
  .btn{
    width:75px;
    height:28px;
    background:linear-gradient(to bottom,#DE6858,#DA513F);
    color:#fff;
    line-height:28px;
    text-align:center;
    border:none;
    border-radius:3px;
    outline:none;
    cursor: pointer;
  }
  .btn:hover{
    background:linear-gradient(to bottom,#CF4234,#DA513F);
  }
</style>
<template>
   <div>
    <div class="container">
      <div class="top">
        <div class="title">苏州埃兰分析仪器有限公司</div>
        <div class="tel">
          <p>400-860-5168转1950</p>
          <p>仪器信息网认证，请放心拨打</p>
        </div>
      </div>
    </div>
    <nav>
      <div class="container">
        <ul class="clear">
          <li v-for="(item,i) in navList" class="nav-item lf" :key="i" @click="changePage(item.path,i)">{{item.item}}</li>
        </ul>
      </div>
    </nav>
    <div class="box">
      <div class="container clear">
        <div class="left lf">
          <h3 class="member"><i></i>仪信通铜牌会员 第 <span>8</span> 年</h3>
          <div class="left1">
            <p>
              仪器信息网认证，请放心拨打
            </p>
            <div>
              400-860-5168转1950
            </div>
            <ul>
              <li>
                <span>名&nbsp;&nbsp;&nbsp;&nbsp;称：</span>
                <span style="color:black;font-weight:bold">苏州埃兰分析仪器有限公司</span>
              </li>
              <li>
                <span>认&nbsp;&nbsp;&nbsp;&nbsp;证：</span>
                <span style="color:black">工商信息已核实</span>
              </li>
              <li>
                <span>信用积分：</span>
                <span style="color:#DA513E">2300</span>
              </li>
            </ul>
            <img src="../assets/img/quee.gif" alt="">
          </div>
          <div class="left2">
            <h4>厂商反馈速度 <b>超过24</b> 小时</h4>
          </div>         
          <Aside :ulList="ulList1"></Aside>
          <Aside :ulList="ulList2"></Aside>
          <Aside :ulList="ulList3"></Aside>
          <div class="side">
            <h3 class="side-title">苏州埃兰手机版</h3>
            <img src="../assets/img/erweima.png" alt="">
          </div>
        </div>
        <div class="right lf">
          <div class="bg">
            <h3>{{navList[nowIdx].param}}</h3>
            <router-link tag="a" :to="{path:'/'}">更多...</router-link>
          </div>
          <div class="bottom">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <Sidebar></Sidebar>
    <div class="foot">
      仪器信息网 <a href="http://www.instrument.com.cn/">http://www.instrument.com.cn/</a> 设计制作
    </div>
    
  </div>
</template>

<script>
  import Sidebar from '@/components/common/Sidebar'
  import Aside from '@/components/common/Aside'

  export default({
    components:{Sidebar,Aside},
    data(){
      return {
        navList:[
          {item:'首页',path:'/',param:'推荐仪器'},
          {item:'公司简介',path:'/about',param:'公司简介'},
          {item:'产品中心',path:'/product',param:'产品中心'},
          {item:'解决方案',path:'/solution',param:'解决方案'},
          {item:'资质荣誉',path:'/honor',param:'工商注册信息'},
          {item:'资料中心',path:'/material',param:'资料中心'},
          {item:'媒体关注',path:'/media',param:'媒体关注'},
          {item:'访客留言',path:'/visitor',param:'访客留言'},
          {item:'联系我们',path:'/contact',param:'联系我们'},
        ],
        nowIdx:0,
        ulList1:[
          {
            title:'苏州埃兰产品分类',
            list:[
              {name:'TOC分析仪/总有机碳分析仪',path:'/'},
              {name:'硫氮分析仪',path:'/'}
            ]
          }
        ],
        ulList2:[
          {
            title:'品牌',
            list:[
              {name:'（江苏）埃兰/Elab',path:'/'}
            ]
          }
        ],
        ulList3:[
          {
            title:'友情链接',
            list:[
              {name:'苏州埃兰分析仪器有限公司',path:'/'},
              {name:'仪器信息网',path:'/'},
              {name:'仪器展',path:'/'},
              {name:'仪器论坛',path:'/'},
              {name:'仪器人才',path:'/'}
            ]
          }
        ]
      }
    },
    methods:{
      changePage(p,i){
        this.$router.push(p)
        this.nowIdx = i;
      }
    }
  })
</script>

<style scoped>
  .top{
    position:relative;
    min-height:60px;
    margin:20px 0 20px 0;
  }
  .title{
    position:absolute;
    font-size:28px;
   padding:0 0 0 10px; 
  }
  .tel{
    position:absolute;
    /* top:-10px; */
    right:0
  }
  .tel :first-child{
    font-size:24px;
    padding:0 0 5px 30px;
    color:#DA513F; 
    background:url('../assets/img/tel.gif') no-repeat center left
  }
  .tel :last-child{
    text-align:center;
    font-size:12px;
    color:#999;
  }
  nav{
    width:100%;
    background:#0B6AB3;
    /* margin:0 0 20px 0; */
  }
  .nav-item{
    color:#fff;
    padding:10px;
    cursor: pointer;
  }
  .nav-item:hover{
    background:#4AA4E2
  }
  .box{
    width:100%;
    background:#F1F3F5;
  }
  .left{
    width:240px;
  }
  .member{
    margin:0 0 10px 0;
  }
  .member>i{
    display:inline-block;
    width:30px;
    height:38px;
    background:url('../assets/img/step32.gif') no-repeat -130px;
    transform:translatey(12px);
    margin:0 3px 0 0;
  }
  .left1,.left2{
    border:1px solid #D7D7D7;
    padding:10px;
    background:#fff;
    position:relative;
    margin:10px 0;
  }
  .left1>p{
    color:#666;
    font-size:12px;
    height:40px;
    background:url('../assets/img/tel2.gif') no-repeat left center/20%;
    padding:0 0 0 48px;
    line-height:40px;
  }
  .left1>div:nth-child(2){
    color:#0078B6;
    font-size:22px;
  }
  .left1>ul{
    font-size:12px;
  }
  .left1>ul>li{
    margin:10px 0 10px 0;
  }
  .left1>img{
    position:absolute;
    bottom:15px;
    right:3px;
  }
  .left2>h4{
    color:#F48408;
    text-align:center;
  }
  .left2>h4>b{
    font-size:1.1em;
  }
  .side{
    margin:15px 0;
  }
  .side>h3{
    margin:10px 0;
    padding:3px 10px;
    border-left:4px solid #1C5DA5
  }
  .side>ul{
    border-top:2px solid #ddd;
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    background:#fff;
  }
  .side>ul>li{
    cursor: pointer;
    padding:6px 25px;
    background:url('../assets/img/learr.gif') no-repeat 0 -30px;
    border-bottom:1px solid #ddd;
    font-size:12px;
  }
  .side>ul>li:hover{
    background:url('../assets/img/learr.gif') no-repeat 0 -1px;
    background-color:#E3F5FF;
    color:#1C5DA5
  }
  .foot{
    text-align:center;
    font-size:12px;
    background:#C6C8CC;
    padding:10px 0;
    color:#666;
  }
  .right{
    margin:20px 0 0 20px;
    width:700px
  }
  .bg{
    width:100%;
    height:40px;
    background:url('../assets/img/lbnbg.gif') no-repeat;
    position:relative;
  }
  .bg>h3{
    color:#fff;
    position:absolute;
    font-weight:normal;
    top:8px;
    left:20px;
  }
  .bg>a{
    position:absolute;
    bottom:5px;
    font-size:14px;
    color:#222;
    right:0;
  }
  .bottom{
    width:100%;
    background:#fff;
    border:1px solid #ddd;
    border-top:none;
  }
</style>
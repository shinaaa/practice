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
            <h3 class="side_title">苏州埃兰手机版</h3>
            <img src="../assets/img/erweima.png" alt="">
          </div>
        </div>
        <div class="right lf">
          <div class="bg">
            <h3>{{navList[nowIdx].param}}</h3>
            <router-link tag="a" :to="{path:'/'}" v-if="nowIdx==0">更多...</router-link>
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

<style scoped lang="less" rel="stylesheet/less">
  .top{
    position:relative;
    min-height:.6rem;
    margin:.2rem 0 .2rem 0;
  }
  .title{
    position:absolute;
    font-size:.28rem;
   padding:0 0 0 .1rem; 
  }
  .tel{
    position:absolute;
    right:0
  }
  .tel{
    & :first-child{
      font-size:.24rem;
      padding:0 0 .05rem .3rem;
      color:#DA513F; 
      background:url('../assets/img/tel.gif') no-repeat center left
    }
    & :last-child{
      text-align:center;
      font-size:.12rem;
      color:#999;
    }
  }
  nav{
    width:100%;
    background:#0B6AB3;

    .nav-item{
      color:#fff;
      padding:.10rem;
      font-size:.16rem;
      cursor: pointer;
    }
    .nav-item:hover{
      background:#4AA4E2
    }
  }
  
  .box{
    width:100%;
    background:#F1F3F5;
  }
  .left{
    width:2.4rem;
  }
  .member{
    margin:0 0 .1rem 0;
    font-size:.17rem;

    >i{
      display:inline-block;
      width:.3rem;
      height:.38rem;
      background:url('../assets/img/step32.gif') no-repeat -0.62rem .05rem;
      transform:translatey(.12rem);
      margin:0 .1rem 0 0;
    }
  }
  .left1,.left2{
    border:1px solid #D7D7D7;
    padding:10px;
    background:#fff;
    position:relative;
    margin:.1rem 0;
  }
  .left1{
    >p{
      color:#666;
      font-size:.12rem;
      height:.4rem;
      background:url('../assets/img/tel2.gif') no-repeat left center/20%;
      padding:0 0 0 .48rem;
      line-height:.4rem;
    }
    >div:nth-child(2){
      color:#0078B6;
      font-size:.22rem;
    }
    >ul{
      font-size:.12rem;
      >li{
        margin:.1rem 0 .1rem 0;
      }
    }
    >img{
      position:absolute;
      bottom:.15rem;
      right:.03rem;
    }
  }

  .left2{
    >h4{
      color:#F48408;
      text-align:center;
      font-size:.16rem;

      >b{
        font-size:.2rem;
      }
    }
  }
  .side{
    margin:.15rem 0;

    >.side_title{
      margin:.1rem 0;
      padding:.03rem .1rem;
      font-size:.18rem;
      border-left:.04rem solid #1C5DA5
    }
    >ul{
      border-top:.02rem solid #ddd;
      border-left:.01rem solid #ddd;
      border-right:.01rem solid #ddd;
      background:#fff;

      >li{
        cursor: pointer;
        padding:6px 25px;
        background:url('../assets/img/learr.gif') no-repeat 0 -0.3rem;
        border-bottom:1px solid #ddd;
        font-size:12px;

        &:hover{
          background:url('../assets/img/learr.gif') no-repeat 0 -.01rem;
          background-color:#E3F5FF;
          color:#1C5DA5
        }
      }
    }
  }

  .foot{
    text-align:center;
    font-size:.12rem;
    background:#C6C8CC;
    padding:.10rem 0;
    color:#666;
    a{
      color:#666;
    }
  }

  .right{
    margin:.2rem 0 0 .2rem;
    width:7rem;

    h3{
      font-size:.18rem;
    }
    .bg{
      width:100%;
      height:.4rem;
      background:url('../assets/img/lbnbg.gif') no-repeat;
      position:relative;

      >h3{
        color:#fff;
        position:absolute;
        font-weight:normal;
        top:.08rem;
        left:.20rem;
      }
      >a{
        position:absolute;
        bottom:.05rem;
        font-size:.14rem;
        color:#222;
        right:0;
        color:#666;
      }
    }
    .bottom{
      width:100%;
      background:#fff;
      border:.01rem solid #ddd;
      border-top:none;
    }
  }
  
  
</style>
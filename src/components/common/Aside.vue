<template>
  <div class="side">
    <h3 class="side_title">{{ulList[0].title}}</h3>
    <ul>
      <router-link tag="li" v-for="(item,i) in ulList[0].list" :key="i" :to="{path:item.path}" >
        {{item.name}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default({
    props: {
      ulList: {
        type: Array,
        default: []
      },
    },
    data(){
      return {

      }
    },
    methods:{

    },
    created(){
      console.log(this.ulList)
    }
  })
</script>

<style scoped lang="less" rel="stylesheet/less">
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
        padding:.06rem .25rem;
        background:url('../../assets/img/learr.gif') no-repeat 0 -0.3rem;
        border-bottom:.01rem solid #ddd;
        font-size:.12rem;

        &:hover{
          background:url('../../assets/img/learr.gif') no-repeat 0 -0.01rem;
          background-color:#E3F5FF;
          color:#1C5DA5
        }
      }
    }
  }
</style>
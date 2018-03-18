<template>
  <div class="side">
    <h3 class="side-title">{{ulList[0].title}}</h3>
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

<style scoped>
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
    background:url('../../assets/img/learr.gif') no-repeat 0 -30px;
    border-bottom:1px solid #ddd;
    font-size:12px;
  }
  .side>ul>li:hover{
    background:url('../../assets/img/learr.gif') no-repeat 0 -1px;
    background-color:#E3F5FF;
    color:#1C5DA5
  }
</style>
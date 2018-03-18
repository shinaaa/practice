<template>
  <div class="out">
    <div class="lf">
      <img src="../assets/img/about/SH101950.jpg" alt="">
    </div>
    <p>
      苏州埃兰分析仪器有限公司坐落于风景如画的长江三角洲地区的地理中心，太湖之滨的苏州。是精密分析仪器的制造商，主要从事分析仪器的研发、制造、销售及售后服务。
    </p>
    <p>
       苏州埃兰分析仪器有限公司是目前国内率先独立研发、生产出符合国际标准ISO8245、中华人民共和国国家环境保护标准HJ501-2009、中华人民共和国国家计量检定规程 JJG 821-2005和2010年中国药典的TOC总有机碳分析仪生产厂家。填补了国内高温燃烧氧化-非色散红外法测定总有机碳的空白。Elab系列总有机碳分析仪具有测定线性范围宽、灵敏度高、重现性好等特点，适合测定电子行业用水、电厂用水、医药用水、饮用水、地表水、污水及垃圾土壤中的总有机碳和总氮含量。
    </p>
    <p>
      公司独立研制、开发生产的Elab9100、Elab7100及Elab5500系列总硫总氮元素分析仪已获得6项国家专利，在世界上首次发明了使用一种进样模式测定所有形态（所有沸点范围）样品的装置，检测器超高的灵敏度和系统测定痕量样品的优良重现性、稳定性使我国的总硫总氮测定水平首次处于世界的前列。
    </p> 
    <p>
      公司以“格守质量保证，持久提供优质产品”为质量方针，通过了ISO9001：2008质量管理体系认证，并严格实施ERP管理。公司产品以其卓越的产品性能、完善的售后服务体系已在全国石油、化工、制药、质检、大学、地质、环保、科研院所及其他领域得到迅速推广，并赢得了用户的一致好评。 
    </p>
    <p>
      我们将不懈努力，不断创新，以更先进的产品和更完美的服务来满足各行各业客户的需求！
    </p>
    <Query></Query>
  
  </div>
</template>

<script>
  import Query from '../components/common/Query.vue'
  export default({
    components:{Query},
    data(){
      return {
        title:''
      }
    },
    created(){
      this.title = this.$route.params.title
    }
  })
</script>

<style scoped>
  .out{
    padding:20px;
  }
  .out>div:first-child{
    padding:5px;
    border:1px solid #ddd;
    margin:10px;
  }
  .out>p{
    margin:5px;
  }
</style>
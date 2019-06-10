<template>
    <div id="hl-home">
        <div class="hl-top">
            <div class="hl-top-left">
                <i class="el-icon-s-fold"></i>
            </div>
            <div class="hl-top-logo">
                <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png">
            </div>
            <div class="hl-top-right">
                登录
            </div>
        </div>
        <div class="hl-carousel">
            <el-carousel height="150px">
                <el-carousel-item v-for="(item,index) in carousel" :key="index">
                    <img src="https://img02.hua.com/slider/18_shuangzi_m.jpg" alt="星座">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            carousel:{
                img1:""
            }
        }
    }
}
</script>
<style scoped>
    .hl-top{
        height: 95px;
        background: #435448;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        line-height: 95px;
        font-size:30px;
        color:#fff;
    }
    .hl-top .hl-top-left i{
        font-size: 60px;
        color:#fff;
    }
    .hl-top .hl-top-logo img{
        width: 300px;
        vertical-align: middle;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>

<template>
  <body background="/static/BackGround/bk1.jpg"
  style=" background-repeat:no-repeat ;
background-size:100% 100%; 
background-attachment:fixed;" >
  <br/><br/><br/><br/><br/>
  <el-carousel :interval="4000" type="card" height="450px">
    <el-carousel-item class="carousel__item" v-for="item in 1" :key="item">
      <h4 align="middle"><h8 align="middle">电信学院学生会素拓</h8><br/><img src="/static/HUST/SuTuo.jpg" class="image"></h4>
    </el-carousel-item>
    <el-carousel-item class="carousel__item" v-for="item in 1" :key="item">
      <h4 align="middle"><h8 align="middle">电信学院第四次学代会</h8><br/><img src="/static/HUST/XueDaiHui2.jpg" class="image"></h4>
    </el-carousel-item>
    <el-carousel-item class="carousel__item" v-for="item in 1" :key="item">
      <h4 align="middle"><h8 align="middle">种子杯软件编程pk赛</h8><br/><img src="/static/HUST/SeedCup.jpg" class="image"></h4>
    </el-carousel-item>
    <el-carousel-item class="carousel__item" v-for="item in 1" :key="item">
      <h4 align="middle"><h8 align="middle">电信学院足球新生队</h8><br/><img src="/static/HUST/ZuQiu.jpg" class="image"></h4>
    </el-carousel-item>
    <el-carousel-item class="carousel__item" v-for="item in 1" :key="item">
      <h4 align="middle"><h8 align="middle">小红帽志愿服务队</h8><br/><img src="/static/HUST/XiaoHongMao.png" class="image"></h4>
    </el-carousel-item>
  </el-carousel>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </body>
</template>

<script>
    export default {
        name: "display"
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .carousel__item{
    width: 200px;
    height: auto;
  }
  .carousel__item img{
    width: 100%;
    display: block;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  @media all and (min-width: 330px)and (max-width: 420px){
    .carousel__item{
      width: 240px;
      height: auto;
    }
  }

  @media all and (min-width: 420px)and (max-width: 800px){
    .carousel__item{
      width: 380px;
      height: auto;
    }
  }
  @media all and (min-width: 800px){
    .carousel__item{
      width: 560px;
      height: auto;
    }
  }

</style>

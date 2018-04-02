<template>
  <div>
    <body background="/static/BackGround/bk13.jpg"
    style=" background-repeat:no-repeat ;
background-size:100% 100%;
background-attachment:fixed;" >
    <el-row class="row" id="card">
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('KeXieJiShuBu')"><img src="/static/Department/AST.jpg" class="image">科协技术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('KeXieSaiShiBu')"><img src="/static/Department/AST.jpg" class="image">科协赛事部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('XiaoHongMao')"><img src="/static/Department/xiaohongmao.gif" class="image">小红帽</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XinWenZhongXin')"><img src="/static/Department/news.gif" class="image">新闻中心</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('BanGongShi')"><img src="/static/Department/office.gif" class="image">办公室</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('LiYiDui')"><img src="/static/Department/liyi.gif" class="image">礼仪队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('BianLunDui')"><img src="/static/Department/bianlun.gif" class="image">辩论队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('ZhuChiRenDui')"><img src="/static/Department/zhuchi.gif" class="image">主持人队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('WenYiBu')"><img src="/static/Department/wenyi.gif" class="image">文艺部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('XueShuBu')"><img src="/static/Department/xueshu.gif" class="image">学术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('WaiLianBu')"><img src="/static/Department/wailian.gif" class="image">外联部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('NvShengBu')"><img src="/static/Department/nvsheng.gif" class="image">女生部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('QuanYiBu')"><img src="/static/Department/quanyi.gif" class="image">权益部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('QiMingShuWu')"><img src="/static/Department/qiming.gif" class="image">启明书屋</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('ZuZhiBu')"><img src="/static/Department/zuzhi.gif" class="image">组织部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XinLiBu')"><img src="/static/Department/xinli.jpg" class="image">心理部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('SheHuiShiJianBu')"><img src="/static/Department/sheshi.gif" class="image">社会实践部</span>
        </div>
      </el-card>


      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <br/>
          <span v-on:click="handleCard('XuanChuanBu')"><img src="/static/Department/xuanchuan.gif" class="image">宣传部</span>
        </div>
      </el-card>


    </el-row><br/><br/><br/><br/>
    </body>
  </div>
</template>


<script>
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {ElRow},
    data() {
      return {

      };
    },
    created: function(){
      this.$router.push('');
    },
    methods: {
      handleCard:function (key) {
        switch (key) {
          case 'KeXieJiShuBu':
            this.$router.push('/KeXieJiShuBu');
            break;
          case 'KeXieSaiShiBu':
            this.$router.push('/KeXieSaiShiBu');
            break;
          case 'XiaoHongMao':
            this.$router.push('/XiaoHongMao');
            break;
          case 'XinWenZhongXin':
            this.$router.push('/XinWenZhongXin');
            break;
          case 'BanGongShi':
            this.$router.push('/BanGongShi');
            break;
          case 'LiYiDui':
            this.$router.push('/LiYiDui');
            break;
          case 'BianLunDui':
            this.$router.push('/BianLunDui');
            break;
          case 'ZhuChiRenDui':
            this.$router.push('/ZhuChiRenDui');
            break;
          case 'WenYiBu':
            this.$router.push('/WenYiBu');
            break;
          case 'XueShuBu':
            this.$router.push('/XueShuBu');
            break;
          case 'WaiLianBu':
            this.$router.push('/WaiLianBu');
            break;
          case 'NvShengBu':
            this.$router.push('/NvShengBu');
            break;
          case 'QuanYiBu':
            this.$router.push('/QuanYiBu');
            break;
          case 'QiMingShuWu':
            this.$router.push('/QiMingShuWu');
            break;
          case 'ZuZhiBu':
            this.$router.push('/ZuZhiBu');
            break;
          case 'XinLiBu':
            this.$router.push('/XinLiBu');
            break;
          case 'SheHuiShiJianBu':
            this.$router.push('/SheHuiShiJianBu');
            break;
          case 'XuanChuanBu':
            this.$router.push('/XuanChuanBu');
            break;
          default:
            this.$router.push('/Home');
        }
        console.log(key)
      }
    }
  }

</script>

<style scoped>
  .card{
    font-size: small;
    border-radius: 10px;
    margin: 3%;
    width:26%;
    height: 110px;
    float: left;
  }

  .image {
    width: 100%;
    border-bottom: 1em;
    display: block;
  }

  @media all and (min-width: 330px)and (max-width: 420px){
    .card{
      font-size: small;
      border-radius: 15px;
      margin: 3%;
      width:26%;
      height: 120px;
      float: left;
    }
  }

  @media all and (min-width: 420px)and (max-width: 500px){
    .card{
      font-size: small;
      border-radius: 15px;
      margin: 3%;
      width:  18%;
      height: 110px;
      float: left;
    }
  }

  @media all and (min-width: 500px)and (max-width: 633px){
    .card{
      font-size: small;
      border-radius: 15px;
      margin: 3%;
      width:  18%;
      height: 130px;
      float: left;
    }
  }
  @media all and (min-width: 633px)and (max-width: 800px){
    .card{
      font-size: medium;
      border-radius: 15px;
      margin: 4%;
      width:  15%;
      height: 130px;
      float: left;
    }
  }
  @media all and (min-width: 800px){
    .card{
      font-size: medium;
      border-radius: 20px;
      margin: 50px;
      width:110px;
      height: 130px;
      float: left;
    }
  }

</style>

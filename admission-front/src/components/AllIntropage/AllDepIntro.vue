<template>
  <div>
    <el-row class="row" id="card">

      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('KeXieJiShuBu')"><img src="/static/AST.jpg" class="image">科协技术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('KeXieSaiShiBu')"><img src="/static/AST.jpg" class="image">科协赛事部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XiaoHongMao')"><img src="/static/AST.jpg" class="image">小红帽</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XinWenZhongXin')"><img src="/static/AST.jpg" class="image">新闻中心</span>
        </div>
      </el-card>   

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('BanGongShi')"><img src="/static/AST.jpg" class="image">办公室</span>
        </div>
      </el-card>  

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('LiYiDui')"><img src="/static/AST.jpg" class="image">礼仪队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('BianLunDui')"><img src="/static/AST.jpg" class="image">辩论队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('ZhuChiRenDui')"><img src="/static/AST.jpg" class="image">主持人队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('WenYiBu')"><img src="/static/AST.jpg" class="image">文艺部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XueShuBu')"><img src="/static/AST.jpg" class="image">学术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('WaiLianBu')"><img src="/static/AST.jpg" class="image">外联部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('NvShengBu')"><img src="/static/AST.jpg" class="image">女生部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('QuanYiBu')"><img src="/static/AST.jpg" class="image">权益部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('QiMingShuWu')"><img src="/static/AST.jpg" class="image">启明书屋</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('ZuZhiBu')"><img src="/static/AST.jpg" class="image">组织部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XinLiBu')"><img src="/static/AST.jpg" class="image">心理部</span>
        </div>
      </el-card>                          

      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('SheHuiShiJianBu')"><img src="/static/AST.jpg" class="image">社会实践部</span>
        </div>
      </el-card> 


      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('XuanChuanBu')"><img src="/static/AST.jpg" class="image">宣传部</span>
        </div>
      </el-card>    


    </el-row>
  </div>
</template>


<script>
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {ElRow},
    data() {
      return {
          images:[{src:"./static/AST.jpg"}]
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
    border-radius: 20px;
    margin: 60px;
    width:110px;
    height: 130px;
    float: left;
  }
  .bottom {
    margin-bottom: 0;
    margin-right: 0;
    line-height: 10px;
  }
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:after {
    clear: both
  }
</style>

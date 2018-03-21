<template>
  <div>
    <el-row class="row" id="card">

      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div style="padding: 6px;text-align:center;">
          <span v-on:click="handleCard('KeXie')"><img src="/static/AST.jpg" class="image">科协技术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>科协赛事部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>小红帽</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>新闻中心</span>
        </div>
      </el-card>   

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>办公室</span>
        </div>
      </el-card>  

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>礼仪队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>辩论队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>主持人队</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>文艺部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>学术部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>外联部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>女生部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>权益部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>启明书屋</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>组织部</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>心理部</span>
        </div>
      </el-card>                          

      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>社会实践部</span>
        </div>
      </el-card> 


      <el-card :body-style="{ padding: '10px' }" class="card">
        <img src="" class="image">
        <div style="padding: 6px;text-align:center;">
          <span>宣传部</span>
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
          case 'KeXie':
            this.$router.push('/KeXie');
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

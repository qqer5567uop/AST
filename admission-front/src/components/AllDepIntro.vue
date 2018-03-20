<template>
  <el-row class="row" id="card">

      <el-card :body-style="{ padding: '50px' }"  class="card" >
        <img src="" class="image">
        <div style="padding: 14px;">
          <button v-on:click="handleCard('kexie')">部门1</button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '50px' }" class="card">
        <img src="" class="image">
        <div style="padding: 14px;">
          <span>部门2</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '50px' }" class="card">
        <img src="" class="image">
        <div style="padding: 14px;">
          <span>部门3</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '50px' }" class="card">
        <img src="" class="image">
        <div style="padding: 14px;">
          <span>部门4</span>

        </div>
      </el-card>
  </el-row>

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
          case 'kexie':
            this.$router.push('/AllDepintro/KeXie');
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
    width:300px;
    height: 300px;
    float: left;
  }
  .bottom {
    margin-bottom: 0;
    margin-right: 0;
    line-height: 12px;
  }
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:after {
    clear: both
  }
</style>

<template>
  <el-row class="row">

      <el-card :body-style="{ padding: '50px' }" class="card">
        <img src="" class="image">
        <div style="padding: 14px;">
          <span>部门1</span>
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
</style>

<template>
  <div>
    <header class="header">

      <el-row>
        <el-col :span="30" class="el-menu-demo">
          <el-menu default-active="4"  mode="horizontal" @select="handleMenu">
            <el-menu-item index="home">了解我们</el-menu-item>
            <el-menu-item index="depintro">部门介绍</el-menu-item>
            <el-menu-item index="display">风向展示</el-menu-item>
            <el-menu-item index="form">加入我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <div style="position: relative;height: 20px;width: 100%;">

    </div>

    <main>
      <div>
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </main>

  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  Vue.use(Element)

  export default {
    name: 'app',
    data: function (){
      return {
        active:true
      }
    },
    created: function(){
      this.$router.push('');
    },
    methods: {
      handleMenu:function (key) {
        switch (key) {
          case 'home':
            this.$router.push('/Home');
            break;
          case 'depintro':
            this.$router.push('/AllDepintro');
            break;
          case 'display':
            this.$router.push('/Display');
            break;
          case 'form':
            this.$router.push('/Form');
            break;
          default:
            this.$router.push('/Home');
        }
        console.log(key)

      }
    }
  }
</script>


<style>
  header{
    border-top: solid 4px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);


    width: 100%;
  }
  main{
    background-color: #FCFCFC;
    padding-right: 5%;
  }
  .el-menu-demo{
    margin-left: 5%;
    margin-right: 5%;
  }


  @media all and (min-width: 320px) and (max-width: 1024px){
    header{
      width: 100%;

    }
    main{
      margin-right: 10%;

    }
    .el-menu-demo{
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  @media all and (min-width: 1024px){
    header{
      width: 100%;

    }
    main{

    }
    .el-menu-demo{
      margin-left: 25%;
      margin-right: 25%;
    }
  }

</style>

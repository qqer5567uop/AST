<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col :span="30">
          <el-menu default-active="4" class="el-menu-demo" mode="horizontal" @select="handleMenu">
            <el-menu-item index="home">了解我们</el-menu-item>
            <el-menu-item index="depintro">部门介绍</el-menu-item>
            <el-menu-item index="display">风向展示</el-menu-item>
            <el-menu-item index="form">加入我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 0px;width: 100%;">

    </div>

    <main>
      <!-- 右侧主内容区 -->
      <div  class="main-right" >
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
  body{margin: 0;}
  #app {
    min-width: 100%;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header{
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 4px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  }
  header.header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  header .el-menu-demo{
    padding-left: 400px!important;
  }

  /* 主内容区 */
  main{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
  }
  main .main-right{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: rgb(225, 224, 231);
  }
</style>

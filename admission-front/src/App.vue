<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col>
          <el-menu default-active="4" class="el-menu-demo" mode="horizontal" @select="handleMenu"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item class="item" index="home">了解我们</el-menu-item>
            <el-menu-item class="item" index="depintro">部门介绍</el-menu-item>
            <el-menu-item class="item" index="display">风向展示</el-menu-item>
            <el-menu-item class="item" index="form">加入我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 0px;width: 100%;">

    </div>
    <main>
      <!-- 右侧主内容区 -->
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
  data: function () {
    return {
      active: true
    }
  },
  created: function () {
    this.$router.push('')
  },
  methods: {
    handleMenu: function (key) {
      switch (key) {
        case 'home':
          this.$router.push('/Home')
          break
        case 'depintro':
          this.$router.push('/AllDepintro')
          break
        case 'display':
          this.$router.push('/Display')
          break
        case 'form':
          this.$router.push('/Form')
          break
        default:
          this.$router.push('/Home')
      }
      console.log(key)
    }
  }
}
</script>

<style>
  body{margin: 0;}
  #app {
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header {
    height: 30px;
    line-height: 30px;
    background-color: #545c64;
  }
  .item{
    padding-left: 1%;
    padding-right: 1%;
  }
  header .el-menu-demo{
    padding-left: -0.5%;
    padding-right: -0.5%;

  }

  /* 主内容区 */
  main{
    margin-left: 0;
    margin-right: 0;
    min-height: 800px;
  }
  @media all and (min-width: 400px)and (max-width: 560px){

    .item{
      padding-left: 2%;
      padding-right: 2%;
    }
    header .el-menu-demo{
      padding-left: 5%;
      padding-right: 5%;

    }

  }
  @media all and (min-width: 560px)and (max-width: 900px){

    .item{
      padding-left: 4%;
      padding-right: 4%;
    }
    header .el-menu-demo{
      padding-left: 11%;
      padding-right: 11%;

    }

  }
  @media all and (min-width: 900px){

    .item{
      padding-left: 6%;
      padding-right: 6%;
    }
    header .el-menu-demo{
      padding-left: 20%;
      padding-right: 20%;

    }

  }

</style>

<template>
  <div>
    <body background="/static/Department/2.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >             
          <ul type="disc">
            <section>
              <h3>一.部门简介</h3>
              <p>权益部是隶属于电信学院学生会的一个部门，它是学生与学校沟通的一架桥梁，学生会总体 来说是为全校学生服务，而权益部更是应该是为学生谋求更多利益的窗口，解决学生与学校冲突的缓和区。
              </p>
              <h3>二.主要职能</h3>
              <p>权益部的日常工作以协调学生与学校关系为主，适当的针对学校的政策，学生的利益给予宣传及引导，帮助大家维护好自身的利益还有多为同学们做些实事</p>
              <p>更重要是要站在校方角度想问题，尽量符合办学理念，提出合理的建议，同时有关于停水停电、教学楼封闭等影响学习生活的通知也在权益部的管辖范围之类。</p>
            </section>
		      </ul>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </body>
  </div>
</template>

<script>
  export default {
    name: "display",
    methods: {
      handleCard:function (key) {
        switch (key) {
          case 'AllDepintro':
            this.$router.push('/AllDepintro');
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
    width: 85%;
    height: 85%;
    float: center;
  }
  div{font-family: "微软雅黑"}
</style>

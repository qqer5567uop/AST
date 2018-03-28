<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <h2>我们是。。。</h2>
          <p>“华中科技大学电子信息与通信学院宣传部，隶属于电子信息与通信学院学生会，旨在为电信学院等各类学生活动宣传工作提供创意及解决方案”
               与其称作宣传部，不如取一个更好听的名字—创意设计中心，它代表着我们的任务并不是让作品单纯地服务于活动，而是将自己的创意融入其中。这样，作品才能真正地具有魅力，起到宣传的作用。</p>
          <h3>我们的职能</h3>
          <p>“部门负责电信学院分团委、学生会、科协举办活动以及其它院系联合举办活动的宣传工作，宣传工作主要包括宣传材料（如海报、彩喷）的设计，制作的，打印等…”</p>
            <h3>加入我们你需要。。。</h3>
          <h3>&emsp;&emsp;熟练的技术？丰富的经验？都不是！</h3>
          <p>
          <ul type="circle">
                <li>技术不是问题，这里的学习氛围能让你快速上手PS等软件</li>
                <li>经验无关紧要，这里有着类型丰富的素材等你来练手。</li>
                <li>你需要的只是一人渴望创造的心和关于自我学习的态度</li>
            </ul>
          </p>
          <h2>你的高度只取决于你自己!</h2>
	      </div><br/>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/>
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
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    height: auto;
  }

  @media all and (min-width: 330px)and (max-width: 420px){
    .card{
      border-radius: 10px;
      margin-left: 16px;
      margin-right: 16px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media all and (min-width: 420px)and (max-width: 800px){
    .card{
      border-radius: 20px;
      margin-left: 35px;
      margin-right: 35px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media all and (min-width: 800px){
    .card{
      border-radius: 20px;
      margin-left: 60px;
      margin-right: 60px;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

</style>

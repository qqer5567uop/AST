<template>
  <div>
    <body background="/static/Department/2.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >             
           <section>
            <h3>一.部门定位</h3>
            <p>女生部，在各大高校大型组织里都会作为独立的部门存在，是一个以女生生活为主的特殊部门。<br>它是女生发挥自己的特长，展现自我风采的一个舞台，同时也为女生在生活和心理方面提供帮助，从而形成一个良好的生活氛围，展现女生热情上进，活泼大方的青春风采。

            </p>
        </section>
        <section>
            <h3>二.部门理念</h3>
            <p>我们不一定有充足的人力物力，但带领着整个电信学院的师生群体来关心爱护女生，是我们一直坚持的工作理念。

            </p>
        </section>
        <h3>三.主要活动</h3>
        <aside>
        <ul type="circle">
        <li>
            女生部几个比较大的活动主要是在圣诞节，女生节以及光棍节<br>圣诞节由部员扮演圣诞老人，给女生送出福利<br>女生节则是横幅及各种福利活动，光棍节活动待定。</li>
        <br>
        <br>
        <li>比较日常的活动就有在被挑选的女生生日当天送出礼物和贺卡<br>男神墙和女神墙以及每个星期给微信平台推送小贴士，当然还有倾听女生的烦恼并为她们解决困难。</li>
        </ul>
        </aside>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/>
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
  h3{color: crimson}
  aside{font-family: "微软雅黑"}
  p{ text-indent:2em;}
</style>

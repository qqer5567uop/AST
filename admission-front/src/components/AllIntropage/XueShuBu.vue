<template>
  <div>
    <body background="/static/Department/2.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>             
          <section>
            <h3 >一.主要职能</h3>
            <ul><p>学术部作为学生会的一个核心部门，肩负着规范全院学习秩序，调动学习氛围，搞好学风建设，丰富学生课余生活的重任。<br/>因此学术部的目标是引领同学们在学习中认识自己，在学习中发展自己，在学习中成就自己。<br/>学术部将通过组织学术性讲座，采访国奖大神等各项活动的宣传与举办，为同学们提供一个与学术进一步接触的平台。
            </p></ul>
          </section>
          <section>
            <h3 >二.部门理念</h3>
            <aside><ul>协作 共进 责任</ul></aside>
          </section>
          <section>
            <h3>三.工作简介</h3>
            <p>
              <ul type="disc">
                <li>举办考研保研等一些经验分享学术性讲座。</li>
                <li>举办晨读活动，为同学们提供晨读资料。</li>
                <li>收集各学科资料，提供学习资料共享平台。</li>
                <li>采访国奖大神，将其经验分享给同学们。</li>
              </ul>
            </p>
          </section><section>
            <h3>四.招新要求</h3>
              <aside><ul>积极好学，处事认真，具有责任心和协作意识</ul></aside>
          </section>
       </div><br/>
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
  div{
    font-family: "微软雅黑"
  }
	aside{color: rgb(236, 22, 15)}
</style>

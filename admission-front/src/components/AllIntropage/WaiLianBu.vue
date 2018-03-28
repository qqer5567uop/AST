<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>             
          <section>
            <h3>一.工作简介</h3>
            <ul>外联部的工作相对其他部的工作来说比较特殊，我们的工作要走在其他部门之前，很需要其他部门的配合和提前得到各部门的协助，所以我们与其他部门搞好关系是非常必要的。外联部将会尽可能的发挥本部作用，与有可能成为合作伙伴的各企业，事业单位做好沟通与交流，建立良好的合作关系，以便为我系的各大活动提供物资所需，保障活动的完善与到位。
            </ul>
            <h3>二.工作内容</h3>
            <li>代表学校与各大院校保持及时的交流与沟通</li>
            <li>与和学校联系紧密的各机关单位保持良好的联系</li>
            <li>负责在学生会各大活动完成礼宾接待工作</li>
            <h3>三.招新要求</h3>
            <ul>外联部是最能体现其实践能力的团队，要求具有较高的综合素质。外联部对外代表着学生会乃至学校的形象，因此，外联部员在搞各项活动的过程中应尽量在校内外树立诚实守信，精练能干的形象，我们应以培养个人素质的的基础工作做起，并与各部保持密切联系。</ul>
		      </section>
        </div>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

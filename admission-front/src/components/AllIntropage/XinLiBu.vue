<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
            <section>
                <h3>部门简介</h3>
                  <span>
                      学生会的宗旨是服务广大学子，为学生谋利，心理部更是共青团“校、院、班三级联动工作格局“的忠实执行者，隶属于电信学院分团委的同时，也负责协助校学<br>
                      生会心理部和大学生发展研究与指导中心的工作，可以说，心理部是电信学院分团委各部门中，与校学生会和各个班级联系最紧密的部门。
                  </span>
            </section>
            <section>
                <h3>主要工作</h3>&emsp;
                  <span>
                        心理部是大家的心灵鸡汤，每年都会在校会心理部的组织下开展“新生工作坊“、“心理月文化节”、“心理健康教育进班级”等大型跨院系系列活动，与人文，<br>
                        境等院系心理部合作关系友好，如在刚过去的这个学期协同开展了“守护天使”活动，我们还负责联系各班的心理委员，按月收集整理晴雨表，关爱学生心理健康。<br>
                        另个，我们于23栋和5栋宿舍各置了心理宣泄墙，拟与QQ公众号配合运营。 我们是柔和的轻风，带走你眉梢的烦恼，我们是心灵的鸡汤，温暖你纯真的心房！欢迎加<br>
                        入电信学院心理部，我们愿做你的心灵港湾！
                  </span>
            </section>
	      </div><br/>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

</style>

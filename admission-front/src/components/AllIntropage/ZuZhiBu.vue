<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <section>
              <h3>部门简介</h3>
              <span>
                  分团委组织部负责全院团员的思想建设、组织建设、以及各项团务工作。积极策划开展各种团员活动，丰富团员的生活，加强团员的思想教育。<br>
              </span>
          </section>
          <section>
              <h3>主要职能</h3>&emsp;
              <ul>
                  <li>策划开展特色团日以及主题团会活动</li>
                  <li>组织第三赛区特团答辩活动</li>
                  <li>组织五四演讲比赛以及五四评优活动</li>
                  <li>参与并组织分团委、学生会的人事安排调动工作</li>
                  <li>负责团组织关系转接、团员信息统计以及团费收缴工作</li>
                  <li>组织各年级团总支书记、基层团支部书记的培训以及配合校团委组织的各项工作在院系内部的开展。</li>
              </ul>
          </section>
	    </div>
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

</style>

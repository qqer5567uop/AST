<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <section>
            <h3 >一.主要职能</h3>
            <p>主持人队是一个为电信学院举办大型活动时提供主持人的队伍，负责在例如迎新晚会等活动中完成主持<br>
              工作，做好活动的“门面”担当。在与活动组织的配合之中，协调好主持方案及串词，使活动顺利举行。
            </p>
          </section>
          <section>
            <h3>二.工作简介</h3>
            <p>
              <ul type="disc">
                <li>担任迎新晚会，新年晚会，院系十大歌手初赛复赛决赛、讲座和院系内的相关活动等各类活动、竞赛的主持。</li>
                <li>写串词、和搭档一起去租衣服、化妆、排练、磨合、完美的主持活动。</li>
              </ul>
            </p>
          </section>
       </div><br/>
       <aside >
		    <ul type="circle">
          <li>
            想成为迎新晚会hold住全场的闪耀之星吗？<br>
          </li>
          <li>
            想在众人面前展示自己nice的口才能力吗？<br>
          </li>
          <li>
            想在学习之余锻炼自己的胆量收获自信吗？<br>
          </li>
          <li>
            来加入我们主持队伍吧!这里是一个展示自己，提升锻炼自己的一个地方，也更是一个收获成长的感动之处。
          </li>
		    </ul>
	    </aside>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
  div{
    font-family: "微软雅黑"
  }
  h3{
    color: crimson
  }
  aside{font-family: "微软雅黑";color: fuchsia}
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

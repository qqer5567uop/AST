<template>
  <div>
    <body background="/static/Department/2.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>             
          <section>
            <h3>一.部门定位</h3>
            <p>礼仪队服务于本校或本院多种大型活动（如晚会、颁奖典礼等），在其中担任礼仪角色，负责迎接、引导、服务出席该活动的领导嘉宾，并承担上台颁奖任务
            </p>
            <h3>二.工作内容</h3>
            <p>电信学院礼仪队出席校内或院内大型活动现场，在开学初会有细致的礼仪培训，打造完美仪态，<br>
              每次活动前，经过事先准备（统一服装、化妆、熟悉活动流程、分配任务），每场活动指定一<br>
              到三名礼仪同学到分配给各自的岗位，岗位分配大致是：&emsp;门口迎宾，引导嘉宾就座或上台，<br>上台为获奖者颁发奖状或奖杯，为确保程序万无一失，必要时会有彩排。
            </p>
            <h3>三.部门理念</h3>
            <aside>举止如兰，心香如惠</aside>
            <ul type="circle">
              <li>礼仪队本着“举止如兰，心香如惠”的理念鼓励队员们积极参与礼仪工作，使活动更程序化，仪式化，增加活动的仪式感、美感，从外观上提升活动档次。</li>
              <li>一个灿烂的微笑，就会使嘉宾感受到春天阳光般的温暖，一个优美的手势，便能让来客发现以理工显长的电信学院亦不缺少人文关怀</li>
            </ul>
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
	aside{color: crimson}
</style>

<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          	<section>
              <h3>部门介绍</h3>
                <p>&emsp;科协是 一个引领学院科技氛围的部门，其中赛事部主要负责各项科技类赛事及活动的组织工作，也是学院对外界科技类赛事了解<br>
                        的平台，同时也负责校科技节的部分工作。
                </p>
		        </section>
            <section>
			        <h3>主要职能</h3>
			          <p>
				           <ul type="disc">
                       <li>策划并举办全武汉高校范围内进行的“种子杯”编程大赛</li>
                       <li>院系内举办的C语言程序设计大赛</li>
                       <li>举办电信好导师活动，帮助同学们更好的学习C语言</li>
                       <li>协助校科协举办校科技节</li>
                       <li>向同学们普及与科技相关的知识与新闻</li>
						       </ul>
			          </p>
		        </section>

	    </div><br/>
      </el-card>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

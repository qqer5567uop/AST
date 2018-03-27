<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <section>
            <ul type="square">
              <li>
                <b>我们是——</b><br>
                   “华中科技大学电子信息与通信学院<b>宣传部</b>，隶属于电子信息与通信学院学生会，旨在为电信学院等各类学生活动宣传工作提供创意及解决方案”<br>
                    与其称作宣传部，不如取一个更好听的名字—<b>创意设计中心</b>，它代表着我们的任务并不是让作品单纯地服务于活动，<br>
                    而是将自己的创意融入其中。这样，作品才能真正地具有魅力，起到宣传的作用。
              </li>
              <li>
			          <h4>我们的职能</h4>
			            <p>&emsp;“部门负责电信学院分团委、学生会、科协举办活动以及其它院系联合举办活动的宣传工作，<br>
                            宣传工作主要包括宣传材料（如海报、彩喷）的设计，制作的，打印等…”<br>
                            简单地来说，我们的工作包括为各种各样的活动设计宣传材料（主要是海报），你可以将自己的创意融入设计当中，从而创造出属于自己的创意。</p>
              </li>
              <li>
			          <h4>加入我们，你需要——</h4>
                    熟练的技术？丰富的经验？都不是！<br>
			            <p>
				            <ul type="disc">
					             <li>技术不是问题，这里的学习氛围能让你快速上手PS等软件。<br></li>
					             <li>经验无关紧要，这里有着类型丰富的素材等你来练手。<br></li>
					             <li>你需要的只是一人渴望创造的心和关于自我学习的态度。<br></li>
			              </ul>
			            </p>
                        你的高度只取决于你自己。<br>
              </li>
            </ul>
		      </section>
	      </div><br/>
      </el-card>
      <br/><br/>
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

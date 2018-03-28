<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
		      <section>
			      <h3>一.主要职能</h3>
			        <p>&emsp;作为电信学院第一个与编程有关的部门，我们旨在给喜欢编程的同学一个分享经验、共同学习和进步的平台，通过类似于社团的方式丰富本院学生课外生活。在学习过程中，提升本院学生的编程能力和创新意识。同时也旨在培养出一批可以给学院线上活动提供技术支持的学生。</p>
		      </section>
		      <section>
			      <h3>二.工作简介</h3>
			      <p>
				    <ul type="disc">
					    <li>首要工作<br>
						    坚持学习编程，不断提高自己的技术和创新思维，学习由任务及项目驱动。在有一定技术基础后为学生会提供技术支持，<br>
						    比如搭建招新网站、编写并维护学生管理系统等等。每一届的部员将担任下一届部员的导师，带领他们学习编程与工作。
					    </li>
					    <li>学习计划<br>
						    开始一段时间统一学习C语言的基本工具（git等）&emsp;,&emsp;在有一定基础后根据兴趣选择方向学习（包括学习新的语言）。
					    </li>
					    <li>
					    	目前方向<br>
					    	<ul type="square">
							<li>
								IT(计算机底层技术，算法，Linux,CUDA,并行计算);
							</li>
							<li>
								移动端开发（Android,ios,React Native）;
							</li>
							<li>
								Web开发（前端网站，后台服务器，微信公众号开发，微信小程序）;
							</li>
							<li>
								AI：（深度学习，机器学习，大数据）;
							</li>
						</ul>
					</li>
			    </ul>
			    </p>
		    </section>
	  	  <section>
			    <h3>三.部门理念</h3>
			    <p>
			    <ul type="circle">
				    <li>保持对计算机、互联网相关技术的兴趣</li>
					  <li>坚持学习新的知识</li>
					  <li>敢于独立解决问题</li>
				  </ul>
		    	</p>
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

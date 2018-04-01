<template>
  <div class="home" >
<body background="/static/BackGround/bk15.jpg"
style=" background-repeat:no-repeat ;
background-size:100% 100%;
background-attachment:fixed;" >
			<br/>
			<br/>
			<h3>电子信息与通信学院分团委学生会</h3>
			<br/>
			<br/>
		  <br/>
			<p>
				<br/>
				简称电信学院团协联，始于1960。电信学院各项学生活动的发起者、
				<br/>
				组织者，学生自己的群众性组织，是提倡自我教育、自我管理、自我服务，
				<br>
				并为电信学院在校学生提供无偿服务的组织。
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			<span style="text-align: center">--------------技术支持--------------</span><br/>
			电子信息与通信学院<br/>
			科协技术部<br/>
			Institute of electronic information and communication<br/>
			Science and Technology Association
			</p>
    </body>
  </div>
</template>
<script>
  export default {
    name: "home",
    data(){
      return{
        activeIndex:'1',
      };
    }
  }
</script>

<style scoped>
		div{font-family: "微软雅黑";width: 100%;height: 100%;margin: auto;text-align: center}
		article{color: crimson;font-size: 35px;text-align: center}
		h3{font-size: 50px}
      body{
    width: 100%;
  }
  .demo-ruleForm{
    margin-right: 6%;
    margin-left: 0;
  }
  @media all and (min-width: 400px)and (max-width: 560px){
    .demo-ruleForm{
      margin-right: 15%;
      margin-left: 5%;
    }

  }
  @media all and (min-width: 560px)and (max-width: 900px){
    .demo-ruleForm{
      margin-right: 22%;
      margin-left: 16%;
    }
  }
  @media all and (min-width: 900px){
    .demo-ruleForm{
      margin-right: 30%;
      margin-left: 25%;
    }
  }

</style>

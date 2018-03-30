<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
			    <section>
			       <h3>办公室职能</h3>
		           <p>&emsp;管理&emsp;&emsp;&emsp;管理公用房，审核借用者的申请并合理安排使用时间</p>
		           <p>&emsp;协助</p>
              <ul>	
                  <li>协助主席团如开学生会例会，做好会议记录</li>
                  <li>协助主席团制定学生会工作计划，做好工作总结</li>
                  <li>协调监督各部门，完成各项活动的部门考核，协助主席团进行优秀部长和优秀部员的评选</li>
                </ul>
                <p>&emsp;发布</p>
                <ul>
                  <li>上传下达，执行主席团决议，监督各职能部门工作的展开情况并及时向主席团汇报</li>
                  <li>以学生会的名义发布重大事项的布告、通告。</li>
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

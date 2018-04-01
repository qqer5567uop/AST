<template>
<body background="/static/BackGround/bk9.jpg" 
style=" background-repeat:no-repeat ;
background-size:100% 100%; 
background-attachment:fixed;" >
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="30%" class="demo-ruleForm">

    <el-form-item label="姓名" prop="name" style="padding-top: 80px; font-weight: bold ">
      <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="sex" style=" font-weight: bold">
      <el-radio-group v-model="ruleForm.sex">
        <el-radio label="男" style=" font-weight: bold" ></el-radio>
        <el-radio label="女" style=" font-weight: bold"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="班级" prop="class1" style=" font-weight: bold">
      <el-input v-model="ruleForm.class1"></el-input>
    </el-form-item>

    <el-form-item label="学号" prop="uid" style=" font-weight: bold">
      <el-input  v-model="ruleForm.uid"></el-input>
    </el-form-item>

    <el-form-item label="手机" prop="phone" style=" font-weight: bold">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item label="第一志愿" prop="FirstExcept" style=" font-weight: bold">
      <el-input v-model="ruleForm.FirstExcept"></el-input>
    </el-form-item>
    <el-form-item label="第二志愿" prop="SecondExcept" style=" font-weight: bold">
      <el-input v-model="ruleForm.SecondExcept"></el-input>
    </el-form-item>
    <el-form-item label="是否服从调剂" prop="AdjustedOrNot" style=" font-weight: bold">
      <el-radio-group v-model="ruleForm.AdjustedOrNot">
        <el-radio label="是" style=" font-weight: bold"></el-radio>
        <el-radio label="否" style=" font-weight: bold"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="自我介绍" prop="SelfIntroduction" style=" font-weight: bold">
      <el-input type="textarea" v-model="ruleForm.SelfIntroduction"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="open3">信息查询</el-button>
      <br/><br/><br/><br/>
    </el-form-item>
  </el-form>
</body>
</template>



<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  const router = new VueRouter()
  export default {
    data() {
      return {
        ruleForm:{
          name: '',
          sex: '',
          uid: '',
          class1: '',
          phone: '',
          FirstExcept: '',
          SecondExcept: '',
          AdjustedOrNot: '',
          SelfIntroduction: '',
          //msg: '学生会招新'
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          class1: [
            { required: true, message: '请输入班级', trigger: 'blur' }
          ],
          uid: [
            { required : true, message : '请输入学号', trigger: 'blur' },
            { min: 10,max: 10, message: '请输入正确的学号', trigger: 'blur'}
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          FirstExcept: [
            { required: true, message: '请输入至少一个志愿', trigger: 'blur' }
          ],
          AdjustedOrNot: [
            { required: true, message: '请选择是否调剂', trigger: 'change' }
          ],
          SelfIntroduction: [
            { required: true, message: '请填写自我介绍', trigger: 'blur' },
            { min: 10, max: 300, message: '长度在 10 到 300 个字符', trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      submitForm(){
        this.$http({
              url: "/api/InformationSend",
              method: 'POST',
              body: {
                name: this.ruleForm.name,
                sex: this.ruleForm.sex,
                uid: this.ruleForm.uid,
                class:this.ruleForm.class1,
                phone:this.ruleForm.phone,
                FirstExcept:this.ruleForm.FirstExcept,
                SecondExcept:this.ruleForm.SecondExcept,
                AdjustedOrNot:this.ruleForm.AdjustedOrNot,
                SelfIntroduction:this.ruleForm.SelfIntroduction
              }
            })
              .then((res) => {
                let data = res.data
                //console.log(data)
                    if(data.msg === "Set Success")
                      this.$alert('提交成功', '', {
                        confirmButtonText: '确定',
                      });
                    if(data.msg === "Change Success")
                      this.$alert('修改成功', '', {
                        confirmButtonText: '确定',
                      });
                    if(data.msg === "Time Error")
                      this.$alert('提交失败，提交时间已到', '', {
                        confirmButtonText: '确定',
                      });
                    if (data.msg === "Change Fail"){
                      this.$alert('提交失败，请检查你的数据类型', '', {
                        confirmButtonText: '确定',
                      });
                  }

              })
          },
      open3() {
        this.$prompt('请输入学号+手机号后4位(例：U201713371+4308）', '身份验证', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^U\d{9}\+\d{4}$/,
          inputErrorMessage: '学号格式不正确'
        }).then(({ value }) => {
            this.$http({
              url: '/api/InformationLookfor',
              method: 'POST',
              body: {
                uidnph: value
              }
            })
            .then((res)=>{
                let data1 = res.data
                let data2 = "姓名："+data1.name+"\n"+"性别："+data1.sex+"\n"+"班级："+data1.class+"\n"+"学号："+data1.uid+"\n"+"手机号："+data1.phone+"\n"+"第一志愿："+data1.FirstExcept+"\n"+"第二志愿："+data1.SecondExcept+"\n"
                if(data1.msg === "Get Success"){
                  alert(data2,'个人信息', {
                    confirmButtonText: '确定',
                  });
                }
                  if(data1.msg === "Get Data Error"){
                  this.$alert("您输入的数据格式有误，请重新输入",'个人信息', {
                    confirmButtonText: '确定',
                  });
                }
                  if(data1.msg === "Get Fail"){
                  this.$alert("查无此人",'个人信息', {
                    confirmButtonText: '确定',
                  });
                }

            })
        }).catch(() => {
          //this.$message({
            //type: 'info',
            //message: '取消输入'
          //});
        });
      }
    }
  }
</script>

<style scoped>
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

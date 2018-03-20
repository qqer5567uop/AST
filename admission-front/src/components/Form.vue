<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50%" style="width: 60%" class="demo-ruleForm">

    <el-form-item label="姓名" prop="name" style="padding-top: 40px">
      <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="ruleForm.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="班级" prop="class1">
      <el-input v-model="ruleForm.class1"></el-input>
    </el-form-item>

    <el-form-item label="学号" prop="uid">
      <el-input  v-model="ruleForm.uid"></el-input>
    </el-form-item>

    <el-form-item label="手机" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item label="第一志愿" prop="FirstExcept">
      <el-input v-model="ruleForm.FirstExcept"></el-input>
    </el-form-item>
    <el-form-item label="第二志愿" prop="SecondExcept">
      <el-input v-model="ruleForm.SecondExcept"></el-input>
    </el-form-item>
    <el-form-item label="是否服从调剂" prop="AdjustedOrNot">
      <el-radio-group v-model="ruleForm.AdjustedOrNot">
        <el-radio label="是"></el-radio>
        <el-radio label="否"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="自我介绍" prop="SelfIntroduction">
      <el-input type="textarea" v-model="ruleForm.SelfIntroduction"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
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
          msg: '学生会招新'
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
            { required: true, message: '请输入班级', trigger: 'change' }
          ],
          uid: [
            { type: 'text', required : true, message : '请输入学号', trigger: 'change' },
            { min: 10,max: 10, message: '请输入正确的学号', trigger: 'blur'}
          ],
          phone: [
            { type: 'number', required: true, message: '请输入手机号', trigger: 'change' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          FirstExcept: [
            { required: true, message: '请输入至少一个志愿', trigger: 'change' }
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
              url: '/InformationSend',
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
                console.log(data)
                if (data.code === 200) {
                  // 登录成功
                } else {
                  console.log(data.msg)
                  this.tips = data.msg
                }
              })
          }
    }
  }
</script>

<style scoped>

</style>

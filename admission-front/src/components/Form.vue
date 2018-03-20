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

    <el-form-item label="学号" prop="_ID">
      <el-input  v-model="ruleForm._ID"></el-input>
    </el-form-item>

    <el-form-item label="手机" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item label="第一志愿" prop="FirstExcept">
      <el-input v-model="ruleForm.FirstExcept"></el-input>
    </el-form-item>
    <el-form-item label="第二志愿" prop="Secondexcept">
      <el-input ></el-input>
    </el-form-item>
    <el-form-item label="是否服从调剂" prop="Adjustedornot">
      <el-radio-group v-model="ruleForm.Adjustedornot">
        <el-radio label="是"></el-radio>
        <el-radio label="否"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="自我介绍" prop="Selfintroduction">
      <el-input type="textarea" v-model="ruleForm.Selfintroduction"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>



<script>
  export default {
    data() {
      return {
        ruleForm:{
          name: '',
          sex: '',
          class1: '',
          _ID: '',
          phone: '',
          FirstExcept: '',
          Secondexcept: '',
          Adjustedornot: '',
          Selfintroduction: '',
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
          _ID: [
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
          Adjustedornot: [
            { required: true, message: '请选择是否调剂', trigger: 'change' }
          ],
          Selfintroduction: [
            { required: true, message: '请填写自我介绍', trigger: 'blur' },
            { min: 10, max: 300, message: '长度在 10 到 300 个字符', trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: '/InformationSend',
              method: 'POST',
              data: {
                name: this.name,
                sex: this.sex,
                class:this.class1,
                phone:this.phone,
                FirstExcept:this.FirstExcept,
                SecondExcept:this.SecondExcept,
                AdjustedOrNot:this.AdjustedOrNot,
                SelfIntroduction:this.SelfIntroduction
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
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>

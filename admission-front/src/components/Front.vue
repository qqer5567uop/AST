<template>
  <div class="hello">
 <h3> {{msg}}</h3>
 <div class="">
     <fieldset class=""><br>
        <label for="name">姓名</label>
        <input  name="name" type="text" placeholder="请输入姓名"  v-model="name"><br><br>
         请选择:<input type="radio" id="one" value="0" v-model="sex">
          <label for="one">女</label>
          <input type="radio" id="two" value="1" v-model="sex" >
          <label for="two">男</label><br><br>
           <label for="class">班级</label>
           <input  name="class" type="text" placeholder="请输入班级"  v-model="class1"><br><br>
           <label for="phone">手机</label>
           <input  name="phone" type="text" placeholder="请输入手机号"  v-model="phone"><br><br>
           <label for="first">第一志愿</label>
           <input  name="first" type="text" placeholder="请输入第一志愿"  v-model="FirstExcept"><br><br>
           <label for="second">第二志愿</label>
           <input  name="second" type="text" placeholder="请输入第二志愿"  v-model="SecondExcept"><br><br>
           是否服从调剂:<input type="radio"  value="1" v-model="AdjustedOrNot">
          <label for="y">是</label>
          <input type="radio"  value="0" v-model="AAdjustedOrNot">
          <label for="n">否</label><br><br>
          <label for="introduction">自我介绍</label>
          <textarea name="introduction" rows ="6" cols="18" v-model="SelfIntroduction" placeholder="自我介绍，少于300字"></textarea>
          <input type="button" @click="toSubmit" value="提交">
        </fieldset>
      </div>
   
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  const router = new VueRouter()
export default {
  data () {
    return {
      name:'',
      sex: '',
      class1:'',
      phone:'',
      FirstExcept:'',
      Secondexcept:'',
      Adjustedornot: '',
      Selfintroduction:'',
      msg: '学生会招新'
    }
  },

  methods:{
  toSubmit(){
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
          } 
     }
}
</script>

<style scoped>

</style>

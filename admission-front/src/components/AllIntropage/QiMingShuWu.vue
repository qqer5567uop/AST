<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
          <section>
            <h3>一.主要职能</h3>
            <p>本部门主要负责韵苑22栋3楼书屋的日常管理以及承办学院有关读书的活动。</p>
          </section>
          <section>
            <h3>二.工作简介</h3>
            <p>
              <ul type="disc">
                <li>
                  每个工作日均开放公用房为各位提供一个安静的读书场所以及借书平台
                </li>
                <li>每周均会挑选一些书屋中的优质书籍并进行简单的点评
                </li>
                <li>
                  每学期均会精选一批书籍引入书屋，并作登记分类和管理
                </li>
                <li>每逢文化节，便会举办独具特色的读书活动</li>
              </ul>
            </p>
          </section>
          <section>
          <h3>三.部门理念</h3>
          <p>
            工科学院的文化龙头</p>
          <p>
            电信学院的读书指南！</p>
          <p>
            打造电信学子真正的读书宝地。</p>
          <p>    电信学院的读书活动，我们承包了！
          </p>
        </section>
      </el-card>
      <br/><br/><br/><br/><br/><br/>
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
  div{font-family: "微软雅黑";}
  p{ text-indent:2em;}
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

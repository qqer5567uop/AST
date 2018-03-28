<template>
  <div>
    <body background="/static/Department/2.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>             
          <section>
            <h3 >一.主要职能</h3>
            <p>我泱泱在华科汇聚30000+的人才，在华中科技大学电信学院文艺部任职，意味着：为36.19个梵蒂冈（人口829）或2.30个瑙鲁（人口13049）举行了一场声势浩大的春节联欢晚会。<br/>成为CCTV1大型歌舞晚会的组织者与策划者的机会就在这里，你还在等什么呢？
            </p>
          </section>
          <section>
            <h3>二.工作简介</h3>
            <p>
              <ul type="disc">
                <li>主办院迎新晚会。<br/>是的，加入文艺部，那么进入大学的第一次大型活动中，就有你的参与啦，第一次的晚会十分重要，每一个瞬间都会成为大学崭新的开始，而给小鲜肉们提供一个展现自己的舞台是我们最大的责任。夜幕下，韵体内，舞台后，有你我奔波的身影，聚光灯下的每一首歌曲，每一个舞姿，整场晚会零差错的成绩，都是我们付出的结果。</li>
                <li>主办院十大歌手。<br/>这一次的活动，将在每学院的第二个学期举行，经常会进行两院联合举办，我们的职责就是！（拉拢和小姐姐多的学院的关系，呸！）挖掘我们身边那些为音乐而生的人。让大家在韵体如同身临livehouse，享受蹦迪般的音乐冲击。</li>
                <li>承办校园文化节的一些活动。<br/>一般会有好几个院和我们一同负责一个活动，而这个活动涉及范围及其大！将覆盖拥有33个食堂的华科，整！个！学！校！Unbeliveable!!!!也就是说！你所做的成就将在全校展示！！！同时！！你所犯 一点点小小差错！也将有可能被全校三万多人看到！！！惊不惊喜！！刺不刺激！！！</li>
                <li>干你想干的事，做你爱做的事。<br/>比如，想办一场电信有嘻哈，寝室间的浴室歌王争霸赛，地点位于KTV的小型地下歌王大赛（当然以上都是我乱说的），只要想法有趣，可行性足够，学长学姐抛头颅洒热血，也陪你一起搞事。</li>
              </ul>
            </p>
          </section>
       </div><br/>
      </el-card>
      <br/><br/><br/><br/><br/>
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
  div{
    font-family: "微软雅黑"
  }
  h3{
    color: crimson
  }
  aside{font-family: "微软雅黑";color: fuchsia}
</style>

<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <h2>新闻中心</h2>
            <section>
              <h3>一.我们在干啥</h3>
              <p>&emsp;既然名为新闻中心，那我们做的工作自然与新闻报道有关，主要负责将校园内，<br>
                &emsp;尤其是本院的各类活动和通知进行对内对外的宣传交流。大多数时候是与摄影采访文字编辑打交道的。</p>
              <h3>二.那么具体</h3>
              <p>
                <ul type="circle">
                  <li>
                    MOSITY<br>
                    最主要的工作由事先宣传、实时记录、事后报道三部分构成。
                  </li>
                  <li>
                    before<br>
                    活动开始前的宣传主要通过网络形式向全院同学们简单介绍即将到来的活动精彩的内容，鼓励大家报名以及吸引围观群众。
                  </li>
                  <li>
                    during<br>
                    活动中大胆！的拍照、详细准确的记录活动过程与精彩的闪光点，将他们作为撰稿素材，当然这并不轻松，当大家专心致志看比赛或是表演时，对于我们一边看一边赶稿一边四处找点拍照则会成为日常；
                  </li>
                  <li>
                    after<br>
                    活动结束之后根据文字与图片记录完成正式新闻稿件并对该活动进行客观评价与总结。
                  </li>
                  <li>
                    ALSO<br>
                    我们不仅负责微信公众号的运营，帮助同学们了解学院动态，还化身电信学院官方QQ主页君， 与同学们实时沟通互动；同时负责院主页的更新，对外展示学院风采；也负责学院的宣传视频的制作…我们忙并快乐着。 不敢说自己才华横溢妙笔生花，却认真炙热的对待每一次的记录，所有的我们，在学校的每一刻青春，都是值得记录的。
                  </li>
                </ul>
              </p>
            <h3>三.目标？</h3>
            <p>
              <ul type="disc">
                <li>新闻中心在电信学院分团委的领导下，本着“更好地为电信学了服务”的宗旨，向全校师生展示院内的风采（官方+标准微笑）</li>
                <li>向全院同学宣传着源源不断的、精彩纷呈的学生活动、大型讲座，或广播着大小通知、为学子生活带来便捷（继续官方）</li>
                <li>成为学院的双眼，向广大同学诉说学院的故事，让每天的生活都是新鲜的，是每个新闻中心人的信仰。（还是官方）</li>
              </ul>
            虽然官方。但这都是真真切切我们在付出的，想努力的。希望你们能和我们一起奋斗!
            </p>
            <h3>四.工作益处</h3>
            <p>
              在这里，你可以学习到一个新闻人应具有的基本素养，提高你的文字工作，用严谨的话语、求实的心理、敏锐的观察、极高的效率去完成每一次的报道。亦可锻炼你的书面表达能力，拍照取景技术，制作视频或推送的技术等。不过获得再多的可以描述的技术，其实都比不上认识很多志同道合的人来得重要。
            </p>
            <h2>生活水深火热的电信学院，在哪里找倾盖如故的朋友陪你一起奔跑呢？快来加入我们吧！</h2>
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

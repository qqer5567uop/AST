<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
          <section>
            <h3>一.主要职能</h3>
              <p>&emsp;新闻中心是一个社交面极广的媒体平台，负责将校园内，尤其是本院里的各类活动或通知进行对内对外的信息宣传交流。</p>
          </section>
          <section>
            <h3>二.工作简介</h3>
              <p>
                <ul type="disc">
                  <li><b>首要工作</b><br>
                    我们的日常工作主要由活动的事先宣传五、实时记录、事后报道三部分构成。即在活动开始前一周负责以张贴海报<br>
                    或网络发布的形式向全院同学们简单介绍活动精彩内容，吸引和邀请同学们前去参加；活动中随时拍照、记录活动<br>
                    进行流程与可圈可点之处作为撰稿素材，一边观看活动一边赶稿成为日常；活动结束之后撰写正式新闻稿件对该活动进行客观评价，并作总结。<br>
                    此外，我们还负责<font color="FireBrick">微信公众号</font>的运营，帮助同学们了解学院动态，我们还化身<font color="FireBrick">电信学院官方QQ主页君</font>，
                    与同学们实时沟通互动；<br>还负责院主页的更新，对外展示学院风采；还负责学院的宣传视频的制作…<br>我们忙却快乐着。
                  </li>
                  <li><b>工作宗旨</b><br>
                    新闻中心在电信学院分团委的领导下，本着“更好地为电信学了服务”的宗旨，向全校师生展示着院内的风采，<br>
                    向全院同学宣传着源源不断的、精彩纷呈的学生活动、大型讲座，或广播着大小通知、为学子生活带来便捷。<br>
                    成为学院的双眼，向广大同学诉说学院的故事，让每天的生活都是新鲜的，是每个新闻中心人的信仰。
                  </li>
                  <li><b>工作益处</b><br>
                    在这里，你可以学习到一个新闻人应具有的基本素养，即严谨的话语、求实的心理、敏锐的观察、高效的办事；<br>
                    亦可锻炼你的书面表达能力，拍照取景技术，制作视频或推送的技术等。
                  </li>
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
    border-radius: 20px;
    margin: 60px;
    width: 85%;
    height: 85%;
    float: center;
  }

</style>

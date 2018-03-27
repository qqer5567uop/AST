<template>
  <div>
    <body background="/static/BackGround/bk12.jpg">
    <el-button icon="el-icon-back" v-on:click="handleCard('AllDepintro')"></el-button>
      <el-card :body-style="{ padding: '0px' }"  class="card" >
        <div>
		      <section>
			        <h3>一.主要职能</h3>
			          <p>&emsp;
                    华中科技大学电信系“小红帽”义务维修队始建于1990年3月5日，最初称为“电信系小红帽家电维修服务队”。<br>
                    建队初衷旨在希望能够以电信系的专业知识为技术依托进行志愿者义务服务活动，同时通过维修实践，巩固自己的专业知识。<br>
                    小红帽的日常活动是利用周末时间，联合学校各院系或者学校周边各社区进行义务维修活动。维修范围包括，常用家电，电脑等。
                </p>
		      </section>
		      <section>
			        <h3>二.工作简介</h3>
			          <p>
				          <ul type="disc">
                          &emsp;到2018年，小红帽经历了<b>二十八年</b>的风风雨雨，成为华中科技大学历史上最长的学生组织之一。<br>
                          二十八年来，“小红帽”们从未停步，不断总结经验，薪火相传，一批批的队员在队内学到了知识，得到了锻炼，建立了友谊，<br>
                          获得了成功，更重要的是，培养起了一种<b>“奉献知识，服务社会”</b>的优良品质。<br>
                          &emsp;在这些队员毕业之后，他们把“小红帽”的志愿服务精神不断发扬光大。<br>
                          经过二十八年的考验，服务队已活动数百次，义务维修电器两万多件，足迹遍及校内、同济校区、中南财经政法大学、<br>
                          武汉中南商场、长动集团、武钢、宜昌葛洲坝、贵州遵义、四川地震重灾区彭州以及长征路上的多处革命老区等许多地方，<br>
                          赢得了社会各界的好评,《光明日报》、《中国青年报》、《长江日报等报刊曾多次报道我队的活动。
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

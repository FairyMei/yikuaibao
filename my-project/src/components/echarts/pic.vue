<template>
    <div id="app2">
      <span>经手单据分布报表</span>
      <router-link to='/picXq'><i class="el-icon-printer" style="z-index: 1" @click="openFullScreen"></i></router-link>
      <div id="container2" style="height: 100%;width: 100%"></div>
      <!--<div>123</div>-->
    </div>
</template>

<script>
    export default {
        props:{
          dataText:{
            type:Array,
            default: function () {
              return []
            }
          }
        },
        data(){
           return{

           }
        },

        mounted(){
          this.setEchart()
        },

        methods:{
         setEchart () {
          var dom = document.getElementById("container2");
          var myChart = echarts.init(dom);
          // var app = {};
          var option = null;
          // app.title = '环形图';

          option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:['费用总额','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
              {
                name:'费用总额',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '20',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[
                  {value:335, name:'费用总额'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
              }
            ]
          };

          if (option && typeof option === "object") {
            myChart.setOption(option, true);
          }
        },
          // loding的方法
          openFullScreen(){
            const loading = this.$loading({
              lock: true,
              text: '数据加载中，请稍后...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
            }, 1000);
          }
        }
    }
</script>

<style scoped>
#app2{
  background: #fff;
  border:1px solid #e6e6e6;
  height:300px;
}
i{
  position: absolute;
  right:40px;
  top:25px;
}
  span{
    position: absolute;
    right: 300px;
    top: 20px;
    font-weight: bold;
  }
</style>

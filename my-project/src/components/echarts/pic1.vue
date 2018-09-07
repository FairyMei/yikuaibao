<template>
    <div id="main">
      <div id="myChart" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
      mounted(){
        this.drawLine();
      },
      methods:{
        drawLine(){
          var dom=document.getElementById('myChart');
          var myChart=echarts.init(dom);
          // var option = null;
          var  option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
              {
                name:'访问来源',
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
                      fontSize: '30',
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
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    }
</script>

<style scoped>
.main{
  /*height: 500px;*/
  /*background-color: red;*/
  /*border: 1px solid red;*/
}
</style>

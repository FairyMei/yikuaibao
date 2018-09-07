<template>
  <div id="app1">
    <span>个人费用趋势报表</span>
    <router-link to="/barXq"><i class="el-icon-printer" style="z-index: 1" @click="openFull"></i></router-link>
    <div id="container1" style="height: 100%;width: 100%"></div>
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
        var dom = document.getElementById("container1");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        app.title = '坐标轴刻度与标签对齐';

        option = {
          color: ['#76d0a3'],
          // tooltip : {
          //   // trigger: 'axis',
          //   // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          //   //   type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          //   // }
          // },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['18-08',],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '7%',
              data:[ 390]
            }
          ]
        };
        ;
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }

      },
      openFull(){
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
    },
  }
</script>

<style scoped>
  #app1{
    background: #fff;
    border:1px solid #e6e6e6;
    height:300px;
  }
i{
 position: absolute;
  left:700px;
  top:25px;
}
  span{
    position: absolute;
    left: 320px;
    top: 20px;
    font-weight: bold;
  }
</style>

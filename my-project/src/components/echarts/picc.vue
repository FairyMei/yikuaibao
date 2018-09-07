<template>
  <div id="app3">
    <span>个人费用分布报表</span>
    <router-link to="/piccXq"><i class="el-icon-printer" style="z-index: 1" @click="openF"></i></router-link>
    <div id="container3" style="height: 100%;width: 100%"></div>
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
        var dom = document.getElementById("container3");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        app.title = '环形图';

        option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
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
                {value:1548, name:'费用总额'}
              ]
            }
          ]
        };
        ;
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      },
      // loding
      openF(){
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
  #app3{
    background: #fff;
    border:1px solid #e6e6e6;
    height:300px;
  }

  i{
    position: absolute;
    left:700px;
    top:350px;
  }
  span{
    position: absolute;
    left: 320px;
    top: 340px;
    font-weight: bold;
  }
</style>

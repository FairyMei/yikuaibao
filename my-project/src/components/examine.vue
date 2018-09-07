<template>
  <div style="height: 85%">
    <!--<hea></hea>-->
  <div class="headers" >
      <el-tabs v-model="activeName" @tab-click="handleClick" style="height: 70px;line-height: 70px" >
        <el-tab-pane label="待审批"  name="first" class="lab" >
          <shaixuan></shaixuan>
        </el-tab-pane>
        <el-tab-pane label="已审批" name="second">
          <daishenpi></daishenpi>
        </el-tab-pane>
        <el-tab-pane label="审批记录" name="third">
          <record></record>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import shaixuan from './shaixuan'
  import daishenpi from './daishenpi'
  import record from './record'
    export default {
        data(){
          return{
            activeName: 'second',
          }
        },
      components:{
        shaixuan,
        daishenpi,
        record,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      },
    }
</script>

<style scoped>
  .headers{
    background: #fff;
    width:95%;
    height: 100%;
    margin:0 auto;
    margin-top:20px;
  }

  /*.lab{*/
    /*margin-left:30px;*/
  /*}*/

</style>

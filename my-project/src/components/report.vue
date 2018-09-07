<template>
  <div>
    <!--<div class="echartWrap" style="width: 100%;height: 100%;display: flex">
      <div class="lefW" style="width: 50%;height: 40%;">
        <bars :dataText="dataText"></bars>
      </div>
      <div class="lefW" style="width: 50%;height: 40%;">
        <pic :dataText="dataText"></pic>
      </div>
    </div>-->
    <div id="hed">
      <el-dropdown size="small" split-button  trigger="click">
        <i class="el-icon-date"></i>
        <span>本月</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>本季</el-dropdown-item>
          <el-dropdown-item>本年</el-dropdown-item>
          <el-dropdown-item>去年</el-dropdown-item>
          <el-dropdown-item>自定义</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
    <el-row id="left">
      <el-col :span="12">
        <div class="grid-content bg-purple">
         <bars :dataText="dataText"></bars>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <pic :dataText="dataText"></pic>
        </div>
      </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <picc :dataText="dataText"></picc>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  import bars from '../components/echarts/bar'
  import pic from '../components/echarts/pic'
  import picc from '../components/echarts/picc'
    export default {
      data(){
        return{
          dataText:[1,3,4,5,5,6]
        }
      },
      components:{
        bars,
        pic,
        picc,
      }
    }
</script>

<style scoped>
#left{
  height:700px;
  background-color: #ebeff2;
  clear:both ;
}
.el-col{
    padding:10px;
  }
  #hed{
    width:100%;
    height:40px;
    text-align: right;
    line-height: 45px;
    background-color: #ebeff2;
  }
</style>

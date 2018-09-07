<template>
    <div>
      <div class="block">
        <span class="demonstration">审批日期</span>
        <el-date-picker
          style="margin-right:20px"
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
        单据类型 <el-select v-model="form.region" placeholder="全部">
        <el-option label="全部" value="shanghai"></el-option>
        <el-option label="报销单" value="shanghai"></el-option>
        <el-option label="借款单" value="beijing"></el-option>
        <el-option label="申请单" value="beijing"></el-option>
        </el-select>
      </div>
      <div class="nav">
        <ul>
          <li>审批时间</li>
          <li>操作</li>
          <li>单据名称</li>
          <li>提交人</li>
          <li>单号</li>
          <li>单据类型</li>
          <li>单据金额</li>
        </ul>
      </div>
      <div class="num">暂无数据</div>

    </div>
</template>

<script>
    export default {
      data() {
        return {
          form:{
            region: '',
          },
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          value6: '',
          value7: ''
        };
      }
    }
</script>

<style scoped>
  span{
    margin-left:20px;
    margin-right:10px;
  }
  el-date-picker{
    border:1px solid red;
  }
  .nav{
    border:1px solid #e6e6e6;
    margin-top:10px;
    float:left;
    width:100%;
    height:50px;
    background: rgb(250,250,250);
  }
  ul{
    width:100%;
    height:50px;
    /*border:1px solid red;*/
    margin: 0px;
    padding:0px;
  }
  li{
    /*border:1px solid red;*/
    list-style: none;
    width:14%;
    height:50px;
    float:left;
    text-align: center;
    line-height: 50px;
  }
  .num{
    width:100%;
    height:50px;
    border:1px solid #e6e6e6;
    margin-top:62px;
    text-align: center;
    line-height: 50px;
  }
</style>

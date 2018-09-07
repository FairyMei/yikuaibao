<template>
    <div id="heade">

      <div class="wrap">
        <div class="hea-top">
          <span>权限配置管理</span>
        </div>
        <div class="hea-center">
          <el-table
            :border="true"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="权限"
              width="240">
              <template slot-scope="scope">
                <!--<i class="el-icon-time" ></i>-->
                <el-popover trigger="hover" placement="top">
                  <p>{{scope.row.content}}</p>
                  <div slot="reference" class="name-wrapper">
                    <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
                    <!--<i class="el-icon-question" ></i>-->
                    <el-col :span="20">
                      <div class="grid-content bg-purple">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="grid-content bg-purple-light">
                        <i class="el-icon-question" ></i>
                      </div>
                    </el-col>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="拥有该权限员工"
              width="1100">
              <template slot-scope="scope">
                <img src="../assets/table-img.svg" alt="">
                <span style="margin-left: 10px">{{ scope.row.power }}</span>
                <img src="../assets/alien.svg" alt="">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="compile(scope.$index, scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <selectpersonnel :selectpersonnel="selectpersonnel"></selectpersonnel>
    </div>
</template>

<script>
  import selectpersonnel from './selectpersonnel-hao'
  export default {
    data() {
      return {
        tableData: [{
          date: '系统管理',
          name: '王小虎',
          power: '主管理员 ,',
          content:'用于维护企业信息及数据，可为企业成员配置权限和进行角色组管理，对消费类型、模板、审批流、项目进行自定义。'
        }, {
          date: '费用报表管理',
          name: '王小虎',
          power: '财务主管 ,',
          content:'可管理企业费用报表。'
        }, {
          date: '报销单管理',
          name: '王小虎',
          power: '财务主管 ,',
          content:'可查看企业中所有报销单，并将其导出为Excel。'
        }, {
          date: '借款管理',
          name: '王小虎',
          power: '财务主管 ,',
          content:'可查看管理企业借款情况，对成员还款进行确认。'
        },{
          date: '申请管理',
          name: '王小虎',
          power: '财务主管 ,',
          content:'查看企业中的所有申请单以及它们的报销情况。'
        },{
          date: '预算管理',
          name: '王小虎',
          power: '财务主管 ,',
          content:'可编制企业预算，并管理预算可见性及控制方式'
        }],
        selectpersonnel:false,
      }
    },
    methods: {
      compile(index, row) {
        // console.log(index, row);
      this.selectpersonnel=row
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    components:{
      selectpersonnel
    }
  }
</script>

<style scoped>
.wrap{
  width: 98%;
  height: 660px;
  margin: 0 auto;
  margin-top: 18px;
  background-color: white;
}
  .hea-top{
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #ffffff;
  }
  .hea-top span{
    margin-left: 28px;
    font-size: 12px;
  }
  .hea-center .el-icon-question{
    color: #e49e4e;
    text-align: right;
  }
.hea-center img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>

<template>
    <div class="box">
      <div class="homepage-top">
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple management-fon">
              <span class="fon management">管理层</span>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple-light">
              <i class="el-icon-edit"></i>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <i class="el-icon-upload"></i>
            </div>
          </el-col>
          <el-col :span="1" style="width: 5%">
            <div class="grid-content bg-purple-light">
              <span class="fon" @click="bott" style="cursor:pointer">移动角色</span>
            </div>
          </el-col>
          <el-col :span="1" >
            <div class="grid-content bg-purple">
            <i class="el-icon-delete"></i>
            </div>
          </el-col>
          <el-col :span="1" style="width: 5%">
            <div class="grid-content bg-purple-light">
              <span class="fon" style="cursor:pointer" @click="deleteRole">删除角色</span>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="homepage-center">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="department"
            label="部门"
            width="360">
          </el-table-column>
          <el-table-column
            label="部门主管"
          width="600">
          <template slot-scope="scope">
            <img src="../assets/alien.svg" alt="">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
            <img src="../assets/alien.svg" alt="">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="btn">
      <el-button type="primary" @click="elbtn"><i class="el-icon-plus"></i>添加</el-button>

        <!--以下代码是对话框-->

        </div>
      <selectpersonnel :selectpersonne="selectpersonnel"></selectpersonnel>
      <mobileRole :mobileRol="mobilerole"></mobileRole>
      <deleteRole :deleteRol="deleterole"></deleteRole>

      <!--编辑的弹框-->

        <el-dialog
          title="选择人员"
          :visible.sync="select"
          width="30%"
          :before-close="elect">
          <hr>
          <div class="rap">
            <div class="top">
              <el-col :span="12">
                <el-input
                  size="medium"
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="state1">
                </el-input>
              </el-col>
            </div>
            <div class="center">
              <el-row>
                <el-col :span="11" style="clear: both"><div class="grid-content bg-purple">
                  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple-light">
                  <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    :border="true"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      label="全选">
                      <template slot-scope="scope">{{ scope.row.name }}</template>
                    </el-table-column>

                  </el-table>
                </div></el-col>
              </el-row>
              <div class="bottom">
                <!--动态编辑标签-->
                <div class="tab">
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClos(tag)">
                    {{tag}}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                </div>
              </div>
            </div>

          </div>
          <span slot="footer" class="dialog-footer">
    <el-button @click="select=false">取 消</el-button>
    <el-button type="primary" @click="select=false">确 定</el-button>
  </span>
        </el-dialog>

      <!--编辑结束的弹框-->
    </div>
</template>

<script>
  import selectpersonnel from './selectpersonnel'
  import mobileRole from './mobileRole'
  import deleteRole from './deleteRole'
    export default {
        name: "homepage",
      data() {
        return {
          tableData: [{
            department: '技术部门',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            department: '人事部门',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }],
          selectpersonnel:false,
          mobilerole:false,
          deleterole:false,

          // 编辑的弹框
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          },
          state1: '',
          tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          //动态编辑标签
          dynamicTags: ['标签一', '标签二', '标签三'],
          inputVisible: false,
          inputValue: '',
          select:false,
          //动态编辑
          multipleSelection: [],
        }
      },
      components:{
        selectpersonnel,
        mobileRole,
        deleteRole
      },
      methods:{
        elbtn(){
          this.selectpersonnel=!this.selectpersonnel

          console.log(this.selectpersonnel)
        },
        bott(){
          this.mobilerole=!this.mobilerole
        },
        deleteRole(){
          this.deleterole=!this.deleterole

        },
        handleEdit(index, row) {
          // console.log(index, row);
          this.select=true
        },
        handleDelete(index, row) {
          console.log(row);
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },

        // 编辑的事件
        elect(ele) {
          ele();
        },
        handleNodeClick(data) {
          console.log(data);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        //动态编辑标签
        handleClos(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },

        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamicTags.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
        // dialogVisible(done){
        //   done();
        // }
      }
    }
</script>

<style scoped>
  .box{
    height: 620px;
    background-color: white;
  }
  .management{
    text-align: right;
  }
.homepage-top{
  height: 54px;
  line-height: 54px;
  background-color: white;
}
  .fon{
    font-size: 12px;
  }
  .el-icon-upload,.el-icon-delete{
    margin-left: 22px;
  }
  .management-fon{
    margin-left: 40px;
  }
  .homepage-center img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .btn .el-button{
    color: #32b5c5;
    background-color: white;
    margin-top: 20px;
    width: 80px;
    height: 35px;
    font-size: 12px;
    margin-left: 20px;
  }
  .btn .el-icon-plus{
    margin-left: -5px;
  }

  /*编辑的css*/
  .rap{
    height: 400px;
  }
</style>

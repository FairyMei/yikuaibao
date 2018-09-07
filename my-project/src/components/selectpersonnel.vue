<template>
    <div>
      <el-dialog
        title="选择人员"
        :visible.sync="selectpersonne"
        width="30%"
        :before-close="hand">
        <hr>
        <div class="box">
          <div class="top">
            <el-col :span="12">
              <el-input
                size="mini"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="state1">
              </el-input>
            </el-col>
          </div>
          <div class="center">
            <el-row>
              <el-col :span="11"><div class="grid-content bg-purple">
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
    <el-button @click="selectpersonne=false">取 消</el-button>
    <el-button type="primary" @click="selectpersonne=false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      props:{
        selectpersonne:{
          default:false
        }
      },
      mounted(){

      },
      data() {
        return {
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
          // dialogVisible: false,
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
          //动态编辑
          multipleSelection: []
        };
      },
      methods: {
        hand(done) {
          this.selectpersonne=false
          this.$emit('selectpersonne',this.selectpersonne)
          // done();
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
        hand(done){
          done();
        }
      },

    }
</script>

<style scoped>
.box{
  height: 460px;

}
  .top{
    width: 100%;
    height: 60px;
    /*line-height: 60px;*/
    border-bottom: 1px solid #e6e6e6;
  }
  .center{
    border: 1px solid #dcdcdc;
  }
  .bottom{
    width: 100%;
    height: 110px;
    border: 1px solid #dcdcdc;
    margin: 0 auto;
    margin-top: 80px;
  }
  /*动态编辑标签的样式*/
.el-tag + .el-tag {
  margin-left: 10px;

}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  /*line-height: 30px;*/
  padding-top: 0;
  padding-bottom: 0;

}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
  /*.tab{*/
    /*margin-top: -20px;*/
  /*}*/
</style>

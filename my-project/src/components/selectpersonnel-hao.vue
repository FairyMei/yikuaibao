<template>
    <div class="selectpersonnel-hao">
      <el-dialog
        title="选择人员"
        :visible.sync="selectpersonnel"
        width="30%"
        :before-close="handleClose">
        <hr>
        <div class="box">
          <div class="top">
            <el-col :span="12">
              <el-input
                size="medium"
                placeholder="搜索员工"
                suffix-icon="el-icon-search"
                v-model="state1">
              </el-input>
            </el-col>
          </div>
          <div class="center">
            <el-tabs v-model="activeName" @tab-click="handleClick" value="first">
              <el-tab-pane label="部门成员" name="first">
                <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">


                  <el-collapse accordion @change="select">
                    <el-collapse-item >
                      <template slot="title">
                        <div class="navigation-head"><i class="el-icon-caret-right"></i><i class="el-icon-menu"></i>软件</div>
                      </template>
                      <el-row class="fon">
                        <el-col :span="8"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light" @click="bbb"><span>主管理员</span></div></el-col>
                      </el-row>

                      <el-row style="margin-top: 20px" class="fon">
                        <el-col :span="8"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light" @click="aaa"><span>部门主管</span></div></el-col>
                      </el-row>

                    </el-collapse-item>
                  </el-collapse>


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
              </el-tab-pane>
              <el-tab-pane label="角色" name="second">

                <el-collapse accordion>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="el-icon-caret-right"></i>未分组
                    </template>
                    <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                    <el-col :span="19"><div class="grid-content bg-purple-light"><span>主管理员</span></div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked"></el-checkbox></div></el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>部门主管</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked1"></el-checkbox></div></el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>自定义姓名</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked2"></el-checkbox></div></el-col>
                    </el-row>
                  </el-collapse-item>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="el-icon-caret-right"></i>大小
                    </template>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>郭美洁</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked3"></el-checkbox></div></el-col>
                    </el-row>
                  </el-collapse-item>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="el-icon-caret-right"></i>岗位
                    </template>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>普通员工</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked4"></el-checkbox></div></el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>管理层</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked5"></el-checkbox></div></el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>高级管理者</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked6"></el-checkbox></div></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>中层员工</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked7"></el-checkbox></div></el-col>
                    </el-row>
                  </el-collapse-item>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="el-icon-caret-right"></i>职务
                    </template>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>人事</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked8"></el-checkbox></div></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>经理</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked9"></el-checkbox></div></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple"></div><i class="el-icon-document"></i></el-col>
                      <el-col :span="19"><div class="grid-content bg-purple-light"><span>出纳</span></div></el-col>
                      <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox v-model="checked10" @change="ddd" true-label=出纳></el-checkbox></div></el-col>
                    </el-row>

                  </el-collapse-item>
                </el-collapse>


              </el-tab-pane>

            </el-tabs>
          </div>
            <div class="bottom">
                <!--动态编辑标签-->
              <div class="tab">
              <el-tag
                :key="tag"
                size="mini"
                color="transparent"
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
        <span slot="footer" class="dialog-footer affirm">
    <el-button @click="selectpersonnel=false">取 消</el-button>
    <el-button type="primary" @click="selectpersonnel=false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      props:{
        selectpersonnel:{}
      },
        name: "selectpersonnel",
      data() {
        return {
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
          multipleSelection: [],
          activeName: 'second',
          checked: false,
          checked1: false,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false,
          checked6: false,
          checked7: false,
          checked8: false,
          checked9: false,
          checked10: false,
        };
      },
      methods: {
        handleClose(done) {
          done();
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        //动态编辑标签
        handleClos(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          alert(1)
          this.checked10=false
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
        dialogVisible(done){
          done();
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        bbb(){
          alert(1)
        },
        aaa(){
          alert(2)
        },
        select(){
          if (this.i.class=="el-icon-caret-right"){
            this.i.class="el-icon-caret-bottom"
          }
        },
        ddd(item){
            console.log(item)
            this.dynamicTags.push(item)

        }
      },
      mounted() {

      }
    }
</script>

<style scoped>
.box{
  height: 400px;

}
  .top{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
  }
  .center{
    border: 1px solid #dcdcdc;
    height: 353px;
  }
  .bottom{
    width: 400px;
    height: 90px;
    border: 1px solid #dcdcdc;
    margin: 0 auto;
    margin-top: 11px;
  }
  /*动态编辑标签的样式*/
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.fon:hover{
  color: #32b5c5;
  cursor: pointer;
}
.navigation-head{
  color: #32b5c5;
}
</style>

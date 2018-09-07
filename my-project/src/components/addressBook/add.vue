<template>
    <div class="box1">
      <div class="head-top">
        <el-col :span="1"><div class="grid-content bg-purple">
          <i class="el-icon-back" @click="btn"></i>
        </div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple-light">
          <span class="fon">添加新员工</span>
        </div></el-col>
      </div>
      <div class="head-center">
        <el-row style="height: 68px;line-height: 68px;clear: both">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>姓名：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>工号：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model="input1" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>手机：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model="input2" placeholder="请输入手机号" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>邮箱：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model="input3" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>备注：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model="input4" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>部门：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <div class="select">


              <el-tag
                size="mini"
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
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
          </div></el-col>
        </el-row>


        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="24"><div class="grid-content bg-purple">
            <el-button type="primary" @click="addBtn">保存并继续添加</el-button>
          </div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            input:'',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''

          }
        },
      methods:{
        handleClose(tag) {
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
        btn(){
          // this.$router.go(-1);
            this.$confirm('人员信息尚未保存,是否放弃编辑当前人员信息?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$router.go(-1);
            }).catch(() => {

            });
        },
        addBtn(){
          if (this.input==''){
            // alert(1)
            this.$message.error('输入存在错误: - 请输入名称');
          }else if (this.input2==''){
            this.$message.error('输入存在错误: - 请输入手机号');
          }else if (this.input3==''){
            this.$message.error('输入存在错误: - 请输入邮箱');
          }
        }
      }
    }
</script>

<style scoped>
.box1{
  width: 100%;
  height: 860px;
  background-color: white;
}
.head-top{
  height: 64px;
  line-height: 64px;
  border: 1px solid #e6e6e6;
}
  .select{
    overflow: scroll;
    /*overflow: hidden;*/
    width: 400px;
    height: 40px;
    border: 1px solid #e6e6e6;
    margin-top: 11px;
  }
  /*标签页的css*/
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
/*标签页的css*/
  .fon{
    font-size: 12px;
  }
</style>

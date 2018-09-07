<template>
    <div class="box1">
      <div class="head-top">
        <el-col :span="1"><div class="grid-content bg-purple">
          <i class="el-icon-back" @click="btn"></i>
        </div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple-light">
          <span class="fon">编辑员工</span>
        </div></el-col>
      </div>

      <div class="head-center">
        <el-row style="height: 68px;line-height: 68px;clear: both">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>姓名：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-input v-model='input' placeholder="请输入内容" size="mini"></el-input>
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
            <el-input v-model="input2" placeholder="请输入内容" :disabled="true" size="mini"></el-input>
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
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>权限：</span>
          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple-light">
            <el-tooltip placement="top">
              <div slot="content">用于维护企业信息及数据，可为企业成员配<br/>置权限和进行角色组管理，对消费类型、模<br/>板、审批流、项目进行自定义。</div>
              <el-button>系统管理</el-button>
            </el-tooltip>
          </div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <el-tooltip placement="top">
              <div slot="content">可管理企业费用报表。</div>
              <el-button>费用报表管理</el-button>
            </el-tooltip>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px;clear: both">
          <el-col :span="2"><div class="grid-content bg-purple">
            <span>角色：</span>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <span>管理层</span>
          </div></el-col>
        </el-row>

        <el-row style="height: 68px;line-height: 68px">
          <el-col :span="2"><div class="grid-content bg-purple">
            <el-button type="primary">保存</el-button>
          </div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light">
            <el-button>移除员工</el-button>
          </div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import bus from '../../assets/eventBus'
    export default {
        data(){
          return{

            input:'',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            // dynamicTags: ['标签一', '标签二', '标签三'],
            dynamicTags:[],
            inputVisible: false,
            inputValue: '',
            dataObj:{},

          }
        },
    created(){
         console.log( this.$route.query.email)
      this.input =this.$route.query.name
      this.input1 =this.$route.query.date
      this.input2 =this.$route.query.phones
      this.input3=this.$route.query.email
      this.input4=this.$route.query.remark
      this.dynamicTags=this.$route.query.department
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
          // if (this.) {
            this.$confirm('人员信息尚未保存,是否放弃编辑当前人员信息?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$router.go(-1);
            }).catch(() => {

            });
          // }
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

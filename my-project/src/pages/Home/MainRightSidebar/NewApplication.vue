<template>
  <!--新建申请页面-->
  <div id="reimbursement">
    <div class="title">
      <span class="title-bill">新建申请单:</span>
    </div>

    <div class="content1">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
        <div class="content-content" style="height: 450px;overflow: auto">
          <div style="border-bottom: 1px solid #e6e6e6">
            <el-form-item label="单据类型" size="medium">
              <el-select   filterable v-model="billType" style="width: 80%;">
                <!--<el-option label="差旅报销单" value="shanghai"></el-option>-->
                <!--<el-option label="日常报销单" value="beijing"></el-option>-->
                <el-option
                  v-for="item in billList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>


            <el-form-item label="标题" prop="name" size="medium">

              <el-input  v-model="ruleForm.name" placeholder="请输入活动标题"  style="width: 80%;"></el-input>

            </el-form-item>

            <div @click="submitClick">
              <el-form-item label="提交人" prop="submit" size="small ">

                <el-input  v-model="ruleForm.submit"   style="width: 80%;"></el-input>

              </el-form-item>
            </div>

            <el-form-item label="申请时间" required>
              <!--required prop="resource"-->
              <el-form-item prop="date1" size="small "  >
                <el-date-picker
                  v-model="ruleForm.date1"
                  type="date"
                  placeholder="选择日期" style="width:80%;">
                </el-date-picker>
                <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="text-align: left"></el-date-picker>-->
              </el-form-item>

            </el-form-item>

          </div>

          <div class="travel">
            <h3>差旅行程</h3>


                <p><el-button @click="addTravel1" type="primary" plain @addTravelIsShow="addTravelIsShow">添加行程</el-button></p>


            <!--<button type="button" class="ant-btn add-button" @click="addTravel"><span>添加行程</span></button>-->
          </div>




        </div>

        <div class="billFooter">
          <el-form-item>
            <el-button @click="deleteForm">删除</el-button>
            <el-button @click="saveForm('ruleForm')">保存</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">提交送审</el-button>
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </div>

      </el-form>

    </div>



<!--添加行程的dialog-->
    <add-travel :addTravelVisible="addTravelShow" @travel="closeTravel"></add-travel>

    <!--提交人的编辑的弹框-->

    <el-dialog
      title="选择人员"
      :visible.sync="dialogVisib"
      width="35%"
      :before-close="handleCl">
      <!--<span>这是一段信息</span>-->
      <div class="wrap">
        <div class="wrap-top">
          <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input9">
          </el-input>
        </div>
        <div class="wrap-center">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="label"
            ref="tree"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            @check-change="getCheckedKeys"
          >
            <!--@check-change="handleCheckChange"-->
          </el-tree>
        </div>
        <div class="wrap-bo">

          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleCloses(tag)">
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
          <!--<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->

        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisib = false">取 消</el-button>
    <el-button type="primary" @click="submitPerson">确 定</el-button>
  </span>
    </el-dialog>

    <!--编辑结束的弹框-->
  </div>
</template>

<script>
  import AddTravel from '../../../components/AddTravel'

  export default {
    data(){
      return{
        billType:'',
        ruleForms:{
          date2:''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          delivery: false,
          type: [],
          resource: '',
          submit:'',
          department:'',
          information:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 4, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          submit:[
            {required: true, message: '请填写提交人', trigger: 'change'}
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          department: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          information: [
            { required: true, message: '请填写收款信息', trigger: 'change' }
          ],
        },
        billList:[
          {
            value: '差旅报销单',
            lable:'travel'
          },
          {
            value: '日常报销单',
            lable:'normol'
          },
        ],
        detailed:[],
        money:'0.00',


        isDisabled:true,
        multipleSelection:[],

        editShow:false,
        // dialogVisibleApplication:false,
        // dialogVisibleApplications:false,

        addTravelShow:false,


        //  导出
        activeIndex: '1',



        //  选择人员编辑框
        dialogVisib:false,
        input9:'',
        //选择部门的数据
        data2: [{
          id: 1,
          label: '软件',
          flag:0,
          children: [{
            id: 9,
            label: '人事',
            flag:1,
          }, {
            id: 10,
            label: '人事部门',
            flag:1,
          }, {
            id: 11,
            label: '技术部门',
            flag:1,
          }]

        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        // 动态页签
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        testdata:[],
      //结束
      }
    },
    methods:{
      //点击确定
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // }

      //报销明细
      handleCommand(command) {
        this.$message('click on item ' + command);
      },

      //删除表单
      deleteForm(){
        this.$confirm('您是否确认要删除该单据？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      //保存表单
      saveForm(){
        this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success'
        });
      },
      //提交人事件
      submitClick(){
        alert(1)
      },



      //  d导出
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      //添加行程
      addTravel1(){
        this.addTravelShow = true
        console.log(this.addTravelShow)

      },
      closeTravel(){
        this.addTravelShow = false
        return false
      },
      addTravelIsShow(addTravelIsShow){
        console.log(addTravelIsShow)
      },




      //编辑开始
      submitClick(){
        this.dialogVisib = true
      },


      // 编辑的事件
      handleCl(done) {
        done();
      },
      // 动态页签
      handleCloses(tag) {
        // console.log(this.$refs.tree.getCheckedNodes())
        // var arr=this.$refs.tree.getCheckedNodes()
        // arr.map(function (item,index) {
        //   if(item.label==tag){
        //     arr.splice(index,1)
        //     console.log(arr)
        //   }
        // })
        // this.$refs.tree.setCheckedNodes(arr);
        // console.log(tag)
        this.$refs.tree.setChecked(tag,false,false);


        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        // if(this.testdata.length>0){
        //   alert(1)
        //   // this.testdata.checked=false
        // }
      },


      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      // handleCheckChange(data,checked){
      //   console.log(data,checked)
      //   if(checked=true){
      //     this.dynamicTags.push(data.label)
      //     // console.log(data.label)
      //   }
      //
      // },
      //提交人的二级联动
      getCheckedKeys(obj,node,subNode) {

        if(obj.flag==1&&node==true){
          this.dynamicTags.push(obj.label)
        }
        else if(obj.flag==1&&node==false){
          this.dynamicTags.map((sub,subIndex)=>{
            if(obj.label==sub){
              this.dynamicTags.splice(subIndex,1)
            }
          })
        }
        this.testdata=this.$refs.tree.getCheckedKeys()
      },
      //  提交人事件
      submitPerson(){
        if(this.testdata.length>0){
          this.ruleForm.submit=this.testdata.join('-')
          this.dialogVisib = false
        }else {
          alert("请选择提交人")
        }
      },
    },

    components:{
     AddTravel
    }
  }
</script>

<style scoped>
  #reimbursement{ }
  .title{ height: 50px; line-height: 50px; border-bottom: 1px solid #e6e6e6; }
  .title .title-bill{ padding-left: 20px; font-size: 14px; font-weight: bold;}
  /*表单样式*/
  .content1{height: 400px; margin: 0;padding: 0; padding-top:20px;background-color: #fff;}
  /*.content1 .el-form{   margin: 20px auto; }*/

  .content1  .billFooter{ text-align: right;height: 60px; padding-top: 10px; border-top: 1px solid #e6e6e6;}
  .content1  .billFooter .el-button{margin-top: 15px;}

  .content1 .detailed-all-content-top .add-button{ display: inline-block; cursor: pointer; height: 20px; line-height: 20px;   border: 1px solid #b9e6eb;border-radius: 2px; }

  .content1 .travel{
    padding-left: 100px }
.content1 .travel h3{
  font-size: 14px;
  color: #6c6c6c;
  margin-bottom: 18px;
  font-weight: 400;
}





  /*添加行程*/
  .applicationList ul{ padding: 0;margin: 0;}
  .applicationList ul li{  list-style: none;cursor: pointer; display: flex;   padding: 0 25px;vertical-align: middle; }
  .applicationList .repeata h4 {
    font-size: 13px;
    font-weight: 500;
    color: #333;
  }


  /*提交人页面*/

  .wrap{
    width: 100%;
    height: 520px;
    border: 1px solid #dcdcdc;
    margin: 0 auto;
  }
  .wrap-top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dcdcdc;
  }
  .wrap-center{
    height: 350px;
  }
  .wrap-bo{
    height: 110px;
    border: 1px solid #dcdcdc;
  }
  .compile{
    width: 100%;
    height: 200px;
    background-color: #fbfbfb;
  }
  /*隐藏滚动条*/
  .content-content::-webkit-scrollbar {
    display: none;
  }

</style>

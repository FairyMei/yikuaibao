<template>
  <!--新建借款页面-->
  <div id="reimbursement">
    <div class="title">
      <span class="title-bill">新建借款单:</span>
    </div>

    <div class="content">
      <!--验证表单内容-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm"size="mini"  >
        <div class="content-content" style="height: 450px;overflow: auto">
          <div style="border-bottom: 1px solid #e6e6e6">
            <div class="typeTop">
              <el-form-item label="单据类型"  size="medium">
                <el-select    filterable v-model="billType" style="width: 80%;" >
                  <!--<el-option label="差旅报销单" value="shanghai"></el-option>-->
                  <!--<el-option label="日常报销单" value="beijing"></el-option>-->
                  <el-option
                    v-for="item in billList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>


              <el-form-item label="标题" prop="name" >

                <el-input  v-model="ruleForm.name" placeholder="请输入活动标题"  style="width: 80%;"></el-input>

              </el-form-item>

              <div  @click="submitClick">
                <el-form-item label="提交人" prop="submit">

                  <el-input  v-model="ruleForm.submit"   style="width: 80%;">郭美杰</el-input>

                </el-form-item>
              </div>

              <el-form-item label="借款部门" prop="department">

                <el-select v-model="ruleForm.department" style="width: 80%;">

                  <el-option label="半情调" value="shanghai"></el-option>
                  <el-option label="2" value="beijing"></el-option>

                </el-select>
              </el-form-item>

            </div>



            <div class="loan-money">
              <el-form-item label="金额"  prop="money" style="width: 84%;"  >
                <el-input placeholder="请输入金额"  v-model="ruleForm.money">
                  <template slot="prepend">CNY</template>
                </el-input>
              </el-form-item>

              <el-form-item label="借款日期" required>
                <!--required prop="resource"-->
                <el-form-item prop="date1"  >
                  <el-date-picker
                    v-model="ruleForm.date1"
                    type="date"
                    placeholder="选择日期" style="width:80%;">
                  </el-date-picker>
                  <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="text-align: left"></el-date-picker>-->
                </el-form-item>

              </el-form-item>

              <el-form-item label="还款日期" >
                <!--required prop="resource"-->
                <el-form-item prop="date2"  >
                  <el-date-picker
                    v-model="ruleForm.date2"
                    type="date"
                    placeholder="选择日期" style="width:80%;">
                  </el-date-picker>
                  <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="text-align: left"></el-date-picker>-->
                </el-form-item>

              </el-form-item>
            </div>






            <div class="message">
              <div @click="messageClick" style="cursor: pointer">
                <el-form-item label="收款信息" prop="information">
                  <el-input  v-model="ruleForm.information"   style="width: 80%;" ></el-input>
                </el-form-item>
              </div>
              <el-form-item label="描述" >
                <el-input type="textarea" style="width: 80%;"></el-input>
              </el-form-item>
            </div>

            <div class="other">

              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList">
                <span class="other-title">附件  </span>
                <el-button size="small" >点击上传</el-button>
                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>

            </div>

          </div>


          <div class="detailed" >


          </div>

          <div class="money" style="height:45px; background-color: #fbfbfb;border-bottom: 1px solid #e6e6e6">
            <span class="money-content">支付金额</span>
            <span class="money-money">￥{{ruleForm.money}}</span>
          </div>
        </div>
        <!--尾部-->
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

    <!--收款信息的dialog-->
    <receive :dialogVisible="dialogShow" @dialogEvent="dialogHidden"></receive>


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
  import receive from '../../../components/commen/receive'

  export default {
    data(){
      return{
        //表单验证
        billType:'',
        ruleForm: {
          name: '',
          region: '',
          date1:'',
          date2:'',
          delivery: false,
          type: [],
          resource: '',
          submit:'',
          department:'',
          information:'',
          money:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 4, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          money:[
            {required: true, message: '请重新输入',validator:(rule,value,callback)=>{
                if(value != ""){
                  if((/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value) == false){
                    callback(new Error("请填写大于0的数字"));
                  }else{
                    callback();
                  }
                }else{
                  callback();
                }

              },trigger: 'blur'}
          ],
          submit:[
            {required: true, message: '请填写提交人', trigger: 'change'}
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],

          department: [
            { required: true, message: '请选择借款部门', trigger: 'change' }
          ],
          information: [
            { required: true, message: '请填写收款信息', trigger: 'change' }
          ],
        },
        billList:[
          {
            value: '借款单',
            lable:'travel'
          },

        ],
        money:'0.00',
        //借款页面
        fileList:[],
        input3:'',

        //显示隐藏
        dialogShow:false,
        dialogVisible:false,



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



      }
    },
    methods: {
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
      //收款信息的显示
      messageClick() {
        this.dialogShow = true
      },
      //组件的事件
      dialogHidden() {
        this.dialogShow = false
      },


      //报销明细
      handleCommand(command) {
        this.$message('click on item ' + command);
      },

      //删除表单
      deleteForm() {
        this.$confirm('您是否确认要删除该单据？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      //保存表单
      saveForm() {
        this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success'
        });
      },


      //上传
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },

      //  d导出
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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

        // if(obj.flag==0&&node==true){
        //   console.log(obj.flag);
        //     // this.dynamicTags.push(obj.label)
        //   obj.children.map(()=>{
        //
        //   })
        // }













        // if(obj.flag==0&&node==true){
        //   node.children.map((item)=>{
        //     this.dynamicTags.push(item.label)
        //   })
        // }else
        if(obj.flag==1&&node==true){
          this.dynamicTags.push(obj.label)
        }
        // else if(node==false&&obj.flag==0&&subNode==false){
        //   obj.children.map((item,index)=>{
        //     this.dynamicTags.map((sub,subIndex)=>{
        //       if(item.label==sub){
        //         this.dynamicTags.splice(subIndex,1)
        //       }
        //     })
        //   })
        // }
        else if(obj.flag==1&&node==false){
          this.dynamicTags.map((sub,subIndex)=>{
            if(obj.label==sub){
              this.dynamicTags.splice(subIndex,1)
            }
          })
        }
        // else if(obj.flag==0&&node==true&&subNode==true){
        //   this.dynamicTags.push(obj.label)
        // }
        // console.log(this.$refs.tree.getCheckedKeys(leafOnly));
        this.testdata=this.$refs.tree.getCheckedKeys()
        //  this.dynamicTags.push(this.$refs.tree.getCheckedKeys())
      },
      //  提交人事件
      submitPerson(){
        if(this.testdata.length>0){
          this.ruleForm.submit=this.testdata.join('-')
          this.dialogVisib = false
        }else {
          alert(1)
        }
      },

    },
    components:{
      // EditConsume
      receive
    }
  }
</script>

<style scoped>
  #reimbursement{ }
  .title{ height: 50px; line-height: 50px; border-bottom: 1px solid #e6e6e6; }
  .title .title-bill{ padding-left: 20px; font-size: 14px; font-weight: bold;}
  .content{}
  .content .el-form{   margin: 20px auto; }
  .content .el-form .el-form-item{  }
  /*借款页面*/
  .content .typeTop,.loan-money,.message,.other{ border-bottom: 40px; border-bottom: 1px solid #e6e6e6 ;padding: 10px;}
  .content .other{ padding-left: 175px; }
  .content .other .other-title{ font-size: 14px; }


  .content .money { text-align: right;line-height: 45px }
  .content .money .money-content{ margin-right: 35px;}
  .content .money .money-money{ margin-right: 35px;}

  .content  .billFooter{ text-align: right;height: 60px; padding-top: 10px; border-top: 1px solid #e6e6e6;}
  .content  .billFooter .el-button{margin-top: 15px;}

  .content .detailed-all-content-top, .detailed-all-content-bottom{ padding-left:20px; }
  .content .detailed-all-content-top .add-button{ display: inline-block; cursor: pointer; height: 20px; line-height: 20px;   border: 1px solid #b9e6eb;border-radius: 2px; }
  .content .detailed-all-content-top .import-detail{ padding: 2px 16px; }
  /*导入*/
  /*.content .detailed-all-content-top .ant-dropdown-trigger{  }*/
  .el-menu--horizontal>.el-submenu{ float: none;}
  /*.el-menu--horizontal>.el-submenu .el-submenu__title {height: 21px ;line-height: 20px;}*/

  /*移除明细*/
  .content .detailed-all-content-top .line{ width: 1px;height: 20px;background-color: #e6e6e6;margin: -6px 12px; }
  .content .detailed-all-content-top .action-disabled{    margin-right: 8px;padding: 2px 16px;border-radius: 2px;background-color: #f7f7f7;border: 1px solid #ebebeb;color: #9e9e9e; cursor: pointer;}

  .content  .detailed-all .item-icon{ float:left;margin-left: 8px;margin-right: 12px;margin-top: 12px;width: 28px;height: 28px;border-radius: 28px;overflow: hidden;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;}
  .content  .detailed-all .item-main{ width: 90%;float: right;    margin-top: -40px;
    margin-left: 515px;padding-left: 10px;display:flex;padding-right: 16px;position: relative;justify-content: space-between;align-items: flex-start;flex: 1;overflow-x: hidden;border-top: 1px solid rgba(0,0,0,.08);}
  .content  .detailed-all .item-main .moneyList{ padding-top: 10px; }
  .content  .detailed-all .item-main .contentList{overflow: hidden;padding: 12px 0;flex: 1;color: rgba(0,0,0,.45);}
  .content  .detailed-all .item-main .contentList .name{    text-overflow: ellipsis;white-space: nowrap;overflow: hidden;font-size: 14px;color: rgba(0,0,0,.65);}
  .content  .detailed-all .item-main .contentList .dateTime{ margin: 4px 0px; }
  .content  .detailed-all .item-main .contentList .text{font-size: 12px;line-height: 1.5;text-align: justify;color: #696d6d;word-break: break-all; }

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

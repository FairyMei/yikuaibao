<template>
  <!--新建报销页面-->
    <div id="reimbursement">
           <div class="title">
             <span class="title-bill">新建报销单:</span>
           </div>

      <div class="content">
<!--表单验证-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
          <div class="content-content" style="height: 450px;overflow: auto">
          <div style="border-bottom: 1px solid #e6e6e6">
          <el-form-item label="单据类型">
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
          <el-form-item label="标题" prop="name">
            <el-input  v-model="ruleForm.name" placeholder="请输入活动标题"  style="width: 80%;"></el-input>
          </el-form-item>
           <div @click="submitClick">
          <el-form-item label="提交人" prop="submit">

            <el-input  v-model="ruleForm.submit"   style="width: 80%;"></el-input>

          </el-form-item>
           </div>
          <el-form-item label="报销时间" required>
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
          <el-form-item label="报销部门" prop="department">

            <el-select v-model="ruleForm.department" style="width: 80%;">

              <el-option label="1" value="shanghai"></el-option>
              <el-option label="2" value="beijing"></el-option>

            </el-select>
          </el-form-item>
          <el-form-item label="收款信息" prop="information">
            <el-input  v-model="ruleForm.information"   style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="描述" >
            <el-input type="textarea" style="width: 80%;"></el-input>
          </el-form-item>
          </div>


          <div class="detailed" >
<div>
             <div class="detailed-title">
               <span>报销明细  </span>
               <!--<a >(1条)</a>-->
               <!--<el-dropdown @command="handleCommand"  size="small">-->
                  <!--<span class="el-dropdown-link" >-->
                    <!--明细列表-->
                  <!--</span>-->
               <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                 <!--<el-dropdown-menu slot="dropdown">-->
                   <!--<el-dropdown-item command="a">明细列表</el-dropdown-item>-->
                   <!--<el-dropdown-item command="b">表格展示</el-dropdown-item>-->
                 <!--</el-dropdown-menu>-->
               <!--</el-dropdown>-->

             </div>

  <div class="amount" v-show="totalShow">
    <span class="text1">报销总额:</span>
    <div class="money-wrap___36SvN " style="color: rgb(221, 141, 83);">
      <span class="currency" style="font-size: 12px;">¥</span>
      <span class="value" style="font-size: 16px;">{{fullMoney}}</span>
    </div>
  </div>

</div>

            <div class="detailed-all" >

              <div class="detailed-all-content-top">
                <!--       :indeterminate="isIndeterminate"   @click="checkedAll"-->
              <el-checkbox class="quanxuan"  v-model="checkAll" @change="handleCheckAllChange"  style="margin-right: 8px">全选</el-checkbox>
                <span class="add-button" @click="addButton"><span class="import-detail"><img width="12" style="margin-right: 6px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPHBhdGggZmlsbD0iIzMyQjVDNSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDc2IDQ3NkgxMDBjLTE5Ljg4MiAwLTM2IDE2LjExOC0zNiAzNnMxNi4xMTggMzYgMzYgMzZoMzc2djM3Ny41YzAgMTkuMDU0IDE1LjQ0NiAzNC41IDM0LjUgMzQuNWgzYzE5LjA1NCAwIDM0LjUtMTUuNDQ2IDM0LjUtMzQuNVY1NDhoMzc2YzE5Ljg4MiAwIDM2LTE2LjExOCAzNi0zNnMtMTYuMTE4LTM2LTM2LTM2SDU0OFY5OC41YzAtMTkuMDU0LTE1LjQ0Ni0zNC41LTM0LjUtMzQuNWgtM0M0OTEuNDQ2IDY0IDQ3NiA3OS40NDYgNDc2IDk4LjVWNDc2eiIvPgo8L3N2Zz4K" >添加明细</span></span>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="display: inline-block;border: none;height: 26px ;">

                  <el-submenu index="1" style="border: 1px solid #b9e6eb; border-radius: 2px;height: 22px ;padding-top: 5px; margin-top:-20px;">
                    <template slot="title" style="height: 10px;">
                      <img width="12" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPHBhdGggZmlsbD0iIzMyQjVDNSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOTYwIDY1MS4xM2gtLjI3NHYxODUuMzI3YzAgNjguMjI1LTU1LjMyNCAxMjMuNTQzLTEyMy41NTUgMTIzLjU0M0gxODcuNTQzQzExOS4zMTggOTYwIDY0IDkwNC42ODIgNjQgODM2LjQ1N1YxODcuODU0YzAtNjguMjU2IDU1LjMxOC0xMjMuNTggMTIzLjU0My0xMjMuNThoMTg1LjMyMlY2NGg5MC40MTZ2LjQ2NmgyOTIuNjM1bC04OS4wOSA4OS4wMjVIMjE2LjMyOWMtMzQuMDc3IDAtNjEuNzM1IDI3LjY1Ny02MS43MzUgNjEuNzR2NTkzLjY1M2MwIDM0LjA3NiAyNy42NTggNjEuNzY0IDYxLjczNSA2MS43NjRoNTkyLjQzM2MzNC4wODMgMCA2MS43NDEtMjcuNjYzIDYxLjc0MS02MS43NjRWMzU4LjI3TDk2MCAyNjkuMzE5djM4MS44MXptLTUzMS4xNDgtMTMuNzloMTc2LjQ3YzE5LjA1NSAwIDM0LjUgMTUuNDQ3IDM0LjUgMzQuNXYyMC4zNTNjMCAxOS4wNTMtMTUuNDQ1IDM0LjUtMzQuNSAzNC41SDMxMy4xOTRjLTE5LjA1NCAwLTM0LjUtMTUuNDQ3LTM0LjUtMzQuNXYtMjkwLjg5YzAtMTkuMDUzIDE1LjQ0Ni0zNC41IDM0LjUtMzQuNWgyMC4zNTFjMTkuMDU0IDAgMzQuNSAxNS40NDcgMzQuNSAzNC41djE3MC40ODNMODM0Ljk1IDEwNC44ODJjMTMuNjY4LTEzLjY2OSAzNS44MjktMTMuNjY5IDQ5LjQ5NyAwbDEzLjY4NCAxMy42ODNjMTMuNjY4IDEzLjY2OSAxMy42NjggMzUuODMgMCA0OS40OThMNDI4Ljg1MiA2MzcuMzQxeiIvPgo8L3N2Zz4K" alt="">   导入
                    </template>
                    <el-submenu index="1-2">
                      <template slot="title">发票消费</template>
                      <el-menu-item index="1-2-1">手录发票</el-menu-item>
                      <el-menu-item index="1-2-2">PDF发票</el-menu-item>
                    </el-submenu>

                    <el-submenu index="1-3">
                      <template slot="title">第三方消费</template>
                      <el-menu-item index="1-3-1">滴滴出行</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="1-4">excel导入</el-menu-item>
                  </el-submenu>
                </el-menu>

                <!--<span class="line" style="display: inline-block"></span>-->
                <!--<span class="action-disabled" :disabled="isDisabled" >费用分摊</span>-->
                <!--<span class="action-disabled" :disabled="isDisabled" >移除明细</span>-->
              </div>
              <div class="detailed-all-content-bottom">
                <el-checkbox  v-for="(content,index) in cities" :key="index" v-model='content.checkModel' @change="handleCheckedChange">
                  <i @click="delItem(index)" class="el-icon-delete item-icons"></i>
                  <ul style="padding: 0;margin-left: 10px; width: 110%;">
                    <li style="list-style: none;width: 100%;height: auto;" >
                      <div class="item-icon" style="background: rgb(144, 202, 249)">
                      <img width="28" height="28" src="http://images.ekuaibao.com/feetype/sf_1400.png" alt="">
                      </div>

                      <div class="item-main">
                        <div class="contentList">
                          <div class="name">{{content.selectDefault}}<span style="color: rgba(0, 0, 0, 0.25);">（{{content.selectDefault}}）</span></div>
                          <div class="dateTime"> {{content.date1}}</div>
                          <div>
                            <div class="text">
                              <div class="label">消费事由</div>
                              <div class="value"><p class="new-line">{{content.value}}</p></div>
                            </div>
                          </div>
                        </div>
                        <div class="moneyList">
                          <div  style="color: rgba(0, 0, 0, 0.85);">
                            <span class="currency" style="font-size: 12px;">¥</span>
                            <span class="value bxMoney"  style="font-size: 16px;">{{content.input3}}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>


                </el-checkbox>
              </div>


            </div>
          </div>

          <div class="money" style="height:45px; background-color: #fbfbfb;border-bottom: 1px solid #e6e6e6">
            <span class="money-content">支付金额</span>
            <span class="money-money">￥{{money}}</span>
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

<!--点击添加明细的dialog-->
      <edit-consume :dialogFormVisible="editShow" @editButton="addButtonhidden" @commonContent="commonCon" @othersButton="hiddenButton"></edit-consume>
<!--点击导入的dialog-->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">

        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>


        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>



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
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

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
  import EditConsume from '../MainRightSidebar/editConsume'
  // const cityOptions = [''];
    export default {
      data(){
          return {
            //全选按钮
            multipleSelection: [],
            //表单的校验规则
            billType: '',
            ruleForm: {
              name: '',
              region: '',
              date1: '',
              delivery: false,
              type: [],
              resource: '',
              submit: '',
              department: '',
              information: '',
            },
            rules: {
              name: [
                {required: true, message: '请输入活动名称', trigger: 'blur'},
                {min: 4, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur'}
              ],
              submit: [
                {required: true, message: '请填写提交人', trigger: 'change'}
              ],
              region: [
                {required: true, message: '请选择活动区域', trigger: 'change'}
              ],
              date1: [
                {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
              ],
              department: [
                {required: true, message: '请选择活动区域', trigger: 'change'}
              ],
              information: [
                {required: true, message: '请填写收款信息', trigger: 'change'}
              ],
            },
            //表单的下拉内容
            billList: [
              {
                value: '差旅报销单',
                lable: 'travel'
              },
              {
                value: '日常报销单',
                lable: 'normol'
              },
            ],
            money: '',
            //    明细多选框
            checkAll: false,
            checkedCities: [],
            //添加明细的列表
            cities: [
              // {name:'办公',content:'COST1',dataTime:'2018/08/19',becausa:'消费事由:',value:'无',money:'12'}
            ],
            checked: false,

            isDisabled: true,

            testdata:[],

            //  移除明细
            dialogFormVisible: false,
            editShow: false,

            //  导出
            activeIndex: '1',

            dialogVisible: false,
            fileList3: [],
            //报销总额是否显示
            totalShow: false,
            //  报销总额计算
            fullMoney: 0,
            allMoney: [],


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
            inputValue: ''

          }
      },
      methods:{
        // 点击提交按钮
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
        //点击提交人出现弹框
        submitClick(){
          this.dialogVisib = true
        },

        //  全选开始


        handleCheckAllChange() {
          console.log(this.cities);
          if(this.checkAll == true){
            this.cities.map((item) => {
              console.log(item.checkModel);
              item.checkModel=true
            })
          }else{
            this.cities.map((item) => {
              console.log(item.checkModel);
              item.checkModel=false
            })
          }
        },
        handleCheckedChange(value) {
          var flag=0
          console.log(value)
          console.log(this.cities)
          this.cities.map((item)=>{
            if(item.checkModel==false){
              flag=1
            }
          })
          if(flag==1){
            this.checkAll=false
          }else {
            this.checkAll=true
          }

        },
        //  全选结束


        //添加明细的dialog-
        commonCon(){
          this.editShow = false;
        },
      //  添加明细
        addButton(){
          this.editShow = true
        },
        addButtonhidden(ruleForms){
          this.editShow = false;
          console.log(ruleForms.checkModel)
          this.cities.push(ruleForms);
          this.multipleSelection.push(ruleForms)
          console.log(this.multipleSelection);


          this.fullMoney=0
          this.cities.map((item) => {
            this.fullMoney+=parseInt(item.input3)
          })
          this.money  =  this.fullMoney
          console.log(this.money )
          if(this.cities.length>0){
            this.totalShow = true
          }

          console.log( this.cities )
        },
        hiddenButton(ruleForms){
          console.log(ruleForms)
          alert(11)
          this.cities.push(ruleForms)
          this.fullMoney=0
          this.cities.map((item) => {
            this.fullMoney+=parseInt(item.input3)
          })
          this.money  =  this.fullMoney
          if ( this.cities.length>0 ){
            this.totalShow = true
          }

        },
        //  添加明细结束

      //  d导出
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          if (key === '1-4') {
            this.dialogVisible = true
          }

        },
        //dialog的x取消
        handleClose(done){
          done()
        },
        //上传
        handleChange(file, fileList) {
          this.fileList3 = fileList.slice(-3);
        },
        //获取所有的金额
        getAllMoney(){
          this.allMoney = document.getElementsByClassName('bxMoney');
          console.log(this.allMoney)
        },
      //  删除循环明细
        delItem(index){
          console.log(index)
          this.cities.splice(index,1);
          // this.items.indexOf(item),1
          this.fullMoney=0
          this.cities.map((item) => {
            this.fullMoney+=parseInt(item.input3)
          })
          this.money  =  this.fullMoney
          if(this.cities.length ==0 ){
            this.totalShow = false
          }

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
        EditConsume
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

  .content .detailed{border-bottom: 1px solid #e6e6e6; font-size: 12px; color: #6c6c6c; font-weight: 500;  }
  .content .detailed .detailed-title{ margin-left: 25px; height: 60px; line-height: 60px;}
  .content .detailed .detailed-title .el-dropdown-link{ border: 1px solid #e9e9e9; padding: 2px; font-size: 12px;}
  .content .detailed .detailed-al{  }


  .content .money { text-align: right;line-height: 45px }
  .content .money .money-content{ margin-right: 35px;}
  .content .money .money-money{ margin-right: 35px;}

  .content  .billFooter{ text-align: right;height: 60px; padding-top: 10px; border-top: 1px solid #e6e6e6;}
  .content  .billFooter .el-button{margin-top: 15px;}

  .content .detailed-all-content-top, .detailed-all-content-bottom{ padding-left:20px; }
  .content .detailed-all-content-top .add-button{ display: inline-block; cursor: pointer; height: 26px; line-height: 26px;   border: 1px solid #b9e6eb;border-radius: 2px; }
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


  /*报销总额*/
   .amount {display: flex; float: right;padding-right: 15px;}
  .amount .text1 {font-size: 12px;    margin-right: 5px;  color: #6c6c6c;  }
  .money-wrap___36SvN{ display: flex}

  /*删除效果*/
  .item-icons{float:right; margin-right: -113px; margin-top: 8px; cursor:pointer;}


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

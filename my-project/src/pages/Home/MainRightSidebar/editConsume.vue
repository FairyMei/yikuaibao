<template>
    <div>
      <el-dialog title="编辑消费详情" :visible.sync="dialogFormVisible"  :before-close="handleClose" style="border-bottom: 1px solid #000">

<!--表单验证-->
        <el-form  :model="ruleForms"  :rules="rules" ref="ruleForms" size="mini">
          <div class="allEdit">
          <div class="editTop">
          <!--<el-form-item label="费用类型" :label-width="formLabelWidth" >-->
            <!--<el-input v-model="ruleForms.name" auto-complete="off"  ></el-input>-->
          <!--</el-form-item>-->

            <el-form-item label="费用类型" :label-width="formLabelWidth">
              <el-select v-model="ruleForms.selectDefault" placeholder="请选择" style="width:80%;" class="formWidth">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <!--<i @click="delItem(item)" class="el-icon-delete item-icon">-->
            <!--prop="money"-->
            <el-form-item label="金额" :label-width="formLabelWidth"  prop="input3">
          <el-input placeholder="请输入金额" v-model="ruleForms.input3"  type="number" style="width:80%;" min="0">
            <template slot="prepend">CNY</template>
          </el-input>
          </el-form-item>

          <el-form-item label="日期" required :label-width="formLabelWidth">

            <el-form-item prop="date1"  >
              <el-date-picker
                v-model="ruleForms.date1"
                type="date"
                placeholder="选择日期" style="width:80%;">
              </el-date-picker>
            </el-form-item>

          </el-form-item>

          <el-form-item label="发票" :label-width="formLabelWidth"  >
            <!--<el-input v-model="ruleForms.fapiao"   ></el-input><span>张</span>-->
            <el-input-number  v-model="num8" style="width:80%;" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number> <span>张</span>
          </el-form-item>
          </div>

          <div class="editMiddle">

            <el-form-item label="消费事由" :label-width="formLabelWidth">
              <el-input type="textarea" style="width: 80%;" placeholder="(选填)请填写消费事由"></el-input>
            </el-form-item>

          </div>

          <div class="editMiddle1">

            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList" >
              <span class="other-title">附件  </span>
              <el-button size="small" >点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>

            <el-checkbox v-model="checked" class="startCheckbox" @change="startButton">开启费用分摊</el-checkbox>

          </div>


            <div class="editBottom" v-show="bottomShow">

              <el-form-item label="分摊方式" :label-width="formLabelWidth">
                <el-select   filterable v-model="billType"  style="width: 80%;">
                  <el-option
                    v-for="item in billList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <!--<div class="bottomList">-->
              <!--<el-from :model="dynamicValidateForm" ref="dynamicValidateForm">-->
                <!--<el-form-item label="报销部门" prop="department" :label-width="formLabelWidth">-->

                  <!--<el-select v-model="ruleForms.department" style="width: 80%;">-->

                    <!--<el-option label="1" value="shanghai"></el-option>-->
                    <!--<el-option label="2" value="beijing"></el-option>-->

                  <!--</el-select>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="分摊比例" prop="bili" :label-width="formLabelWidth">-->
                <!--<el-input-number  style="width: 80%;" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="100"></el-input-number>-->
                <!--</el-form-item>-->

                <!--<el-form-item label="分摊金额" :label-width="formLabelWidth" prop="fentan" >-->
                  <!--<el-input placeholder="请输入内容" v-model="input4"  style="width:80%;">-->
                    <!--<template slot="prepend">CNY</template>-->
                  <!--</el-input>-->
                <!--</el-form-item>-->

                <!--<el-form-item :label-width="formLabelWidth">-->
                  <!--<el-button type="primary" @click="saveForm('dynamicValidateForm')">保存</el-button>-->
                  <!--<el-button @click="resetForm('dynamicValidateForm')">删除</el-button>-->
                <!--</el-form-item>-->
<!--</el-from>-->
              <!--</div>-->

            </div>

          </div>


        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="cancleContet" size="mini">取 消</el-button>
          <el-button @click="oneMoreTime('ruleForms')" size="mini">在记一笔</el-button>
          <!--dialogFormVisible = false-->
          <el-button type="primary" @click="saveForm('ruleForms')" size="mini">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {

      props: {
        dialogFormVisible: {
          type: Boolean,
          default: false
        },
        othersButton: {
          type: Boolean,
          default: false
        },
        commonContent: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          //  添加明细
          // dialogFormVisible: false,
          //添加内容
          ruleForms: {
            checkModel:false,
            selectDefault: "打车",
            moneys: '',
            date1: '',
            type: [],
            input3: '',
            desc: '',
            fapiao: '',
            department: '',
            bili: '',
            fentan: '',
          },
          formLabelWidth: '120px',

          input4: '',
          //验证规则
          rules: {
            input3: [
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
            date1: [
              {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
            ],
            fapiao: [
              {type: true, message: '请输入张数', trigger: 'blur',}
            ],
            department: [
              {required: true, message: '请选择报销部门', trigger: 'change'}
            ],
            bili: [
              {required: true, message: '请输入比例', trigger: 'blur'},
            ],
            fentan: [
              {required: true, message: '请输入分摊金额', trigger: 'blur'},
            ],
          },
          //上传页面
          fileList: [],
          //  添加
          checked: false,
          bottomShow: false,
          //  xilai
          billType: '',
          billList: [
            {
              value: '报销部门分摊',
              lable: 'travel'
            },
            {
              value: '项目分摊',
              lable: 'normol'
            },
            {
              value: '报销部门分摊&项目分摊',
              lable: 'together'
            },
          ],
          num: 100,
          num8: 1,
          dynamicValidateForm: {},
          options: [
            {value: '打车', label: '打车'},
            {value: '飞机', label: '飞机'},
            {value: '火车', label: '火车'},
            {value: '酒店', label: '酒店'}
          ],
        }
      },
      methods: {
        //点击x取消
        handleClose() {
          // this.$emit('othersButton',false)
          this.$emit('commonContent', false)
        },
        //点击确定实现功能
        saveForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // this.ruleForms.checkModel = false
              this.$emit('editButton', this.ruleForms)
              this.ruleForms = {}
            } else {
              console.log('error submit!!');
              return false;
            }
          });

        },
        //点击再记一笔
        oneMoreTime(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$emit('othersButton', this.ruleForms)
              this.ruleForms = {}
              // this.$emit('othersButton',true)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        //点击取消
        cancleContet() {
          this.$emit('commonContent', false)
          // this.dialogFormVisible = false
        },

        //上传
        handleChange(file, fileList) {
          this.fileList = fileList.slice(-3);
        },
        //  显示隐藏
        startButton() {
          console.log(this.checked)
          if (this.checked == true) {
            this.bottomShow = true
          } else {
            this.bottomShow = false
          }
        },

        //  分担百分比
        handleChange(value) {
          console.log(value);
        },
        //  重置
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        //  验证金额》0
        //   check(value) {
        //     let reg = /^[1-9]\d*$/;
        //     var _this = this;
        //     if (value) {
        //       if (new RegExp(reg).test(value) == false) {
        //         setTimeout(() => {
        //           _this.actionDataForm.studNum = '';
        //           _this.errorTip = true;
        //         }, 500); }else{ this.errorTip = false; } } },
        // },
      }
    }
</script>

<style scoped>
  .allEdit{height: 300px; overflow-y: scroll; }
.editTop{ border-bottom: 1px solid #dcdcdc; }
  .editMiddle{ padding-top: 15px; border-bottom: 1px solid #dcdcdc; }
  .editMiddle1{ padding-top: 15px; padding-left: 87px; padding-bottom: 15px; border-bottom: 1px solid #dcdcdc;}
.other-title{ font-size: 14px; }
  /*开启费用分摊*/
.startCheckbox{
  padding-top: 20px;
}
  .editBottom{ padding-top: 15px; }
  .bottomList{ height: 200px; background-color: #f7f7f7; width: 98%; padding-top: 15px; }
</style>

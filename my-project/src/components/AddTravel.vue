<template>
    <div>
      <el-dialog title="编辑差旅行程" :visible.sync="addTravelVisible" width="60%" :before-close="handleClose">
        <!--<p style="text-align:right;line-height:0;paddding:0"><i @click="closeAdd" class="el-icon-close" style="cursor:pointer"></i> </p>-->
        <div class="item" v-for="item in items" :key="item">
          <p style="padding-left:15px;">第{{item}}程 <i @click="delItem(item)" class="el-icon-delete item-icon"></i></p>
          <el-form  :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="出行方式" :label-width="formLabelWidth">
            <el-select v-model="ruleForm.selectDefault" placeholder="请选择" class="formWidth">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-form-item>

            <el-form-item label="出发日期" :label-width="formLabelWidth" required>
              <el-date-picker
                v-model="ruleForm.time"
                type="date"
                placeholder="选择日期" class="formWidth">
              </el-date-picker>
            </el-form-item>



          <el-form-item label="出发地" required :label-width="formLabelWidth">
            <el-input v-model="ruleForm.origin" placeholder="请输入内容" class="formWidth"></el-input>
          </el-form-item>

          <el-form-item label="目的地" required :label-width="formLabelWidth">
            <el-input v-model="ruleForm.destination" placeholder="请输入内容" class="formWidth"></el-input>
          </el-form-item>

        </el-form>
        </div>

        <div style="margin:20px 0;"><el-button @click="addItem" size="small" type="primary" icon="el-icon-plus">添加行程</el-button></div>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" @click="cancelTravel">取 消</el-button>
          <!--dialogFormVisible = false-->
          <el-button size="small" type="primary" @click="saveForm('ruleForm')">保 存</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      props:{
        addTravelVisible:{
          type:Boolean,
          default:false
        },
        travel:{
          type:Boolean,
          default:false
        }
      },
      // travel
      data(){
          return{
            items:[1],
            ruleForm: {
              selectDefault:"car",
              time:'',
              origin:'',
              destination:''
            },

            options: [
              {value: 'car',label: '打车'},
              {value: 'plane',label: '飞机'},
              {value: 'train',label: '火车'},
              {value: 'hotel',label: '酒店'}
            ],
            formLabelWidth: '120px',
            rules: {
              time: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
              ],
            },

          }
      },
      created(){
      },
      methods:{
        saveForm(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm)
            } else {
              return false;
            }
          })
        },
        addItem(){
          this.items.push(this.items.length+1);
        },
        delItem(item){
          this.items.splice(this.items.length-1,1);
          // this.items.indexOf(item),1

        },
        closeAdd(){
          this.$emit('addTravelIsShow',false)
        },
        handleClose(){
          this.$emit('travel',false)
        },
        cancelTravel(){
          this.$emit('travel',false)
        },
      },
    }
</script>

<style scoped>
.hr{width:100%;height:1px;background:#e6e6e6;}
.item{background:#f7f7f7;width:100%;padding:10px 0;margin: 0 0 10px 0;}
.item .formWidth{width:90%;}
.item .item-icon{float:right;margin-right:10px; cursor:pointer;}
</style>

<template>
  <div class="receive">

    <el-dialog
      title="收款信息"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose" style="font-size: 14px;padding: 0;">
      <div class="shoukuan">
        <div class="shoukuanSearch">
          <el-input
            placeholder="请输入标题或单号"
            suffix-icon="el-icon-search"
            v-model="input"
            class="search-content"
            size="small"
          >
            <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
          </el-input>
          <!--icon="el-icon-search"-->
          <el-button type="primary"   size="small" style="background-color: #32b5c5">搜索</el-button>
          <el-button type="primary" class="newButton" size="small" @click="innerVisible = true">新建</el-button>
        </div>
        <div style="overflow-y: auto">
        <div class="shoukuanList" >

          <!-- v-for=""(item,index) in myloan   v-for="(yinhang,index) in yinhangList"-->
          <ul>
            <li class="repeat">


              <div class="card-left-wrapper">
                <div class="title-line-style">
                  <span class="title-line-text fs-14 color-gray-9 mr-8">

                      d

                  </span>
                  <div class="account-type-wrapper account-type-blue-border mr-8">
                    <span class="fs-11 color-blue">个人账户</span>
                  </div>
                </div>


                <div class="account-number-line-style">
                  <span class="account-number-style color-gray-9">

                     1245　5555　555

                  </span>
                </div>

                <div class="account-adr-line-style">
                  <div class="bank-icon-wrapper mr-5">
                    <img src="http://images.ekuaibao.com/bank/bank-other.svg" width="20" height="20">
                  </div>
                  <div class="fs-12 color-gray-8 flex-s-0">国家开发银行</div>
                  <span class="segment-line-vertical"></span>
                  <div class="bank-info-style">国家开发银行天津市分行
                  </div>
                </div>

              </div>


              <div class="card-right-wrapper">
                <div class="op-wrapper"></div>
                <div class="owner-line">
                  <span class="owner-text">所有者：</span>
                  <span class="owner-text">
                    郭美杰
                  </span>
                  <div class="default-wrapper ml-15">
                    <span class="default-text-style">默认</span>
                  </div>
                </div>
              </div>

            </li>
          </ul>





        </div>
        <div class="shoukuanList">
          <!-- v-for=""(item,index) in myloan-->
          <ul>
            <li class="repeat">
              <div class="card-left-wrapper">
                <div class="title-line-style">
                  <span class="title-line-text fs-14 color-gray-9 mr-8">
                      d
                  </span>
                  <div class="account-type-wrapper account-type-blue-border mr-8">
                    <span class="fs-11 color-blue">个人账户</span>
                  </div>
                </div>
                <div class="account-number-line-style">
                  <span class="account-number-style color-gray-9">
                     1245　5555　555
                  </span>
                </div>

                <div class="account-adr-line-style">
                  <div class="bank-icon-wrapper mr-5">
                    <img src="http://images.ekuaibao.com/bank/bank-other.svg" width="20" height="20">
                  </div>
                  <div class="fs-12 color-gray-8 flex-s-0">国家开发银行</div>
                  <span class="segment-line-vertical"></span>
                  <div class="bank-info-style">国家开发银行天津市分行
                  </div>
                </div>

              </div>


              <div class="card-right-wrapper">
                <div class="op-wrapper">
                  <div class="ta-r">
                    <span>
                      <a>设为默认</a>
                    </span>
                  </div>
                </div>
                <div class="owner-line">
                  <span class="owner-text">所有者：</span>
                  <span class="owner-text">
                    郭美杰
                  </span>
                  <!--<div class="default-wrapper ml-15">-->
                    <!--<span class="default-text-style">默认</span>-->
                  <!--</div>-->
                </div>


                <!--<div class="ta-r"><span><a>设为默认</a></span></div>-->
              </div>

            </li>
          </ul>





        </div>
        </div>

      </div>

<div class="shoukuanMessage">
      <el-dialog
        width="40%"
        title="收款信息"
        :visible.sync="innerVisible"
        append-to-body top="20px">

        <div class="shoukuanM">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账户类型" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio   label="个人账户" style="border: 1px solid #32b5c5; padding: 10px; border-radius: 3px; color: #32b5c5" ></el-radio>
                <el-radio  label="对公账户" style="border: 1px solid #32b5c5;border-radius: 3px; padding: 10px;" ></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="户名" prop="name" size="mini">
              <el-input v-model="ruleForm.name" style="width: 80%"></el-input>
            </el-form-item>

            <el-form-item label="银行账号" prop="zhanghao" size="mini">
              <el-input v-model="ruleForm.zhanghao" style="width: 80%"></el-input>
            </el-form-item>

            <el-form-item label="省市地区" prop="region" size="mini">
              <!--<el-select v-model="ruleForm.region" placeholder="请选择区域">-->
                <!--<el-option label="区域一" value="shanghai"></el-option>-->
                <!--<el-option label="区域二" value="beijing"></el-option>-->
              <!--</el-select>-->

              <!--<el-select v-model="ruleForm.region" placeholder="请选择区域">-->
                <!--<el-option label="区域一" value="shanghai"></el-option>-->
                <!--<el-option label="区域二" value="beijing"></el-option>-->
              <!--</el-select>-->

              <el-cascader
                :options="options2"
                @active-item-change="handleItemChange"
                :props="props"
                style="width: 80%"
              ></el-cascader>

            </el-form-item>

            <el-form-item label="开户网点" prop="network" size="mini">
              <el-select v-model="ruleForm.network" placeholder="请选择开户网点"  style="width: 80%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item >
                  <div class="Tip">
            <span class="Tips">
开户支行的中文全称，如：中国工商银行股份有限公司北京崇文门外大街支行。您可以拨打银行客服热线来查询开户网点。</span>
                </div>
            <div class="carefulAll">
              <span class="aaa">
              注意：选择失败可能导致支付失败
              </span>
              <el-tooltip class="item" effect="dark"  placement="top">

                <div slot="content">选择其它可能会造成支付失败，您可以：
                  <br/>1. 联系所属银行客服确认开户行信息
                  <br/>2. 选择具体开户网点所属上级
                  <br/>3. 在列表里找不到企业银行名称？请拨打400-999-8293进行咨询
                </div>
                <el-button  type="text">了解原因</el-button>
              </el-tooltip>


            </div>
            <el-form-item style="text-align: right;margin-top: 50px;">
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>


          </el-form>



        </div>





      </el-dialog>
</div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="canclea">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    props:{
      dialogVisible:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        //  搜索框
        input:'',
        // dialogVisible: false,
        innerVisible: false,
        myloan:[
          {title:'s',time:'2018.09.16到期',money:'222,222.00'}
        ],
        ruleForm: {
          name: '',
          region: '',
          resource: '',
          zhanghao:'',
          network:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'blur' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          zhanghao: [
            { required: true, message: '请输入账号', trigger: 'change' }
          ],
          network: [
            { required: true, message: '请输入开户网点', trigger: 'change' }
          ],

        },
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
      //  银行列表
      }
    },
    methods:{
      handleClose() {

        this.$emit('dialogEvent',false)
      },
      canclea(){
        this.$emit('dialogEvent',false)
      },
      sure(){
        this.$emit('dialogEvent',false)
      },


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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(value) {
        console.log(value);
      },
    //  层级选择器
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }

    }
  }
</script>

<style scoped>
  /*.receive{background-color: #fbfbfb}*/
  .el-dialog__body {   }
  .shoukuan{height: 400px; overflow: auto; margin: 0;padding-top: 15px;  background-color: #fbfbfb;  border-top: 1px solid #e6e6e6 }
  .shoukuan .search-content{ width: 80%; padding-left:15px;padding-right: 5px; }
  .shoukuan .newButton{ background-color: #32b5c5; }
  .shoukuanList{ margin: 16px 16px 16px 16px;padding: 16px 18px;position: relative;
    /*margin-bottom: 16px;*/
    min-height: 120px;
    width: 90%;
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    background-color: #fff;
    overflow: hidden; }
  .shoukuanList .repeat{}
  .shoukuanList ul{  }
  .shoukuanList ul li{list-style: none;cursor: pointer; display: flex;   justify-content: space-between;padding: 0 25px;vertical-align: middle; background: #fff;}
  .shoukuanList ul li .card-left-wrapper .title-line-style{display: flex;    padding-top: 12px; }
  .shoukuanList ul li .card-left-wrapper .title-line-style .account-type-wrapper{display: inline-block;margin-top: -2px; color: #32b5c5;text-align: center;padding: 0 8px;height: 20px; border: 1px solid #32b5c5; border-radius: 2px;}
  .shoukuanList ul li .card-left-wrapper .title-line-style .mr-8{margin-right: 8px;}
  .shoukuanList ul li .card-left-wrapper .title-line-style .color-gray-9{color: #6c6c6c}
  .shoukuanList ul li .color-gray-8{color: #9e9e9e;font-size: 12px;}
  .shoukuanList ul li .account-number-style {font-weight: 600;     font-size: 16px;}
  .shoukuanList ul li .account-number-line-style {margin: 25px 0 14px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .shoukuanList ul li .account-adr-line-style {display: flex;max-width: 550px;    line-height: 20px;}

  /*银行线*/
  .shoukuanList ul li .segment-line-vertical {height: 20px;border-right: 1px solid #e9e9e9;margin-right: 10px;padding-right: 10px;}
  .shoukuanList ul li .bank-info-style {color: #9e9e9e;font-size: 12px;}

  /*右边内容*/
  .shoukuanList ul li .card-right-wrapper{ display: flex; height: 87px; position: absolute;bottom: -40px;right: 40px; }
  .shoukuanList ul li .card-right-wrapper .owner-line{ display: flex; }

  .shoukuanList ul li .owner-text {
    font-size: 12px;
    color: rgba(0,0,0,.25);
    padding-right: 5px;
  }
  .default-wrapper {
    text-align: center;
    height: 18px;
    border-radius: 2px;
    background-color: #eee;
    border: 1px solid #dcdcdc;
    font-size: 11px;
  }


  /*设为默认*/
  .op-wrapper{ display:flex;margin-top: -46px; right: 6px; position: absolute;}
  .op-wrapper .ta-r{ text-align: right;}
  .op-wrapper .ta-r a{    outline: none;
    cursor: pointer;    color: #32b5c5;}


  .shoukuanM{  height: 510px; overflow: auto; margin: 0; padding-top:20px; border-top: 1px solid #e6e6e6 }
  .Tip{ padding-left: 100px;padding-right: 15px; font-size: 12px; }
.carefulAll{ text-align: center; }
  .carefulAll .aaa{ color:#9e9e9e;font-size: 12px;}
  /*.shoukuanList ul li .{overflow: hidden;}*/
  /*.shoukuanList ul li {  height: 20px;   text-overflow: ellipsis;white-space: nowrap;font-size: 14px;color: #333;}*/
  /*.shoukuanList ul li{ font-size: 12px; color: #9c9c9c; height: 20px; }*/
  /*.shoukuanList ul li { text-align: right; }*/
</style>

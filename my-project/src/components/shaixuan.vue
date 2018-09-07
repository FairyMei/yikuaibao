<template>
<div class="head_h">
  <!--<span style="margin-left:20px;font-size:14px;">快速筛选:</span>-->
    <!--<el-radio-group-->
      <!--v-model="tabPosition"-->
      <!--@change="openFullScreen"-->
      <!--v-loading.fullscreen.lock="fullscreenLoading">-->
      <!--<el-radio-button label="top">全部</el-radio-button>-->
      <!--<el-radio-button label="right">报销单</el-radio-button>-->
      <!--<el-radio-button label="bottom">借款单</el-radio-button>-->
      <!--<el-radio-button label="left">申请单</el-radio-button>-->
    <!--</el-radio-group>-->
  <!--<el-input-->
    <!--size="small"-->
    <!--placeholder="请输入内容"-->
    <!--suffix-icon="el-icon-search"-->
    <!--v-model="searchStr">-->
  <!--</el-input>-->
  <div class="headers-contetn" style="margin-top: -30px">
    <div>
      <el-row>
        <el-col :span="18">
          <div class="fast">
            <span class="fast1">快速筛选：</span>
            <ul class="fast-content">
              <li v-for="(items,i) in fast" :class="i==0?'color':''"  @click="status(i)" ref="fastContent"> {{items.name}}</li>
              <p @click="innerVisible = true"><i class="el-icon-setting"></i>配置</p>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="fast-input">
            <el-input
              placeholder="搜索标题、单号或提交人"
              suffix-icon="el-icon-search"
              v-model="input1"
              class="search-content1"
            >
              <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="allcontent" >

      <el-table
        :data="tableData"
        :header-cell-style="getRowClass"  @selection-change="handleSelectionChange"
        @row-click="aaaa"
      >
        <el-table-column
          type="selection"
          width="45">
        </el-table-column>
        <el-table-column
          prop="bill"
          label="单据模板"
          sortable
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="numbers"
          label="单号"
          sortable
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"

        >
        </el-table-column>
        <el-table-column
          prop="titles"
          label="标题"
          sortable
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"

        >
        </el-table-column>
        <el-table-column
          prop="submit"
          label="提交人"
          sortable
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"

        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="提交日期"
          sortable
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"

        >
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
        >
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="tag"-->
        <!--label="标签"-->
        <!--width="100"-->
        <!--:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"-->
        <!--:filter-method="filterTag"-->
        <!--filter-placement="bottom-end">-->
        <!--<template slot-scope="scope">-->
        <!--<el-tag-->
        <!--:type="scope.row.tag === '家' ? 'primary' : 'success'"-->
        <!--disable-transitions>{{scope.row.tag}}</el-tag>-->
        <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </div>
  </div>

  <footer>
    <el-row>
      <el-button plain :disabled="isDisabled" style="margin-left:20px;">同意</el-button>
      <el-button plain :disabled="isDisabled">驳回</el-button>
      <el-button plain :disabled="isDisabled">导出选中</el-button>
      <el-button plain :disabled="isDisabled">打印</el-button>
      <el-button plain :disabled="isDisabled">打印提醒</el-button>
      <el-button plain :disabled="isDisabled">转交审批</el-button>
      <span style="color:#c0c4cc">已选0/0张</span>
        <el-button class="btn" style="margin-right:40px;"><i class="el-icon-arrow-left"></i></el-button>
        <el-button class="btn" style="margin-right:10px;"><i class="el-icon-arrow-right  "></i></el-button>
    </el-row>
  </footer>
<div class="fast_contetn">
  <el-dialog
    width="43%"

    :visible.sync="innerVisible"
    append-to-body >


    <div class="guanli">
      <span>管理快速筛选</span>

      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    </div>

    <div class="guanli-content">

      <span class="guanli-content-span">快速筛选可基于指定的规则过滤单据，并呈现指定的字段。您可以编辑、删除或拖拽排序下面已有的快速筛选，或者新建一个快速筛选。</span>

      <ul class="overflow-content">
        <!--<li>报销单</li>-->
        <!--<li>报销单</li>-->
        <!--<li>报销单</li>-->
        <div class="item">
          <span>报销单</span>
          <div class="actions"><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTMuNTc1IDguODAzbDcuMTA3LTcuMTA2IDIuMTIxIDIuMTIxLTcuMTA2IDcuMTA3LTIuNDQuMzE4LjMxOC0yLjQ0ek0yIDEyLjk5OGgxMnYxSDJ2LTF6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9IiNDQkNCQ0IiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPGcgZmlsbD0iIzZDNkM2QyIgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="编辑"></a><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTcgMmgydjFIN1Yyek00IDEzaDh2MUg0di0xek0yIDNoMTJ2MUgyVjN6bTEgM2gxdjhIM1Y2em00IDBoMnY1SDdWNnptNSAwaDF2OGgtMVY2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjQ0JDQkNCIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDxnIGZpbGw9IiM2QzZDNkMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDE2djE2SDB6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="删除"></a></div>
        </div>
        <div class="item">
          <span>报销单</span>
          <div class="actions"><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTMuNTc1IDguODAzbDcuMTA3LTcuMTA2IDIuMTIxIDIuMTIxLTcuMTA2IDcuMTA3LTIuNDQuMzE4LjMxOC0yLjQ0ek0yIDEyLjk5OGgxMnYxSDJ2LTF6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9IiNDQkNCQ0IiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPGcgZmlsbD0iIzZDNkM2QyIgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="编辑"></a><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTcgMmgydjFIN1Yyek00IDEzaDh2MUg0di0xek0yIDNoMTJ2MUgyVjN6bTEgM2gxdjhIM1Y2em00IDBoMnY1SDdWNnptNSAwaDF2OGgtMVY2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjQ0JDQkNCIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDxnIGZpbGw9IiM2QzZDNkMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDE2djE2SDB6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="删除"></a></div>
        </div>
        <div class="item">
          <span>报销单</span>
          <div class="actions"><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTMuNTc1IDguODAzbDcuMTA3LTcuMTA2IDIuMTIxIDIuMTIxLTcuMTA2IDcuMTA3LTIuNDQuMzE4LjMxOC0yLjQ0ek0yIDEyLjk5OGgxMnYxSDJ2LTF6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9IiNDQkNCQ0IiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPGcgZmlsbD0iIzZDNkM2QyIgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="编辑"></a><a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTcgMmgydjFIN1Yyek00IDEzaDh2MUg0di0xek0yIDNoMTJ2MUgyVjN6bTEgM2gxdjhIM1Y2em00IDBoMnY1SDdWNnptNSAwaDF2OGgtMVY2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjQ0JDQkNCIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDxnIGZpbGw9IiM2QzZDNkMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDE2djE2SDB6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="删除"></a></div>
        </div>
      </ul>
    </div>
    <div class="overflow-content-bottom">
      <div class="add-btn" @click="innerInnerVisible =true"><a><i class="el-icon-plus"></i>   新建快速筛选</a></div>
      <span slot="footer">

                        <el-button @click="innerVisible =false">取消</el-button>
                        <el-button type="primary"  @click="bottomSure">确定</el-button>

            </span>
    </div>
  </el-dialog>

  <el-dialog
    width="43%"

    :visible.sync="innerInnerVisible"
    append-to-body >


    <div class="guanli">
      <span>新建快速筛选</span>

      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    </div>

    <div class="guanli-content2">


      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>



      </el-form>



    </div>
    <div class="overflow-content-bottom">
      <!--<div class="add-btn"><a><i class="el-icon-plus"></i>   新建快速筛选</a></div>-->
      <span slot="footer">

                        <el-button @click="innerInnerVisible =false">取消</el-button>
                        <el-button type="primary"  @click="InnerBottomSure('ruleForm')">确定</el-button>

            </span>
    </div>
  </el-dialog>
</div>
</div>
</template>

<script>
    export default {
      data(){
        return{
          tableData: [{
            state:"未审批",
            date: '差旅报销单',
            name: 'B180000001',
            address: '报销申请',
            tag: '嘉仕软件',
            time:'2018-1-1'
          }, {
            state:"未审批",
            date: '差旅报销单',
            name: 'B180000002',
            address: '报销申请',
            tag: '嘉仕软件',
            time:'2018-1-1'
          }, {
            state:"未审批",
            date: '差旅报销单',
            name: 'B180000003',
            address: '报销申请',
            tag: '嘉仕软件',
            time:'2018-1-1'
          }, {
            state:"未审批",
            date: '差旅报销单',
            name: 'B180000004',
            address: '报销申请',
            tag: '嘉仕软件',
            time:'2018-12-01'
          }],
          tabPosition: 'top',
          checked1: false,
          searchStr :'',
          checked:false,
          fullscreenLoading: false,
          //郭美杰页面
          input1:'',
          fast:[
            {'name':'全部'},
            {'name':'报销单'},
            {'name':'借款单'},
            {'name':'申请单'},
          ],
          i:0,
          tableData: [{
            bill: '王小虎',
            numbers: '98453212',
            titles: ' 1518 弄',
            submit:'可敬的',
            date:'2016-05-01',
            operate:'asd'
          }, {
            bill: '王小虎',
            numbers: '54985123',
            titles: '上海市 弄',
            submit:'可敬的',
            date:'2016-05-02',
            operate:'sda'
          },
            {
              bill: '王小虎',
              numbers: '98453212',
              titles: ' 1518 弄',
              submit: '可敬的',
              date: '2016-05-01',
              operate: 'asd'
            },

          ],
          innerVisible:false,
          innerInnerVisible:false,
          exportVisible:false,
          radio:'1', /*导出页面的dialog*/
          // checkList: ['包括费用明细（则导出所有明细字段。若该单据无明细，则勾选此项不产生任何效果）'], /*导出页面的dialog*/
          checkList:[],
          isDisabled:true,
          page:0,
          multipleSelection:[],


          ruleForm: {
            name: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
          }
        }
      },
      methods: {
        digclick(){
          // console.log(333);
          this.digshow=!this.digshow

        },
        filterHandler(value, row, column) {
          // console.log(333);
          const property = column['property'];
          return row[property] === value;
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        openFullScreen() {
          // console.log('555');
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 1000);
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },

        handleSelectionChange(val) {
          this.multipleSelection = val;
          if(val.length>0){
            this.isDisabled=false
          }else {
            this.isDisabled=true
          }
        },
       // 郭美杰
        status(i){
          this.page = i

          for(let j=0;j<4;j++){
            this.$refs.fastContent[j].className="ab"
          }
          this.$refs.fastContent[i].className="color"
        },
        //第一行加颜色
        getRowClass({ row, column, rowIndex, columnIndex }) {
          if (rowIndex == 0) {
            return 'background:#fafafa'
          } else {
            return ''
          }
        },
        bottomSure(){
          this.innerVisible =false
        },
        InnerBottomSure(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              this.innerInnerVisible=false
              this.ruleForm.name=''
            } else {
              alert('请重新输入!!');
              return false;
            }
          });
        },
       // 点击当前行出现侧边栏

        aaaa(row, event, column){
          console.log(row);
          console.log(event);
          console.log(column);
        }
       },
    }
</script>

<style scoped>
  /*.head_h{*/
    /*!*width:100%;*!*/
    /*margin-left:-30px;*/
    /*!*border:1px solid red;*!*/

  /*}*/
  /*.el-radio-group{*/
    /*margin-left: 20px;*/
    /*!*border:1px solid red;*!*/
  /*}*/
  /*.lab{*/
    /*margin-left:30px;*/
  /*}*/
  /*.el-tabs {*/
    /*border-radius: 3px;*/
    /*width: 100%;*/
    /*!*border:1px solid red;*!*/
    /*background: #fff;*/
    /*margin: 0 auto;*/
    /*margin-top: 20px;*/

  /*}*/
  /*.el-radio-button{*/
    /*border-radius: 0px !important;*/
  /*}*/
  /*.el-input{*/
    /*width:15%;*/
    /*float:right;*/
    /*margin-right: 20px;*/
  /*}*/
  /*.nav{*/
    /*border:1px solid #e6e6e6;*/
    /*margin-top:10px;*/
    /*float:left;*/
    /*width:100%;*/
    /*height:50px;*/
    /*background: rgb(250,250,250);*/
  /*}*/

  /*.el-checkbox{*/
    /*float:left;*/
    /*line-height: 50px;*/
  /*}*/

  /*.el-checkbox{*/
    /*margin-left:20px;*/
    /*width:10px;*/
    /*height:10px;*/
  /*}*/
  /*.nav_right{*/
    /*width:50px;*/
    /*height:50px;*/
    /*border:1px solid #e6e6e6;*/
    /*float:right*/
  /*}*/
  /*.el-icon-document{*/
    /*width:50px !important;*/
    /*height:50px;*/
  /*}*/
  /*.num{*/
    /*width:100%;*/
    /*height:300px;*/
    /*border:1px solid #e6e6e6;*/
    /*margin-top:62px;*/
    /*text-align: center;*/
    /*line-height: 50px;*/
  /*}*/
  .headers-contetn{

  }
  footer{
    width:100%;
    height:50px;
    border-top:1px solid #e6e6e6;
    margin-top:200px;
  }
  /*.el-button{*/
    /*margin-top:4px;*/
  /*}*/
  /*.btn{*/
    /*width:42px;*/
    /*float:right;*/
  /*}*/
  /*.btn i{*/
    /*margin-left:-8px;*/
  /*}*/
  /*.check{*/
    /*border:1px solid #e6e6e6;*/
    /*width:13%;*/
    /*height:200px;*/
    /*position: absolute;*/
    /*top:90px;*/
    /*z-index: 1;*/
    /*left:165px;*/
    /*background: #fff;*/
    /*line-height:25px;*/
  /*}*/
  /*.el-checkbox{*/
    /*line-height:20px;*/
  /*}*/
/*.el-table{*/
  /*text-align: center;*/
/*}*/
  /*.el-table-column{*/
    /*text-align:center !important;*/
  /*}*/
  /*.chek{*/
    /*position: absolute;*/
    /*top:20px;*/
  /*}*/


  /*郭美杰*/
  .fast .fast-content{float: left; list-style: none;padding: 0;width: 50%; line-height: 57px;}
  .fast .fast1{float: left;margin-top: 20px; margin-right: 15px;}
  .fast .fast-content li{ list-style: none;float: left;cursor: pointer; margin-top: 25px; margin-right: 10px; font-size: 14px;   height: 10px;line-height: 10px; border-radius: 3px; text-align: center;padding: 8px;}
  .color{background-color: #32b5c5; color: #fff;}
  .ab{}
  .fast .fast-content p{ color: #32b5c5;    margin-left: 10px; margin-top: 9px; cursor: pointer;  display: inline-block; }
  /*底部右边的已完成单据内容的nav 右搜索框*/
  /*.allcontent{ height: 500px;}*/
  .fast-input{ margin-top: 10px;width: 70%; height: 20px;  }
  /*.guanli-content */
  /*.guanli-content .el-dialog__body{padding: 0 !important;}*/
  .guanli{ float: left;margin-top: -50px; line-height: 50px; cursor: pointer;  width: 100%;height: 50px;}
  .guanli-content{ overflow: auto; width: 100%;height:200px; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; padding-top: 20px; }
  .guanli-content1{ overflow: auto; width: 100%;height:200px; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; padding:0px; }
  .guanli-content2{ overflow: auto; width: 100%;height:200px; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; padding-top:20px; }
  .guanli-content .guanli-content-span{ color: #a2a2a2;}
  .guanli-content .overflow-content{ margin: 12px auto; padding: 0;}
  .guanli-content .overflow-content .item{height: 40px; line-height: 40px; cursor: pointer; color: black}
  .guanli-content .overflow-content .item:hover{ background-color: #eff9fa;}
  .guanli-content .overflow-content .actions{float: right; padding-right: 8px;}
  .guanli-content .overflow-content .actions a{margin: 0 8px;  display: inline-block;}

  .overflow-content-bottom {  height: 30px;line-height: 30px; margin-top: 15px; }
  .overflow-content-bottom .add-btn{display: inline-block; color: #32b5c5;}
  .overflow-content-bottom .add-btn a{ cursor: pointer; }
  .overflow-content-bottom span{ float: right; text-align: right; }
</style>

<template>
  <div class="completed">
    <el-dialog
      title="已完成单据"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose" style="">
      <div style="margin-top: -30px">
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
            :header-cell-style="getRowClass"  @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
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


      <div  class="dialog-footer" >
        <div class="dialog-footer-left">
          <el-button @click="exportVisible = true">全部导出</el-button>    <!--//记得要判断无数据disabled-->
          <el-button :disabled="isDisabled" @click="exportVisible = true">导出选中</el-button>
          <el-button :disabled="isDisabled">打印</el-button>
          <span> 已选择0/5张 </span>

        </div>
        <div class="dialog-footer-right">

          <el-pagination
            background
            layout="prev, pager, next"
            :total="20">
          </el-pagination>

        </div>



      </div>
    </el-dialog>


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
        <div class="add-btn"><a><i class="el-icon-plus"></i>   新建快速筛选</a></div>
            <span slot="footer">

                        <el-button @click="innerVisible =false">取消</el-button>
                        <el-button type="primary"  @click="bottomSure">确定</el-button>

            </span>
      </div>
    </el-dialog>


    <!--导出页面-->
    <el-dialog
      width="45%"
      title="请选择"
      :visible.sync="exportVisible"
      append-to-body>
      <!-- v-show="isExport"-->
      <div class="exportcontent">
        <span>请选择需导出的单据字段</span>
        <br>
        <br>
        <el-radio v-model="radio" label="1">导出全部字段</el-radio>
        <el-radio v-model="radio" label="2">仅导出列选已选中的字段</el-radio>
      </div>
      <br>
      <hr>
      <div class="exportcontent-bottom">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="包括费用明细（则导出所有明细字段。若该单据无明细，则勾选此项不产生任何效果）"></el-checkbox>
          <br>
          <el-checkbox label="包括行程明细（则导出所有明细字段。若该单据无明细，则勾选此项不产生任何效果）"></el-checkbox>
          <br>
          <el-checkbox label="包括部门、员工、档案的编码"></el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer">
                        <el-button @click="exportVisible =false">取消</el-button>
  <el-button type="primary" >导出</el-button>
                      </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "completed-documents",
      props:{
        dialogVisible:{
          type:Boolean,
          default:false
        }
      },
      data(){
          return{
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
            exportVisible:false,
            radio:'1', /*导出页面的dialog*/
            // checkList: ['包括费用明细（则导出所有明细字段。若该单据无明细，则勾选此项不产生任何效果）'], /*导出页面的dialog*/
            checkList:[],
            isDisabled:true,
            page:0,
            multipleSelection:[],

          }
      },
      methods:{
        //  单据页
        //   dialogVisiblea(){
        //     this.diologShow = !this.diologShow
        //   },

        //切换各种页面
        status(i){
          this.page = i

          for(let j=0;j<4;j++){
            this.$refs.fastContent[j].className="ab"
          }
          this.$refs.fastContent[i].className="color"
        },

        handleClose() {

          this.$emit('dialogHide',false)
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
        //判断多选框
        handleSelectionChange(val) {
          this.multipleSelection = val;
          if(val.length>0){
            this.isDisabled=false
          }else {
            this.isDisabled=true
          }
        },
        //第一行加颜色
        getRowClass({ row, column, rowIndex, columnIndex }) {
          if (rowIndex == 0) {
            return 'background:#fafafa'
          } else {
            return ''
          }
        },





      //  bianjiqueding
        bottomSure(){
          this.innerVisible =false
        },

      },
     created(){
          console.log(this.dialogVisible);
          console.log(this.innerVisible);
          console.log(this.exportVisible);
     },
    }
</script>

<style scoped>
  .fast .fast-content{float: left; list-style: none;padding: 0;width: 50%;}
  .fast .fast1{float: left;margin-top: 20px; margin-right: 15px;}
  .fast .fast-content li{ list-style: none;float: left;cursor: pointer; margin: 5px; font-size: 14px;   height: 10px;line-height: 10px; border-radius: 3px; text-align: center;padding: 8px;}
  .color{background-color: #32b5c5; color: #fff;}
  .ab{}
  .fast .fast-content p{ color: #32b5c5;    margin-left: 10px; margin-top: 9px; cursor: pointer;  display: inline-block; }
  /*底部右边的已完成单据内容的nav 右搜索框*/
  /*.allcontent{ height: 500px;}*/
  .fast-input{ margin-top: 10px;width: 200px; height: 20px;  }
  /*.fast-input .el-input{ height: 10px;}*/
  /*底部右边的已完成单据内容的底部 下*/
  .dialog-footer{ border-top: 1px solid #a2a2a2; height: 50px;width: 100%;  margin-top: 60px;}
  .dialog-footer-left{float: left}
  .dialog-footer-left .el-button{ margin-left: 0px; margin-top: 15px;}
  .dialog-footer-left span{font-size: 12px; color: #9c9c9c;margin-left: 25px; }
  .dialog-footer-right .el-pagination{float: right; margin-top: 20px;}
  /*导出样式*/
  .exportcontent-bottom .el-checkbox{padding-top: 10px;}
  /*底部右边的已完成单据内容的配置页面*/
  /*.guanli-content */
  /*.guanli-content .el-dialog__body{padding: 0 !important;}*/
.guanli{ float: left;margin-top: -50px; line-height: 50px; cursor: pointer;  width: 100%;height: 50px;}
  .guanli-content{ overflow: auto; width: 100%;height:200px; border-top: 1px solid #666; border-bottom: 1px solid #666; padding-top: 20px; }
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

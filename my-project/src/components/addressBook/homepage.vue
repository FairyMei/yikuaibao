<template>
<div class="box">



  <!--<router-view/>-->
  <div class="hea-top">
  <el-row>
    <el-col :span="2"><div class="grid-content bg-purple">
      <span>{{mssg}}</span><span>(3人)</span>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple-light">
      <div style="color: #9c9c9c;text-align: center"><span>编码</span><span>{{mssg1}}</span></div>
    </div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light">
      <el-button @click="editorialStaff">编辑</el-button>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple">
      <el-dropdown size="mini" split-button type="primary" @command="roleOfGrouping">
        添加员工
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">直接添加</el-dropdown-item>
          <el-dropdown-item command="b">导入员工</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple-light">
      <el-button type="primary" @click="dialogVisib = true" size="mini">设置所在部门</el-button>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple">
      <el-button type="primary" @click="remove=true" size="mini">移出企业</el-button>
    </div></el-col>
  </el-row>
</div>
  <div class="hea-center">
    <el-table
      ref="multipleTable"
      @row-click="lines"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="工号"
        width="250">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="175">
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门"
        width="280">
      </el-table-column>
      <el-table-column
        label="角色">
        <template slot-scope="scope">
          <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
          <el-tag>{{ scope.row.power }}</el-tag>
          <el-tag type="success">{{ scope.row.power1 }}</el-tag>
          <el-tag type="info">{{ scope.row.power2 }}</el-tag>
          <el-tag type="warning">{{ scope.row.power3 }}</el-tag>
          <el-tag type="danger">{{ scope.row.power4 }}</el-tag>
        </template>
      </el-table-column>
    </el-table>

  </div>
  <!--第一个弹框的位置-->
  <div class="head-bom">
  <el-dialog
    title="编辑部门"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="edit">
    <!--第一行-->
    <div class="compile">
    <el-row style="height: 40px;line-height: 40px">
      <el-col :span="4"><div class="grid-content bg-purple">
        <span>部门名称:</span>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple-light">
        <el-input v-model="copyreader.name" placeholder="部门名称" size="mini"></el-input>
      </div></el-col>
    </el-row>

    <!--第二行-->
    <el-row style="height: 40px;line-height: 40px">
      <el-col :span="4"><div class="grid-content bg-purple">
        <span>部门编码:</span>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple-light">
        <el-input v-model="copyreader.coddin" placeholder="部门编码" size="mini"></el-input>
      </div></el-col>
    </el-row>

    <!--第三行-->
    <el-row style="height: 40px;line-height: 40px">
      <el-col :span="4"><div class="grid-content bg-purple">
        <span>上级部门:</span>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple-light">
        <el-select v-model="copyreader.seleco" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div></el-col>
    </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</div>
<!--第一个弹框的结束-->
  <!--第二个弹框的位置-->

  <el-dialog
    title="批量导入人员"
    :visible.sync="close1"
    width="40%"
    :before-close="halose">
    <!--<span>这是一段信息</span>-->

    <el-row style="height: 40px;line-height: 40px">
      <el-col :span="13"><div class="grid-content bg-purple">
        <span>批量导入说明：导入时请下载模版进行填写。</span>
      </div></el-col>
      <el-col :span="11"><div class="grid-content bg-purple-light">
        <el-button type="text">下载Excel模版</el-button>
      </div></el-col>
    </el-row>
    <!--上传-->
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-row style="height: 40px;line-height: 40px">
      <el-col :span="4"><div class="grid-content bg-purple">
        <span>人员将导入到:</span>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">
        <span>软件</span>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple">
        <el-button type="text">文字按钮</el-button>
      </div></el-col>
    </el-row>
    <!--<span slot="footer" class="dialog-footer">-->
    <!--<el-button @click="close1 = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="close1 = false">确 定</el-button>-->
  <!--</span>-->
  </el-dialog>
  <!--第二个弹框-->

  <!--第三个弹框-->
  <el-dialog
    :visible.sync="remove"
    width="30%"
    :before-close="handleClos">
    <div>
      <i class="el-icon-question"></i>
      <span>确认将选中员工从企业移出？</span>
      <p>移出操作不可撤回，请慎重考虑</p>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="remove = false">取 消</el-button>
    <el-button type="primary" @click="remove = false">确 定</el-button>
  </span>
  </el-dialog>

  <!--第四个弹框选择部门-->
  <el-dialog
    title="选择部门"
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
            @check-change="theTree"
            :data="data2"
            show-checkbox
            ref="tree"
            node-key="label"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
          </el-tree>
        </div>
      <div class="wrap-bo">

        <el-tag
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
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisib = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisib = false">确 定</el-button>
  </span>
  </el-dialog>




  <!--第四个弹框-->
</div>
</template>

<script>
  import bus from '../../assets/eventBus'

  export default {
        name: "homepage",
      data() {
        return {
          mssg:'软件',
          mssg1:'',
          tableData3: [{
            department:'软件',
            phones:'18965412131',
            email:'200677407@qq.com',
            date: '7468746',
            name: '孙国盛',
            address: '上海市普陀区金沙江路 1518 弄',
            remark:'我是孙国盛',
            power:'管理层',
            power1:'主管理员',
            power2:'部门主管',
            power3:'主管理员',
            power4:'部门主管'
          }, {
            department:'软件',
            phones:'19564831131',
            email:'1379911546@qq.com',
            date: '496496',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            remark:'我是王小虎',
            power:'高级管理层',
            power1:'主管理员',
            power2:'部门主管',
            power3:'主管理员',
            power4:'部门主管'
          }, {
            department:'软件',
            phones:'17431596131',
            email:'272920419@qq.com',
            date: '15616',
            name: '郭美杰',
            address: '上海市普陀区金沙江路 1518 弄',
            remark:'我是郭美杰',
            power:'管理层',
            power1:'部门主管',
            power2:'自定义',
            power3:'主管理员',
            power4:'部门主管'
          }, {
            department:'软件',
            phones:'15133831131',
            email:'1040682475@qq.com',
            date: '489912',
            name: '刘峰',
            address: '上海市普陀区金沙江路 1518 弄',
            remark:'我是刘峰',
            power:'高级管理层',
            power1:'主管理员',
            power2:'部门主管',
            power3:'主管理员',
            power4:'部门主管'
          }],
          multipleSelection: [],
          dialogVisible: false,
          close1:false,
          remove:false,
          dialogVisib:false,
          input:'',
          input1:'',
          input9:'',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value:'',
          //选择部门的数据
          data2: [{
            id: 1,
            label: '软件',
            flag:0,
              children: [{
                id: 9,
                label: '人事',
                flag:1
              }, {
                id: 10,
                label: '人事部门',
                flag:1
              }, {
                id: 11,
                label: '技术部门',
                flag:1
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
          copyreader:{},
          completedShow:false,
        }
      },
mounted(){
     var self=this
  // 部门名称
  bus.$on('leftclick',function (msg) {
    // console.log(msg);
    self.mssg=msg
    return mssg
  })
  // 编码
  bus.$on('left',function (encipher) {
    // console.log(encipher)
    self.mssg1=encipher
    return mssg1
  })
},


      methods:{
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        lines(row,event,column){
          // bus.$emit('tables',row)

          this.$router.push('/compile?name='+row.name+'&date='+row.date+'&phones='+row.phones+'&email='+row.email+'&remark='+row.remark+'&department='+row.department)
          // console.log(row)
          // console.log(event)
          // console.log(column)
        },
        //弹框关闭的事件
        edit(done) {
          done();
        },
        roleOfGrouping(command){
          if (command=='a'){
          this.$router.push('/add')
          }else if (command=='b'){
          this.close1=true
          }
        },
        halose(done) {
          done()
        },
        handleClos(done) {
          done();
        },
        handleCl(done) {
          done();
        },
        // 动态页签
        handleClose(tag) {
          // this.$refs.tree.setChecked(tag,false,false)
          console.log(this.$refs.tree.setChecked)
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
        // 编辑部门的事件
        editorialStaff(){
          // console.log(this.mssg)
          this.copyreader={
            name:this.mssg,
            coddin:this.mssg1,
            // seleco:ite.seleco
          }
          this.dialogVisible=true
        },
        //树菜单的点击事件
        theTree(data, checked, indeterminate){
          // console.log(data)
          // console.log(checked)
          // console.log(indeterminate)
          if (data.flag==1&&checked==true){
            this.dynamicTags.push(data.label)
          }else if (data.flag==1&&checked==false){
            this.dynamicTags.map((sub,subIndex)=>{
              if (data.label==sub){
                this.dynamicTags.splice(subIndex,1)
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 860px;
    background-color: white;
  }
.hea-top{
  height: 64px;
  line-height: 64px;
  border: 1px solid #e6e6e6;
}

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
</style>

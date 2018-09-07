<template>
  <div>
    <div class="car1">
      <div class="bar1">

        <el-col :span="19"><div class="grid-content bg-purple">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input1">
          </el-input>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">
          <el-button @click="dialogVisibl = true"><i class="el-icon-plus"></i></el-button>
        </div></el-col>
      </div>
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="pullDown"
          @select="elect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-caret-bottom"></i>
              <span class="sideBar-fon">软件</span>
              <el-dropdown size="mini" type="primary" @command="roleOfGrouping" hide-timeout=1000>
                <i class="el-icon-arrow-down sideBar-ico"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">添加子部门</el-dropdown-item>
                  <el-dropdown-item command="b">编辑部门</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <el-menu-item-group>
              <el-menu-item :index=indexs class="sideBar-fon" v-for="(item,indexs) in side">
                {{item.sidemsg}}
                <el-dropdown size="mini" type="primary" @command="role">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">{{item.add}}</el-dropdown-item>
                    <el-dropdown-item command="b">{{item.move}}</el-dropdown-item>
                    <el-dropdown-item command="c">{{item.compile}}</el-dropdown-item>
                    <el-dropdown-item command="d">{{item.dele}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <!--<el-menu-item index="1-2" class="sideBar-fon">-->
                <!--人事部门-->
                <!--<el-dropdown size="mini" type="primary" @command="personnel">-->
                  <!--<i class="el-icon-arrow-down sideBar-ico"></i>-->
                  <!--<el-dropdown-menu slot="dropdown">-->
                    <!--<el-dropdown-item command="a">添加子部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="b">移动部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="c">编辑部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="d">删除部门</el-dropdown-item>-->
                  <!--</el-dropdown-menu>-->
                <!--</el-dropdown>-->
                <!--<span class="sideBar-font">部门</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="1-3" class="sideBar-fon">-->
                <!--技术部门-->
                <!--<el-dropdown size="mini" type="primary" @command="technology">-->
                  <!--<i class="el-icon-arrow-down sideBar-ico"></i>-->
                  <!--<el-dropdown-menu slot="dropdown">-->
                    <!--<el-dropdown-item command="a">添加子部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="b">移动部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="c">编辑部门</el-dropdown-item>-->
                    <!--<el-dropdown-item command="d">删除部门</el-dropdown-item>-->
                  <!--</el-dropdown-menu>-->
                <!--</el-dropdown>-->
                <!--<span class="sideBar-font">普通</span>-->
              <!--</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </el-col>
      <div class="bottom">
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">
            <i class="el-icon-upload2"></i>
            <el-button type="text" @click="dialogVisible = true">导出</el-button>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">
            <i class="el-icon-service"></i>
            <el-button type="text">邀请</el-button>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-button type="text" @click="dialogVisi = true">离职交接</el-button>
          </div></el-col>
        </el-row>
      </div>
    </div>
<!--第一个弹框，导出通讯录-->
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <i class="el-icon-question"></i>
      <span>导出所有通讯录？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
<!--第一个结束-->

    <!--第二个添加子部门  下拉-->
    <div class="head-bom">
      <el-dialog
        title="添加子部门"
        :visible.sync="dialogVisibl"
        width="30%"
        :before-close="handleClos">
        <!--第一行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>部门名称:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-input v-model="addition.name" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <!--第二行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>部门编码:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-input v-model="addition.coding" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <!--第三行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>上级部门:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-select v-model="addition.superior" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div></el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibl = false">取 消</el-button>
    <el-button type="primary" @click="additions">确 定</el-button>
  </span>
      </el-dialog>
    </div>
<!--第二个子部门-->

    <!--第三个离职交接-->

    <el-dialog
      title="离职交接"
      :visible.sync="dialogVisi"
      width="30%"
      :before-close="handle">
      <div class="dimission-top">
          <span>离职交接：即在员工离职前，为需要他审批的单据指定新的审批人</span>
      </div>
      <div class="dimission-center">
        <div  @click="dialogVi = true">
        <el-row style="height: 60px;line-height: 60px">
          <el-col :span="5"><div class="grid-content bg-purple">
            <span>*</span><span>待离职员工:</span>
          </div></el-col>
          <el-col :span="19"><div class="grid-content bg-purple-light">
            <el-input v-model="input5" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>
          </div>
        <div @click="dialogV=true">
        <el-row style="height: 60px;line-height: 60px">
          <el-col :span="5"><div class="grid-content bg-purple">
            <span>*</span><span>新交接人:</span>
          </div></el-col>
          <el-col :span="19"><div class="grid-content bg-purple-light">
            <el-input v-model="input6" placeholder="请选择交接人" size="mini"></el-input>
          </div></el-col>
        </el-row>
          </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisi = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisi = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--第三个离职交接-->

    <!--第四个选择人员 离职交接-->
    <div class="">
    <el-dialog
      title=""
      :visible.sync="dialogVi"
      width="35%"
      :before-close="handleCl">
      <!--<span>这是一段信息</span>-->
      <div class="wrap">
        <div class="wrap-top">
          <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input7">
          </el-input>
        </div>
        <div class="wrap-center">

          <el-row>
            <el-col :span="11"><div class="grid-content bg-purple">
              <el-tree
              :data="data2"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps">
              </el-tree>
            </div></el-col>
            <el-col :span="11"><div class="grid-content bg-purple-light">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="地址">
                </el-table-column>
              </el-table>
            </div></el-col>
          </el-row>
        </div>
        <div class="wrap-bo">
          <span>已选:</span><span>孙国盛</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVi = false">取 消</el-button>
    <el-button type="primary" @click="dialogVi = false">确 定</el-button>
  </span>
    </el-dialog>
    </div>
    <!--第四个选择人员-->
    <!--第五个选择人员和第四个一样 离职交接中-->
    <el-dialog
      title="选择部门"
      :visible.sync="dialogV"
      width="35%"
      :before-close="handleCl1">
      <!--<span>这是一段信息</span>-->
      <div class="wrap">
        <div class="wrap-top1">
          <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input8">
          </el-input>
        </div>
        <div class="wrap-center1">

          <el-row>
            <el-col :span="11"><div class="grid-content bg-purple">
              <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
              </el-tree>
            </div></el-col>
            <el-col :span="11"><div class="grid-content bg-purple-light">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="地址">
                </el-table-column>
              </el-table>
            </div></el-col>
          </el-row>
        </div>
        <div class="wrap-bo1">
          <span>已选:</span><span>孙国盛</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogV = false">取 消</el-button>
    <el-button type="primary" @click="dialogV = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--第五个结束-->
    <!--第六个编辑 下拉-->
    <div class="head-bom">
      <el-dialog
        title="编辑部门"
        :visible.sync="dialo"
        width="30%"
        :before-close="handleClose">
        <!--第一行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>部门名称:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-input v-model="input9" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <!--第二行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>部门编码:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-input v-model="input10" placeholder="请输入内容" size="mini"></el-input>
          </div></el-col>
        </el-row>

        <!--第三行-->
        <el-row style="height: 40px;line-height: 40px">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span>上级部门:</span>
          </div></el-col>
          <el-col :span="18"><div class="grid-content bg-purple-light">
            <el-select v-model="input11" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div></el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
    <el-button @click="dialo = false">取 消</el-button>
    <el-button type="primary" @click="dialo = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
    <!--第六个编辑结束-->

    <!--第七个移动部门 下拉-->
    <el-dialog
      title="移动部门:人事"
      :visible.sync="dial"
      width="35%"
      :before-close="handl">
      <!--<span>这是一段信息</span>-->
      <div class="move-top">
        <i class="el-icon-warning"></i>
        <span>请选择新的从属上级,此操作会将此部门下的员工一并移动,请慎重考虑！</span>
      </div>
      <el-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        v-model="input12">
      </el-input>
      <div class="move-center">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNode"></el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dial = false">取 消</el-button>
    <el-button type="primary" @click="dial = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--移动部门结束-->

    <!--第八个删除部门  下拉-->
    <el-dialog
      :visible.sync="sectio"
      width="30%"
      :before-close="section">
      <!--<span>这是一段信息</span>-->
      <div class="section-top">
          <i class="el-icon-warning"></i>
          <span>删除部门:</span><span>人事</span>
      </div>
      <div class="section-center">
        <el-input v-model="input13" placeholder="输入部门名称以确认删除" size="mini"></el-input>
        <p>此操作无法撤销</p>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="sectio = false">取 消</el-button>
    <el-button type="primary" @click="sectio = false">确 定</el-button>
  </span>
    </el-dialog>
    </div>
</template>

<script>
  import bus from '../../assets/eventBus'
    export default {
      props:{
        car:{},
        thenewrole:{}
      },
      data(){
          return{
            mssg:'软件',
            mssg1:'',
            input6: '',
            dialogVisible: false,
            dialogVisibl:false,
            dialogVisi:false,
            dialogVi:false,
            dialogV:false,
            dialo:false,
            dial:false,
            sectio:false,
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            data2: [{
              id: 1,
              label: '一级 1',
              children: [{
                id: 9,
                label: '人事'
              }, {
                id: 10,
                label: '人事部门'
              }, {
                id: 11,
                label: '技术部门'
              }]

            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            },
            // 移动部门
            data: [{
              label: '软件',
              children: [{
                label: '人事',

              }, {
                label: '人事部门',

              }, {
                label: '技术部门',

              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            },
            // 移动部门结束
            options: [{
              value: '选项1',
              label: '软件'
            },],
            value: '',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:'',
            input8:'',
            input9:'',
            input10:'',
            input11:'',
            input12:'',
            input13:'',
            side:[
              {sidemsg:'人事',add:'添加子部门',move:'移动部门',compile:'编辑部门',dele:'删除部门',encoding:'123456'},
              {sidemsg:'资源',add:'添加子部门',move:'移动部门',compile:'编辑部门',dele:'删除部门',encoding:'465459'},
              {sidemsg:'人事部门',add:'添加子部门',move:'移动部门',compile:'编辑部门',dele:'删除部门',encoding:'745896'},
              {sidemsg:'技术部门',add:'添加子部门',move:'移动部门',compile:'编辑部门',dele:'删除部门',encoding:'167985'},
            ],
            addition:{}
          }
      },
      methods: {
        pullDown(key, keyPath) {
          // console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
          // console.log(key, keyPath);

        },
        elect(key, keyPath) {
          // alert(1)
          // console.log(key, keyPath);
          console.log(this.side[key].sidemsg)
          // console.log(this.side[key].sidemsg)
          bus.$emit('leftclick',this.side[key].sidemsg)
          bus.$emit('left',this.side[key].encoding)
          // console.log(this.side[key].encoding)
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        roleOfGrouping(command){
          // alert(1)
          // console.log(1)
          console.log(this.thenewrole)
          if (command=='a'){
            this.dialogVisibl=true
          }else if(command=='b'){
            this.dialo=true
          }
          this.$message('click on item ' + command);
        },
        handleClose(done) {
          done();
        },
        handleClos(done) {
          done();
        },
        handleCl(done) {
          done();
        },
        handleCl1(done) {
          done();
        },
        handle(done) {
          done();
        },
        //左边人事的点击事件
        role(command){
          console.log(command)
          // console.log(this.thenewrole)
          // alert(1)
          if (command=='a'){
            this.dialogVisibl=true
          }else if(command=='b'){
            this.dial=true
          }else if (command=='c'){
            this.dialo=true
          }else if (command=='d'){
            this.sectio=true
          }
          this.$message('click on item ' + command);
        },
        handl(done) {
          done();
        },
        handleNode(data) {
          console.log(data);
        },
        // 删除部门的关闭
        section(done) {
          done();
        },
        // 人事部门
        // personnel(command){
        //   if (command=='a'){
        //     this.dialogVisibl=true
        //   }else if(command=='b'){
        //     this.dial=true
        //   }else if (command=='c'){
        //     this.dialo=true
        //   }else if (command=='d'){
        //     this.sectio=true
        //   }
        // },
        // technology(command){
        //   if (command=='a'){
        //     this.dialogVisibl=true
        //   }else if(command=='b'){
        //     this.dial=true
        //   }else if (command=='c'){
        //     this.dialo=true
        //   }else if (command=='d'){
        //     this.sectio=true
        //   }
        // }
        // 添加子部门
        additions(){
          this.side.push({sidemsg:this.addition.name,add:'添加子部门',move:'移动部门',compile:'编辑部门',dele:'删除部门',encoding:this.addition.coding})
          this.addition.name=''
            this.addition.coding=''
            this.addition.superior=''
          this.dialogVisibl=false
        }
      }

    }
</script>

<style scoped>
  .car1{
    width: 276px;
    height: 864px;
    background-color: white;
    margin-top: 18px;
    margin-left: 18px;
  }
.sideBar-font{
  color: #9c9c9c;
  font-size: 10px;
  margin-left: 70px;
}
  .sideBar-ico,.sideBar-fon{
    font-size: 10px;
  }
  .bar1{
    width: 271px;
    height: 62px;
    line-height: 62px;
    border-bottom: 1px solid #e6e6e6;
    background-color: white;
  }
  .role{
    margin-left: 30px;
  }
  .bottom{
    width: 276px;
    position: absolute;
    bottom: 0;
  }
  .dimission-top{
    height: 37px;
    width: 90%;
    background-color: #f7f7f7;
    margin: 0 auto;
    line-height: 37px;
  }
  .dimission-top span{
    font-size: 12px;
  }
  .wrap-top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dcdcdc;
    border: 1px solid blue;
  }
  .wrap-center{
    height: 350px;
    border: 1px solid red;
  }

  .wrap-bo{
    width: 100%;
    height: 20px;
    line-height: 20px;
    border: 1px solid red;
  }
  .wrap-bo span{
    text-align: right;
  }
  .move-top{
    width: 100%;
    height: 36px;
    line-height: 36px;
  }
  .move-top span{
    font-size: 12px;
  }
  .move-top i{
    font-size: 16px;
    color: #f1b169;
  }
  .move-center{
    width: 100%;
    height: 350px;
    /*border: 1px solid red;*/
  }
  /*删除*/
  .section-top span{
    font-weight: bold;
  }
  .section-top i{
    color: #f1b169;
  }
  .section-center{
    margin-top: 20px;
  }
  .section-center p{
    color: #595959;
    font-size: 12px;
    margin-top: 36px;
  }
</style>

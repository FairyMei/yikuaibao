<template>
  <div style="height: 100%">
    <div class="car">
      <div class="bar">
          <span class="role">角色管理</span>
        <el-dropdown size="mini" split-button type="primary" @command="roleOfGrouping">
          新建
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">角色分组</el-dropdown-item>
            <el-dropdown-item command="b">角色</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="bar-center">
      <el-col :span="12">
        <el-menu
          :default-active="$route.path"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-caret-bottom"></i>
              <span class="sideBar-fon">未分组</span>
              <el-dropdown size="mini" type="primary" hide-timeout=1000 @command="first">
                <i class="el-icon-arrow-down sideBar-ico"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">添加角色</el-dropdown-item>
                  <el-dropdown-item command="b">删除分组</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <el-menu-item-group>
              <el-menu-item index="#/jurisdiction" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                主管理员
                <el-dropdown size="mini" type="primary" hide-timeout=1000 @command="firstone">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">移动角色</el-dropdown-item>
                    <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <el-menu-item index="1-2" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                部门主管
                <el-dropdown size="mini" type="primary" hide-timeout=1000 @command="firsttwo">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">移动角色</el-dropdown-item>
                    <el-dropdown-item command="b">重命名</el-dropdown-item>
                    <el-dropdown-item command="c">删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">部门</span>
              </el-menu-item>
              <el-menu-item index="1-3" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                自定义人
                <el-dropdown size="mini" type="primary"  hide-timeout=1000 @command="firstthree">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">移动角色</el-dropdown-item>
                    <el-dropdown-item command="b">重命名</el-dropdown-item>
                    <el-dropdown-item command="c">删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-caret-bottom"></i>
              <span class="sideBar-fon">大小</span>
              <el-dropdown size="mini" type="primary" @command="rol" hide-timeout=1000>
                <i class="el-icon-arrow-down sideBar-ico"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">添加角色</el-dropdown-item>
                  <el-dropdown-item command="b">重命名</el-dropdown-item>
                  <el-dropdown-item command="c">删除分组</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                对方过后的
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">移动角色</el-dropdown-item>
                    <el-dropdown-item command="b">重命名</el-dropdown-item>
                    <el-dropdown-item command="c">删除分组</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>

            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-caret-bottom"></i>
              <span class="sideBar-fon">岗位</span>
              <el-dropdown size="mini" type="primary">
                <i class="el-icon-arrow-down sideBar-ico"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>添加角色</el-dropdown-item>
                  <el-dropdown-item>重命名</el-dropdown-item>
                  <el-dropdown-item>删除分组</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                普通员工
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除分组</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <el-menu-item index="3-2" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                管理层
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">部门</span>
              </el-menu-item>
              <el-menu-item index="3-3" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                高级管理者
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <el-menu-item index="3-4" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                中层员工
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-caret-bottom"></i>
              <span class="sideBar-fon">职务</span>
              <el-dropdown size="mini" type="primary">
                <i class="el-icon-arrow-down sideBar-ico"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>添加角色</el-dropdown-item>
                  <el-dropdown-item>重命名</el-dropdown-item>
                  <el-dropdown-item>删除分组</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                人事
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除分组</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <el-menu-item index="4-2" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                经理
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">部门</span>
              </el-menu-item>
              <el-menu-item index="4-3" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                出纳
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
              <el-menu-item index="4-4" class="sideBar-fon">
                <i class="el-icon-tickets sideBar-ico"></i>
                财务主管
                <el-dropdown size="mini" type="primary">
                  <i class="el-icon-arrow-down sideBar-ico"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>移动角色</el-dropdown-item>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除角色</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="sideBar-font">普通</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      </div>
    </div>
    <!--第一个新建弹框-->
    <el-dialog
      title="新建角色"
      :visible.sync="dia"
      width="600px"
      :before-close="handleClos">
      <hr>
      <div class="fir common">
        <span class="fon">*</span>
        <span>角色名称:</span><el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </div>
      <div class="two common">
        <span class="fon">*</span>
        角色类型:<el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <div class="three">
        <span class="fon">*</span>
        指定角色组:<el-select v-model="value1" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <div class="four">
        <span class="fon">*</span>
        <span>数据来源:</span>
        <el-radio v-model="radio" label="1">手动管理</el-radio>
      </div>
      <div class="five">
        <p>普通角色：基于全系统的一般性角色，如系统管理员、公司CEO</p>
        <p>部门角色：在所选部门范围内生效，如部门主管、部门财务</p>
        <p>项目角色：在所选项目范围内生效，如项目负责人</p>
      </div>
      <hr>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dia = false">取 消</el-button>
    <el-button type="primary" @click="dia = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--第一个新建结束-->
    <!--第二个移动弹框-->
    <el-dialog title="移动角色" :visible.sync="move">
      <el-form :model="form">
        <el-form-item label="指定角色组" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域" size="mini">
            <el-option label="未分组" value="shanghai"></el-option>
            <el-option label="大小" value="beijing"></el-option>
            <el-option label="岗位" value="tianjin"></el-option>
            <el-option label="职务" value="shenzhen"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="move = false">取 消</el-button>
        <el-button type="primary" @click="move = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--第二个弹框结束-->
    <!--第三个重命名弹框-->
    <el-dialog
      title="提示"
      :visible.sync="rechristen"
      width="30%"
      :before-close="rechristens">
      <!--<span>这是一段信息</span>-->
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">
          <span>*</span><span>角色名称</span>
        </div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple-light">
          <el-input v-model="input" placeholder="请输入角色名称" size="mini"></el-input>
        </div></el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
    <el-button @click="rechristen = false">取 消</el-button>
    <el-button type="primary" @click="rechristen = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--第三个结束-->
    <!--第四个删除-->
    <el-dialog
      :visible.sync="deleted"
      width="30%"
      :before-close="delete1">
      <h2>删除：对方过后</h2>
      <el-input v-model="input3" placeholder="输入角色名称以确认删除" size="mini"></el-input>
      <div class="hint">
        <i class="el-icon-warning"></i>
        <span>删除操作无法撤销</span>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="deleted = false">取 消</el-button>
    <el-button type="primary" @click="deleted = false">确 定</el-button>
  </span>
    </el-dialog>
    <!--第四个结束-->
    </div>
</template>

<script>
    export default {
      props:{
        car:{},
        thenewrol:{}
      },
      data(){
          return{
            options: [{
              value: '选项1',
              label: '普通角色'
            }, {
              value: '选项2',
              label: '部门角色'
            }, {
              value: '选项3',
              label: '项目角色'
            }],
            options1: [{
              value: '选项1',
              label: '未分组'
            }, {
              value1: '选项2',
              label: '大小'
            }, {
              value1: '选项3',
              label: '岗位'
            }, {
              value: '选项4',
              label: '职务'
            }],
            value: '',
            value1:'',
            radio: '1',
            input:'',
            dia:false,
            // 移动的数据
            move: false,
            form: {
              name: '',
              region: '',
              date1: '',
              type: [],
            },
            formLabelWidth: '100px',
            // 删除
            deleted: false,
            rechristen:false,
            input3:''
          }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        roleOfGrouping(command){
          // console.log(this.car)
          console.log(this.thenewrole)
          if (command=='a'){
            this.car=true
          }else if(command=='b'){
            this.thenewrole=true
          }
          this.$emit("events",this.car)
          this.$emit("thenewRole",this.thenewrole)
          this.$message('click on item ' + command);
        },
        handleClos(done) {
          done();
        },
        first(command){
          if (command=='a'){
            this.dia=true
          }else if(command=='b'){
            this.deleted=true
          }
        },
        firstone(command){
          if (command=='a'){
            this.move=true
          }
        },
        firsttwo(command){
          if (command=='a'){
            this.move=true
          }else if (command=='c'){
            this.deleted=true
          }else if (command=='b'){
            this.rechristen=true
          }
        },
        firstthree(command){
          if (command=='a'){
            this.move=true
          }else if (command=='c'){
            this.deleted=true
          }else if (command=='b'){
            this.rechristen=true
          }
        },
        rol(command){
          if (command=='a'){
            this.dia=true
          }else if(command=='b'){
            // this.dial=true
          }
          this.$message('click on item ' + command);
        },
        delete1(done) {
          done();
        },
        rechristens(done) {
          done();
        }
      }

    }
</script>

<style scoped>
  .car{
    /*width: 276px;*/
    width: 100%;
    height: 100%;
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
  .bar{
    width: 271px;
    height: 62px;
    line-height: 62px;
    border-bottom: 1px solid #e6e6e6;
    background-color: white;
  }
  .role{
    margin-left: 30px;
  }
  /*删除*/
  h2{
    text-align: center;
  }
  .hint{
    text-align: center;
    margin-top: 32px;
  }
  /*新建角色*/
  .fon{
    font-size: 25px;
    color: red;
  }
  .common{
    height: 69px;
    line-height: 69px;
    margin-left: 120px;
  }
  .three{
    margin-left: 105px;
    height: 69px;
    line-height: 69px;
  }
  .four{
    margin-left: 120px;
    height: 30px;
    line-height: 30px;
  }
  .five{
    width: auto;
    font-size: 13px;
    line-height: 1.5;
    margin-left: 104px;
    color: #9c9c9c;
  }
  .bar-center{
    height: 60%;
  }
</style>

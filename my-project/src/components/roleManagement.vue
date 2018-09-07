<template>
    <div class="parent">
      <el-container>
        <el-aside width="20%" style="height: 100%;overflow-x: hidden">
          <sideBar :car="showbox" :thenewrol="thenewrolE" @events="parent" @thenewRole="theNewrole"></sideBar>
        </el-aside>
        <el-main>
          <div>
            <homepage1></homepage1>
            <!--<router-view></router-view>-->
            <RoleOfGrouping  :car="show"></RoleOfGrouping>
            <theNewRole :thenewrole="thenewrole"></theNewRole>

          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  import sideBar from './sideBar'
  import homepage1 from './homepage1'
  import RoleOfGrouping from './RoleOfGrouping'
  import theNewRole from './theNewRole'
    export default {
        name: "role-management",
      data(){
        return{
          showbox:false,
          show:false,
          thenewrole:false,
          thenewrolE:false
        }
      },
      components:{
        sideBar,
        homepage1,
        RoleOfGrouping,
        theNewRole,
      },
      methods:{
        parent(val){
          // console.log(val)
          this.show = val
        },
        theNewrole(val){
          this.thenewrole=val
          console.log(val)
        }
      }
    }
</script>

<style scoped>
  .parent{
    height: 90%;
  }
  /*.el-header, .el-footer {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  /*}*/

  /*.el-aside {*/
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
  /*}*/

  /*.el-main {*/
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  /*}*/

  /*body > .el-container {*/
    /*margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
  /*}*/
</style>

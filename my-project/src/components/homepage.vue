<template>
    <div class="box">
      <div class="homepage-top">
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple management-fon">
              <span class="fon management">管理层</span>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple-light">
              <i class="el-icon-edit"></i>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <i class="el-icon-upload"></i>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple-light">
              <span class="fon">移动角色</span>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
            <i class="el-icon-delete"></i>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple-light">
              <span class="fon">删除角色</span>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="homepage-center">
          <span class="homepage-center-fon fon">主管理员</span>
      </div>

      <div class="homepage-center-bottom">
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple content">
              <img src="../assets/headPortrait.svg" alt="">
            </div>
          </el-col>
          <el-col :span="15">
            <div class="grid-content bg-purple-light">
              <span class="fon">孙国盛</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button size="medium" class="fon" @click="dialogVisible = true">编辑</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homepage"
    }
</script>

<style scoped>
  .box{
    height: 864px;
    background-color: white;
  }
  .management{
    text-align: right;
  }
.homepage-top{
  height: 54px;
  line-height: 54px;
  background-color: white;
}
  .fon{
    font-size: 12px;
  }
  .el-icon-upload,.el-icon-delete{
    margin-left: 22px;
  }
  .management-fon{
    margin-left: 40px;
  }
  .homepage-center{
    clear: both;
    height: 54px;
    line-height: 54px;
    background-color: #fafafa;
  }
  .homepage-center-fon{
    margin-left: 40px;
  }
  .homepage-center-bottom{
    height: 60px;
    line-height: 60px;
    border: 1px solid #e6e6e6;
    background-color: white;
  }
  .content{
    text-align: right;
  }
  .content img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .btn{
    width: 100px;
  }
</style>

<template>
  <div style="height: 100%;">
    <!--<el-row>-->
      <!--<el-col :span="2">-->
        <!--<div class="grid-content bg-purple navigation-left">-->
          <!--<img src="../assets/navigation.svg">-->
          <!--<span>易快报</span>-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="18">-->
        <!--<div class="grid-content bg-purple-light menu">-->
          <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
            <!--<el-menu-item index="1">首页</el-menu-item>-->
            <!--<el-submenu index="2">-->
              <!--<template slot="title">代办</template>-->
              <!--<el-menu-item index="2-1">待审批</el-menu-item>-->
              <!--<el-menu-item index="2-2">待支付</el-menu-item>-->
              <!--<el-menu-item index="2-3">抄送我的</el-menu-item>-->
            <!--</el-submenu>-->
            <!--<el-submenu index="3">-->
              <!--<template slot="title">报表</template>-->
              <!--<el-menu-item index="3-1">企业报表</el-menu-item>-->
              <!--<el-menu-item index="3-2">个人报表</el-menu-item>-->
              <!--<el-menu-item index="3-3">预算报表</el-menu-item>-->
            <!--</el-submenu>-->
            <!--<el-submenu index="4">-->
              <!--<template slot="title">-->
                <!--<span>企业管理</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<template slot="title">基础设置</template>-->
                <!--<el-menu-item index="4-1">角色管理</el-menu-item>-->
                <!--<el-menu-item index="4-2">权限管理</el-menu-item>-->
                <!--<el-menu-item index="4-3">通讯录</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
          <!--</el-menu>-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="4">-->
        <!--<div class="grid-content bg-purple navigation-right">-->
          <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
            <!--<el-submenu index="1">-->
              <!--<template slot="title">-->
                <!--<img src='../assets/headPortrait.svg' class="img">-->
                <!--<span>姓名</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<el-menu-item index="1-1">我的企业信息</el-menu-item>-->
                <!--<el-menu-item index="1-2">我的个人信息</el-menu-item>-->
                <!--<el-menu-item index="1-3">退出登录</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
            <!--<el-submenu index="2">-->
              <!--<template slot="title">帮助</template>-->
              <!--<el-menu-item index="2-1">客服</el-menu-item>-->
              <!--<el-menu-item index="2-2">帮助手册</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-menu>-->
        <!--</div>-->
      <!--</el-col>-->

    <!--</el-row>-->
    <!--<headers ></headers>-->
    <!--<roleManagement></roleManagement>-->

    <!--tab导航-->

    <headerNav class="headerheight"></headerNav>
    <main-content class="mainheight"></main-content>

  </div>
</template>

<script>
  // import headers from './hea'
  import headerNav from '../components/commen/headerNav'
  import MainContent from '../pages/Home/Main/Main'
  // import roleManagement from './roleManagement'
//  郭美杰主页
import home from '../pages/Home/Home'
export default {
    components:{
      // headers,
      // roleManagement,
      headerNav,
      MainContent
    },
  // name: 'HelloWorld',
  // data() {
  //   return {
  //     activeIndex: '1',
  //     activeIndex2: '1'
  //   };
  // },
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath);
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navigation-left{
    height: 60px;
    line-height: 60px;
    margin-left: 18px;
  }
.navigation-left span{
  color: #32b5c5;
  font-size: 16px;
  font-weight: bold;
}
  .navigation-left img{
    vertical-align: middle;
  }
  .menu{
    margin-left: 20px;
  }
  .img{
    width: 30px;
    height: 30px;
  }
  .mainheight{
    /*height: 80%;*/
    /*background-color: #32b5c5;*/
  }
</style>

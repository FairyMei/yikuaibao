<template>
  <div>
    <!--<hea></hea>-->
    <el-container>
      <el-aside width="300px">
        <side></side>
      </el-aside>
      <el-main>
        <div>
        <!--<homepage></homepage>-->
          <router-view class="aaa"></router-view>
          <!--<compile></compile>-->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  // import hea from '../../components/hea'
  import side from '../../components/addressBook/sideBar'
  import homepage from '../../components/addressBook/homepage'
  // import compile from '../../components/addressBook/compile'
    export default {
        data(){
          return{

          }
        },
      components:{
        side,
        homepage,
        // hea,
        // compile
      }
    }
</script>

<style scoped>

</style>

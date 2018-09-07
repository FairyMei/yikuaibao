<template>
    <div>

      <el-dialog
        title="新建角色组"
        :visible.sync="car"
        width="30%"
        :before-close="handleClose">

        <i class="el-icon-star-on"></i>
        <span>名称：</span>
        <input type="text" placeholder="填写角色组名称" >
        <span slot="footer" class="dialog-footer">
    <el-button @click="car = false">取 消</el-button>
    <el-button type="primary" @click="car = false">确 定</el-button>
  </span>
      </el-dialog>

    </div>
</template>

<script>
    export default {
      props:{
        car:{
          // default:false
        },
      },
        name: "mobile-role",
      data() {
        console.log(this.car)
        return {
          // dialogVisible: this.car,
          input: ''
        };
      },
      methods: {
        handleClose(done) {
          done();
        }
      }
    }
</script>

<style scoped>

</style>

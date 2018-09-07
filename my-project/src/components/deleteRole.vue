<template>
    <div class="deleteRole">
      <el-dialog
        :visible.sync="deleteRol"
        width="30%"
        :before-close="handleC">
        <h2>删除：对方过后</h2>
        <el-input v-model="input" placeholder="输入角色名称以确认删除" size="mini"></el-input>
        <div class="hint">
          <i class="el-icon-warning"></i>
          <span>删除操作无法撤销</span>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="deleteRol = false">取 消</el-button>
    <el-button type="primary" @click="deleteRol = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
  export default {
    props:{
      deleteRol:{
        default:false
      }
    },
    mounted(){
      this.$emit('deleteRol',this.deleteRol)
    },
    data() {
      return {
        // dialogVisible: false,
        input:''
      };
    },
    methods: {
      handleC(done) {
        done();
      }
    }
  };
</script>

<style scoped>
  h2{
    text-align: center;
  }
.hint{
  text-align: center;
  margin-top: 32px;
}
</style>

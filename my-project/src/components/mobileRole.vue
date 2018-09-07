<template>
    <div class="role">
      <el-dialog
        title="移动角色"
        :visible.sync="mobileRol"
        width="30%"
        :before-close="shift">
        <hr>
        <div class="box">
        <span class="fon">*</span>
        指定角色组:<el-select v-model="value1" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
          <p>（说明：此角色会归属于指定的角色)</p>
        </div>

        <span slot="footer" class="dialog-footer">
          <hr>
    <el-button @click="mobileRol = false">取 消</el-button>
    <el-button type="primary" @click="mobileRol = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      props:{
        mobileRol:{
          default:false
        }
      },
      mounted(){
        this.$emit('mobileRol',this.mobileRol)
      },
        data(){
          return{
            dialogVisible: false,
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
            value1:''
          }
        },
      methods:{
        shift(shif) {
          shif();
          alert(1)
        }
      }
    }
</script>

<style scoped>
  .fon{
    font-size: 25px;
    color: red;
    vertical-align: middle;
  }
  .box{
    height: 60px;
    line-height: 60px;
  }
  p{
    color: #dcdcdc;
    text-align: center;
  }
</style>

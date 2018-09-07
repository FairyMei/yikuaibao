<template>
    <div class="theNewRole">
      <el-dialog
        title="新建角色"
        :visible.sync="thenewrole"
        width="600px"
        :before-close="handleClose">
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

        <span slot="footer" class="dialog-footer">
    <el-button @click="thenewrole = false">取 消</el-button>
    <el-button type="primary" @click="thenewrole = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      props:{
        thenewrole:{}
      },
        name: "the-new-role",
      data() {
        return {
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
          input:''
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
</style>

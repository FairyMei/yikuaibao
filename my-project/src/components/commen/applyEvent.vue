<template>
  <div>

    <el-dialog
      title="事项列表"
      :visible.sync="dialogVisiblesApply"
      width="60%"
      :before-close="handleClose" style="font-size: 14px;padding: 0;">

      <div class="applyContent">
        <div class="headera">
          <div class="label">单据状态:</div>
          <div class="content">
            <!--class="select"-->
            <span  @click="applyeventButton" ref="jinxingzhong" :class="{select:isActive} ">进行中</span>
            <span  @click="completeButton" ref="complete" :class="{select:isActives} ">已完成</span>
          </div>
        </div>

        <div class="empty-body" v-show="applyevent">
          <img class="no-flow-img" src="../../assets/null.svg">
          <div class="no-select-desc">您没有进行中申请事项</div>
        </div>

        <div class="empty-body" v-show="complete">
          <img class="no-flow-img" src="../../assets/null.svg">
          <div class="no-select-desc">您没有已完成申请事项</div>
        </div>

      </div>

    </el-dialog>


    <div>

    </div>
  </div>
</template>

<script>
  export default {
    props:{
      dialogVisiblesApply:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        // dialogVisiblesApply: false,
        myloan:[
          {title:'s',time:'2018.09.16到期',money:'222,222.00'}
        ],
        applyevent:true,
        complete:false,
        isActive:true,
        isActives:false,
      }
    },
    methods:{
      handleClose() {

        this.$emit('applya',false)
      },
      applyeventButton(){
        this.applyevent = true;
        this.complete = false;
        // this.$refs.jinxingzhong,style=select
        this.isActive = true
        this.isActives = false
      },
      completeButton(){
        // alert(1)
        this.applyevent = false;
        this.complete = true;
        this.isActive = false
        this.isActives = true
      },
    }
  }
</script>

<style scoped>
  .el-dialog__body {   }
  .applyContent{height: 430px; overflow: auto; margin: 0;padding: 0; }
  .applyContent .headera{ height: 50px;margin: 0 16px;border-bottom: 1px solid #efefef; line-height: 50px; width: 95%; display: flex; }
  .applyContent .headera .label{ margin-right: 10px; }
  .applyContent .headera .content span{width: 52px;height: 24px;line-height: 24px;cursor: pointer;margin-right: 10px;display: inline-block;text-align: center;border-radius: 2px; }
  .applyContent .headera .content .select{ background: #32b5c5;color: #fff; }



  .applyContent .empty-body{  text-align: center;  margin-top: 70px; }
  .applyContent .empty-body .no-flow-img{     width: 250px;  height: 166px; }
</style>

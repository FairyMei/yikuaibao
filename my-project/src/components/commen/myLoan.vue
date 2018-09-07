<template>
    <div>

      <el-dialog
        title="我的借款"
        :visible.sync="dialogVisibles"
        width="60%"
        :before-close="handleClose" style="font-size: 14px;padding: 0;">
        <div class="content">

          <div class="loanList">
          <ul v-for="(item,index) in myloan">
            <li class="repeat">
              <div class="left">
                <div class="title">{{item.title}}</div>
                <div class="common">{{item.time}}</div>
              </div>
              <div class="right">
                <div class="money-wrap " style="color: rgb(51, 51, 51);">
                  <span class="currency" style="font-size: 13px;">¥</span>
                  <span class="value" style="font-size: 15px;">{{item.money}}</span>
                </div>
              </div>
            </li>
          </ul>


          </div>
        </div>
        <!--<span slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      <!--</span>-->
      </el-dialog>

    </div>
</template>

<script>
    export default {
      props:{
        dialogVisibles:{
          type:Boolean,
          default:false
        }
      },
        data(){
          return{
            // dialogVisibles: false,
            myloan:[
              {title:'s',time:'2018.09.16到期',money:'222,222.00'}
            ],
          }
        },
      methods:{
        handleClose(done) {

          this.$emit('dialoghide',false)
        },
      }
    }
</script>

<style scoped>
  .el-dialog__body {   }
  .content{height: 400px; overflow: auto; margin: 0;padding: 0; background-color: #f5f5f5; }
  .loanList{ margin: 16px 16px 0px; }
  .loanList ul{ padding: 0;margin: 0;   border-top: 1px solid #eaeaea;border-bottom: 1px solid #eaeaea;}
  .loanList ul li{list-style: none;cursor: pointer; display: flex;   justify-content: space-between;padding: 0 25px;vertical-align: middle; line-height: 47px; height: 64px;background: #fff;border: 1px solid #eaeaea;border-top: none;}
  .loanList ul li .left{overflow: hidden;}
  .loanList ul li .left .title{  height: 20px;   text-overflow: ellipsis;white-space: nowrap;font-size: 14px;color: #333;}
  .loanList ul li .left .common{ font-size: 12px; color: #9c9c9c; height: 20px; }
  .loanList ul li .right{ text-align: right; }
</style>

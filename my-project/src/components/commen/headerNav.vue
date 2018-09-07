<template>
<div id="headerNav">
  <!--<ul>-->
    <!--<li><img src="" alt=""><span>新建报销</span></li>-->
  <!--</ul>-->

  <el-row style="padding-left: 5px;">
    <el-col :span="13">
      <el-row >
        <el-col :span="24">
          <el-col :span="4">

            <div class="grid-content">
              <!--headercontent-->
              <router-link to="/reimbursement" class="lianjie lianjie1">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIwIDIyIj4KICAgIDxnIGZpbGw9IiMzMkI1QzUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIuMTU4IDIyQy45NjggMjIgMCAyMS4wNzYgMCAxOS45NDFWMi4wNkMwIC45MjQuOTcgMCAyLjE2MiAwaDkuOTU2Yy4yNzkgMCAuNjYuMTUyLjg1OC4zNDZsNC42NzUgNC41ODdjLjE5NS4xOTEuMzUuNTY4LjM0OC44NDhsLS4wMzMgMy4yMmMwIC44ODkuMDA5IDIuMTIyLjAxOCAzLjM0NS4wMDggMS4wNzYuMDEyLjg0OC0uMDE4IDEuNjctLjAwMS4wMjgtLjkwNi4wMi0uOTA2IDAtLjAwMi0uODMyLjAwOC0uNTYyIDAtMS42Ny0uMDEtMS4yMjcgMC0yLjQ0NiAwLTMuMzQ1VjUuNTU2bC01LjA0Ny00LjU1M0gyLjAyNGMtLjYzNC4wMDYtMS4wMTMuNjYyLTEuMDEzIDEuMDU3djE3Ljg5NGMwIC42NDMuNjk4IDEuMDU3IDEuMTcyIDEuMDU3aDExLjc2MVYyMkgyLjE1OHpNMTIuMyA4Yy0uNzkgMC0xLjI5OS0uODE4LTEuMjc1LTEuNjMxTDExIDJjLjM3NS4wNi43OTggMCAxLjAxMyAwIC4wNzIgMCAwIDQuMzY5IDAgNC4zNjkgMCAuNjU1LjI5My42NTUuNjEuNjU1SDE2VjhoLTMuN3oiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIxIiB4PSIxMyIgeT0iMTgiIHJ4PSIuNSIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjEiIHg9IjQiIHk9IjE1IiByeD0iLjUiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxIiB4PSI0IiB5PSIxMiIgcng9Ii41Ii8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjUiIGhlaWdodD0iMSIgeD0iNCIgeT0iOSIgcng9Ii41Ii8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNyIgeD0iMTYiIHk9IjE1IiByeD0iLjUiLz4KICAgIDwvZz4KPC9zdmc+Cg==" >
              <span class="expense-hover" >新建报销  <i class="line"></i></span>
              </router-link>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ">
              <router-link to="/NewLoan" class="lianjie lianjie2">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIwIDIyIj4KICAgIDxnIGZpbGw9IiNGRkFFNjMiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTkuNDY0IDExaDIuMDMzYy4yNzggMCAuNTAzLjIzMi41MDMuNSAwIC4yNzYtLjIzMy41LS41MDMuNUg4Ljk3NHYxaDIuNTIzYy4yNzggMCAuNTAzLjIzMi41MDMuNSAwIC4yNzYtLjIzMy41LS41MDMuNUg4Ljk3NHYyLjM2MmEuNS41IDAgMCAxLTEgMFYxNGgtMi40N0EuNTA3LjUwNyAwIDAgMSA1IDEzLjVjMC0uMjc2LjIzMy0uNS41MDMtLjVoMi40NzF2LTFoLTIuNDdBLjUwNy41MDcgMCAwIDEgNSAxMS41YzAtLjI3Ni4yMzMtLjUuNTAzLS41aDEuOTgxTDYuMjg2IDguOTI1YS41LjUgMCAwIDEgLjE4OC0uNjc1LjQ5Mi40OTIgMCAwIDEgLjY3OC4xNzVsMS4zMjIgMi4yOSAxLjMyMi0yLjI5YS40OTIuNDkyIDAgMCAxIC42NzgtLjE3NS41LjUgMCAwIDEgLjE4OC42NzVMOS40NjQgMTF6Ii8+CiAgICAgICAgPHBhdGggZD0iTTIuMTU4IDIyQy45NjggMjIgMCAyMS4wNzYgMCAxOS45NDFWMi4wNkMwIC45MjQuOTcgMCAyLjE2MiAwaDkuOTU2Yy4yNzkgMCAuNjYuMTUyLjg1OC4zNDZsNC42NzUgNC41ODdjLjE5NS4xOTEuMzUuNTY4LjM0OC44NDhsLS4wMzMgMy4yMmMwIC44ODkuMDA5IDIuMTIyLjAxOCAzLjM0NS4wMDggMS4wNzYuMDEyLjg0OC0uMDE4IDEuNjctLjAwMS4wMjgtLjkwNi4wMi0uOTA2IDAtLjAwMi0uODMyLjAwOC0uNTYyIDAtMS42Ny0uMDEtMS4yMjcgMC0yLjQ0NiAwLTMuMzQ1VjUuNTU2bC01LjA0Ny00LjU1M0gyLjAyNGMtLjYzNC4wMDYtMS4wMTMuNjYyLTEuMDEzIDEuMDU3djE3Ljg5NGMwIC42NDMuNjk4IDEuMDU3IDEuMTcyIDEuMDU3aDExLjc2MVYyMkgyLjE1OHpNMTIuMyA4Yy0uNzkgMC0xLjI5OS0uODE4LTEuMjc1LTEuNjMxTDExIDJjLjM3NS4wNi43OTggMCAxLjAxMyAwIC4wNzIgMCAwIDQuMzY5IDAgNC4zNjkgMCAuNjU1LjI5My42NTUuNjEuNjU1SDE2VjhoLTMuN3oiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIxIiB4PSIxMyIgeT0iMTgiIHJ4PSIuNSIvPgogICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjciIHg9IjE2IiB5PSIxNSIgcng9Ii41Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=">
              <span class="loan-hover" @click="open2">新建借款  <i class="line"></i></span>
              </router-link>
            </div>
          </el-col>
          <el-col :span="4">

            <div class="grid-content">
              <router-link to="/NewApplication" class="lianjie lianjie3">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIwIDIyIj4KICAgIDxnIGZpbGw9IiM0OEFERTciIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIuMTU4IDIyQy45NjggMjIgMCAyMS4wNzYgMCAxOS45NDFWMi4wNkMwIC45MjQuOTcgMCAyLjE2MiAwaDkuOTU2Yy4yNzkgMCAuNjYuMTUyLjg1OC4zNDZsNC42NzUgNC41ODdjLjE5NS4xOTEuMzUuNTY4LjM0OC44NDhsLS4wMzMgMy4yMmMwIC44ODkuMDA5IDIuMTIyLjAxOCAzLjM0NS4wMDggMS4wNzYuMDEyLjg0OC0uMDE4IDEuNjctLjAwMS4wMjgtLjkwNi4wMi0uOTA2IDAtLjAwMi0uODMyLjAwOC0uNTYyIDAtMS42Ny0uMDEtMS4yMjcgMC0yLjQ0NiAwLTMuMzQ1VjUuNTU2bC01LjA0Ny00LjU1M0gyLjAyNGMtLjYzNC4wMDYtMS4wMTMuNjYyLTEuMDEzIDEuMDU3djE3Ljg5NGMwIC42NDMuNjk4IDEuMDU3IDEuMTcyIDEuMDU3aDExLjc2MVYyMkgyLjE1OHpNMTIuMyA4Yy0uNzkgMC0xLjI5OS0uODE4LTEuMjc1LTEuNjMxTDExIDJjLjM3NS4wNi43OTggMCAxLjAxMyAwIC4wNzIgMCAwIDQuMzY5IDAgNC4zNjkgMCAuNjU1LjI5My42NTUuNjEuNjU1SDE2VjhoLTMuN3oiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI5IiB4PSI2IiB5PSI4IiByeD0iLjUiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI1IiB4PSIxMSIgeT0iMTIiIHJ4PSIuNSIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTEuNSAxNC41KSIvPgogICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHg9IjUiIHk9IjgiIHJ4PSIuNSIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNS41IDEwLjUpIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iOSIgeD0iMTAiIHk9IjgiIHJ4PSIuNSIvPgogICAgICAgIDxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjEiIHg9IjEzIiB5PSIxOCIgcng9Ii41Ii8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNyIgeD0iMTYiIHk9IjE1IiByeD0iLjUiLz4KICAgIDwvZz4KPC9zdmc+Cg==" >
              <span>新建申请</span>
              </router-link>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI2IDI2Ij4KICAgIDxwYXRoIGZpbGw9IiMzMkI1QzUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIzIDIzdi01aDF2NmgtNnYtMWg1em0xLTIwdjVoLTFWM2gtNVYyaDZ2MXpNMyAyM2g1djFIMnYtNmgxdjV6TTMgM3Y1SDJWMmg2djFIM3ptNCA5aDEydjJIN3YtMnoiLz4KPC9zdmc+Cg==" >
              <span>查验发票</span>
            </div>
          </el-col>

    </el-col>
      </el-row>
    </el-col>

    <el-col :span="2" :offset="5">
      <div class="grid-content text1" @click="myloan">
        <span>我的借款</span>

    </div>

    </el-col>
    <el-col :span="1" :offset="1">
      <div class="grid-content text">
        <i class="line1"></i>
      </div>
    </el-col>

    <el-col :span="2" >
      <div class="grid-content text"  @click="applyEvent">
        <span>申请事项</span>
      </div>
    </el-col>
  </el-row>

<!--头部右边的我的借款和申请事项的页面-->
<myloan :dialogVisibles="dialogVisibles" @dialoghide="dialogHanderHide"></myloan>
  <applyevent :dialogVisiblesApply="dialogVisiblesApply" @applya="dialogApplyHide"></applyevent>

</div>
</template>

<script>
  import myloan from '../commen/myLoan'
  import applyevent from '../commen/applyEvent'
    export default {
        name: "header-nav",
      data(){
          return{
            dialogVisibles:false,
            dialogVisiblesApply:false,
          }
      },
      methods:{
         myloan(){
           this.dialogVisibles=true
         },
        dialogHanderHide(){
          this.dialogVisibles=false
        },

      //  申请事项
        applyEvent(){
          this.dialogVisiblesApply = true
        },
        dialogApplyHide(){
          this.dialogVisiblesApply = false
        },
        open2() {
          this.$confirm('您的借款单尚未保存，是否放弃编辑当前借款单?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {


          }).catch(() => {

          });
        }
      },
      components:{
        myloan,
        applyevent
      }
    }
</script>

<style scoped>
  .lianjie{
    text-decoration: none;
    outline: none;
    color: #333;
  }
  .lianjie1:hover{
    color: #32b5c5;
  }
  .lianjie2:hover{
    color: #f39575;
  }
  .lianjie3:hover{
    color: #48ade7;
  }
  .text1{
    text-align: right;
  }
  .text{
    text-align: left;
  }
  .bg-purple {
    background: #d3dce6;
  }
  #headerNav{
    margin-top: 10px;
    padding: 3px 10px 0px 10px;
    border-radius: 5px;
  }
  .el-row {
    margin-bottom: 8px;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: 14px;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content span{
    /*display: inline-block;*/
    /*background-color: black;*/
    line-height: 50px;
    height:100%;
    vertical-align:middle;
  }
  .grid-content img{
    /*display: inline-block;*/
    /*background-color: red;*/
    vertical-align:middle;

    margin-right: 5px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
/*竖线*/
  .loan-hover i, .expense-hover i{
    /*height: 50px;*/
    /*color: #666666;*/
    /*margin-left: 5px;*/
  }
  .line{
    width: 1px;
    height: 20px;
    background-color: #ebebeb;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
  }
  .line1{
    width: 1px;
    height: 20px;
    background-color: #ebebeb;
    display: inline-block;
    /*margin-left: 15px;*/
    vertical-align: middle;
  }
</style>

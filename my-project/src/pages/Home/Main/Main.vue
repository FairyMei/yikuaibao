<template>

  <!--主页面根据布局完成，el-aside， el-main-->
    <div id="maincontent" style="height: 80%;">
<!--主左侧边栏-->
      <el-row style="height: 100%;">
        <el-col :span="7" style="height: 100%;">
          <div class="" style="height: 100%;">
              <el-container style="height: 100%;">

                <el-aside width="95%" style="height: 89%">
                  <div v-show="isShow" class="sideba-top dropdown">

                    <el-dropdown @command="handleCommand"  size="mini" >
                  <span class="el-dropdown-link">
                    我发起的<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                      <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item command="a">全部</el-dropdown-item>
                        <el-dropdown-item command="b">报销单</el-dropdown-item>
                        <el-dropdown-item command="c">借款单</el-dropdown-item>
                        <el-dropdown-item command="c">申请单</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>

                    <div class="search-icon" @click="search">
                      <i class="el-icon-search"></i>
                      搜索
                    </div>

                  </div>
                  <!--搜索框-->
                  <div  v-show="isShow2" class="sideba-top-search" >
                    <el-input
                      placeholder="请输入标题或单号"
                      suffix-icon="el-icon-search"
                      v-model="input"
                      class="search-content"
                    >
                      <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
                    </el-input>
                    <span class="cancle" @click="cancle">取消</span>
                  </div>

                  <!--借款单-->
                  <router-link to="/showLoan">
                    <div class="sideba-bottom" v-for="(item,index) in listAll ">

                      <div class="top">
                        <div class="title-part">
                          <img src="data:image/png;base64,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" >
                          <span>[{{item.title}}]</span>
                        </div>
                        <div class="bill-amount">
                          <span>{{item.money}}</span>
                        </div>
                      </div>

                      <div class="bottom">
                        <div class="feeType-name">{{item.jiekuan}}</div>
                        <div class="bill-status">
                          <span class="dota" style="background: rgb(237, 168, 90)"></span>
                          <span>{{item.status}}</span>
                        </div>
                      </div>


                    </div>
                  </router-link>
                  <!--新建单-->
                  <router-link to="/showReimbursement">
                  <div class="sideba-bottom" v-for="(item,index) in listAll ">

                    <div class="top">
                      <div class="title-part">
                        <img src="data:image/png;base64,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" >
                        <span>[{{item.title}}]</span>
                      </div>
                      <div class="bill-amount">
                        <span>{{item.money}}</span>
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="feeType-name">{{item.jiekuan}}</div>
                      <div class="bill-status">
                        <span class="dota" style="background: rgb(237, 168, 90)"></span>
                        <span>{{item.status}}</span>
                      </div>
                    </div>


                  </div>
                  </router-link>
                  <!--差旅申请单-->
                  <router-link to="/shenPi">
                  <div class="sideba-bottom" v-for="(item,index) in listAll ">

                    <div class="top">
                      <div class="title-part">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAgCAYAAABHA7voAAAAAXNSR0IArs4c6QAABLpJREFUWAndWU1sG0UU/nbttZ04Dokdp0kbQVERadqooSdAVMQSB8qBigoERVT8qOKAONNLK9QDcKigF8QBISgHfgSoAlEEUiuk8FMhgfpPVJEDVaWUmMZx4jZp4tixeW/tdWZ3Z+3ZhgicJ1k7M+/N2/fNvJ8ZrwaiR45N9ZW1wmFqplAu9/JY05KmTZDtI1rZ2P/d44lxzQSHxfM0GG9aUHLDsxpCQ3p159YaOIYcZ2w6NVLcW6OU0ps+5urtDOUT3sE1TSsGeOj+DhwZ9h/C/OKnN0fRZmgNF/ip/ii+fmwdgo1FXbqCrhGfA7GQjtvC/tdpIGFgT38bUn0tOHgqi8n5kvnm3Xe1Ih4J2KxgWUPX8MJgDKWyjYXTf+dxbnLRPij0VgxQ0OWrOTpVwP4fs3j1PvKAVIJATuPK9SLuaA+iN2o3qytSWcC7Ow0XwMu5Qt33ajuPTTjWxC2/d6ANiepLnNx7e8MIBTT8NL7gZJn9qYUSPro0K+XxYLJFx+EH44gaOl48mUEuX9lJcQK78rNbYnj0yzSKDa0VZwL2pbLzar0dGyLoiQaQXViqjVkNNozwYag7ZA3Vnuxq6bmlugDZNXknt3eHa+Bee6ATLULAJVsqLssLIeL7PbOIo6Pei8eGKAFkwVFSdoDcyElvUYLpoBjcdyLjZOF1MjRRNc7FFAYY5Ikr87WRCxRTBq9albZ1GUi2BsxYWxIQjt8oWiKeT2WAnhp8MihXYCBu2GZlyY0naKct+nxszmqazxK56LZkGJ+Qq6+Ki9retsJOlMrCm8MJm5Zv/ryJd85dx65NrXhpqN3GEzvHd/eI3Vp711dpFNyha/KVd3CwK4QPdyZrSq1GJ7kne5MXT9wZnnOzUMaBn7PWdBykLGrRb+k8MvPuMLD4Xs+iBziWVwY4Q9nt1FV3phzuiyBMCGU8Tk5O4hg6c225bonG8WLwbzO5MNfXRsQlIlOtn16yygA5oN+7eMOlh43hJCPjbaSappJknEr3UUFnj2lER07ncFJITjJ5ZYCyyas5xiXgFSofMuqlkvXBw+5wkckqA4xQXVpPip0UorQYpJ+Mx3NuldgrHrrd7eKsj3mqpAxwSyKE9+usmhePj1+3Qt1U956hE5SMApr6wikD5ID+7A97feKX8zGOU/+7F9zxybcA3Ycx9yRDtYPz2HTB00V7CPxRSUaXLYYSwPRcEZxFf5CcN7l26Zou5fXFgogpXIfYsD20GE/S74nj10w71xGI57fKdzBGx0NVUgJ46JcZVX02uY/rHLJFwR3rw+igc+sXY7O12wLHL2dhGfmJbbkGmdZVGLuTAPCFtwQNb5/N4dvLy+dRjl2vhf3XXXQVsJkqeSfyVPnf+DUHPsU0on66D7ZTBh2kCzDTjOR249Txn+7gpWwBL38/hb+Eg7bTQLG/na5kz22NYalcxvnJPM4KJyJRTmwrXXjFCc42/13BIT8tuag6ZVX7G9oq9fbq7PINg+dyWeVdL9D/Fnk7y1P1indQdgP3fJsiwwnMmsZXpVk6rPshHZX/8v3MaR5ZwsbeNdI8Fvu2dETnrzA0TX6q9a3vfzUhy9h08xMTfYUhV/10Tbgrhxxh4S9LjO0f2rZpBKBbxxoAAAAASUVORK5CYII=" >
                        <span>[{{item.title}}]</span>
                      </div>
                      <div class="bill-amount">
                        <span>{{item.money}}</span>
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="feeType-name">{{item.jiekuan}}</div>
                      <div class="bill-status">
                        <span class="dota" style="background: rgb(72, 173, 231);"></span>
                        <span>{{item.status}}</span>
                      </div>
                    </div>


                  </div>
                  </router-link>


            </el-aside>

<!--已完成单据-->
                <el-footer >
                  <!--<el-collapse v-model="activeNames" @change="handleChange">-->
                    <!--<el-collapse-item title="" name="1">-->
                     <!---->
                    <!--</el-collapse-item>-->
                  <!--</el-collapse>-->
                  <div class="footer" @click="completedHandleClick">
                    <div class="title select-disable">已完成单据</div>
                    <div class="right-icon"><i class="el-icon-arrow-right"></i></div>
                  </div>


                  <completed-documents :dialogVisible="completedShow" @dialogHide="dialogHanderHide"></completed-documents>

                </el-footer>
              </el-container>
          </div>
        </el-col>
        <!--主右边-->
        <el-col :span="17" style="height: 100%; ">
          <div style="height: 98%">

            <el-main style="height: 100%">

              <!--<reimbursement  ></reimbursement>-->
              <!--<new-application></new-application>-->

              <!--<new-loan></new-loan>-->

              <router-view/>
              <!--<router-view name="baoxiao"></router-view>-->
              <!--<router-view name="newapply"></router-view>-->
              <!--<router-view name="newloan"></router-view>-->

            </el-main>

          </div>
        </el-col>
      </el-row>


    </div>
</template>

<script>
  // 主左侧边栏的“已完成单据”组件
  import CompletedDocuments from '../MainLeftSidebar/CompletedDocuments'
  // 根据不同的新建报销，新建借款，新建申请主页切换组件
  import reimbursement from '../MainRightSidebar/reimbursement'
  import NewApplication from '../MainRightSidebar/NewApplication'
  import NewLoan from '../MainRightSidebar/NewLoan'
  export default {
      data(){
        return{
        //  搜索框
          input:'',
          isShow:true,
          isShow2:false,
          completedShow:false, /*已完成单据页面 */
          // diologShow:false,
          dialogVisible: false,
          i:0,
          listAll:[
            {title:'无标题',money:'无金额',jiekuan:'借款单',status:'待提交'},
          ],

        //  取消导出
        //   isExport:true
        }
      },
      methods:{
        handleCommand(command) {
          this.$message('click on item ' + command);
        },
        search(){
          this.isShow=!this.isShow;
          this.isShow2=true
        },
        //搜索下的取消
        cancle(){
          this.isShow2=false;
          this.isShow=true
        },

        //已完成单据点击出现dialog
        completedHandleClick(){
          this.completedShow = true
          // this.completedShow = !this.completedShow
        },
        //已完成单据绑定事件
        dialogHanderHide(){
          this.completedShow = false
        },
        //点击取消（导出页面）
        // exportClose(){
        //   this.isExport=false
        // },
        },
      components:{
        CompletedDocuments,
        reimbursement,
        NewApplication,
        NewLoan
    }
}
</script>

<style scoped>
#maincontent{
padding: 10px;
}
  .el-aside {
    width:400px;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
    position: relative;
  }
  .el-main {
    /*height: 512px;*/
    height: 95%;
    background-color: #fff;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    border-radius: 5px;
    margin: 0;
    padding: 0;

  }
  .el-container {
    margin-bottom: 40px;
  }
  /*主左侧边栏*/
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  line-height: 50px;
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
  .dropdown{
    width: 100%;
    height: 50px;
    /*background-color: red;*/
    border-bottom: 1px solid #efefef;
  }
  /*主左侧边栏的上*/
.search-icon{ float: right; line-height: 50px; font-size: 14px; margin-right: 15px;  cursor: pointer;}
/*搜索框*/
.sideba-top-search{ width: 95%;height: 50px; border-bottom:1px solid #efefef; }
.sideba-top-search .el-input{ width: 318px;height: 28px; vertical-align: middle}
/*.search-content{float: left;width: 300px; height: 27px; background-color: red}*/
.cancle{ vertical-align: middle;font-size: 14px; vertical-align: bottom;cursor: pointer; display: inline-block}
/*.search-icon .el-icon-search{ float: right}*/
/*主左侧边栏的下*/
  .sideba-bottom{  width: 95%;margin: 15px 0px 0px 15px; height: 65px; border-bottom: 1px solid #efefef; font-size: 12px;}
.sideba-bottom .title-part{float: left;margin-bottom: 5px;}
   .sideba-bottom .title-part img{ width: 35px; height: 20px; vertical-align: middle; margin-right: 8px}
   .sideba-bottom .title-part span{vertical-align: middle;color: #8f8f8f}

.sideba-bottom .bill-amount{float: right;margin-right: 15px;}
.sideba-bottom .bill-amount span{float: right;margin-right: 15px;color: #8f8f8f}
/*主左侧边栏的内容*/
.bottom{clear: both; color: #8f8f8f}
.bottom .feeType-name{float: left}
.bottom .bill-status{float: right;margin-right: 30px;}
.bottom .dota{  display: inline-block; width: 8px;height: 8px;border-radius: 4px;background-color: #ffae63 }


  /*侧边栏底部*/

.el-footer{ width: 95%;background-color: #fff; border-radius: 3px ;border-top: 1px solid #efefef;}
.footer{ background: white; vertical-align: middle;line-height: 60px;cursor: pointer ;    width: 95%;
  padding-left: 10px;}
.footer .title{float: left;font-size: 14px;}
.footer .right-icon{float: right;font-size: 14px;}

/*底部右边的已完成单据内容的nav 左*/
.fast .fast-content{float: left; list-style: none;padding: 0;width: 50%;}
.fast .fast1{float: left;margin-top: 20px; margin-right: 15px;}
.fast .fast-content li{ list-style: none;float: left;cursor: pointer; margin: 5px; font-size: 14px;   height: 10px;line-height: 10px; border-radius: 3px; text-align: center;padding: 8px;}
  .color{background-color: #32b5c5; color: #fff;}
.fast .fast-content p{ color: #32b5c5;    margin-left: 10px; margin-top: 9px; cursor: pointer;  display: inline-block; }

/*底部右边的已完成单据内容的nav 右搜索框*/
/*.allcontent{ height: 500px;}*/
.fast-input{ margin-top: 10px;width: 200px; height: 20px;  }

/*.fast-input .el-input{ height: 10px;}*/
/*底部右边的已完成单据内容的底部 下*/
.dialog-footer{ border-top: 1px solid red; height: 50px;width: 100%;  margin-top: 60px;}
.dialog-footer-left{float: left}
.dialog-footer-left .el-button{ margin-left: 0px; margin-top: 15px;}
.dialog-footer-left span{font-size: 12px; color: #9c9c9c;margin-left: 25px; }
.dialog-footer-right .el-pagination{float: right; margin-top: 20px;}

  /*导出样式*/
  .exportcontent-bottom .el-checkbox{padding-top: 10px;}
</style>

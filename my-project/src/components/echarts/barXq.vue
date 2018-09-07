<template >
  <div class="picxx">
    <div class="pic-top">
      <el-row>
        <div class="input5"><el-col :span="7"><div class="grid-content bg-purple">
          <el-button plain size="small" @click="$router.back(-1)"> << 返回报表首页</el-button>
        </div></el-col></div>
        <div class="input1"><el-col :span="3"><div class="grid-content bg-purple-light">
          <!--第一个搜索框-->
          <el-autocomplete
            popper-class="my-autocomplete"
            size="small"
            v-model="state3"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect">
            <i
              class="el-icon-arrow-down el-input__icon"
              slot="suffix"
              @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <!--<span class="addr">{{ item.address }}</span>-->
            </template>
          </el-autocomplete>
        </div></el-col></div>
        <div class="input2"><el-col :span="4"><div class="grid-content bg-purple">
          <!--第二个搜索框-->
          <el-autocomplete
            popper-class="my-autocomplete"
            size="small"
            v-model="state1"
            :fetch-suggestions="search"
            placeholder="请输入内容"
            @select="select">
            <i
              class="el-icon-search el-input__icon"
              slot="suffix"
              @click="hconClick">
            </i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
        </div></el-col></div>
        <div class="input4"><el-col :span="2"><div class="grid-content bg-purple-light">
          <el-dropdown size="small" split-button>
            <i class="el-icon-date"></i>
            本月
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>本季</el-dropdown-item>
              <el-dropdown-item>本年</el-dropdown-item>
              <el-dropdown-item>去年</el-dropdown-item>
              <el-dropdown-item>自定义</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col></div>
        <div class="input3"><el-col :span="5"><div class="grid-content bg-purple">
          <!--时间范围选择器-->
          <el-date-picker
            size="small"
            v-model="value4"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div></el-col></div>
        <el-col :span="2"><div class="grid-content bg-purple">
          <el-button plain size="small">导出数据</el-button>
        </div></el-col>
      </el-row>
    </div>
    <div class="pic-center">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="pic-center-top">
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">
                  <span>个人费用趋势报表</span>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <el-button plain size="small" @click="dialogTableVisible = true">查看数据</el-button>
                </div></el-col>
              </el-row>
            </div>
            <!--echarts图位置-->
            <div id="main" style="width: 100%;height:400px;"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <!--右边的表格-->
            <div>
              <el-table @row-click="tables" :data="tableData" border style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column
                  prop="date"
                  label="审批状态"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="金额"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="占比%"
                  :formatter="formatter">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--查看数据的弹框-->
    <div class="dalog"><el-dialog title="收货地址" :visible.sync="dialogTableVisible" width="60%">
      <el-input size="small" placeholder="搜索标题、单号或提交人" suffix-icon="el-icon-search" v-model="input"></el-input>
      <el-table :border="true" :data="gridData" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="单据模版" width="150" sortable></el-table-column>
        <el-table-column prop="name" label="单号" width="150" sortable></el-table-column>
        <el-table-column prop="name" label="标题" width="150" sortable></el-table-column>
        <el-table-column prop="name" label="提交人" width="150" sortable></el-table-column>
        <el-table-column prop="name" label="费用金额" width="150" sortable></el-table-column>
        <el-table-column prop="date" label="报销日期" width="150" sortable></el-table-column>
        <el-table-column prop="date" label="支付日期" width="150" sortable></el-table-column>
        <el-table-column prop="name" label="支付金额" width="200" sortable></el-table-column>
      </el-table>
      <div class="footer">
        <el-row>
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button plain disabled size="small">导出全部</el-button>
          </div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple-light">
            <el-button plain disabled size="small">导出选中</el-button>
          </div></el-col>
          <el-col :span="10"><div class="grid-content bg-purple">
            <span>已选择</span><span>0/0 张</span>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">
            <!--标签页-->
            <div class="block">
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div></el-col>
        </el-row>
      </div>
    </el-dialog></div>
    <!--查看数据的弹框结束-->
  </div>
</template>

<script>

  export default {
    data(){
      return{
        restaurants: [],
        state3: '',
        genre: [],
        state1: '',
        // 时间选择器的数据
        value4: [new Date(2018, 10, 10, 10, 10), new Date(2018, 10, 11, 10, 10)],
        // 时间选择器的结束
        //表格里的数据
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        // 查看详情的弹框数据
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        input:'',
        // 查看详情的弹框结束
      }
    },
    methods: {
      //这是第一个搜索框
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）" },
          { "value": "新旺角茶餐厅" },
          { "value": "泷千家(天山西路店)" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）"},
          { "value": "贡茶" },
          { "value": "豪大大香鸡排超级奶爸"},
          { "value": "茶芝兰（奶茶，手抓饼）"},
          // { "value": "十二泷町"},
          // { "value": "星移浓缩咖啡" },
          // { "value": "阿姨奶茶/豪大大" },
          // { "value": "新麦甜四季甜品炸鸡" },
          // { "value": "Monica摩托主题咖啡店"},
          // { "value": "浮生若茶（凌空soho店）"},
          // { "value": "NONO JUICE  鲜榨果汁" },
          // { "value": "CoCo都可(北新泾店）" },
          // { "value": "快乐柠檬（神州智慧店）" },
          // { "value": "Merci Paul cafe" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      //第一个搜索结束
      //第二个搜索框开始
      search(queryString, cb) {
        var genre = this.genre;
        var results = queryString ? genre.filter(this.createFilter(queryString)) : genre;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadall() {
        return [
          { "value": "三全鲜食（北新泾店）" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）"},
          { "value": "新旺角茶餐厅"},
          { "value": "泷千家(天山西路店)"},
          { "value": "胖仙女纸杯蛋糕（上海凌空店）"},
          { "value": "贡茶"},
          { "value": "豪大大香鸡排超级奶爸"},
          { "value": "茶芝兰（奶茶，手抓饼）"},
          { "value": "十二泷町"},
          { "value": "星移浓缩咖啡"},
          { "value": "阿姨奶茶/豪大大"},
          { "value": "新麦甜四季甜品炸鸡"},
        ];
      },
      select(item) {
        console.log(item);
      },
      hconClick(ev) {
        console.log(ev);
      },
      // 第二个搜索框结束
      //右边表格的事件
      formatter(row, column) {
        return row.address;
      },
      // echarts右边的表
      tables(){
        this.dialogTableVisible=true
      },
      // echarts的方法
      setEchart(){
        var dom = document.getElementById("main");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        app.title = '堆叠柱状图';

        option = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['审批中+支付中','已完成']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['17-01','17-02','17-03','17-04','17-05','17-06','17-07','17-08','17-09','17-10','17-11','17-12']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'审批中+支付中',
              type:'bar',
              data:[862, 1018, 964, 1026, 1679, 1600, 1570,485,789,348,796,411],
              markLine : {
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                },
                data : [
                  [{type : 'min'}, {type : 'max'}]
                ]
              }
            },
            {
              name:'已完成',
              type:'bar',
              barWidth : 5,
              stack: '搜索引擎',
              data:[620, 732, 701, 734, 1090, 1130, 1120,496,764,51,997,745]
            }
          ]
        };
        ;
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
      // echarts结束
    },
    mounted() {
      this.restaurants = this.loadAll();
      this.genre = this.loadall();
      this.setEchart();
    },


  }
</script>

<style scoped>
  .picxx{
    width: 100%;
    height: 90%;
  }
  .pic-top{
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  /*搜索按钮的样式*/
  li {
    line-height: normal;
    padding: 7px;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .addr {
    font-size: 12px;
    color: #b4b4b4;
  }

  .highlighted .addr {
    color: #ddd;
  }
  /*搜索的样式*/
  .pic-center{
    width: 98%;
    background-color: white;
    height: 89%;
    margin: 0 auto;
  }
  /*echarts的样式*/
  .pic-center-top{
    height: 50px;
    line-height: 50px;
    /*border: 1px solid red;*/
  }
  .input5{
    margin-left: 1%;
  }
  .footer{
    height: 45px;
    line-height: 45px;
    /*border: 1px solid red;*/
  }
  .footer .block{
    /*border: 1px solid red;*/
    /*line-height: 45px;*/
    margin-top: 10px;
  }
</style>

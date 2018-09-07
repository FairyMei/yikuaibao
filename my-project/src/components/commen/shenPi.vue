<template>
    <div>

      <div class="right_part_header___y19fn">
        <div class="title___3t8dP">1</div>
        <div class="subtitle___-iScM">
          <div class="template_type___2GSEH">差旅申请单</div>
          <div class="bill_id___2og4I">S18000001</div>
          <div class="owner_name___pwKtG">郭美杰</div>
        </div>
        <div class="status_wrapper___2AdjT status___2_bB3">
          <span class="status_wrapper_point___z3wCd color_approving___2Zzjy" style=" display: inline-block; background: rgb(72, 173, 231);"></span>
          <span class="status_wrapper_text___3654i">审批中</span>
        </div>
      </div>
  <div class="tabsConent">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="单据详情" name="first">
          <div class="ekb-tab-content">
            <div style="width: 100%; height: 100%; padding: 24px;">
              <div class="logs-card___3MDK9"><div class="wrapper">
                <div class="line-1"><div class="labebank-tipsl">
                  <span class="circle-icon" style="background: rgb(72, 173, 231);"></span>
                  <span style="color: rgb(58, 63, 63);" class="status_wrapper_text___3654i">审批中</span>
                </div>
                </div>
                <div class="pl-10">
                  <div class="horizontal___2FyAy">
                    <span class="date___3PIk0">昨天 21:25</span>
                    <div class="approve-content-wrapper___RXwWz">
                      <span>
                        <mark class="content-highlight___2yDV4 ">郭美杰</mark>
                        <span class=""> 提交送审</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="">
                <div class="ant-row form_item_4_readonly_wrapper___2VbXb">
                  <div class="ant-col-4 form_item__label___Gd5r6">标题：</div>
                  <div class="ant-col-15 form_item__content___2GGuS">
                    <!--<div class="label_wrap___3v18Q">-->
                      <p class="new-line">1</p>
                    <!--</div>-->
                  </div>
                </div>
                <div class="ant-row form_item_4_readonly_wrapper___2VbXb">
                  <div class="ant-col-4 form_item__label___Gd5r6">提交人：</div>
                  <div class="ant-col-15 form_item__content___2GGuS">
                    <div class="horizontal">
                      <span>郭美杰</span>
                    </div>
                  </div>
                </div>
                <div class="ant-row form_item_4_readonly_wrapper___2VbXb">
                  <div class="ant-col-4 form_item__label___Gd5r6">申请日期：
                  </div>
                  <div class="ant-col-15 form_item__content___2GGuS">
                    <span>2018/08/20</span>
                  </div>
                </div>
                <div style="border-top: 1px solid rgba(0, 0, 0, 0.08); padding-bottom: 16px;"></div>
                <div class="trips___1hDiv">
                  <h3>差旅行程</h3>
                  <ul class="trip-list"><li>
                    <h5>第1程：2018/08/20</h5>
                    <div class="card">
                      <div class="icon" style="background: rgb(249, 168, 37);">
                        <img width="28" height="28" src="http://images.ekuaibao.com/feetype/sf_200.png" alt="">
                      </div>
                      <div class="content">
                        <p class="city">北京市 —— 北京市/石景山区</p>
                        <div span="24" class="ant-row detail">
                          <div class="ant-col-4">出行方式：</div>
                          <div class="ant-col-18 label">打车</div>
                        </div>
                        <div class=""></div>
                        <div class="error color-red"></div>
                      </div>
                    </div>
                  </li>
                  </ul>
                </div>
                <div style="border-top: 1px solid rgba(0, 0, 0, 0.08); padding-bottom: 16px;"></div>
              </div>
              <div>

              </div>
              <div class="bottom-line___20mVx"><div>

              </div>
                <div class="bottom-line-content">
                  <div>

                  </div>
                  <div class="amount-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="审批流程" name="second">
          <div class="spLiucheng">

            <div class="spLiuchengTop">
               <div class="spLiuchengTop-img">

                 <div class="user-pic">
                   <img width="48" height="48" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5aS05YOPPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0xIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiPjwvY2lyY2xlPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNNDAsMzkuMDU4NDQ4OSBMNDAsMzkuMDY0OTc4MSBDNDAsNDAuMTMyNjcwNCAzOS4xNjAyMzk4LDQwLjk5ODQ0OTIgMzguMTI0OTk2OSw0MC45OTg0NDkyIEwxLjg3NTAwMzA3LDQwLjk5ODQ0OTIgQzAuODM5OTA3NTExLDQwLjk5ODQ0OTIgMCw0MC4xMzI2NzA0IDAsMzkuMDY0OTc4MSBMMCwzOS4wNTg0NDg5IEMwLDM5LjA1ODQ0ODkgMCwzMi4wMDYwMDQ0IDQuOTkwMjU1MzMsMjkuNDQwOTIxMyBDOC4xNTEwMTU0NiwyNy44MTk3NzA3IDYuOTMzNTkzODUsMjkuMTM4MTczNiAxMC44MTM3OTA4LDI3LjQ3NDcwNjEgQzE0LjY5MDc0NzcsMjUuODE3ODE2OCAxNS42MDg3NTk5LDI1LjIzODQzODIgMTUuNjA4NzU5OSwyNS4yMzg0MzgyIEwxNS42NDQ1NDc2LDIxLjQxNjcwOTMgQzE1LjY0NDU0NzYsMjEuNDE2NzA5MyAxNC4xOTI3MTM4LDIwLjI3MDk2MTQgMTMuNzQzNTI2MSwxNi42NzM5MjQ1IEMxMi44MzIwOTIxLDE2Ljk0NzM2NDUgMTIuNTMyNTg0NSwxNS41NzM2MzU0IDEyLjQ4MDQ5ODQsMTQuNjk3OTg5MiBDMTIuNDMxNjUyMywxMy44NTQ4OTA4IDExLjk1MzE1NjgsMTEuMjE4MTgzIDEzLjA2MzIxNTIsMTEuNDU1ODM1MyBDMTIuODM1MzgxMyw5LjY5NjM5Mzc1IDEyLjY3MjU0NDYsOC4xMDc4Mzk5NCAxMi43NTM5Mzg0LDcuMjY2MzYxNSBDMTMuMDMwNjE4NCw0LjMxMzk0NTk1IDE1Ljc4NDUwNzcsMS4yMjk1NzIyOCAyMC4wMjk0MDU4LDEuMDAzMzU4MzcgQzI1LjAxOTYxMjEsMS4yMjc5NTIyNiAyNi45OTg3ODc0LDQuMzEyMzI1OTIgMjcuMjc1NDE4NCw3LjI2NDc5MDU3IEMyNy4zNTY4MTIyLDguMTA2MjE5OTIgMjcuMTc3NzI2Miw5LjY5NDc3MzczIDI2Ljk0OTg5MjIsMTEuNDUyNTk1MiBDMjguMDU5OTAxNSwxMS4yMTY2MTIxIDI3LjU3ODExNjksMTMuODQ4NDEwNyAyNy41MjYwMzA4LDE0LjY5NDc5ODMgQzI3LjQ3Mzk5MzcsMTUuNTY3MjA0NCAyNy4xNjgwMDYsMTYuOTM3NjkzNSAyNi4yNjMxMDEzLDE2LjY2NDIwNDQgQzI1LjgwNzI4NjIsMjAuMjYxMTkyMiAyNC4zNTU1MDE0LDIxLjQwMDU1ODIgMjQuMzU1NTAxNCwyMS40MDA1NTgyIEwyNC4zOTEyODkyLDI1LjIwMjYwMTQgQzI0LjM5MTI4OTIsMjUuMjAyNjAxNCAyNS4zMDkyNTIzLDI1Ljc0MzAwMTMgMjkuMTg2MzA3NCwyNy4zOTk5Mzk2IEMzMy4wNjY1MDQzLDI5LjA2MDA2ODkgMzEuODQ4OTg0NSwyNy44MTk3NzA3IDM1LjAwOTg0MjksMjkuNDQwOTIxMyBDNDAsMzIuMDA1OTU1MyA0MCwzOS4wNTg0NDg5IDQwLDM5LjA1ODQ0ODkiIGlkPSJwYXRoLTUiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrqHmibnmtYHnqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NTcuMDAwMDAwLCAtMjIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5oql6ZSA5Y2V6K+m5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC05Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siIHN0cm9rZT0iI0U3RTdFNyIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNGM0YzRjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIG1hc2s9InVybCgjbWFzay00KSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIG1hc2s9InVybCgjbWFzay0zKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNFMkUyRTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==">
                   <div class="spLiuchengTop-zhuGuan">
                     主管审批
                   </div>
                   <div class="user-name">
                     郭美杰
                   </div>
                 </div>

                 <div class="user-pic">
                   <img width="48" height="48" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5aS05YOPPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0xIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiPjwvY2lyY2xlPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNNDAsMzkuMDU4NDQ4OSBMNDAsMzkuMDY0OTc4MSBDNDAsNDAuMTMyNjcwNCAzOS4xNjAyMzk4LDQwLjk5ODQ0OTIgMzguMTI0OTk2OSw0MC45OTg0NDkyIEwxLjg3NTAwMzA3LDQwLjk5ODQ0OTIgQzAuODM5OTA3NTExLDQwLjk5ODQ0OTIgMCw0MC4xMzI2NzA0IDAsMzkuMDY0OTc4MSBMMCwzOS4wNTg0NDg5IEMwLDM5LjA1ODQ0ODkgMCwzMi4wMDYwMDQ0IDQuOTkwMjU1MzMsMjkuNDQwOTIxMyBDOC4xNTEwMTU0NiwyNy44MTk3NzA3IDYuOTMzNTkzODUsMjkuMTM4MTczNiAxMC44MTM3OTA4LDI3LjQ3NDcwNjEgQzE0LjY5MDc0NzcsMjUuODE3ODE2OCAxNS42MDg3NTk5LDI1LjIzODQzODIgMTUuNjA4NzU5OSwyNS4yMzg0MzgyIEwxNS42NDQ1NDc2LDIxLjQxNjcwOTMgQzE1LjY0NDU0NzYsMjEuNDE2NzA5MyAxNC4xOTI3MTM4LDIwLjI3MDk2MTQgMTMuNzQzNTI2MSwxNi42NzM5MjQ1IEMxMi44MzIwOTIxLDE2Ljk0NzM2NDUgMTIuNTMyNTg0NSwxNS41NzM2MzU0IDEyLjQ4MDQ5ODQsMTQuNjk3OTg5MiBDMTIuNDMxNjUyMywxMy44NTQ4OTA4IDExLjk1MzE1NjgsMTEuMjE4MTgzIDEzLjA2MzIxNTIsMTEuNDU1ODM1MyBDMTIuODM1MzgxMyw5LjY5NjM5Mzc1IDEyLjY3MjU0NDYsOC4xMDc4Mzk5NCAxMi43NTM5Mzg0LDcuMjY2MzYxNSBDMTMuMDMwNjE4NCw0LjMxMzk0NTk1IDE1Ljc4NDUwNzcsMS4yMjk1NzIyOCAyMC4wMjk0MDU4LDEuMDAzMzU4MzcgQzI1LjAxOTYxMjEsMS4yMjc5NTIyNiAyNi45OTg3ODc0LDQuMzEyMzI1OTIgMjcuMjc1NDE4NCw3LjI2NDc5MDU3IEMyNy4zNTY4MTIyLDguMTA2MjE5OTIgMjcuMTc3NzI2Miw5LjY5NDc3MzczIDI2Ljk0OTg5MjIsMTEuNDUyNTk1MiBDMjguMDU5OTAxNSwxMS4yMTY2MTIxIDI3LjU3ODExNjksMTMuODQ4NDEwNyAyNy41MjYwMzA4LDE0LjY5NDc5ODMgQzI3LjQ3Mzk5MzcsMTUuNTY3MjA0NCAyNy4xNjgwMDYsMTYuOTM3NjkzNSAyNi4yNjMxMDEzLDE2LjY2NDIwNDQgQzI1LjgwNzI4NjIsMjAuMjYxMTkyMiAyNC4zNTU1MDE0LDIxLjQwMDU1ODIgMjQuMzU1NTAxNCwyMS40MDA1NTgyIEwyNC4zOTEyODkyLDI1LjIwMjYwMTQgQzI0LjM5MTI4OTIsMjUuMjAyNjAxNCAyNS4zMDkyNTIzLDI1Ljc0MzAwMTMgMjkuMTg2MzA3NCwyNy4zOTk5Mzk2IEMzMy4wNjY1MDQzLDI5LjA2MDA2ODkgMzEuODQ4OTg0NSwyNy44MTk3NzA3IDM1LjAwOTg0MjksMjkuNDQwOTIxMyBDNDAsMzIuMDA1OTU1MyA0MCwzOS4wNTg0NDg5IDQwLDM5LjA1ODQ0ODkiIGlkPSJwYXRoLTUiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrqHmibnmtYHnqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NTcuMDAwMDAwLCAtMjIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5oql6ZSA5Y2V6K+m5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC05Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siIHN0cm9rZT0iI0U3RTdFNyIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNGM0YzRjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIG1hc2s9InVybCgjbWFzay00KSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIG1hc2s9InVybCgjbWFzay0zKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNFMkUyRTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==">
                   <div class="spLiuchengTop-zhuGuan">
                     主管审批
                   </div>
                   <div class="user-name">
                     郭美杰
                   </div>
                 </div>

                 <div class="user-pic">
                   <img width="48" height="48" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5aS05YOPPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0xIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiPjwvY2lyY2xlPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNNDAsMzkuMDU4NDQ4OSBMNDAsMzkuMDY0OTc4MSBDNDAsNDAuMTMyNjcwNCAzOS4xNjAyMzk4LDQwLjk5ODQ0OTIgMzguMTI0OTk2OSw0MC45OTg0NDkyIEwxLjg3NTAwMzA3LDQwLjk5ODQ0OTIgQzAuODM5OTA3NTExLDQwLjk5ODQ0OTIgMCw0MC4xMzI2NzA0IDAsMzkuMDY0OTc4MSBMMCwzOS4wNTg0NDg5IEMwLDM5LjA1ODQ0ODkgMCwzMi4wMDYwMDQ0IDQuOTkwMjU1MzMsMjkuNDQwOTIxMyBDOC4xNTEwMTU0NiwyNy44MTk3NzA3IDYuOTMzNTkzODUsMjkuMTM4MTczNiAxMC44MTM3OTA4LDI3LjQ3NDcwNjEgQzE0LjY5MDc0NzcsMjUuODE3ODE2OCAxNS42MDg3NTk5LDI1LjIzODQzODIgMTUuNjA4NzU5OSwyNS4yMzg0MzgyIEwxNS42NDQ1NDc2LDIxLjQxNjcwOTMgQzE1LjY0NDU0NzYsMjEuNDE2NzA5MyAxNC4xOTI3MTM4LDIwLjI3MDk2MTQgMTMuNzQzNTI2MSwxNi42NzM5MjQ1IEMxMi44MzIwOTIxLDE2Ljk0NzM2NDUgMTIuNTMyNTg0NSwxNS41NzM2MzU0IDEyLjQ4MDQ5ODQsMTQuNjk3OTg5MiBDMTIuNDMxNjUyMywxMy44NTQ4OTA4IDExLjk1MzE1NjgsMTEuMjE4MTgzIDEzLjA2MzIxNTIsMTEuNDU1ODM1MyBDMTIuODM1MzgxMyw5LjY5NjM5Mzc1IDEyLjY3MjU0NDYsOC4xMDc4Mzk5NCAxMi43NTM5Mzg0LDcuMjY2MzYxNSBDMTMuMDMwNjE4NCw0LjMxMzk0NTk1IDE1Ljc4NDUwNzcsMS4yMjk1NzIyOCAyMC4wMjk0MDU4LDEuMDAzMzU4MzcgQzI1LjAxOTYxMjEsMS4yMjc5NTIyNiAyNi45OTg3ODc0LDQuMzEyMzI1OTIgMjcuMjc1NDE4NCw3LjI2NDc5MDU3IEMyNy4zNTY4MTIyLDguMTA2MjE5OTIgMjcuMTc3NzI2Miw5LjY5NDc3MzczIDI2Ljk0OTg5MjIsMTEuNDUyNTk1MiBDMjguMDU5OTAxNSwxMS4yMTY2MTIxIDI3LjU3ODExNjksMTMuODQ4NDEwNyAyNy41MjYwMzA4LDE0LjY5NDc5ODMgQzI3LjQ3Mzk5MzcsMTUuNTY3MjA0NCAyNy4xNjgwMDYsMTYuOTM3NjkzNSAyNi4yNjMxMDEzLDE2LjY2NDIwNDQgQzI1LjgwNzI4NjIsMjAuMjYxMTkyMiAyNC4zNTU1MDE0LDIxLjQwMDU1ODIgMjQuMzU1NTAxNCwyMS40MDA1NTgyIEwyNC4zOTEyODkyLDI1LjIwMjYwMTQgQzI0LjM5MTI4OTIsMjUuMjAyNjAxNCAyNS4zMDkyNTIzLDI1Ljc0MzAwMTMgMjkuMTg2MzA3NCwyNy4zOTk5Mzk2IEMzMy4wNjY1MDQzLDI5LjA2MDA2ODkgMzEuODQ4OTg0NSwyNy44MTk3NzA3IDM1LjAwOTg0MjksMjkuNDQwOTIxMyBDNDAsMzIuMDA1OTU1MyA0MCwzOS4wNTg0NDg5IDQwLDM5LjA1ODQ0ODkiIGlkPSJwYXRoLTUiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrqHmibnmtYHnqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NTcuMDAwMDAwLCAtMjIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5oql6ZSA5Y2V6K+m5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC05Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siIHN0cm9rZT0iI0U3RTdFNyIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNGM0YzRjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIG1hc2s9InVybCgjbWFzay00KSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIG1hc2s9InVybCgjbWFzay0zKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNFMkUyRTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==">
                   <div class="spLiuchengTop-zhuGuan">
                     主管审批
                   </div>
                   <div class="user-name">
                     郭美杰
                   </div>
                 </div>

               </div>



            </div>


            <div class="spLiuchengBottom">

              <div class="expense-log">

                <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    全部历史<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">包含评论的历史</el-dropdown-item>
                    <el-dropdown-item command="b">审批事件的历史</el-dropdown-item>
                    <el-dropdown-item command="c">全部历史</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>

              <div class="flow-item horizontal">
                <div class="mark-circle"></div>
                <div class="label-time vertical">
                  <div style="color: rgb(51, 51, 51);">08.20</div>
                  <div style="    margin-top: 16px;
    margin-left: -38px;">21:25</div>
                </div>
                <div class="flow-desc horizontal">
                  <div class="horizontal___11Gko mt-5">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5aS05YOPPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0xIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiPjwvY2lyY2xlPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8cGF0aCBkPSJNNDAsMzkuMDU4NDQ4OSBMNDAsMzkuMDY0OTc4MSBDNDAsNDAuMTMyNjcwNCAzOS4xNjAyMzk4LDQwLjk5ODQ0OTIgMzguMTI0OTk2OSw0MC45OTg0NDkyIEwxLjg3NTAwMzA3LDQwLjk5ODQ0OTIgQzAuODM5OTA3NTExLDQwLjk5ODQ0OTIgMCw0MC4xMzI2NzA0IDAsMzkuMDY0OTc4MSBMMCwzOS4wNTg0NDg5IEMwLDM5LjA1ODQ0ODkgMCwzMi4wMDYwMDQ0IDQuOTkwMjU1MzMsMjkuNDQwOTIxMyBDOC4xNTEwMTU0NiwyNy44MTk3NzA3IDYuOTMzNTkzODUsMjkuMTM4MTczNiAxMC44MTM3OTA4LDI3LjQ3NDcwNjEgQzE0LjY5MDc0NzcsMjUuODE3ODE2OCAxNS42MDg3NTk5LDI1LjIzODQzODIgMTUuNjA4NzU5OSwyNS4yMzg0MzgyIEwxNS42NDQ1NDc2LDIxLjQxNjcwOTMgQzE1LjY0NDU0NzYsMjEuNDE2NzA5MyAxNC4xOTI3MTM4LDIwLjI3MDk2MTQgMTMuNzQzNTI2MSwxNi42NzM5MjQ1IEMxMi44MzIwOTIxLDE2Ljk0NzM2NDUgMTIuNTMyNTg0NSwxNS41NzM2MzU0IDEyLjQ4MDQ5ODQsMTQuNjk3OTg5MiBDMTIuNDMxNjUyMywxMy44NTQ4OTA4IDExLjk1MzE1NjgsMTEuMjE4MTgzIDEzLjA2MzIxNTIsMTEuNDU1ODM1MyBDMTIuODM1MzgxMyw5LjY5NjM5Mzc1IDEyLjY3MjU0NDYsOC4xMDc4Mzk5NCAxMi43NTM5Mzg0LDcuMjY2MzYxNSBDMTMuMDMwNjE4NCw0LjMxMzk0NTk1IDE1Ljc4NDUwNzcsMS4yMjk1NzIyOCAyMC4wMjk0MDU4LDEuMDAzMzU4MzcgQzI1LjAxOTYxMjEsMS4yMjc5NTIyNiAyNi45OTg3ODc0LDQuMzEyMzI1OTIgMjcuMjc1NDE4NCw3LjI2NDc5MDU3IEMyNy4zNTY4MTIyLDguMTA2MjE5OTIgMjcuMTc3NzI2Miw5LjY5NDc3MzczIDI2Ljk0OTg5MjIsMTEuNDUyNTk1MiBDMjguMDU5OTAxNSwxMS4yMTY2MTIxIDI3LjU3ODExNjksMTMuODQ4NDEwNyAyNy41MjYwMzA4LDE0LjY5NDc5ODMgQzI3LjQ3Mzk5MzcsMTUuNTY3MjA0NCAyNy4xNjgwMDYsMTYuOTM3NjkzNSAyNi4yNjMxMDEzLDE2LjY2NDIwNDQgQzI1LjgwNzI4NjIsMjAuMjYxMTkyMiAyNC4zNTU1MDE0LDIxLjQwMDU1ODIgMjQuMzU1NTAxNCwyMS40MDA1NTgyIEwyNC4zOTEyODkyLDI1LjIwMjYwMTQgQzI0LjM5MTI4OTIsMjUuMjAyNjAxNCAyNS4zMDkyNTIzLDI1Ljc0MzAwMTMgMjkuMTg2MzA3NCwyNy4zOTk5Mzk2IEMzMy4wNjY1MDQzLDI5LjA2MDA2ODkgMzEuODQ4OTg0NSwyNy44MTk3NzA3IDM1LjAwOTg0MjksMjkuNDQwOTIxMyBDNDAsMzIuMDA1OTU1MyA0MCwzOS4wNTg0NDg5IDQwLDM5LjA1ODQ0ODkiIGlkPSJwYXRoLTUiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrqHmibnmtYHnqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NTcuMDAwMDAwLCAtMjIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5oql6ZSA5Y2V6K+m5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC05Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siIHN0cm9rZT0iI0U3RTdFNyIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNGM0YzRjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIG1hc2s9InVybCgjbWFzay00KSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIG1hc2s9InVybCgjbWFzay0zKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNFMkUyRTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtNSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" class="user-img___1I6RD"><div class="approve-content-wrapper___1BESD">
                    <span><mark class="content-highlight___shgGe ">郭美杰</mark>
                    <span class=""> 提交送审</span>
                  </span>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
    </div>
</template>

<script>
    export default {
        name: "shen-pi",
      data(){
          return{
            activeName2: 'first'
          }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleCommand(command) {
          this.$message('click on item ' + command);
        }
      }
    }
</script>

<style scoped>
  .right_part_header___y19fn, .right_part_header_draft___fiICU {
    width: 100%;
    background-color: #fff;
    padding: 12px 24px;
  }
  .title___3t8dP {
    width: 100%;
    white-space: nowrap;
    padding-right: 70px;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  }
  .subtitle___-iScM {
    margin-top: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .template_type___2GSEH {
    height: 18px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0,0,0,.45);
  }
  .bill_id___2og4I, .owner_name___pwKtG {
    height: 18px;
    font-size: 12px;
    line-height: 1.5;
    margin-left: 16px;
    color: rgba(0,0,0,.45);
  }
  .status___2_bB3 {
    position: absolute;
    top: 26px;
    right: 25px;
  }
  .color_approving___2Zzjy {
    background-color: #48ade7;
  }
  .status_wrapper_point___z3wCd {
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .status_wrapper_text___3654i {
    margin-left: 6px;
    height: 18px;
    font-size: 12px;
    line-height: 1.5;
    color: #9e9e9e;
  }
  .tabsConent{
    margin: 5px;
  }
  .logs-card___3MDK9 {
    width: 100%;
    padding: 10px 0;
    border-radius: 2px;
    background-color: #fbfbfb;
    margin-bottom: 14px;
  }
  .logs-card___3MDK9 .wrapper {
    padding: 0 20px;
  }
  .logs-card___3MDK9 .wrapper .line-1 {
    margin-bottom: 3px;
  }
  .logs-card___3MDK9 .wrapper .line-1 .circle-icon {
    width: 5px;
    height: 5px;
    border-radius: 6px;
    background-color: #ffae63;
    display: inline-block;
    margin-right: 5px;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .horizontal___2FyAy{ display: flex; }
  .approve-content-wrapper___RXwWz {
    font-size: 12px;
    display: flex;
  }
  .date___3PIk0 {
    color: #9e9e9e;
    font-size: 12px;
    margin-right: 10px;
  }
  .content-highlight___2yDV4 {
    background: none;
    color: #6c6c6c;
  }

  /*标题*/
  .form_item_4_readonly_wrapper___2VbXb {
    padding-bottom: 16px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0,0,0,.45);
  }
  .ant-row {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
  }
  .form_item__content___2GGuS, .form_item__label___Gd5r6 {
    height: 100%;
    /*display: flex;*/
    display: inline-block;
  }
  .form_item__content___2GGuS {
    color: #6c6c6c;
  }
  .label_wrap___3v18Q {
    width: 100%;
    overflow-x: hidden;
    white-space: normal;
    word-break: break-all;
  }
  .trips___1hDiv h3 {
    font-size: 14px;
    color: #6c6c6c;
     margin-bottom: 18px;
    font-weight: 400;
  }
  .trips___1hDiv .trip-list h5 {
    font-weight: 400;
    font-size: 12px;
    color: #333;
    line-height: 18px;
    margin-bottom: 8px;
  }
  .trips___1hDiv .trip-list .card {
    display: flex;
    padding: 12px;
    border-radius: 2px;
    background-color: #f8f9f9;
  }
  .trips___1hDiv .trip-list .card .icon {
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #48ade7;
  }
  .trips___1hDiv .trip-list .card .content {
    flex: 1;
  }
  .trips___1hDiv .trip-list .card .city {
    font-size: 14px;
    font-weight: 500;
    color: #3a3f3f;
    line-height: 22px;
  }
  .trips___1hDiv .trip-list .card .detail {
    display: block;
    font-size: 12px;
    line-height: 1.5;
    color: #959898;
    border-bottom: 6px;
  }


  .spLiuchengTop{
    padding: 32px 40px 20px;
  }
  .user-pic{
    width: 150px;
   text-align: center;
    float: left;
  }
  .spLiuchengTop-zhuGuan{
    color: #9c9c9c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0;
    text-align: center;}
  .spLiuchengBottom{
    width: 100%;
    clear: both;
    padding:40px;
  }
  .expense-log{
    padding-bottom: 20px;
  }
  .mark-circle{
    margin: 14px 0;
    width: 11px;
    height: 11px;
    border-radius: 5px;
    border: 2px solid #e6e6e6
  }
  .label-time{
    font-size: 12px;
    width: 35px;
    margin: 0 12px;
    color: #9e9e9e;
  }
  .vertical{
    display: flex;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .horizontal___11Gko{
    display: flex;
  }
  .horizontal___11Gko img{
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  .approve-content-wrapper___1BESD{
    margin-left: 5px;
    margin-top: 4px;
    display: flex;
  }
  .content-highlight___shgGe {
    background: none;
    color: #333;
  }
  .horizontal{
    display: flex;
  }
</style>

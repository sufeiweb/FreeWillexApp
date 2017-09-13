<template>
  <div class="footer-down">
    <router-link to="/setting" tag="section">
      <i class="iconfont">&#xe63b;</i>
      <span>设置</span>
    </router-link>
    <router-link to="/message" tag="section">
      <i class="iconfont">&#xe69a;</i>
      <span>消息</span>
    </router-link>
    <router-link to="/invitation" tag="section">
      <i class="iconfont">&#xe655;</i>
      <span>邀请</span>
    </router-link>
    <router-link to="/feedback" tag="section">
      <i class="iconfont">&#xe60f;</i>
      <span>反馈</span>
    </router-link>
  </div>
</template>
<style type="text/css" lang="scss">
  .footer-down{
    height: 3rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    justify-content: space-around;
    font-size: 0.75rem;
    border-top: 1px solid #efefef;
    margin-top: 0.1rem;
    section{
      display: flex;
      flex-direction: column;
      align-items: center;
      i{
        font-size: 1.25rem;
      }
    }
    .router-link-active{
      color: #01aaef;
    }
  }
</style>

<template>
  <div class="left-sidebar-box">
    <transition enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOut">
      <div class="left-sidebar-hide"></div>
    </transition>
    <transition enterActiveClass="animated fadeInLeft" leaveActiveClass="animated fadeOutLeft">
    <div class="left-sidebar-main">
      <div class="left-sidebar-main-header">
        <i class="iconfont">&#xe55f;</i>
        <section>
          <span>苏飞</span>
          <span>17602103949</span>
        </section>
      </div>
      <div class="left-sidebar-main-linkBtn">
        <dl>
          <dt>行情</dt>
          <router-link to="/quote" tag="dd">
            <i class="iconfont">&#xe673;</i>
            <span>报价</span>
          </router-link>
          <router-link to="/chart" tag="dd">
            <i class="iconfont">&#xe617;</i>
            <span>图表</span>
          </router-link>
        </dl>
        <dl>
          <dt>交易</dt>
          <router-link to="/business" tag="dd">
            <i class="iconfont">&#xe6d7;</i>
            <span>买卖</span>
          </router-link>
          <router-link to="/entrust" tag="dd">
            <i class="iconfont">&#xe607;</i>
            <span>委托管理</span>
          </router-link>
        </dl>
        <dl>
          <dt>账户</dt>
          <router-link to="/CNYAccount" tag="dd">
            <i class="iconfont">&#xe635;</i>
            <span>CNY账户</span>
          </router-link>
          <router-link to="/BTCAccount" tag="dd">
            <i class="iconfont">&#xe616;</i>
            <span>BTC账户</span>
          </router-link>
          <router-link to="/accountDetails" tag="dd">
            <i class="iconfont">&#xe701;</i>
            <span>账户明细</span>
          </router-link>
        </dl>
        <dl>
          <dt>活动</dt>
          <router-link to="/sign" tag="dd">
            <i class="iconfont">&#xe614;</i>
            <span>签到</span>
          </router-link>
          <router-link to="/activity" tag="dd">
            <i class="iconfont">&#xe650;</i>
            <span>活动中心</span>
          </router-link>
          <router-link to="/reward" tag="dd">
            <i class="iconfont">&#xe619;</i>
            <span>活动奖励</span>
          </router-link>
        </dl>
      </div>
    </div>
    </transition>
  </div>
</template>
<style type="text/css" lang="scss">
  .left-sidebar-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    .left-sidebar-hide {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
    }
    .left-sidebar-main {
      width: 50%;
      height: 100%;
      background: #fff;
      position: absolute;
      margin-top: 2.5rem;
      .left-sidebar-main-header {
        display: flex;
        height: 5rem;
        background: #01aaef;
        color: #fff;
        padding: .8rem;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        i {
          font-size: 3rem;
        }
        section {
          text-align: right;
          font-size: 0.75rem;
        }
      }
      .left-sidebar-main-linkBtn {
        .router-link-active{
          background: #01aaef;
          color: #fff;
        }
        dl {
          padding: 0 0.3rem;
          margin-bottom: .5rem;
          dt {
            font-size: 0.75rem;
            margin-bottom: .5rem;
          }
          dd {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            margin-bottom: .1rem;
            padding: 0.1rem 0;
            &:hover {
              background: #01aaef;
              color: #fff;
            }
            i {
              font-size: 1.3rem;
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
</style>

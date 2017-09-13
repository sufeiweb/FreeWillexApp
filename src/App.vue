<template>
  <div id="app">
    <headers></headers>
    <router-view class="router-home"></router-view>
    <Footers></Footers>
    <Sidebar v-show="sidebarState"></Sidebar>
  </div>
</template>
<script>
  import Headers from './components/header/header.vue'
  import Footers from './components/footer/footer.vue'
  import Sidebar from './components/sidebar/leftSidebar.vue'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    components: {
      Headers, Footers, Sidebar
    },
    computed: {
      ...mapGetters(['sidebarState'])
    },
    watch: {
      $route(to){
        this.routeChange(to.path);
      }
    },
    methods: {
      routeChange(path){
        path = path.substring(1);
        if (path === 'login') {
          this.$store.dispatch('changeTopTips', '登录')
        }
        if (path === 'chart') {
          this.$store.dispatch('changeTopTips', '图表');
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'business') {
          this.$store.dispatch('changeTopTips', '买卖')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'quote') {
          this.$store.dispatch('changeTopTips', '报价')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'entrust') {
          this.$store.dispatch('changeTopTips', '委托管理')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'CNYAccount') {
          this.$store.dispatch('changeTopTips', 'CNY账户')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'BTCAccount') {
          this.$store.dispatch('changeTopTips', 'BTC账户')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'accountDetails') {
          this.$store.dispatch('changeTopTips', '账户明细')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'sign') {
          this.$store.dispatch('changeTopTips', '签到')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'activity') {
          this.$store.dispatch('changeTopTips', '活动中心')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'reward') {
          this.$store.dispatch('changeTopTips', '活动奖励')
          this.$store.dispatch('hideSidebar');
        }
        if (path === 'setting') {
          this.$store.dispatch('changeTopTips', '设置')
        }
        if (path === 'message') {
          this.$store.dispatch('changeTopTips', '消息')
        }
        if (path === 'invitation') {
          this.$store.dispatch('changeTopTips', '邀请')
        }
        if (path === 'feedback') {
          this.$store.dispatch('changeTopTips', '反馈')
        }
      }
    },
    mounted(){
      this.routeChange(this.$route.fullPath);
    },
  }
</script>
<style type="text/css" lang="scss">
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: space-between;
    .router-home {
      flex: 1;
      overflow: scroll;
      overflow-x: hidden;
      margin: 0 .5rem;
      background: #f5f5f5;
    }
  }
</style>




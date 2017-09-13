<template>
  <div class="header-top">
    <transition enterActiveClass="animated rotateIn">
      <i class="iconfont" @click="changeSidebarState($event)" v-show="!iconSidebarState">&#xe6bf;</i>
    </transition>
    <transition enterActiveClass="animated rotateIn">
      <i class="iconfont" v-show="iconSidebarState">&#xe65b;</i>
    </transition>
    <span>{{headerTips}}</span>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {

    methods: {
      changeSidebarState(ev){
        this.$store.dispatch('showSidebar');
      },
    },
    computed: {
      ...mapGetters(['iconSidebarState','headerTips'])
    }
  }
</script>
<style type="text/css" lang="scss">
  .header-top {
    height: 2.5rem;
    background: #01aaef;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    .iconfont {
      font-size: 1.5rem;
      margin-right: 0.5rem;
      margin-top: 0.4rem;
    }
  }
</style>

<template>
    <div id="topic">
      <div class="header">
        <div class="find">
          <span class="iconfont icon-shouye one"></span>
          <div class="two">
            <span class="minTitle">发现</span>
            <span class="subTitle">甄选家</span>
          </div>
          <div class="three">
            <i class="iconfont icon-fangdajing2 fangda"></i>
            <i class="iconfont icon-gouwuche gouwu"></i>
          </div>
        </div>
        <ul class="homeList">
          <router-link :to="`/topic/tab/${index}`" v-for="(tab,index) in tabList" :key="index"
          :class="{active:$route.params.id *1===index}">
            <li>{{tab.tabName}}</li>
          </router-link>
        </ul>
      </div>
      <div class="content">
        <Split/>
        <router-view/>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getTabList')
      this.$store.dispatch('getRec')
    },
    computed:{
      ...mapState(['tabList'])
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 #topic
  .header
    .find
      display flex
      width 720px
      height 75px
      line-height 75px
      border-bottom 1px solid #eee
      .one
        font-size 45px
        padding-left 20px
      .two
        width 230px
        height 75px
        margin auto
        .minTitle
          font-size 40px
          font-weight bold
          color darkred
          padding 0 0.16rem
          vertical-align middle
        .subTitle
          font-size 30px
          padding 0 0.16rem
          vertical-align middle
      .three
        margin-right -30px
        .fangda
          font-size 45px
        .gouwu
          font-size 45px
    .homeList
      width 100%
      height 75px
      display flex
      a
        li
          width 120px
          height 75px
          line-height 75px
          text-align center
          font-size 25px
        &.active
          border-bottom 3px solid #b4282d
          color #b4282d

</style>

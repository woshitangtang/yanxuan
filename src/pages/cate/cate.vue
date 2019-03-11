<template>
    <div id="area">
      <div class="top">
        <div class="search">
          <i class="iconfont icon-fangdajing2"></i>
          <input type="text" placeholder="搜索商品，共1996件商品"/>
        </div>
      </div>
      <div class="list">
        <div class="leftList">
          <ul>
            <li v-for="(cateItem,index) in cate.categoryL1List" :key="index" :class="{active:$route.query.categoryId *1 ===cateItem.id}">
              <router-link :to="`/cate/cateList/?categoryId=${cateItem.id}`">{{cateItem.name}}</router-link>
            </li>
          </ul>
        </div>
        <router-view/>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getCate')
      new BScroll('.leftList',{
        click:true
      })
    },
    computed:{
      ...mapState(['cate'])
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #area
    .top
      position relative
      width 750px
      height 80px
      padding 15px 20px 0 15px
      box-sizing border-box
      margin-bottom 15px
      background white
      z-index 5
      .search
        position absolute
        left 30px
        top 20px
        margin 0 auto
        width 90%
        height 0.74rem
        background #eee
        vertical-align middle
        border-radius 0.10667rem
        font-size 0.3733rem
        line-height 0.74rem
        text-align center
        i
          vertical-align middle
          width 0.3733rem
          height 0.3733rem
          margin-left 0.133rem
          font-size 0.4rem
        input
          color #666
          background #eee
          text-align center
          font-size 0.3733rem
    .list
      box-sizing border-box
      padding-left  10px
      width 100%
      height 1200px
      border-top 1px solid #eee
      padding-top 10px
      display flex
      .leftList
        width 156px
        height 1100px
        border-right 1px solid #eee
        padding-top 20px
        ul
          li
            width 155px
            height 48px
            line-height 49px
            text-align center
            margin-top 0.6rem
            font-size 30px
            border 1px solid #eee
            box-sizing border-box
            &:nth-first-child
              margin-top 0
            &.active
              border-left 5px solid darkred
              a
                color darkred


</style>

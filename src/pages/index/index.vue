<template>
    <div id="firstView">
      <!--头部-->
      <div class="header">
        <!--//头部-->
        <div class="head" >
          <h1></h1>
          <div class="search">
            <i class="iconfont icon-fangdajing2"></i>
            <input type="text" placeholder="搜索商品，共1996件商品"/>
          </div>
          <button>登录</button>
        </div>
        <!--//导航-->
        <div class="nav" >
          <div class="navLeft" v-if="firstViewMsg.categoryHotSellModule">
            <div class="scrollWrap">
              <div v-for="(category,index) in firstViewMsg.categoryHotSellModule.categoryList" :key="index" :class="{active:index===0}">
                <span>{{category.extra.operationResource.categoryName}}</span>
              </div>
            </div>
            <div class="chanel" v-show="showList">
              <div class="left">
                <span>全部频道</span>
              </div>
            </div>
          </div>
          <div class="last" @click="changeList"  :class="{toggleBtn:showList}">
            <span class="iconfont icon-jiantouxia"></span>
          </div>
        </div>

        <!--查看更多-->
        <div class="allList" v-show="showList">

          <div class="more" v-if="firstViewMsg.categoryHotSellModule">
            <div v-for="(category,index) in firstViewMsg.categoryHotSellModule.categoryList" :key="index" :class="{active:index===0}">
              <span>{{category.extra.operationResource.categoryName}}</span>
            </div>
          </div>
        </div>

        <!--遮罩层-->
        <div class="mask" v-show="showList"></div>
        <!--轮播图-->
        <div class="container">
          <div class="banner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/cacd06411c2bdda38ab5e25bc14ca6a9.png?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/fcd73c09a0abb558169372056d0c2d4b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/27ed2c9546d04dcdbc9e7a8b72259be2.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <!--3个小标签-->
        <div class="icon">
          <ul class="iconList">
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-likefill"></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-jifenbao"></i>
                <span>30天无忧退换货</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-select2fill"></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!--母婴亲子-->
        <div class="shoes">
          <ul v-if="firstViewMsg.categoryHotSellModule">
            <li v-for="(category,index) in firstViewMsg.categoryHotSellModule.categoryList" :key="index">
              <a href="javascript:;">
                <img :src="category.picUrl" alt="">
                <span>{{category.extra.operationResource.categoryName}}</span>
              </a>
            </li>

          </ul>
        </div>
        <div class="queenImg">
          <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
        </div>
        <div class="activeImg">
          <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/15520281195103024.jpg?imageView&thumbnail=375x0&quality=75" alt="">
        </div>
      </div>
      <!--新人专享礼-->
      <Split/>
      <div class="middle">
      <div class="newGift">
        <span class="one">---</span>
        <span class="new">新人专享礼</span>
        <span class="one">---</span>
      </div>
      <div class="gift">
        <a href="javascript:;" class="one">
          <div class="new">新人专享礼包</div>
          <div class="img">
            <img src="http://yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
          </div>
        </a>
        <div class="right">
          <a href="javascript:;" class="two">
            <div class="ch1">福利社</div>
            <div class="ch2">今日特价</div>
            <img src="https://yanxuan.nosdn.127.net/d553f1cf463db2866c0022f844a89072.png?imageView&thumbnail=200x200&quality=75" alt="">
          </a>
          <a href="javascript:;" class="three">
            <div class="ch3">新人拼团</div>
            <div class="ch4">1元起包购</div>
            <img src="https://yanxuan.nosdn.127.net/d553f1cf463db2866c0022f844a89072.png?imageView&thumbnail=200x200&quality=75" alt="">
          </a>
        </div>
      </div>
    </div>

      <!--新品首发-->
      <Split/>
      <div class="newGoods">
        <div class="newGoods-header">
          <span class="newGoods-title">新品首发</span>
          <span class="more">更多></span>
        </div>
        <ul class="newGoods-goods">
          <li class="newGoods-good" v-for="(newItem,index) in firstViewMsg.newItemList" :key="index">
            <img class="primaryPic" :src="newItem.listPicUrl">
            <div class="text">
              <span class="name">{{newItem.name}}</span>
              <span class="price">¥{{newItem.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>

      <!--人气推荐-->
      <Split/>
      <div class="popularGoods" v-if="firstViewMsg.popularItemList">
        <div class="popularGoods-header">
          <span class="popularGoods-title">人气推荐</span>
          <span class="more">更多></span>
        </div>
        <div class="spItem">
          <div class="spItem-img">
            <img :src="firstViewMsg.popularItemList[0].listPicUrl">
          </div>
          <div class="spItem-des">
            <div class="name">{{firstViewMsg.popularItemList[0].name}}</div>
            <div class="desc">{{firstViewMsg.popularItemList[0].simpleDesc}}</div>
            <div class="price">¥{{firstViewMsg.popularItemList[0].retailPrice}}</div>
          </div>
        </div>
        <ul class="popularGoods-goods">
          <li class="popularGoods-good" v-show="index !==0 "
              v-for="(popularItem,index) in firstViewMsg.popularItemList" :key="index">
            <img class="primaryPic" :src="popularItem.listPicUrl">
            <div class="text">
              <span class="name">{{popularItem.name}}</span>
              <span class="price">¥{{popularItem.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>

      <!--众筹-->
      <Split/>
      <div class="crowd">
        <div class="crowd-header">
          <span class="crowd-title">众筹</span>
          <span class="more">更多></span>
        </div>
        <ul class="crowd-list">
          <li class="crowd-item" v-for="(item,index) in firstViewMsg.zhongChouList" :key="index">
            <div class="crowd-item-img">
              <img :src="item.picUrl">
            </div>
            <div class="crowd-item-info">
              <div class="crowd-item-title">{{item.name}}</div>
              <div class="crowd-item-price">￥{{item.showRetailPrice}}</div>
              <div class="crowd-item-progress">
                <div class="bg" :style="{width: item.progress + '%'}"></div>
              </div>
              <div class="crowd-item-percent">{{item.progress}}%</div>
              <div class="crowd-item-supportNum">{{item.supportNum}}</div>
            </div>
          </li>
        </ul>
      </div>

      <Split/>
      <div   v-for="(category,index) in categoryModule" :key="index">
        <Category :category="category" :index="index"/>
      </div>

      <!--声明-->
      <div class="ftWrap">
        <div class="ftContent">
          <div class="bd">
            <a class="goApp" href="javascript:;">下载APP</a>
            <a class="goPc" href="javascript:;">电脑版</a>
          </div>
          <p class="copyRight">
            <span>网易公司版权所有 © 1997-</span>
            <span>2019</span>
            <br>
            <span>阿扣到此一游</span>
            <span>hiahiahia</span>
            <br>
            <span>(((┏(;￣▽￣)┛装完逼就跑</span>
          </p>
        </div>
      </div>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import Category from '../../compoents/Category'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        showList:false
      }
    },
    components:{
      Category
    },
    mounted() {
      this.$store.dispatch('getMsg')


      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        }
      })

    },
    computed:{
      ...mapState(['firstViewMsg']),
      categoryModule () {
        return this.firstViewMsg.categoryModule
      }
    },
    methods:{
      changeList () {
        this.showList = !this.showList
      }
    },
    watch: {
      firstViewMsg () {
        this.$nextTick(()=>{
          // betterscroll采取了防误触
          new BScroll('.navLeft', {
            scrollX: true
          })
        })
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  body
    background black
    #firstView
      position relative
      //头部
      .header
        width 100%
        background white
        .head
          position relative
          display flex
          padding 0.213rem 0.4rem
          align-items center
          box-sizing border-box
          z-index 99
          background white
          h1
            width 2rem
            height 0.53rem
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
            background-size cover
            background-repeat no-repeat
            margin-right 0.2667rem

          .search
            width 70%
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
          button
            width 100px
            height 0.6rem
            font-size 0.32rem
            line-height 0.533rem
            text-align center
            color #b4282d
            border 1px solid #b4282d
            border-radius 0.10667rem
            margin-left 0.21333rem
            background white


        //导航
        .nav
          width 750px
          height 60px
          .navLeft
            width 650px
            overflow hidden
            .scrollWrap
              width 1100px
              height 60px
              padding-left 0.5rem
              white-space nowrap
              line-height 60px
              box-sizing border-box
              div
                height 50px
                display inline-block
                margin-right 0.2rem
                padding 0 10px
                line-height 60px
                text-align center
                box-sizing border-box
                &.active
                  color #b4282d
                  border-bottom 2px solid #b4282d
                span
                  height 50px
                  line-height 50px
                  font-size 0.3733rem
                  box-sizing border-box

            .chanel
              width 100%
              height 70px
              background white
              position absolute
              top:80px
              left:0
              z-index 99
              .left
                width 605px
                height 60px
                padding-left 0.4rem
                line-height 60px
                float left
                span
                  font-size 30px
          .last
            position absolute
            top 80px
            right 20px
            margin-right 10px
            width 50px
            height 50px
            z-index 99
            line-height 50px
            text-align center
            transition 0.5s
            span
              font-size 30px
            &.toggleBtn
              transform rotate(180deg)
        .allList
          background white
          position absolute
          top 140px
          left 0
          z-index 99
          .more
            width 100%
            height 305px
            padding 20px 0 0 30px
            display flex
            flex-wrap wrap
            div
              width 150px
              height 60px
              margin-right 20px
              line-height 60px
              text-align center
              border 1px solid gray
              border-radius 10px
              background #eee
              &.active
                border 1px solid darkred

        .mask
          position fixed
          z-index 2
          top 0
          left 0
          right 0
          bottom 0
          background rgba(0,0,0,0.5)
        .container
          .banner
            width 100%
            height 400px
            img
              width 100%
              height 100%

        .icon
          .iconList
            width 100%
            height 72px
            padding 20px 10px
            box-sizing border-box
            li
              width 227px
              height 36px
              float left
              font-size 25px
              line-height 36px
              text-align center
              i
                font-size 25px
                color #B4282D
              span
                color #B4282D

        .shoes
          width 750px
          height 341px
          ul
            width 100%
            height 350px
            li
              float left
              width 110px
              height 156px
              padding 10px 20px
              margin-bottom 10px
              box-sizing border-box
              margin-left 30px
              a
                display flex
                flex-direction column
                align-items center
                text-align center
                img
                  width 110px
                  height 110px
                  background #eee
                  border-radius 40px

                span
                  padding-top 10px
                  width 110px
                  height 36px
                  box-sizing border-box
                  font-weight bold

        .queenImg
          width 100%
          padding-top 50px
          box-sizing border-box
          img
            width 100%
            height 200px
            line-height 200px
            text-align center

        .activeImg
          width 100%
          height 200px
          display flex
          img
            width 50%

      //新人专享礼
      .middle
        background-color white
        margin 0.2667rem 0
        .newGift
          width 100%
          height 90px
          line-height 90px
          text-align center
          .new
            font-size 30px

        .gift
          width 100%
          display flex
          flex-wrap wrap
          .one
            margin-left 0.3rem
            display flex
            flex-direction column
            align-items center
            height 430px
            width 340px
            background #F9E9CF
            color #333
            box-sizing border-box
            .new
              width 100%
              height 80px
              padding 0.4rem 0 0 .4rem
              font-size 30px
              box-sizing border-box
            .img
              height 258px
              width 258px


          .right
            height 430px
            width 340px
            box-sizing border-box
            .two
              margin-top -20px
              display: block
              position relative
              margin-left 10px
              background pink
              width 100%
              height 212px
              .ch1
                font-size 0.42277rem
                color black
                margin 20px 0 0 20px
                padding-top 20px
                box-sizing border-box

              .ch2
                font-size 0.3rem
                color #7F7F7F
                margin 10px 0 0 20px

              img
                display block
                position absolute
                top 0
                left 150px


            .three
              margin-top -14px
              display: block
              position relative
              margin-left 10px
              background pink
              width 100%
              height 212px
              box-sizing border-box
              .ch3
                font-size 0.42277rem
                color black
                margin 20px 0 0 20px
                padding-top 20px
                box-sizing border-box

              .ch4
                margin-top 10px
                padding 0.1rem
                width 150px
                height 0.3rem
                background #CBB693
                border-radius 0.1rem
                color #fff
                font-size 0.29333rem
                line-height .3rem
                text-align center
                box-sizing border-box

              img
                display block
                position absolute
                top 0
                left 150px

      //新品首发
      .newGoods
        width: 100%;
        line-height: 1.33333rem;
        background: #fff;
        overflow: hidden;
        padding: 0 .2rem;
        font-size: .42667rem;
        box-sizing border-box

        .newGoods-header
          width: 100%
          height 100px
          padding: 0 .2rem;
          clearFix()
          box-sizing border-box

          .newGoods-title
            float left

          .more
            float right
            display: block;
            font-size: .37333rem;
            color: #333;
            line-height: 1.33333rem;
            margin-right .67333rem


        .newGoods-goods
          clearFix()

          .newGoods-good
            float left
            padding: 0 0 .17333rem !important;
            margin-left: .26667rem;
            width: 2.88rem;
            box-sizing border-box

            .primaryPic
              background-color: #f5f5f5;
              margin-bottom: .16rem;
              width: 2.88rem;
              height: 2.88rem;

            .text
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;

              .name
                width: 2.88rem;
                color: #333;
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                line-height: .48rem;
                white-space: normal;

              .price
                color: #b4282d


       // 人气推荐
      .popularGoods
        width: 100%;
        line-height: 0.53333rem;
        background: #fff;
        overflow: hidden;
        padding: 0 .2rem;
        font-size: .42667rem;
        box-sizing border-box

        .popularGoods-header
          width: 100%
          line-height: 1.33333rem;
          padding: 0 .2rem;
          clearFix()
          box-sizing border-box

          .popularGoods-title
            float left

          .more
            float right
            display: block;
            font-size: .37333rem;
            color: #333;
            line-height: 1.33333rem;
            margin-right .67333rem

        .spItem
          color: #333;
          width: 9.2rem;
          height: 3.73333rem;
          display: flex;
          background: #FEF0DF;
          border-radius: .05333rem;
          margin: 0 .2rem .26667rem;

          .spItem-img
            width: 3.73333rem;
            height: 3.73333rem;
            background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
            background-size: 100% 100%;
            margin-right: .4rem;

            img
              width: 100%
              height: auto

          .spItem-des
            height 3.73333rem
            padding 1.23333rem 0 0 .2rem
            box-sizing border-box

            .name
              font-size: .37333rem;
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

            .desc
              font-size: .32rem;
              color: #7F7F7F;
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

            .price
              font-size: .37333rem;
              color: #b4282d;

        .popularGoods-goods
          clearFix()

          .popularGoods-good
            float left
            padding: 0 0 .17333rem !important;
            margin-left: .26667rem;
            width: 2.88rem;
            box-sizing border-box

            .primaryPic
              background-color: #f5f5f5;
              margin-bottom: .16rem;
              width: 2.88rem;
              height: 2.88rem;

            .text
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;

              .name
                width: 2.88rem;
                color: #333;
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                line-height: .48rem;
                white-space: normal;

              .price
                color: #b4282d
      // 众筹
      .crowd
        width: 100%;
        line-height: 0.53333rem;
        background: #fff;
        overflow: hidden;
        padding: 0 .2rem;
        font-size: .42667rem;
        box-sizing border-box

        .crowd-header
          height 100px
          width: 100%
          line-height: 1.33333rem;
          padding: 0 .2rem;
          clearFix()
          box-sizing border-box

          .crowd-title
            float left

          .more
            float right
            display: block;
            font-size: .37333rem;
            color: #333;
            line-height: 1.33333rem;
            margin-right .67333rem

        .crowd-list
          border-top: 1px solid #D8D8D8;
          padding-bottom: .4rem;
          box-sizing border-box
          .crowd-item
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            padding: .4rem .2rem 0;
            box-sizing border-box
            color: #333;
            .crowd-item-img
              margin-right: .4rem;
              background: #f4f4f4;
              img
                width: 2.8rem;
                height: 2.8rem;

            .crowd-item-info
              position relative
              left 0
              top 0
              .crowd-item-name
                font-size: .37333rem;
                width: 6rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              .crowd-item-price
                margin-top: .1rem;
                font-size: .42667rem;
                color: #b4282d;
              .crowd-item-progress
                width: 4.8rem
                height: .08rem;
                background: #D8D8D8;
                border-radius: .04rem;
                overflow: hidden;
                position: relative;
                margin-top: .29333rem
                .bg
                  /*width 10px*/
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  background-color:#fea438;
              .crowd-item-percent
                position: relative;
                right: -5.2rem;
                top: -.373333rem;
                font-size: .32rem;
                color: #7F7F7F;
              .crowd-item-supportNum
                margin-top: .2rem;
                font-size: .32rem;
                color: #7F7F7F;

      // footer版权
      .ftWrap
        border-top: 1px solid rgba(0,0,0,.15);
        background-color: #414141;
        padding-top 30px
        box-sizing border-box
        .ftContent
          height 250px
          text-align: center;
          padding: .22rem .26667rem .37333rem;
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          box-sizing border-box
          .bd
            .goApp
              margin-right: .66667rem;
              padding 0.23333rem 0.53333rem
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
              box-sizing border-box
            .goPc
              width: 2.29333rem;
              padding 0.23333rem 0.53333rem
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
              box-sizing border-box
          .copyRight
            margin-top: .48rem;
            font-size .32rem;
            line-height .42667rem;
            color #999
</style>

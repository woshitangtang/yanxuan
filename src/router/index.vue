<template>
    <div>

    </div>
</template>
<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Index from '../pages/index/index'
  import Cate from '../pages/cate/cate'
  import CateList from '../pages/cate/cateList'
  import Topic from '../pages/topic/topic'
  import TopicID from '../pages/topic/topicID'
  import ShopCart from '../pages/shopCart/shopCart'
  import Personal from '../pages/personal/personal'

  Vue.use(VueRouter)
  export default new VueRouter({
    mode:'history',
    routes:[{
      path:'/index',
      component:Index
      },
      {
        path:'/cate',
        component:Cate,
        redirect: '/cate/cateList',
        children:[
          {
            path:'/cate/cateList',
            component:CateList
          }
        ]
    },
      {
        path:'/topic',
        component:Topic,
        redirect: '/topic/tab/0',
        children: [
          {
            path:'/topic/tab/:id',
            component:TopicID
          }
        ]
      },
      {
        path:'/shopcart',
        component:ShopCart
      },
      {
        path:'/personal',
        component:Personal
      }
    ]
  })

</script>
<style>

</style>

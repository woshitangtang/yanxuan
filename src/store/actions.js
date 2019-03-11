import {GETDATA,GETCATEGORY,GETTAB,GETRECOM} from './mutations-types'
import {getIndex,getCate,getTab,getReco} from "../api/index";
import request from "../../../../20190305上课内容/my-project/src/pages/untils/request";

export default {
  //获取首页数据请求
  async getMsg ({commit}) {
    const result = await getIndex()
    console.log('result',result.data);
    if(result.code===0){
      commit(GETDATA,result.data)
    }
  },

  //获取分类数据请求
  async getCate ({commit}) {
    const result = await getCate()
    console.log(result.data);
    if(result.code ===0) {
      commit(GETCATEGORY,result.data)
    }
  },

  //获取识物tab数据
  async getTabList ({commit}) {
    const result = await getTab()
    commit(GETTAB,result.data)
  },

  //获取识物推荐的数据
  async getRec ({commit}) {
    const result = await getReco()
    console.log('---',result.data);
    commit(GETRECOM,result.data)
  }
}

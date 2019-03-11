import {GETDATA,GETCATEGORY,GETTAB,GETRECOM} from "./mutations-types";

export default {

  [GETDATA] (state,firstViewMsg) {
    state.firstViewMsg = firstViewMsg
  },

  [GETCATEGORY] (state,cate) {
    state.cate = cate
  },

  [GETTAB] (state,tabList) {
    state.tabList = tabList
  },

  [GETRECOM] (state,find) {
    state.find = find
  }
}

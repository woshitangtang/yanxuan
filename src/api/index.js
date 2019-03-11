import ajax from './ajax'

const profile = '/api'

// 首页获取数据api
export const getIndex = () => ajax('/index')

//分类获取数据api
export const getCate = (cateList) => ajax('/cate',{cateList})

//获取识物组件内的tab数据
export const getTab = () =>ajax(`${profile}/topic/v1/find/getTabs.json`)

//获取识物组件推荐的数据
export const getReco = () =>ajax(`${profile}/topic/v1/find/recManual.json`)


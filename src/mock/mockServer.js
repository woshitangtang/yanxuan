import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import classify_data from './fenlei_zhuanqu.json'
import goods_data from './cateList.json'

Mock.mock('/index', {
  code: 0,
  data: shouye_data
});
Mock.mock('/cate', {
  code: 0,
  data: classify_data
});
Mock.mock( '/goods', {
  code: 0,
  data: goods_data
});

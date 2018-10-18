const {request} = require('util.js')
//获取个人信息
const getUserinf = (params) => request('User/getUserinfo', params)
// 获取用户消费过的店铺列表
const getMyCompanyList = (params) => request('User/getUserShop', params)
// 获取店铺详情
const getCompanyDetail = (params) => request('Company/detail', params)
// 通用收藏接口
const getCollect = (params) => request('Common/collect', params)
// 取消收藏接口
const uncollect = (params) => request('Common/uncollect', params)
// 我收藏的店铺
const getMyCollectCompany = (params) => request('Common/myCollect_company', params)
// 我收藏的项目
const getMyCollectProject = (params) => request('Common/myCollect_project', params)
//收藏/关注的技师
const getMyCollectTechnician = (params) => request('Common/myCollect_technician', params)
//用于对店铺,项目,技师进行评价
const doComment = (params) => request('Common/do_comment', params)
//查看评价列表,店铺,技师,项目通用
const getComments = (params) =>request('Common/getComments', params)
// 获取我的消息
const getMyNotice = (params) => request('me/Notice/myNotice', params)
// 获取技师详情
const getTechnicianDetail = (params) => request('Technician/detail', params)
// 技师列表
const getTechnicianList = (params) => request('Technician/technicianList', params)
// 给技师点赞
const clickZan = (params) => request('Technician/clickZan', params)
// 我的订单（项目）
const getMyOrderList = (params) => request('me/Order/project', params)
// 支付
const pay = (params) => request('Pay/pay', params)
// 获取订单详情
const getOrderDetail = (params) => request("me/Order/getOrderDetail", params)
// 退款
const payRefund = (params) => request('Pay/refund', params);
//对未付款的订单进行重新付款(用于个人中心里订单列表中未付款的订单)
const payByOrderId = (params) => request("Pay/payByOrderId", params)
//获取店铺分类(行业分类)
const getCompanyType = (params) => request("Company/getType", params)
// 获取首页轮播图
const getCompanyBanner = (params) => request("Company/getBanner", params)
// 上传图片
const uploadFile = (params) => request("Common/upload", params)
const giftList = (params) => request("Technician/giftList", params)
module.exports =  {
  getMyCompanyList,
  getCompanyDetail,
  getCollect,
  uncollect,
  getMyCollectCompany,
  getMyCollectProject,
  getMyCollectTechnician,
  doComment,
  getComments,
  getMyNotice,
  getTechnicianDetail,
  getTechnicianList,
  clickZan,
  getMyOrderList,
  pay,
  payRefund,
  getOrderDetail,
  payByOrderId,
  getCompanyType,
  getCompanyBanner,
  uploadFile,
  giftList
}
//index.js
//获取应用实例
const app = getApp()
import {
  getCompanyType,
  getCompanyBanner,
  getMyCompanyList
} from '../../utils/api.js'
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentPage: 0,
    companyList: [],
    companyTypes: [
      { typeId: 1, typeName:'足疗'},
      { typeId: 2, typeName: 'SPA' },
      { typeId: 3, typeName: '按摩' }
    ],
    loading: true,
    noMoreData: false,
    tradeId: null,
    banners: [{
      imagePath:'../../images/tmp/banner1.png'
    },{
      imagePath: '../../images/tmp/banner1.png'
    }]
  },
  initCompanyList(tradeId) {
    let params = {
      page: this.data.currentPage,
      lat: app.globalData.latitude,
      lng: app.globalData.longitude
    }
    if (tradeId) {
      params = Object.assign(params, {tradeId})
    }
    if (this.data.currentPage == 0) {
      this.setData({
        loading: true
      })
    }
    getMyCompanyList(params)
      .then(res =>{
        console.log(data)
        
      })
      //app.post('/Company/companyList', params)
      //.then(({
        //data
      //}) => {
        //console.log(data)
        //this.setData({
         // companyList: [...this.data.companyList, ...data],
          //loading: false
        //})
        //if (data.length == 0) {
         // this.setData({
           // noMoreData: true
          //})
        //}
      //})
      //.catch(err =>{
       // console.log(err)
        //this.setData({
          //companyList: [],
          //noMoreData: true,
          //loading: false
        //})
      //})
  },
  // 获取公司分类
  getCompanyType() {
    getCompanyType()
      .then(res =>{
        this.setData({
          companyTypes: res.data
        })
      })
  },
  // 根据分类筛选列表
  getCompanyByTradeId(e) {
    let tradeId = e.currentTarget.dataset.tradeid
    this.setData({
      currentPage: 0,
      tradeId,
      noMoreData: false,
      companyList: []
    })
    this.initCompanyList(tradeId)
  },
  getBanner() {
    getCompanyBanner()
      .then(res =>{
        this.setData({
          banners: res.data
        })
      })
  },
  onLoad: function() {
    app.getLocation().then(() => this.initCompanyList())
    this.getCompanyType()
    this.getBanner()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    app.login(e.detail.encryptedData,e.detail.iv)
  },
  onReachBottom() {
    if (this.data.noMoreData) return
    console.log(111)
    this.setData({
      currentPage: this.data.currentPage + 1,
      loading: true
    })
    this.initCompanyList()
  }
})
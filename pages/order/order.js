import {
  getMyOrderList
} from '../../utils/api.js'
const { formatTime } = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabindex: 0,
    page: 0,
    list: []
  },
  bindtab(e) {
    this.setData({
      tabindex: e.currentTarget.dataset.index
    })
    this.getMyOrderList(e.currentTarget.dataset.index)
  },
  //status,1未付款,2已付款未使用,3已使用未评价,4已评价,5退款中
  getMyOrderList(status) {
    wx.showLoading({
      title: '加载中',
    })
    let params = {
      userId: wx.getStorageSync('userId'),
      page: this.data.page,
    }
    if(status !== undefined) {
      params = Object.assign(params, {status})
    }
    getMyOrderList(params)
      .then(res =>{
        console.log(res)
        wx.hideLoading()
        res.data.forEach(item => {item.createTime = formatTime(new Date(item.createTime))})
        this.setData({
          list: res.data
        })
      })
      .catch(err =>{
        console.log(err)
        this.setData({
          list: []
        })
        wx.showToast({
          title: err.msg,
          icon: 'none'
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      tabindex: options.status || 0
    })
    this.getMyOrderList(options.status)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globalData.status)
    this.setData({
      tabindex: app.globalData.status || 0
    })
    this.getMyOrderList(app.globalData.status) 
    app.globalData.status = ''
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
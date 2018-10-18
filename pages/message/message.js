import {
  getMyNotice
} from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    list: []
  },
  getMyNotice() {
    wx.showLoading({
      title: '正在加载...',
    })
    getMyNotice({
        page: this.data.page,
        userId: wx.getStorageSync('userId')
      })
      .then(res => {
        wx.hideLoading()
        console.log(res)
        this.setData({
          list: res.data
        })
      })
      .catch(res =>{
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMyNotice()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
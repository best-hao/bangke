import {
  getMyCollectCompany,
  uncollect
} from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowBtn: false,
    page: 0,
    companyList: [],
    btns: [],
    userId: wx.getStorageSync('userId')
  },
  showBtn(e) {
    let index = e.currentTarget.dataset.index
    let btns = this.data.btns.map((item, i) =>{
      if(index == i) {
        item.active = !item.active
      } else {
        item.active = false
      }
      return item;
    })
    this.setData({
      btns
    })
  },
  getMyCollectCompany() {
    getMyCollectCompany({
      userId: this.data.userId,
      page: this.data.page
    })
      .then(res =>{
        wx.hideLoading()
        this.setData({
          companyList: res.data,
          btns: res.data.map(item => ({companyId: item.companyId, active: false}))
        })
      })
      .catch(err =>{
        wx.showToast({
          title: err.msg,
          icon: 'none'
        })
      })
  },
  uncollect(e) {
    wx.showLoading({
      title: '取消中...',
    })
    let companyId = e.currentTarget.dataset.id;
    uncollect({
      listId: companyId,
      userId: this.data.userId,
      typeFlag: 4
    })
      .then(res =>{
        this.getMyCollectCompany()
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.getMyCollectCompany()
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
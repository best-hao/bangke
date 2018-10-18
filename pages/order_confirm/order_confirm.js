import {
  pay
} from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   * const obj = {
      title,
      price,
      projectId,
      num: this.data.num,
      companyName: this.data.company.name,
    }
   */
  data: {
    openBuy: false, // 弹窗
    companyName: '',
    companyLogo: '',
    title: '',
    price: '',
    poster: '',
    num: '',
    projectId: ''
  },
  fn() { },
  showBuy() {
    this.setData({
      openBuy: true
    })
  },
  hideBuy() {
    this.setData({
      openBuy: false
    })
  },
  requestPay() {
    wx.showLoading({
      title: '请求支付中...',
    })
    pay({
      listId: this.data.projectId,
      userId: wx.getStorageSync('userId'),
      num: this.data.num,
      typeFlag: 1
    })
      .then(res =>{
        console.log(res)
        wx.hideLoading()
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success(res){
            console.log(res)
            wx.redirectTo({
              url: '/pages/pay_success/pay_success',
            })
          },
          fail(err) {
            wx.showModal({
              title: '支付失败',
              content: err,
            })
            console.log(err)
          }
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const  {
      title,
      price,
      poster,
      projectId,
      num,
      companyName,
      logo
    } = options
    this.setData({
      title,
      price,
      poster,
      projectId,
      num,
      companyName,
      logo
    })
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
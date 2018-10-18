const app = getApp()
import {
  getUserinf
} from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: {
      text: '消息',
      icon: '/images/message.png',
      url: "/pages/message/message"
    },
    entryList: [
      {
        text: '优惠券',
        icon: '/images/coupon.png',
        url: "/pages/coupon/coupon"
      },
      {
        text: '关注技师',
        icon: '/images/gzjs.png',
        url: "/pages/follow_technician/follow_technician"
      },
      {
        text: '关注店铺',
        icon: '/images/gzdp.png',
        url: "/pages/follow_shop/follow_shop"
      }, 
      {
        text: '安全设置',
        icon: '/images/lw.png',
        url: "/pages/bind_phone/bind_phone"
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  }
})
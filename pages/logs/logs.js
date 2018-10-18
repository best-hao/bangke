//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  score(e) {
    console.log(9, e)
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

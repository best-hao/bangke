// components/upload/upload.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  externalClasses: ['row', 'row-center'],

  /**
   * 组件的初始数据
   */
  data: {
    tempFilePaths: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseImage() {
      const self = this;
      wx.chooseImage({
        count: 3,
        success({ tempFilePaths }, tempFiles) {
          self.setData({
            tempFilePaths
          })
          self.triggerEvent('upload', {
            tempFilePaths
          })
        }
      })
    },
    previewImage(e) {
      wx.previewImage({
        current: e.currentTarget.dataset.index,
        urls: this.data.tempFilePaths
      })
    },
  }
})

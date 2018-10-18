const QQMapWX = require('/lib/qqmap-wx-jssdk.min.js');
var qqmapsdk = new QQMapWX({
  key: 'AFOBZ-KKU6D-SKM4E-PCLYK-D6ICO-KZBFD'
});
qqmapsdk.search({
  keyword: '酒店',
  success: function(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
App({
  onLaunch: function() {
    //this.login()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 获取用户信息
    
  },
  /** 
   * 自定义post函数，返回Promise
   * @param {String}      url 接口网址
   * @param {arrayObject} data 要传的数组对象 例如:
   * +-------------------
   * @return {Promise}    promise 返回promise供后续操作
   */
  post: function(url, data) {
    var promise = new Promise((resolve, reject) => {
      //init
      var that = this;
      var postData = data;
      wx.request({
        url: `http://xcx.bangweikeji.com/index.php/${url}`,
        data: postData,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) { //服务器返回数据
          if (res.data.code == 200) { 
            resolve(res.data);
            console.log(res.data)
          } else { //返回错误提示信息
            reject(res.data);
            console.error(res.data.msg)
          }
        },
        error: function(e) {
          reject('网络出错');
        }
      })
    });
    return promise;
  },
  login(enc,iv) {
    const self = this;
    wx.login({
      success(res) {
        if (res.code) {
          const code = res.code
          console.log(code, enc, iv)
            self.post('xcx/user/weixin_login', {
              code: code,
              encryptedData: enc,
              iv: iv
            })
            .then(({ data }) => {
                wx.setStorageSync('userId', data.userId)
            })
        } else {
          　console.log('获取用户登录态失败！' + res.errMsg);
        }
        
      }
    })
  },
  // 获取用户经纬度
  getLocation() {
    return new Promise((resolve, reject) =>{
      wx.getLocation({
        success: res => {
          this.globalData.latitude = res.latitude
          this.globalData.longitude = res.longitude
          resolve()
        },
        fail(err) {
          console.log(err)
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    uploadUrl: 'http://xcx.bangweikeji.com/upload/upload'
  }
})
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function request(url, data) {
  var promise = new Promise((resolve, reject) => {
    //init
    var that = this;
    var postData = data;
    wx.request({
      url: `http://xcx.bangweikeji.com:8000/app/${url}`,
      data: postData,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) { //服务器返回数据
        console.log(res)
        if (res.data.code == 200) {
          resolve(res.data);
        } else { //返回错误提示信息
          reject(res.data);
          wx.hideLoading()
          // wx.showToast({
          //   title: res.data.msg,
          //   icon: 'none'
          // })
          console.error(res.data.msg)
        }
      },
      error: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}
module.exports = {
  formatTime: formatTime,
  request: request
}

// components/score/core.js
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
    stars: ['/images/star2.png', '/images/star2.png', '/images/star2.png', '/images/star2.png', '/images/star2.png']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    score(e) {
      const score = e.currentTarget.dataset.score;
      const stars = this.data.stars.map((item, index) => index < score ? '/images/star2.png' : '/images/star2.2.png')
      this.setData({
        stars
      })
      this.triggerEvent('score', {
        score
      })
    }
  }
})
// {
//   return
//   if (index < score) {
//     item = '/images/star2.png'
//   } else {
//     item = '/images/star2.2.png'
//   }
// }
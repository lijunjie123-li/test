
Page({
  data: {
    no: null,
    company: ['sf', 'sto', 'yt', 'yd', 'tt'], 
    com: ['顺丰', '申通', '圆通', '韵达', '天天','中通'], 
    index: 0, 
    expressInfo: null, 
  },
  search: function() {
    wx.showLoading({
      title: '加载中',
    })
  
    var key = ''
    wx.request({
      url: 'http://v.juhe.cn/exp/index?key=' + key + '&com=' + this.data.company[this.data.index] + '&no=' + this.data.no,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data);
        this.setData({
          expressInfo: res.data
        })
        wx.hideLoading()
      }
    })
  },

  noInput: function(e) {
    this.setData({
      no: e.detail.value
    })
  },
  companyInput: function(e) {
    this.setData({
      index: e.detail.value
    })
  }
})
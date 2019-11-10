// pages/person/person.js
Page({
  info: function() {
    // 保留当前页面，点击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  order: function(e) {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  address: function() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  contact: function (e) {
    wx.makePhoneCall({
      phoneNumber: '123456789' 
    })
  }
})
// pages/detail/detail.js
Page({

  data: {
    gender: '男',
    username: '李俊杰',
    imgUrl: "/images/avatar.jpg"
  },

  changeAvatar: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        var tempFilePaths = res.tempFilePaths
        this.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },

  jump: function(e) {
    wx.navigateTo({
      url: '/pages/modify/modify?username=' + encodeURIComponent(this.data.username) + '&gender=' + encodeURIComponent(this.data.gender)
    })
  }
})
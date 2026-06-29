const app = getApp()

Page({
  data: {
    parentName: '李大爷',
    chapters: []
  },

  onLoad() {
    this.setData({
      parentName: app.globalData.parentName || '李大爷',
      chapters: app.globalData.chapters || []
    })
  }
})

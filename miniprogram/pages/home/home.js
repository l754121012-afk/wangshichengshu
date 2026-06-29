const app = getApp()

Page({
  data: {
    parentName: '李大爷',
    progress: 35,
    currentChapter: 3,
    totalChapters: 7,
    stages: [
      { name: '童年', done: true },
      { name: '求学', done: true },
      { name: '工作', done: false, current: true },
      { name: '成家', done: false },
      { name: '退休', done: false }
    ]
  },

  onLoad() {
    this.setData({ parentName: app.globalData.parentName || '李大爷' })
  },

  startChat() {
    wx.switchTab({ url: '/pages/chat/chat' })
  },

  goMemoir() {
    wx.switchTab({ url: '/pages/memoir/memoir' })
  },

  goPay() {
    wx.switchTab({ url: '/pages/pay/pay' })
  }
})

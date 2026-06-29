const app = getApp()

Page({
  data: {
    messages: [],
    stages: [
      { name: '童年', done: true },
      { name: '求学', done: true },
      { name: '工作', done: false, current: true },
      { name: '成家', done: false },
      { name: '退休', done: false },
      { name: '回顾', done: false }
    ],
    recording: false
  },

  onLoad() {
    this.setData({ messages: app.globalData.messages || [] })
  },

  toggleMic() {
    this.setData({ recording: !this.data.recording })
    if (this.data.recording) {
      wx.showToast({ title: '正在录音...', icon: 'none', duration: 2000 })
    }
  }
})

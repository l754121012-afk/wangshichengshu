const app = getApp()

Page({
  data: {
    parentName: '李大爷',
    parentAge: 72,
    relations: ['儿子', '女儿', '儿媳', '女婿'],
    selectedRelation: '女儿'
  },

  onLoad() {
    console.log('Gift page loaded')
  },

  onNameInput(e) {
    this.setData({ parentName: e.detail.value })
  },

  onAgeInput(e) {
    this.setData({ parentAge: e.detail.value })
  },

  selectRelation(e) {
    const relation = e.currentTarget.dataset.relation
    this.setData({ selectedRelation: relation })
  },

  createMemoir() {
    app.globalData.parentName = this.data.parentName
    app.globalData.parentAge = this.data.parentAge
    app.globalData.relation = this.data.selectedRelation
    wx.showToast({ title: '创建成功', icon: 'success' })
    setTimeout(() => {
      wx.switchTab({ url: '/pages/home/home' })
    }, 1000)
  }
})

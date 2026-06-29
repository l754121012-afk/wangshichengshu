Page({
  data: {
    plans: [
      {
        id: 'digital',
        name: '完整电子版回忆录',
        desc: '不限字数、完整章节、导出PDF',
        price: '29.9',
        unit: '/本',
        original: '传统代写 ¥10,000+',
        recommended: true,
        features: ['不限对话轮数', '完整7-15章', '不限照片', '导出PDF', '4种文风']
      },
      {
        id: 'book',
        name: '精装实体书',
        desc: '纸质印刷 + 精装装帧 + 包邮到家',
        price: '199',
        unit: '起',
        original: '',
        recommended: false,
        features: ['包含完整电子版', '精装硬壳封面', '180g铜版纸', '高清照片印刷', '7-10日包邮']
      },
      {
        id: 'member',
        name: '月度会员',
        desc: '适合为多位老人创建回忆录',
        price: '9.9',
        unit: '/月',
        original: '',
        recommended: false,
        features: ['不限创建数量', '持续更新迭代', '优先体验新功能']
      }
    ]
  },

  selectPlan(e) {
    const planId = e.currentTarget.dataset.id
    wx.showToast({ title: '选择成功: ' + planId, icon: 'none' })
  }
})

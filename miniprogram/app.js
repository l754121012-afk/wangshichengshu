App({
  globalData: {
    userInfo: null,
    parentName: '李大爷',
    parentAge: 72,
    relation: '女儿',
    progress: 35,
    currentStage: '工作',
    chapters: [
      { id: 1, title: '童年的小院', status: 'complete', photos: 2, preview: '1954年的冬天，我出生在河南一个叫李庄的小村庄。那时候家里穷，土坯房三间...' },
      { id: 2, title: '求学之路', status: 'complete', photos: 1, preview: '八岁那年，我背着母亲用碎布缝的书包，走了五里山路去上学...' },
      { id: 3, title: '初入工厂', status: 'writing', photos: 0, preview: '车间主任领着我走进去的那一刻，机器轰隆隆的响...' },
      { id: 4, title: '遇见你的母亲', status: 'locked', photos: 0, preview: '' },
      { id: 5, title: '成家立业', status: 'locked', photos: 0, preview: '' },
      { id: 6, title: '退休时光', status: 'locked', photos: 0, preview: '' },
      { id: 7, title: '人生感悟', status: 'locked', photos: 0, preview: '' }
    ],
    messages: [
      { type: 'ai', text: '李大爷早上好！\ud83d\ude0a 上次您说到了在工厂的第一天，还记得那天具体发生了什么吗？有没有什么让您印象深刻的事？', time: '09:41' },
      { type: 'user', text: '那天车间主任领着我进去的，机器轰隆隆的响，我一个农村娃从来没见过那么大的厂房...', time: '09:42' },
      { type: 'ai', text: '那一定是很震撼的场景！那个厂房有多大？车间主任是什么样的人，对您好吗？', time: '09:43' }
    ]
  },
  onLaunch() {
    console.log('App Launch')
  }
})

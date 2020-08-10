Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "../images/icon/index.png",
        "selectedIconPath": "../images/icon/index-select.png"
      },
      {
        "pagePath": "/pages/sellPage/index",
        "text": "断舍离",
        "iconPath": "../images/icon/sell.png",
        "selectedIconPath": "../images/icon/sell-select.png"
      },
      {
        "pagePath": "/pages/shoppingBasket/index",
        "text": "购物车",
        "iconPath": "../images/icon/shoppingBasket.png",
        "selectedIconPath": "../images/icon/shoppingBasket-select.png"
      },
      {
        "pagePath": "/pages/mine/index",
        "text": "我的",
        "iconPath": "../images/icon/mine.png",
        "selectedIconPath": "../images/icon/mine-select.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
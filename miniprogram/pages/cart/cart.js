// miniprogram/pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'cart':[
      {
        'id': 0,
        'name': '飘逸杯',
        'imgUrl': '../../images/tea_2.png',
        'price': 100,
        'total': 1,
        'isBuy': false
      },
      {
        'id': 1,
        'name': '茶道六君子',
        'imgUrl': '../../images/tea_1.png',
        'price': 50,
        'total': 1,
        'isBuy': false
      },
      {
        'id': 2,
        'name': '茶家具',
        'imgUrl': '../../images/tea_3.png',
        'price': 200,
        'total': 1,
        'isBuy': false
      },
    ]
  },
  /**
   * 方法
  */
  add(event){
    let index = event.target.id;
    // 
    this.data.cart[index].total++;
    console.log(this.data.cart[index]);
  },
  sub(event) {
    let index = event.target.id;
    this.data.cart[index].total--;
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
import { postList } from '../../data/data.js'
// pages/posts/posts.js
const app = getApp();
console.log(app);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: "时间就是如此的相似"
  },
  onMaxImage() {
    console.log(123);
  },
  onGoToDetail(event) {
    const pid = event.currentTarget.dataset.postId;
    console.log(pid);
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + pid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad');
    this.setData({
      postList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('onShareAppMessage');
  }
})
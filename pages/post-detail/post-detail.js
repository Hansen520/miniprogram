// pages/post-detail.js
import { postList } from '../../data/data.js'
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    _pid: null,
    isPlaying: false,
    collected: false,
    _postsCollected: {},
    _mgr: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data._pid = options.pid;
    // 从缓存里面读取下当前文章是否被收藏
    const postsCollected = wx.getStorageSync('posts_collected') || {};
    this.data._postsCollected = postsCollected;
    // 通过id判断是否为当前文章
    let collected = postsCollected[this.data._pid];
    if(collected === undefined) {
      collected = false;
    }
    this.setData({
      postData: postList[options.pid],
      collected,
      isPlaying: app.gIsPlayingMusic
    });
    /* 调用音乐播放器原生方法 */
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr;
    mgr.onPlay(this.onMusicStart)
    // mgr.onStop(this.onMusicStop)
    mgr.onPause(this.onMusicStop);
  },
  onCollect(event) {
    const postsCollected = this.data._postsCollected
    postsCollected[this.data._pid] = !this.data.collected
    this.setData({
      collected: !this.data.collected
    })

    wx.setStorageSync('posts_collected',postsCollected)
    wx.showToast({
      title: this.data.collected ? '收藏成功' : '取消收藏',
      duration: 2000
    })
  },
  /*
    分享
  */
  onShare() {
    wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈'],
      success(res) {
        console.log(res);
      }
    })
  },
  /*
    播放音乐
  */
  onMusicStart(event) {
    const mgr = this.data._mgr;
    mgr.onPlay(() => {
      console.log(123)
    })
    mgr.src = postList[0].music.url;
    mgr.title = postList[0].music.title;
    mgr.coverImgUrl = postList[this.data._pid].music.coverImgUrl
    app.gIsPlayingMusic = true;
    this.setData({
      isPlaying: true
    });
  },
  onMusicStop(event) {
    const mgr = this.data._mgr;
    mgr.pause();
    app.gIsPlayingMusic = false;
    this.setData({
      isPlaying: false
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
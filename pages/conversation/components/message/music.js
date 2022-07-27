Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlaying: false,
    innerAudioContext: null,
    loading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play: function(){
      my.showToast({
        content : '支付宝小程序只支持来源于优酷的音频码'
      });
      return;
      // let { isPlaying, innerAudioContext } = this.data;
      // let { message: { content: { url } }, message } = this.props;
      // if (isPlaying) {
      //   innerAudioContext.stop();
      //   this.setData({
      //     isPlaying: false
      //   });
      //   return;
      // }
      // innerAudioContext = my.createInnerAudioContext()

      // this.setData({
      //   isPlaying: true,
      //   innerAudioContext
      // });
      // // this.triggerEvent('onplaymusic', this)
      // // this.props.onPlaymusic(this);
      // innerAudioContext.autoplay = true;
      // // innerAudioContext.src = url;
      // innerAudioContext.src = 'http://rongcloud-audio.ronghub.com/FgQyyl0Q4qsC_uEMF9k7ne67wwWq?e=1611631299&token=livk5rb3__JZjCtEiMxXpQ8QscLxbNLehwhHySnX:h23o8rR2mWK-qk69qvR0ojDxnJ8=';
      // innerAudioContext.onPlay(() => {
      //   this.setData({
      //     loading: false
      //   });
      //   console.log('音乐开始播放')
      // })
      // innerAudioContext.onWaiting(() => {
      //   console.log('waiting');
      //   this.setData({
      //     loading: true
      //   });
      // });
      // innerAudioContext.onEnded(() => {
      //   this.setData({
      //     isPlaying: false,
      //     loading: false
      //   });
      //   // this.triggerEvent('onstopmusic', this)
      //   this.props.onStopmusic(this);
      // });
      // innerAudioContext.onError((res) => {
      //   this.setData({
      //     isPlaying: false
      //   });
      // })
    },
    stop: function(){
      my.showToast({
        content : '支付宝小程序只支持来源于优酷的音频码'
      });
      return;
      // let {  message } = this.props;
      // let { innerAudioContext} = this.data;
      // // this.triggerEvent('onstopmusic', this)
      // this.props.onStopmusic(this);
      // if (innerAudioContext){
      //   innerAudioContext.stop();
      //   this.setData({
      //     isPlaying: false
      //   });
      // }
    }
  }
})

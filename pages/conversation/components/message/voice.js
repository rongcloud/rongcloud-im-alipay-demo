let innerAudioContext = null;
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
    senderGif: 'http://rongcloud-image.ronghub.com/Fpfx91n9NgNcngC-rSjdsd3THN0b?e=1612943586&token=livk5rb3__JZjCtEiMxXpQ8QscLxbNLehwhHySnX:Iw0c-aNMt0IuNBC1WlP_sX208zI=',
    receiverGif: 'http://rongcloud-image.ronghub.com/FoCEPldohXc2jOtsjv40o5wWgJVH?e=1612944022&token=CddrKW5AbOMQaDRwc3ReDNvo3-sL_SO1fSUBKV3H:7Agv6gDFd9HZmJn_Ep1twBMFric='
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab: function(event){
      my.showToast({
        content : '支付宝小程序只支持来源于优酷的音频码'
      });
      return;
      // let { isPlaying, innerAudioContext} = this.data;
      // let content = this.props.message.content.remoteUrl;
      // if(isPlaying){
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
      // this.props.onPlay(this);
      // innerAudioContext.autoplay = true;
      // // innerAudioContext.src = content;
      // innerAudioContext.src = 'http://rongcloud-audio.ronghub.com/FgQyyl0Q4qsC_uEMF9k7ne67wwWq?e=1611631299&token=livk5rb3__JZjCtEiMxXpQ8QscLxbNLehwhHySnX:h23o8rR2mWK-qk69qvR0ojDxnJ8=';
      // innerAudioContext.onPlay(() => {
      //   console.log('开始播放')
      // })
      // innerAudioContext.onEnded(() => {
      //   this.setData({
      //     isPlaying: false
      //   });
      // });
      // innerAudioContext.onError((res) => {
      //   this.setData({
      //     isPlaying: false
      //   });
      // })
    }
  }
})

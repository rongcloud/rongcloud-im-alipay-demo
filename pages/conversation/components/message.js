// pages/conversation/components/message.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    message: Object
  },
  relations: {
    './message/image': {
      type: 'child'
    },
    './message/text': {
      type: 'child'
    },
    './message/voice': {
      type: 'child'
    },
    './message/file': {
      type: 'child'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlayVoice: function (data) {
      // this.triggerEvent('onplay', event.detail)
      this.props.onPlay(data);
    },
    onPlayMusic: function(data, event){
      // this.triggerEvent('onplaymusic', event.detail)
      this.props.onPlaymusic(data);
    },
    onMusicStop: function (data){
      // this.triggerEvent('onmusicstop', event.detail)
      this.props.onMusicstop(data);
    },
    onPreviewImage: function(url){
      this.props.onPreviewimage(url);
    }
  },
  didMount(){
    console.log('messagedata', this.props.message);
  }
})

const utils = require('../utils/utils');
const ChatroomId = 'OIBbeKlkx';
const {globalData} = getApp();
const { Service: { Status, Conversation, User, CONNECTION_STATUS}} = globalData;

const requestUserAuth = () => {
  return new Promise((resolve, reject) => {
    my.getSetting({
      success: function (res) {
        resolve(!!res.authSetting['userInfo'])
      },
      fail: function (error) {
        console.log(error);
        reject(error)
      }
    })
  });
};

const watchConversation = (context) => {
  Conversation.watch((conversationList) => {
    context.setData({
      conversationList
    });
  });
};

const watchStatus = () => {
 Status.watch((status) => {
   console.log('连接状态码:', status);
   switch(status) {
     case CONNECTION_STATUS.CONNECTED:
       my.hideLoading();
       my.showToast({
         content: '链接成功',
         type: 'success',
         duration: 1000
       });
       break;
     case CONNECTION_STATUS.NETWORK_UNAVAILABLE:
       my.showLoading({
        content: '重连中 ...',
       });
       break;
     case CONNECTION_STATUS.KICKED_OFFLINE_BY_OTHER_CLIENT:
       my.alert({
         title: '提示',
         content: '当前用户已在其他端登录'
       });
       break;
   }
 })
}

const connect = (context) => {
  watchConversation(context);
  watchStatus();
  Status.connect({nickName: '大乔', avatarUrl: ''}).then((user) => {
    console.log('connect successfully', user);
    return Conversation.getList();
  }).then((list) => {
    context.setData({
      conversationList: list
    });
  }).catch((error) => {
    my.showToast({
      content: error.msg,
      type: 'none',
      duration: 3000
    })
  })
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserAuth: true,
    conversationList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    requestUserAuth().then((hasUserAuth) => {
      this.setData({
        hasUserAuth
      });
      if (hasUserAuth) {
        connect(this);
      }
    });
  },
  onGetAuthorize: function(user){
    my.getOpenUserInfo({
      success: (res) => {
        this.setData({
          hasUserAuth: true
        });
        connect(this);
      },
      fail: (res) => {}
    });
  },
  gotoChat: function(event){
    let { currentTarget: { dataset: { item } } } = event;
    let { conversationType, targetId, target } = item;
    
    let isSame = (conversation, another) => {
      let isSaveType = (conversation.conversationType == another.conversationType);
      let isSaveTarget = (conversation.targetId == another.targetId);
      return (isSaveType && isSaveTarget);
    };

    let url = './chat?conversationType={conversationType}&targetId={targetId}&title={title}';
    url = utils.tplEngine(url, {
      conversationType,
      targetId,
      title: target.name,
    });
    my.navigateTo({
      url: url,
    });

    let { conversationList} = this.data;
    utils.map(conversationList, (conversation) => {
      if (isSame(conversation, item)){
        conversation.unReadCount = 0;
      }
      return conversation
    });
    Conversation.clearUnreadCount(item);
    this.setData({
      conversationList
    });
    
  },
  showConversationHandles: function (event) {
    let { currentTarget: { dataset: { item } } } = event;
    let { conversationType, targetId } = item;
    let handlers = [
      { name: '加入聊天室: ' + ChatroomId, event: this.joinChatroom },
      // { name: '清除所有未读数', event: Conversation.clearTotalUnreadCount },
      // { name: '清空缓存', event: this.clearLocal },
      // { name: '删除会话', event: Conversation.remove }
    ];
    let handlerNames = handlers.map((handle) => {
      return handle.name;
    });
    let showToast = (title) => {
      my.showToast({
        content: title,
        duration: 1000
      });
    };
    my.showActionSheet({
      itemList: handlerNames,
      success: function (res) {
        let { event, name } = handlers[res.tapIndex];
        event(conversationType, targetId).then(() => {
          showToast(name + '成功');
        }).catch((error) => {
          showToast(name + '失败' + error);
        });
      }
    });
  },
  joinChatroom: function () {
    return User.joinChatroom(ChatroomId).then(() => {
      let targetId = ChatroomId;
      let conversationType = 4;
      let url = './chat?conversationType={conversationType}&targetId={targetId}&title={title}';
      url = utils.tplEngine(url, {
        type,
        targetId,
        title: `聊天室 (${targetId})`
      });
      return my.navigateTo({
        url: url,
      });
    });
  }
})
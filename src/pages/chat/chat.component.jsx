import React from 'react'
import ChatMenu from '../../components/chatmenu/chatmenu.component'
import ServerNavigation from '../../components/servernavigation/servernavigation.component'
import SocialNavigation from '../../components/socialnavigation/socialnavigation.component'
import './chat.style.scss';

class Chat extends React.Component {
  render() {
      return (
          <div className="chat">
            <ServerNavigation />
            <ChatMenu />
            <SocialNavigation />
          </div>
      )
  }
}

export default Chat

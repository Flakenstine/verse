import React from 'react'
import ChatMenu from '../../components/chatmenu/chatmenu.component'
import ServerNavigation from '../../components/servernavigation/servernavigation.component'
import SocialNavigation from '../../components/socialnavigation/socialnavigation.component'

import { Route, Link } from 'react-router-dom';

import './chat.style.scss';


export const Server = ({ match }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}

const Chat = () => {
  return (
    <div className="chat">
    </div>
  )
}

export default Chat

// class Chat extends React.Component {
//   render() {
//       return (
//         <div className="chat">
//           <h1>Server Switcher Test</h1>
//           <Link className="btn btn-primary" to="/servers/123456789">My Awesome Server</Link>
//           <Route path={`/servers/:serverId`} component={Server} />
//         </div>
//           // <div className="chat">
//           //   <ServerNavigation />
//           //   <ChatMenu />
//           //   <SocialNavigation />
//           // </div>
//       )
//   }
// }

// export default Chat

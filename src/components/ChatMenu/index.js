/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './styles.scss'

const ChatMenu = () => {
  return (
    <div className="chatMenu">
      <div className="messageView">
        <p>Message 1</p>
        <p>Message 2</p>
        <p>Message 3</p>
      </div>
      <div className="notebook">
        <input type="text" />
      </div>
    </div>
  );
}

export default ChatMenu

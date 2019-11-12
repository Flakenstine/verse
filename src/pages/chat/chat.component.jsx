/* eslint-disable react/prefer-stateless-function */
import React from 'react'

class Chat extends React.Component {
  render() {
    return (
      <div>
        <p>
            This is the default view,
            we will present it to the user everytime they login.
            Eventually we also store states to perserve the last window state before logout.
        </p>
      </div>
    )
  }
}

export default Chat

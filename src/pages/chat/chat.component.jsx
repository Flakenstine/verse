import React from 'react'
import ServerNavigation from '../../components/servernavigation/servernavigation.component'

function Chat () {
  return (
    <div>
    <ServerNavigation></ServerNavigation>
    <p>Default view - Eventually state will be preserved to display last view content on app load.</p>
    </div>
  )
}

export default Chat

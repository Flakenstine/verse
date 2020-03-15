import React from 'react'

import './styles.scss'

const SocialNavigation = () => {
  const friends = ['Flakenstine', 'Legobuilder0813', 'JustPlatinum', 'Gatario', 'Vidsify']
  return (
    <div className="socialMenu">
      <div className="socialMenu__friendslist">
        {friends.map((_value) => <div key={_value} className="friend" />)}
      </div>
    </div>
  )
}

export default SocialNavigation

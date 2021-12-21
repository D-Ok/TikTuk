import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { Avatar, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AvatarLink = function ({
  name, nickName, avatar, className,
}) {
  const navigate = useNavigate()

  const avatarLinkClasses = classnames(
    { [`${className}`]: true },
    'avatar-link-container',
  )

  return (
    <div
      className={avatarLinkClasses}
      onClick={() => navigate(`/user/${name}`, { replace: true })}
    >
      <Avatar alt={nickName} src={avatar} className="avatar-icon" />
      <div className="avatar-text">
        <Link href="#" underline="hover">
          {name}
        </Link>
        <span className="avatar-nickname">{nickName}</span>
      </div>
    </div>
  )
}

AvatarLink.defaultProps = {
  className: '',
  name: 'dave.xp',
  nickName: 'Dave XP',
  avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1637082000&x-signature=8iQRSKQWKaCtmkpDCoW487iD7hc%3D',
}

AvatarLink.propTypes = {
  name: propTypes.string,
  nickName: propTypes.string,
  avatar: propTypes.string,
  className: propTypes.string,
}

export default AvatarLink

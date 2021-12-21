import React from 'react'
import { Typography, Link } from '@mui/material'
import propTypes from 'prop-types'
import AvatarLink from '../AvatarLink/AvatarLink'
import InfoIcon from '../InfoIcon/InfoIcon'

const UserProfile = function ({ stats, user }) {
  const userInfo = () => {
    if (!user) return <></>

    const {
      bioLink, uniqueId, nickname, avatarLarger, signature,
    } = user

    return (
      <>
        <AvatarLink
          className="profile-avatar"
          name={uniqueId}
          nickName={nickname}
          avatar={avatarLarger}
        />
        <Typography variant="body1" component="p">
          {signature}
        </Typography>
        {bioLink && <Link href={bioLink.link}>{bioLink.link}</Link>}
      </>
    )
  }

  const statsInfo = () => {
    if (!stats) return <></>

    const {
      followingCount, followerCount, videoCount, heartCount,
    } = stats
    return (
      <div className="profile-icon-group">
        <InfoIcon disabled number={heartCount} text="Hearts" />
        <InfoIcon
          number={videoCount}
          text="Videos"
          icon="play_circle"
          color="info"
        />
        <InfoIcon
          number={followerCount}
          text="Followers"
          icon="visibility"
          color="success"
        />
        <InfoIcon
          number={followingCount}
          text="Following"
          icon="face"
          color="default"
        />
      </div>
    )
  }

  return (
    <div>
      {userInfo()}
      {statsInfo()}
    </div>
  )
}

UserProfile.defaultProps = {
  stats: undefined,
  user: undefined,
}

UserProfile.propTypes = {
  stats: propTypes.shape({
    diggCount: propTypes.number,
    followerCount: propTypes.number,
    followingCount: propTypes.number,
    heartCount: propTypes.number,
    videoCount: propTypes.number,
  }),
  user: propTypes.shape({
    avatarLarger: propTypes.string,
    avatarMedium: propTypes.string,
    avatarThumb: propTypes.string,
    bioLink: propTypes.shape({
      link: propTypes.string,
      risk: propTypes.number,
    }),
    id: propTypes.string,
    nickname: propTypes.string,
    uniqueId: propTypes.string,
    verified: propTypes.bool,
    signature: propTypes.string,
  }),
}

export default UserProfile

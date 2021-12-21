import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { options } from '../../requests'
import { GLOBAL_CONSTANTS } from '../../constants'
import UserProfile from '../../components/UserProfile/UserProfile'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

const { USER_INFO, TRENDING_FEED } = GLOBAL_CONSTANTS.API.URLS
const UserDetails = function () {
  const { uniqueId } = useParams()
  const [userInfo, setUserInfo] = useState()
  const [videos, setVideos] = useState([])

  const getUserInfo = () => {
    axios
      .request(options(USER_INFO + uniqueId))
      .then((response) => {
        setUserInfo(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getUserFeed = () => {
    axios
      .request(options(TRENDING_FEED))
      .then((response) => {
        setVideos(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    getUserInfo()
    getUserFeed()
  }, [uniqueId])

  return (
    <div>
      <UserProfile {...userInfo} />
      <VideoGrid videos={videos} />
    </div>
  )
}

export default UserDetails

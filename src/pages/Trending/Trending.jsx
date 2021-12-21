import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { options } from '../../requests'
import Post from '../../components/Post/Post'
import { GLOBAL_CONSTANTS } from '../../constants'

const trendingFeedUrl = GLOBAL_CONSTANTS.API.URLS.TRENDING_FEED

const Trending = function () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .request(options(trendingFeedUrl))
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      {posts.map((element) => (
        <Post {...element} key={element.id} />
      ))}
    </>
  )
}

export default Trending

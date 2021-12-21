import React from 'react'
import propTypes from 'prop-types'
import { Icon } from '@mui/material'
import Video from '../Video/Video'
import { numberToText } from '../InfoIcon/utils'

const VideoGrid = function ({ videos }) {
  const videoContainer = ({ videoUrl, playCount }) => (
    <div className="user-video-container" key={videoUrl}>
      <Video
        controls={false}
        videoUrl={videoUrl}
        className="user-video-display"
      />
      <div className="user-video-info">
        <Icon fontSize="large">play_arrow</Icon>
        <span>{numberToText(playCount)}</span>
      </div>
    </div>
  )

  return (
    <div className="video-grid">
      {videos && videos.map((element) => videoContainer(element))}
    </div>
  )
}

VideoGrid.defaultProps = {
  videos: undefined,
}

VideoGrid.propTypes = {
  videos: propTypes.arrayOf(
    propTypes.shape({
      videoUrl: propTypes.string,
      playCount: propTypes.number,
    }),
  ),
}

export default VideoGrid

import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'

import VideoElement from './VideoElement'

const Video = function ({
  muted, playOnView, videoUrl, className,
}) {
  const [isLoad, setIsLoad] = useState(false)

  const { ref, inView } = useInView({
    rootMargin: '100px',
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !isLoad) setIsLoad(true)
  }, [inView, isLoad])

  const containerClasses = classnames(
    { [className]: true },
    'video-container',
  )

  return (
    <div className={containerClasses} ref={ref}>
      <VideoElement
        videoUrl={videoUrl}
        isLoad={isLoad}
        playOnView={playOnView}
        muted={muted}
      />
    </div>
  )
}

Video.defaultProps = {
  playOnView: false,
  className: '',
  muted: true,
  videoUrl:
        'https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr=',
}

Video.propTypes = {
  videoUrl: propTypes.string,
  className: propTypes.string,
  playOnView: propTypes.bool,
  muted: propTypes.bool,
}

export default Video

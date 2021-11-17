import propTypes from "prop-types";
import InfoIcon from "../InfoIcon/InfoIcon";
import {useEffect, useRef, useState} from "react";
import classnames from 'classnames';
import {useInView} from "react-intersection-observer";

const Video = ({duration, height, width, videoUrl, className, controls}) => {
    const [isPlay, setIsPlay] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);
    const videoElement = useRef(null)
    const { ref, inView, entry } = useInView({
        rootMargin: '40px',
        triggerOnce: true
    });

    const containerClasses = classnames(
        {[className]: true},
        'video-container'

    )
    const buttonClasses = classnames(
        'video-button',
        {'--display': displayButton}
    );

    const onVideoClick = () => {
        // if(isPlay)
        //     videoElement
    }

    return (
        <div className={containerClasses} onClick={onVideoClick} ref={ref}>
            <video controls = {controls} src = {inView ? videoUrl: ''} ref={videoElement} > </video>
            <div className={buttonClasses} >
                <InfoIcon color={'default'} icon={'play_arrow'} iconSize={100}/>
            </div>
        </div>
    );
}

Video.defaultProps = {
    controls: true,
     duration: 11,
    height: 1024,
    width: 576,
    videoUrl: "https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr=",
}

Video.propTypes = {
    duration: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    videoUrl: propTypes.string,
    className: propTypes.string,
    controls: propTypes.bool
}

export default Video;
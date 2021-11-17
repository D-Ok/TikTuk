import * as prototype from "prop-types";
import Video from "../Video/Video";
import {Icon} from "@mui/material";
import {numberToText} from "../InfoIcon/utils";

const VideoGrid = ({videos}) => {

    const videoContainer = ({videoUrl, playCount}) => {
        return <div className={'user-video-container'}>
            <Video controls={false} videoUrl={videoUrl} className={'user-video-display'}/>
            <div className={'user-video-info'}>
                <Icon fontSize={'large'}>play_arrow</Icon>
                <span>{numberToText(playCount)}</span>
            </div>
        </div>
    }

    return <div className={'video-grid'}>
        {videos && videos.map(videoContainer)}
    </div>
}

VideoGrid.protoTypes = {
    videos: prototype.arrayOf(prototype.shape({
        videoUrl: prototype.string,
        playCount: prototype.number
    }))
}

export default VideoGrid
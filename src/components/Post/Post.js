import propTypes from "prop-types";
import classnames from 'classnames';
import Video from "../Video/Video";
import Hashtag from "../Hashtag/Hashtag";
import InfoIcon from "../InfoIcon/InfoIcon";
import AvatarLink from "../AvatarLink/AvatarLink";
import {useEffect, useState} from "react";
import {calculateHeight} from "./utils";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

const Post = ({duration, height, width, videoUrl}) => {
    const [postHeight, setPostHeight] = useState(300);

    useEffect(() => {
        let postHeight = calculateHeight();
        setPostHeight(postHeight);
    }, [])

    const postStyles = {
        height: postHeight,
        width: (postHeight*9)/8 + 20
    }

    return (
        <div className={'post-container'} style={postStyles}>
            <Video/>
            <div className={'post-info-container'}>
                <AvatarLink/>
                <hr className={'post-divider'}/>
                <Typography variant="body1" component="div" className={'post-text'}>Text Text textf ggggyg gh ghjg yggk kjh uhuhk jhjh k</Typography>
                <div style={{flexGrow: 1}}><Hashtag name={"hello"}/><Hashtag name={"tag"}/></div>
                <hr className={'post-divider'}/>
                <div className={'post-reactions'}>
                    <InfoIcon number={12666999}/>
                    <InfoIcon icon={'forum'} color={'primary'} number={12999}/>
                </div>
            </div>
        </div>
    );
}

Post.defaultProps = {
    duration: 11,
    height: 1024,
    width: 576,
    videoUrl: "https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr=",
}

Post.propTypes = {
    duration: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    videoUrl: propTypes.string
}

export default Post;
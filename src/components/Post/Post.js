import propTypes from "prop-types";
import classnames from 'classnames';
import Video from "../Video/Video";
import Hashtag from "../Hashtag/Hashtag";
import InfoIcon from "../InfoIcon/InfoIcon";
import AvatarLink from "../AvatarLink/AvatarLink";
import {useEffect, useState} from "react";
import {calculateHeight} from "./utils";
import Typography from "@mui/material/Typography";

const Post = (props) => {
    const {videoUrl, videoMeta, text, authorMeta, diggCount, commentCount, hashtags} = props
    const [postHeight, setPostHeight] = useState(300);

    useEffect(() => {
        let postHeight = calculateHeight();
        setPostHeight(postHeight);
    }, [])

    const postStyles = {
        height: postHeight,
        width: (postHeight*9)/8 + 20
    }

    if(!videoMeta)
        return <></>;

    return (
        <div className={'post-container'} style={postStyles}>
            <Video {...videoMeta} videoUrl={videoUrl}/>
            <div className={'post-info-container'}>
                {authorMeta && <AvatarLink {...authorMeta}/>}

                <hr className={'post-divider'}/>
                <Typography variant="body1" component="div" className={'post-text'}>{text}</Typography>
                <div className={'post-hashtags'}>
                    {hashtags.map( ({id, name}) => <Hashtag name={name} key={id}/>)}
                </div>

                <hr className={'post-divider'}/>
                <div className={'post-reactions'}>
                    <InfoIcon number={diggCount}/>
                    <InfoIcon icon={'forum'} color={'primary'} number={commentCount}/>
                </div>
            </div>
        </div>
    );
}

Post.defaultProps = {
    hashtags: [],
    diggCount: 0,
    commentCount: 0
}

Post.propTypes = {
    videoMeta: propTypes.shape({
        duration: propTypes.number,
        height: propTypes.number,
        width: propTypes.number,
    }),
    videoUrl: propTypes.string,
    authorMeta: propTypes.objectOf(AvatarLink),
    text: propTypes.string,
    diggCount: propTypes.number,
    commentCount: propTypes.number,
    hashtags: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        name: propTypes.string
    }))
}

export default Post;
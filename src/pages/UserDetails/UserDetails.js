import { useParams } from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {options} from "../../requests";
import {GLOBAL_CONSTANTS} from "../../constants";
import UserProfile from "../../components/UserProfile/UserProfile";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const {USER_INFO, USER_FEED, TRENDING_FEED} = GLOBAL_CONSTANTS.API.URLS;
const UserDetails = () => {
    let { uniqueId } = useParams();
    const [userInfo, setUserInfo] = useState(null);
    const [videos, setVideos] = useState([])

    const getUserInfo = () => {
        axios.request(options(USER_INFO + uniqueId)).then(function (response) {
            setUserInfo(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const getUserFeed = () => {
        //USER_FEED + uniqueId
        axios.request(options(TRENDING_FEED)).then(function (response) {
            console.log(response.data);
            setVideos(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getUserInfo();
        getUserFeed();
    }, [uniqueId]);

    return (
        <div>
            <UserProfile {...userInfo}/>
            <VideoGrid videos={videos}/>
        </div>
    )
}

export default  UserDetails;
import {Button} from "@mui/material";
import {getTrendingFeed, options} from "../../requests";
import Post from "../../components/Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {GLOBAL_CONSTANTS} from '../../constants'

const trendingFeedUrl = GLOBAL_CONSTANTS.API.URLS.TRENDING_FEED;

const Trending = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        axios.request(options(trendingFeedUrl)).then(function (response) {
            setPosts(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            {posts.map((el) => <Post {...el} key={el.id}/>)}
        </>
    )
}

export default Trending
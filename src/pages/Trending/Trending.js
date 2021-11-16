import {Button} from "@mui/material";
import {getTrendingFeed} from "../../requests";
import Post from "../../components/Post/Post";

const Trending = () => {
    return (
        <>
            <Button variant="contained" onClick={getTrendingFeed}>Contained</Button>
            <Post/>
        </>
    )
}

export default Trending
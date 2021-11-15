import './App.css';
import {Link, Button} from '@mui/material'
import {getTrendingFeed} from "./requests";
import InfoIcon from "./components/InfoIcon/InfoIcon";
import Hashtag from "./components/Hashtag/Hashtag";
import AvatarLink from "./components/AvatarLink/AvatarLink";
import Video from "./components/Video/Video";
import Post from "./components/Post/Post";

let videoEx = {
    authorMeta: {
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/94c0343f131c3c203edae0001698b10a~c5_1080x1080.jpeg?x-expires=1637085600&x-signature=Grhmc5ClZeZjd8e8Nl9xhNroZwI%3D",
        digg: 1420,
        fans: 884300,
        following: 153,
        heart: 16100000,
        id: "6775980874561471493",
        name: "elaine.victoria",
        nickName: "Elaine Victoria 🕊",
        secUid: "MS4wLjABAAAAFWwlr9fp5ZIiczhkdPu7WRYCTG-RI1y4B2HlzYYQu5sjZ65T8BqJ3KiWdQAuzCMn",
        signature: "No bio yet",
        verified: false,
        video: 396
    },
    commentCount: 17200,
    covers: {
        default: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p…00&x-signature=Jfvnz%2FBAm%2F8dzNwt631iAPAVgpg%3D',
        origin: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p…020800&x-signature=NdnpKOAx5XUn0JJdk9JiAYzqnuw%3D',
        dynamic: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p…0800&x-signature=UDfCFkybCPzZ3G4PsdT%2FwCX1WG4%3D'
    },
    createTime: 1630577695,
    diggCount: 1400000,
    downloaded: false,
    effectStickers: [],
    hashtags: [],
    id: "7003277860790144262",
    mentions: [],
    playCount: 25800000,
    secretID: "7003277860790144262",
    shareCount: 27500,
    text: "Das war am selben Tag ALDI ich mach meine Videos mehr an der Kasse 🙃#foryoupage #aldinord #fyfyfyfy #foryoupageofficiall",
    videoApiUrlNoWaterMark: "",
    videoMeta: {
        duration: 11,
        height: 1024,
        width: 576,
        videoUrl: "https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr=",
        videoUrlNoWaterMark: ""
    }
}

function App() {
    return (
        <div className="App">
            <Button variant="contained" onClick={getTrendingFeed}>Contained</Button>
            <Post/>
        </div>
    );
}

export default App;

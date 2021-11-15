import propTypes from "prop-types";
import {Avatar, Link} from "@mui/material";

const AvatarLink = ({name, nickname, src}) => {
    return <div>
        <Avatar alt={nickname} src={src} className={'avatar-link-container'}/>
        <Link href="#" >{nickname}</Link>
    </div>
}

AvatarLink.defaultProps = {
    nickname: 'dave.xp',
    src: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1637082000&x-signature=8iQRSKQWKaCtmkpDCoW487iD7hc%3D"
}

AvatarLink.propTypes = {
    name: propTypes.string,
    nickname: propTypes.string,
    src: propTypes.string
}

export default AvatarLink;

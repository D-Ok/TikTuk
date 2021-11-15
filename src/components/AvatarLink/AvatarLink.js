import propTypes from "prop-types";
import {Avatar, Link} from "@mui/material";

const AvatarLink = ({name, nickname, avatar}) => {
    return <div className={'avatar-link-container'}>
        <Avatar alt={nickname} src={avatar} className={'avatar-icon'}/>
        <div className={'avatar-text'}>
            <Link href="#" underline={'hover'}>{name}</Link>
            <span className={'avatar-nickname'}>{nickname}</span>
        </div>
    </div>
}

AvatarLink.defaultProps = {
    name: "dave.xp",
    nickname: 'Dave XP',
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1637082000&x-signature=8iQRSKQWKaCtmkpDCoW487iD7hc%3D"
}

AvatarLink.propTypes = {
    name: propTypes.string,
    nickname: propTypes.string,
    avatar: propTypes.string
}

export default AvatarLink;

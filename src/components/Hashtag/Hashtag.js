import propTypes from "prop-types";
import {Link} from "@mui/material";

const Hashtag = ({name}) => {
    return <span><Link component="button" href="#" disabled underline={'hover'}>#{name}</Link> </span>
}

Hashtag.defaultProps = {
    name: ''
}

Hashtag.propTypes = {
    name: propTypes.string
}

export default Hashtag;

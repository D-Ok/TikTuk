import propTypes from "prop-types";
import {Link} from "@mui/material";

const Hashtag = ({name}) => {
    return <Link component="button" href="#" disabled >#{name}</Link>
}

Hashtag.defaultProps = {
    name: ''
}

Hashtag.propTypes = {
    name: propTypes.string
}

export default Hashtag;

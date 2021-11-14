import propTypes from "prop-types";
import {IconButton} from "@mui/material";
import Icon from '@mui/material/Icon';
import {numberToText} from "./utils";

const InfoIcon = ({icon, number, color}) => {

   const textNumber = numberToText(number)
    return (
        <IconButton
            color={color}
            aria-label="upload picture"
            component="span"
            className='info-icon-container'
        >
            <Icon>{icon}</Icon>
            <span className='info-icon-text'>{textNumber}</span>
        </IconButton>
    );
}

InfoIcon.defaultProps = {
    icon: 'favorite',
    number: 10000,
    color: 'error'
}

InfoIcon.propTypes = {
    icon: propTypes.string,
    number: propTypes.number,
    color: propTypes.oneOf(['inherit','default','primary','secondary', 'error', 'info',
    'success', 'warning'])
}

export default InfoIcon;
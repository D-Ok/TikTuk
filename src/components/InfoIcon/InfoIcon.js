import propTypes from "prop-types";
import {IconButton} from "@mui/material";
import Icon from '@mui/material/Icon';
import {numberToText} from "./utils";
import classnames from 'classnames';

const InfoIcon = ({className, icon, number, color, text, fontSize, iconSize}) => {

    const sxObj =  iconSize ? {fontSize: iconSize} : {}
   const textNumber = text || numberToText(number)
    return (
        <IconButton
            color={color}
            aria-label="upload picture"
            component="span"
            className={classnames(className, 'info-icon-container')}
        >
            <Icon fontSize={fontSize}  sx={sxObj}>{icon}</Icon>
            {textNumber && <span className='info-icon-text'>{textNumber}</span>}
        </IconButton>
    );
}

InfoIcon.defaultProps = {
    icon: 'favorite',
    color: 'error',
    fontSize: 'medium'
}

InfoIcon.propTypes = {
    icon: propTypes.string,
    number: propTypes.number,
    text: propTypes.string,
    color: propTypes.oneOf(['inherit','default','primary','secondary', 'error', 'info',
    'success', 'warning']),
    fontSize: propTypes.oneOf(['inherit', 'large', 'medium', 'small']),
    iconSize: propTypes.number,
    className: propTypes.string
}

export default InfoIcon;
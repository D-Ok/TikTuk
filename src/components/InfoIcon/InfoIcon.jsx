import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { IconButton, Icon } from '@mui/material'

import { numberToText } from './utils'

const InfoIcon = function ({
  disabled,
  className,
  icon,
  number,
  color,
  text,
  fontSize,
  iconSize,
}) {
  const sxObject = iconSize ? { fontSize: iconSize } : {}
  const textNumber = numberToText(number)
  return (
    <IconButton
      disableRipple={disabled}
      disableFocusRipple={disabled}
      color={color}
      aria-label="upload picture"
      component="span"
      className={classnames(className, 'info-icon-container')}
    >
      <Icon fontSize={fontSize} sx={sxObject}>
        {icon}
      </Icon>
      {text && (
      <span className="info-icon-text">
        {text}
        :
      </span>
      )}
      {textNumber && <span className="info-icon-text">{textNumber}</span>}
    </IconButton>
  )
}

InfoIcon.defaultProps = {
  icon: 'favorite',
  color: 'error',
  fontSize: 'medium',
  number: 0,
  text: '',
  iconSize: 0,
  className: '',
  disabled: false,
}

InfoIcon.propTypes = {
  icon: propTypes.string,
  number: propTypes.number,
  text: propTypes.string,
  color: propTypes.oneOf([
    'inherit',
    'default',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
  ]),
  fontSize: propTypes.oneOf(['inherit', 'large', 'medium', 'small']),
  iconSize: propTypes.number,
  className: propTypes.string,
  disabled: propTypes.bool,
}

export default InfoIcon

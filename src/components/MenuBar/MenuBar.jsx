import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
  Avatar, AppBar, Toolbar, Typography, IconButton,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { GLOBAL_CONSTANTS } from '../../constants'
import { options } from '../../requests'

const userInfoUrl = GLOBAL_CONSTANTS.API.URLS.USER_INFO

const MenuBar = function () {
  const navigate = useNavigate()
  const [userAvatar, setUserAvatar] = useState('')

  const defaultUser = GLOBAL_CONSTANTS.USER_ID
  useEffect(() => {
    axios
      .request(options(userInfoUrl + defaultUser))
      .then((response) => {
        setUserAvatar(response.data.user.avatarThumb)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate('/', { replace: true })}
        >
          TikTuk
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate(`/user/${defaultUser}`, { replace: true })}
            color="inherit"
          >
            {userAvatar ? (
              <Avatar alt={defaultUser} src={userAvatar} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar

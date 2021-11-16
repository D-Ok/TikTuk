import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import {GLOBAL_CONSTANTS} from "../../constants";
import {useEffect, useState} from "react";
import axios from "axios";
import {options} from "../../requests";
import {Avatar} from "@mui/material";

const userInfoUrl = GLOBAL_CONSTANTS.API.URLS.USER_INFO;

export default function MenuBar() {
    const navigate = useNavigate();
    const [userAvatar, setUserAvatar] = useState('')

    const defaultUser = GLOBAL_CONSTANTS.USER_ID;
    useEffect(()=> {
        axios.request(options(userInfoUrl + defaultUser)).then(function (response) {
             setUserAvatar(response.data.user.avatarThumb)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <AppBar position="fixed">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6" component="div" onClick={() => navigate('/', {replace: true})}>
                    TikTuk
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => navigate(`/user/${defaultUser}`, {replace: true})}
                        color="inherit"
                    >
                        {userAvatar
                            ? <Avatar alt={defaultUser} src={userAvatar}/>
                            : <AccountCircle/>
                        }
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

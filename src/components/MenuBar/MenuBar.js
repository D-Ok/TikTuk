import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import {GLOBAL_CONSTANTS} from "../../constants";

export default function MenuBar() {
    const navigate = useNavigate();

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
                        onClick={() => navigate(`/user/${GLOBAL_CONSTANTS.USER_ID}`, {replace: true})}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

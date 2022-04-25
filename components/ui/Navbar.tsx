import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant='h6'>Jira</Typography>
            </Toolbar>
        </AppBar>
    )
}

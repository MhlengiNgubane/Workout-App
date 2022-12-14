import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/ogo.png';

const Navbar = () => {
    return (
        <Stack>
            <Link to="/">
                <img src={logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
            </Link>
        </Stack>
    )
};

export default Navbar;
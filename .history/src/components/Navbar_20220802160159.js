import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '68px', height: '48px', margin: '0px 20px' }} />
        </Link>
        <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#3A2252', borderBottom: '3px solid #002300' }}>Home</Link>
            <Link to="exercises" style={{ textDecoration: 'none', color: '#3A2252', borderBottom: '3px solid #002300' }}>Exercises</Link>
        </Stack>
  </Stack>
);

export default Navbar;
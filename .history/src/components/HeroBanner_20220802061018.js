import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/wallpa.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#3A2252" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} color="#002300" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Greatness <br /> On A <br />
      Different Level
    </Typography>
    <Typography fontSize="22px"  color="white" opacity="o.1" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#3A2252', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
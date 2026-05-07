import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box component="section" className="as_banner_wrapper relative bg-cover bg-center overflow-hidden">
      <Container>
        <Grid container alignItems="center" className="as_verticle_center">
          <Grid item lg={6} md={12} sm={12} className="relative z-10 py-16">
            <div className="as_banner_slider">
                <div className="as_banner_detail pr-8">
                  <Typography variant="h5" className="text-orange-500 mb-2 font-bold uppercase tracking-widest">
                    Trust our experience
                  </Typography>
                  <Typography variant="h1" className="text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
                    Start control of your <br /> professional destiny
                  </Typography>
                  <Typography variant="body1" className="mb-8 text-gray-300 text-lg">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                  </Typography>
                  <Button variant="contained" color="warning" size="large" className="as_btn rounded-full px-8 py-3 text-lg font-bold">
                    Appointment
                  </Button>
                </div>
            </div>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Box className="as_banner_img text-center relative mt-10 lg:mt-0">
              <img src="/assets/images/hand_bg.png" alt="Background" className="img-responsive as_hand_bg absolute top-0 left-0 w-full h-auto z-0 opacity-50" />
              <img src="/assets/images/hand.png" alt="Hand" className="img-responsive as_hand relative z-10 mx-auto" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBanner;

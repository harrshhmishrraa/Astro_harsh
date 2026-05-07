import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { PlayCircleOutlined as PlayCircleOutlineIcon } from '@mui/icons-material';

const AboutSection = () => {
  return (
    <Box component="section" className="as_about_wrapper as_padderTop80 as_padderBottom80 bg-white py-20">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} className="text-center mb-12">
            <Typography variant="h2" className="as_heading text-4xl font-bold mb-4">About Astrology</Typography>
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="240" height="15" viewBox="0 0 240 15">
                  <path d="M120,7.5 L127.5,15 L112.5,15 Z" fill="#ff7e00"/>
                  <rect x="0" y="7" width="115" height="1" fill="#ff7e00"/>
                  <rect x="125" y="7" width="115" height="1" fill="#ff7e00"/>
              </svg>
            </div>
            <Typography variant="body1" className="as_font14 text-gray-500 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page <br/>when looking at its layout. The point of using Lorem Ipsum.
            </Typography>
          </Grid>
          
          <Grid item lg={6} md={6} xs={12}>
            <Box className="as_aboutimg relative rounded-xl overflow-hidden shadow-2xl">
              <img src="/assets/images/about.jpg" alt="About Astrology" className="w-full h-auto object-cover" />
              <span className="as_play absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer hover:bg-opacity-40 transition-all">
                <PlayCircleOutlineIcon sx={{ fontSize: 80, color: 'white' }} />
              </span>
            </Box>
          </Grid>
          
          <Grid item lg={6} md={6} xs={12}>
            <Box className="as_about_detail pl-0 lg:pl-10 mt-10 md:mt-0">
              <Typography variant="h3" className="as_heading text-3xl font-bold mb-6">What Do We Do ?</Typography>
              <div className="as_paragraph_wrapper mb-8 text-gray-600">
                <Typography variant="body1" className="mb-4">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                </Typography>
                <Typography variant="body2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </Typography>
              </div>

              <Box className="as_contact_expert flex items-center mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <span className="as_icon mr-6">
                   <img src="/assets/images/svg/about.svg" alt="Expert" className="w-16 h-16" />
                </span>
                <span className="as_year_ex text-5xl font-black text-orange-500 mr-4">
                    30
                </span>
                <div>
                    <Typography variant="h6" className="uppercase text-gray-500 tracking-wider text-sm font-semibold">years of</Typography>
                    <Typography variant="h4" className="font-bold text-gray-800">Experience</Typography>
                </div>
              </Box>
              <Button variant="outlined" color="warning" size="large" className="as_btn rounded-full px-8 py-3 uppercase tracking-wider font-bold">
                read more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

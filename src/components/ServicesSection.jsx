import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { ArrowRightAlt as ArrowRightAltIcon } from '@mui/icons-material';

const ServicesSection = () => {
  return (
    <Box component="section" className="as_service_wrapper bg-white py-20">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} className="text-center mb-12">
            <Typography variant="h2" className="as_heading text-4xl font-bold mb-4 uppercase">our services</Typography>
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="240" height="15" viewBox="0 0 240 15">
                  <path d="M120,7.5 L127.5,15 L112.5,15 Z" fill="#ff7e00"/>
                  <rect x="0" y="7" width="115" height="1" fill="#ff7e00"/>
                  <rect x="125" y="7" width="115" height="1" fill="#ff7e00"/>
              </svg>
            </div>
            <Typography variant="body1" className="text-gray-500 max-w-2xl mx-auto">
              Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br/>etesde dolore magna aliquapspendisse and the gravida.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6} alignItems="center">
          <Grid item lg={6} md={12} xs={12}>
            <Box className="as_service_img relative">
              <img src="/assets/images/service_img2.png" alt="Service Circle" className="as_service_circle absolute top-0 -left-10 w-full h-auto z-0 animate-spin-slow opacity-60" style={{ animationDuration: '20s' }} />
              <img src="/assets/images/service_img1.jpg" alt="Service Main" className="as_service_img relative z-10 w-3/4 mx-auto rounded-full border-8 border-white shadow-2xl" />
            </Box>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Grid container spacing={4}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item sm={6} xs={12} key={item}>
                  <Card className="as_service_box text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-orange-500">
                    <CardContent className="p-8">
                        <span className="as_icon inline-block mb-4 text-orange-500">
                           {/* Using a placeholder SVG here representing the intricate custom graphics */}
                           <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="currentColor">
                             <circle cx="35" cy="35" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                             <path d="M35 15 L35 55 M15 35 L55 35" stroke="currentColor" strokeWidth="2"/>
                           </svg>
                        </span>
                        <Typography variant="h5" className="as_subheading font-bold mb-3">Kundli Dosha</Typography>
                        <Typography variant="body2" className="text-gray-500 mb-4">Lorem ipsum dolor sit <br/>amet, consectetur</Typography>
                        <a href="#" className="as_link text-orange-500 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:text-gray-800 transition-colors">
                           read more <ArrowRightAltIcon fontSize="small"/>
                        </a>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;

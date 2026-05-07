import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19', icon: 'h1.svg' },
  { name: 'Taurus', date: 'Apr 20 - May 20', icon: 'h2.svg' },
  { name: 'Gemini', date: 'May 21 - Jun 20', icon: 'h3.svg' },
  { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: 'h4.svg' },
  { name: 'Leo', date: 'Jul 23 - Aug 22', icon: 'h5.svg' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: 'h6.svg' },
  { name: 'Libra', date: 'Sep 23 - Oct 22', icon: 'h7.svg' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: 'h8.svg' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: 'h9.svg' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: 'h10.svg' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: 'h11.svg' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: 'h12.svg' }
];

const HoroscopeForecasts = () => {
  return (
    <Box component="section" className="as_horoscope_wrapper bg-gray-50 py-20">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} className="text-center mb-12">
            <Typography variant="h2" className="as_heading text-4xl font-bold mb-4">Horoscope Forecasts</Typography>
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="240" height="15" viewBox="0 0 240 15">
                  <path d="M120,7.5 L127.5,15 L112.5,15 Z" fill="#ff7e00"/>
                  <rect x="0" y="7" width="115" height="1" fill="#ff7e00"/>
                  <rect x="125" y="7" width="115" height="1" fill="#ff7e00"/>
              </svg>
            </div>
            <Typography variant="body1" className="text-gray-500 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page <br/>when looking at its layout. The point of using Lorem Ipsum.
            </Typography>
          </Grid>
          
          {zodiacSigns.map((sign, idx) => (
             <Grid item lg={2} md={3} sm={4} xs={6} key={idx}>
                <Box className="as_sign_box text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer select-none border border-gray-100 hover:border-orange-100 group">
                    <a href="#" className="block decoration-transparent">
                        <span className="as_sign inline-block p-4 rounded-full bg-orange-50 mb-4 group-hover:bg-orange-500 transition-colors"> 
                          <img src={`/assets/images/svg/horoscope/${sign.icon}`} alt={sign.name} className="w-12 h-12 filter-orange group-hover:brightness-0 group-hover:invert" />
                        </span>
                        <div>
                            <Typography variant="h6" className="font-bold text-gray-800 mb-1">{sign.name}</Typography>
                            <Typography variant="caption" className="text-gray-500 block">{sign.date}</Typography>
                        </div>
                    </a>
                </Box>
             </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HoroscopeForecasts;

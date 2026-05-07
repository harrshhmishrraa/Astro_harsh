import React from 'react';
import { Box, Container, Grid, Typography, TextField, Checkbox, IconButton, Link } from '@mui/material';
import { Send as SendIcon, Room as RoomIcon, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" className="as_footer_wrapper bg-gray-900 text-gray-300 pt-20 pb-6 relative overflow-hidden">
      <Container>
        <Grid container spacing={6} className="pb-12 border-b border-gray-800">
          <Grid item lg={3} md={6} xs={12}>
            <Box className="as_footer_widget">
              <Box className="as_footer_logo mb-6">
                <a href="#"><img src="/assets/images/logo1.svg" alt="Footer Logo" className="brightness-0 invert" /></a>
              </Box>
              <Typography variant="body2" className="mb-6 text-gray-400">
                There are many variations of this passages of Lorem Ipsum.
              </Typography>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500"><RoomIcon fontSize="small"/></span>
                  <Typography variant="body2">NY 10018, California, USA</Typography>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500"><PhoneIcon fontSize="small"/></span>
                  <Typography variant="body2">+ (91) 1800-124-105</Typography>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500"><EmailIcon fontSize="small"/></span>
                  <Typography variant="body2">info@astrology.com</Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          
          <Grid item lg={3} md={6} xs={12}>
            <Typography variant="h5" className="text-white font-bold mb-6 mb-8 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-orange-500">
                Quick Links
            </Typography>
            <ul className="space-y-3">
                {['About Us', 'Blog', 'Astrologers', 'Appointment', 'Contact Us'].map(link => (
                    <li key={link}>
                        <Link href="#" underline="none" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
          </Grid>
          
          <Grid item lg={3} md={6} xs={12}>
            <Typography variant="h5" className="text-white font-bold mb-6 bg-gradient-to-r mb-8 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-orange-500">
                Horoscope Forecasts
            </Typography>
            <ul className="space-y-3">
                {['My Daily Horoscope', 'My Weekly Horoscope', 'My Monthly Horoscope', 'My Love Horoscope', 'My Career Horoscope'].map(link => (
                    <li key={link}>
                        <Link href="#" underline="none" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
          </Grid>

          <Grid item lg={3} md={6} xs={12}>
            <Typography variant="h5" className="text-white font-bold mb-6 mb-8 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-orange-500">
                Our Newsletter
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-6">
                Lorem ipsum dolor amet, consectetur adipiscing elit,sed eiusmod tempor.
            </Typography>
            <Box className="flex bg-white rounded-full overflow-hidden p-1 shadow-inner mb-4">
               <input type="text" placeholder="Email..." className="flex-1 border-none outline-none px-4 text-gray-800 bg-transparent text-sm font-medium" />
               <IconButton sx={{ bgcolor: '#ff7e00', color: 'white', '&:hover': { bgcolor: '#e67300'} }} className="w-10 h-10">
                   <SendIcon fontSize="small"/>
               </IconButton>
            </Box>
            <Box className="flex items-start gap-2 mt-4">
                <Checkbox size="small" sx={{ p: 0, color: '#6b7280', '&.Mui-checked': { color: '#ff7e00' } }} />
                <Typography variant="caption" className="text-gray-400 leading-tight block mt-1">
                    I agree that my submitted data is being collected and stored.
                </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box className="as_copyright_wrapper text-center pt-6">
          <Typography variant="body2" className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Astrology. All Rights Reserved. By <span className="text-orange-500">AI</span>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

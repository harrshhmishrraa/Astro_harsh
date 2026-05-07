import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <Box component="section" className="as_header_wrapper sticky top-0 w-full z-50 bg-white shadow-sm transition-all duration-300">
      <Box className="as_info_detail text-white" sx={{ py: 1, backgroundColor: '#222' }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                <li>
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="as_infobox" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="as_infoicon">
                        <img src="/assets/images/svg/phone.svg" alt="Phone" width="17" height="17" />
                      </span>
                      +1800 326 3264
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="as_infobox" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="as_infoicon">
                        <img src="/assets/images/svg/mail.svg" alt="Email" width="18" height="13" />
                      </span>
                      info@astrology.com
                    </div>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <Grid container alignItems="center" sx={{ py: 2 }}>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <div className="as_logo">
              <a href="#">
                <img src="/assets/images/logo.svg" alt="Logo" />
              </a>
            </div>
          </Grid>
          <Grid item lg={9} md={9} sm={8} xs={6}>
            <Box className="as_right_info" display="flex" justifyContent="flex-end" alignItems="center">
              <div className="as_menu_wrapper">
                <span className="as_toggle md:hidden">
                  <MenuIcon />
                </span>
                <div className="as_menu hidden md:block">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                    <li><a href="#" className="active" style={{ textDecoration: 'none', textTransform: 'uppercase', fontWeight: 'bold' }}>home</a></li>
                    <li><a href="#" style={{ textDecoration: 'none', textTransform: 'uppercase', fontWeight: 'bold' }}>about us</a></li>
                    <li><a href="#" style={{ textDecoration: 'none', textTransform: 'uppercase', fontWeight: 'bold' }}>contact</a></li>
                  </ul>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;

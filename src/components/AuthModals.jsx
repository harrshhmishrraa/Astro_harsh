import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, TextField, Checkbox, FormControlLabel, Button, IconButton, Tab, Tabs } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const AuthModals = ({ open, onClose }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: 3 } }}>
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tabs value={tabIndex} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" 
              sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff7e00' }, '& .Mui-selected': { color: '#ff7e00' } }}>
          <Tab label="Login" sx={{ fontWeight: 'bold' }} />
          <Tab label="Sign Up" sx={{ fontWeight: 'bold' }} />
        </Tabs>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 4 }}>
        {tabIndex === 0 && (
          <Box component="form" className="flex flex-col gap-4">
            <TextField fullWidth placeholder="Enter email" variant="outlined" size="small" />
            <TextField fullWidth placeholder="Enter password here" variant="outlined" size="small" type="password" />
            <Box className="flex justify-between items-center mt-2">
              <FormControlLabel control={<Checkbox size="small" sx={{ color: '#ff7e00', '&.Mui-checked': { color: '#ff7e00' } }}/>} label={<Typography variant="body2">Remember me</Typography>} />
              <Typography variant="body2" className="text-gray-500 cursor-pointer hover:underline hover:text-orange-500">Forgot password ?</Typography>
            </Box>
            <Button variant="contained" fullWidth size="large" sx={{ bgcolor: '#ff7e00', '&:hover': { bgcolor: '#e67300'} }} className="mt-4 rounded-full py-3 font-bold text-lg uppercase tracking-widest shadow-md">
              Login
            </Button>
            <Typography variant="body2" className="text-center mt-6 text-gray-500">
               Create An Account ? <span className="text-orange-500 font-bold cursor-pointer hover:underline" onClick={() => setTabIndex(1)}>SignUp</span>
            </Typography>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box component="form" className="flex flex-col gap-4">
            <TextField fullWidth placeholder="Enter name" variant="outlined" size="small" />
            <TextField fullWidth placeholder="Enter email" variant="outlined" size="small" type="email" />
            <TextField fullWidth placeholder="Enter password here" variant="outlined" size="small" type="password" />
            <TextField fullWidth placeholder="Enter mobile number" variant="outlined" size="small" type="tel" />
            <Button variant="contained" fullWidth size="large" sx={{ bgcolor: '#ff7e00', '&:hover': { bgcolor: '#e67300'} }} className="mt-4 rounded-full py-3 font-bold text-lg uppercase tracking-widest shadow-md">
              Sign Up
            </Button>
            <Typography variant="body2" className="text-center mt-6 text-gray-500">
               Have An Account ? <span className="text-orange-500 font-bold cursor-pointer hover:underline" onClick={() => setTabIndex(0)}>Login</span>
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModals;

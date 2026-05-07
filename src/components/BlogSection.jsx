import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { PersonOutlined as PersonOutlineIcon, ChatBubbleOutlined as ChatBubbleOutlineIcon } from '@mui/icons-material';

const BlogSection = () => {
  return (
    <Box component="section" className="as_blog_wrapper bg-gray-50 py-20">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} className="text-center mb-12">
            <Typography variant="h2" className="as_heading text-4xl font-bold mb-4">Latest Articles</Typography>
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
        </Grid>

        <Grid container spacing={4}>
          {[1, 2, 3].map((post) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={post}>
              <Card className="as_blog_box shadow-xl hover:shadow-2xl transition-shadow rounded-2xl overflow-hidden group">
                <Box className="relative overflow-hidden cursor-pointer">
                  <CardMedia
                    component="img"
                    height="240"
                    image="/assets/images/blog1.jpg"
                    alt="Blog Post"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <Box className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-sm text-sm font-bold uppercase tracking-widest shadow-md">
                    July 29, 2020
                  </Box>
                </Box>
                <CardContent className="p-6 bg-white">
                  <ul className="flex items-center gap-6 mb-4 text-gray-500 text-sm font-medium">
                    <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
                       <PersonOutlineIcon fontSize="small"/> By - Admin
                    </li>
                    <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
                       <ChatBubbleOutlineIcon fontSize="small"/> 0 comments
                    </li>
                  </ul>
                  <Typography variant="h5" className="font-bold text-xl mb-3 hover:text-orange-500 cursor-pointer transition-colors leading-snug">
                    Consectetur adipiscing elit sedeius mod tempor incididunt ut labore.
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 line-clamp-3">
                    Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde doloesire esdesdeges magna aliquapspendisse and the gravida.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box className="text-center mt-12 w-full">
            <Button variant="outlined" color="warning" size="large" className="rounded-full px-10 py-3 uppercase font-bold tracking-widest border-2">
                view more
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;

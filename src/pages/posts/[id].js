import {React} from 'react';
import { Grid, Typography, Box} from '@mui/material';

const Blog = () => {

  const blogData = {title: 'sample blog title', description: 'In ipsum aute adipisicing cillum nisi cillum. Dolore deserunt commodo labore reprehenderit et commodo dolore veniam do exercitation ut cillum proident fugiat. Nostrud adipisicing qui duis ullamco cillum dolore occaecat. Ea fugiat adipisicing dolore veniam. In aute aliqua duis voluptate culpa nostrud et amet in quis ullamco sit voluptate. Cupidatat proident ad laboris culpa consequat. Cupidatat fugiat non non sint culpa ipsum minim incididunt eiusmod.'}
  
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
    }}
  >
    <Grid
      item
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
        m: '10px',
      }}
    >
      <Grid>
        <Typography variant="body1" sx={{ padding: '5px' }}>
          Feb 26, 2023
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ paddingBottom: '15px' }}
        >
        {blogData.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: '90%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          owner
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: '0.5',
            ml: '30px',
            mr: '30px',
            paddingBottom: '30px',
            paddingTop: '30px',
          }}
        >
          {blogData.description}
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      sx={{
        padding: '30px',
        m: '10px',
      }}
    >
    </Grid>
  </Box>
  );
};

export default Blog;
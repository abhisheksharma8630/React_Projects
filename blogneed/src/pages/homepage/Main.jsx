import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Post from './Post';
import { Container } from '@mui/material';

function Main(props) {
  const { posts } = props;

  if(posts)return (
    <Grid item xs={8}>
        <div className='h-dvh overflow-y-scroll'>
          {posts.map((post) =>{
          return <Post key={post._id} post={post}/>
            } 
        )}
    </div>
    </Grid>
  );
}
export default Main;

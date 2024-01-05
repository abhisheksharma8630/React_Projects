import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Post(props) {
  const { post } = props;
  return (
    <Grid item md={12} sx={{margin:"1rem"}}>
      <CardActionArea component="a" href={`/${post._id}`}>
        <Card>
          <CardContent sx={{ flex: 1 , textAlign:'left'}}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.owner}
            </Typography>
            <div dangerouslySetInnerHTML={{__html:post.description.substring(0,200)+"..."}}></div>
            {/* <Typography variant="subtitle1" paragraph>
              {post.description.substring(0,200)+"..."}
            </Typography> */}
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

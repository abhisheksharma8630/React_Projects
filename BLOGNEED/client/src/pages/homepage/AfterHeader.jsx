import { Grid } from "@mui/material";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";


const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageLabel: 'Image Text',
    },
  ];
  
  const mainFeaturedPost = {
    title: 'Welcome to BlogNeed :) ',
    description:
      "Your Gateway to Insightful Content! Explore a diverse range of topics, from travel adventures to tech trends. Feed your curiosity and stay informed with our engaging blogs!",
    image: 'https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

const AfterHeader = () => {
    return ( 
        <div className="">
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Grid container spacing={4}>
                {featuredPosts.map((post)=>(
                    <FeaturedPost key={post.title} post={post}/>
                ))}
            </Grid>
        </div>
     );
}
 
export default AfterHeader;
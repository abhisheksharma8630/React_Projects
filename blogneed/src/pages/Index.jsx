import { Grid } from "@mui/material";
import Blog from "./homepage/Blog";
import FeaturedPost from "./homepage/FeaturedPost";
import MainFeaturedPost from "./homepage/MainFeaturedPost";
import axios from "axios";
import Main from "./homepage/Main";
import React from "react";
import Sidebar from "./homepage/Sidebar";

import AfterHeader from "./homepage/AfterHeader";
import PostSkeleton from "./homepage/PostSkeleton";


const Index = () => {
    const[posts,setPosts] = React.useState(null);
    let skel = [1,2,3,4,5]
    React.useEffect(()=>{
      axios.get("http://localhost:8080/index").then((response)=>{
        setPosts(response.data.allPosts);
      }).catch(err => {console.log(err)});
    },[]);
    return (<>
          <AfterHeader/>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {posts && <Main posts={posts} />}
            {!posts && <Grid item xs={8}>
              <div className='h-dvh overflow-y-scroll'>
                {skel.map((e)=><PostSkeleton/> )}
                </div>
              </Grid>}
            <Sidebar/>
          </Grid>
    </>
     );
}
 
export default Index;
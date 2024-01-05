import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material';
import Main from './homepage/Main';
import Sidebar from './homepage/Sidebar';
import axios from 'axios';
import Sorry from './homepage/Sorry';
import PostSkeleton from './homepage/PostSkeleton';

export default function SpecificCate() {
    let {cate} = useParams();
    let [posts,setPosts] = useState(null);
    let skel = [1,2,3,4];
    const handleCategory = (cate)=>{
        cate = cate.toLowerCase();
        axios.get(`http://localhost:8080/category/${cate}`).then((response)=>{
            setPosts(response.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        handleCategory(cate);
    })
  
 return (
    <>
        <Grid container spacing={4} sx={{ mt: 3 }}>
            {posts == null && <Grid item xs={8}>
                    <div className='h-dvh overflow-y-scroll'>
                    {skel.map((e)=><PostSkeleton key={e}/> )}
                    </div>
                </Grid>}
            {posts?.length == 0 ? 
            <Grid item xs={8}><Sorry message={"NO post found in this Category"}/></Grid> : <Main posts={posts} />}
            <Sidebar/>
        </Grid>
    
    </>
  )
}

import { useEffect,useState } from "react";
import Blog from "./homepage/Blog";
import { redirect, useParams } from 'react-router-dom';
import axios from "axios";
import { Button } from "@mui/material";
import Sidebar from "./homepage/Sidebar";
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import PostSkeleton from "./homepage/PostSkeleton";

const SinglePost = () => {
    let {id} = useParams();
    const [post,setPost] = useState(null);
    const [currUser,setCurrUser] = useState('');
    let navigate = useNavigate();

    useEffect(()=>{
        getPostData();
        getCurrUser();
    },[]);


    const handleDelete = async (id)=>{
       await axios.delete(`http://localhost:8080/${id}`,{data:{currUser},withCredentials:true}).then(()=>{
           alert("deletedd success");
           navigate('/');
        }).catch(err=>console.log(err));
    }
    const getPostData = ()=>{
        axios.get(`http://localhost:8080/${id}`).then((response)=>{
            setPost(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const getCurrUser = async ()=>{
        try {
            let response = await axios.get(`http://localhost:8080/login/success`,{withCredentials:true});
            let temp = response.data.user.emails[0].value;
            let idx = temp.indexOf('@');
            setCurrUser(temp.substring(0,idx));
        } catch (error) {
            console.log("postspecific user mil nhi paa rha hai",error);
        }
    }
    return (
        <>
          <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={8}>
                {!post && <div className='h-dvh overflow-y-scroll'>
                <PostSkeleton/>
                </div>}
                { post && 
                <div className="text-left p-6 border-blue-50 border-2 h-full rounded">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-4xl font-semibold">{post.title}</p>
                        {currUser === post.owner && <div className="flex">
                        <a href={`/${id}/edit`}><Button size="small">Edit</Button></a>
                        <Button size="small" onClick={()=>{handleDelete(id)}}>Delete</Button>
                        </div>
                        }
                    </div>
                    <div dangerouslySetInnerHTML={{__html:post.description}}></div>
                </div>
                }
                </Grid>
                <Sidebar/>
          </Grid> 
          </>
     );
}
 
export default SinglePost;
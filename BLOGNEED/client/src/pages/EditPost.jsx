import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Button } from "@mui/material";
import Sidebar from "./homepage/Sidebar";
import Grid from '@mui/material/Grid';
import {TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import PostSkeleton from "./homepage/PostSkeleton";



const EditPost = () => {
    let {id } = useParams();
    let [post,setPost] = useState({});
    let [currUser,setCurrUser] = useState('');
    const [value, setValue] = useState(post.description);
    let navigate = useNavigate();

    const handleInput = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const getPost = async ()=>{
        await axios.get(`http://localhost:8080/${id}`).then((response)=>{
            setPost(response.data);
            setValue(response.data.description);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getPost();
        getCurrUser();
    },[]);

    const getCurrUser = async ()=>{
        try {
          const response = await axios.get("http://localhost:8080/login/success",{withCredentials:true});
          let temp = response?.data.user.emails[0].value;
          let idx = temp.indexOf("@");
          setCurrUser(temp.substring(0,idx));
        } catch (error) {
          console.log(error);
          navigate('/');
          alert('You need to login first');
        }
    }

    const handleUpdate = async (id)=>{
        try {
            let response = await axios.put(`http://localhost:8080/${id}`,{post,currUser},{withCredentials:true});
            console.log(response);
            alert("post updated");
            navigate(`/${id}`);
        } catch (error) {
            console.log(error);
        }

    }
    const handleGetHtml = (value)=>{
        setValue(value);
        setPost({...post,description:value})
    }
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link'],
          ['clean'],
        ],
    }
    
    if(currUser === post.owner) return ( 
            <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={8}>
                {!post && <div className='h-dvh overflow-y-scroll'>
                <PostSkeleton/>
                </div>}
                {post && 
                <div className="text-left p-6 border-blue-50 border-2 h-full rounded flex flex-col gap-3">
                    <form action="" method="post" onSubmit={(e)=>{e.preventDefault(); 
                        handleUpdate(post._id)}}>
                        <div className="flex flex-col gap-3">
                        <TextField id="outlined-basic" name="title" label="Title" variant="outlined" onChange={handleInput} value={`${post.title}`} fullWidth required/>
                        <ReactQuill theme="snow" value={value} onChange={handleGetHtml} defaultValue={value} modules={modules} style={{height:'400px'}}/>
                        <div className="flex justify-end mt-10">
                            <Button variant="outlined" size="small" type="submit">Save</Button>
                        </div>
                        </div>
                    </form>
                </div>}

                </Grid>
                <Sidebar/>
          </Grid>
     )
     else return(<Error message={"You are not the Owner of this list"}/>)
}
 
export default EditPost;
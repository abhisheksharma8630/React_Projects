import { TextField, InputLabel, Select, MenuItem, FormControl, Button, Grid, Skeleton} from "@mui/material";
import Sidebar from "./homepage/Sidebar";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Error from "./Error";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Sorry from "./homepage/Sorry";

const NewPost = () => {
  const [user,setUser] = useState("");
  const [postForm,setPostForm] = useState({category:"none"});
  const [value, setValue] = useState('');
  let navigate = useNavigate();


  
  const getUser = async ()=>{
    try {
      const response = await axios.get("http://localhost:8080/login/success",{withCredentials:true});
      let temp = response?.data.user.emails[0].value;
      let idx = temp.indexOf("@");
      setUser(temp.substring(0,idx));
      setPostForm({...postForm,username:user});
    } catch (error) {
      alert('You should login first :',error);
    }
  }

  useEffect(()=>{
    getUser();
  },[user]);
    
  const handleInput = (e)=>{
    setPostForm({...postForm,[e.target.name]:e.target.value})
  }
    
  const handleSubmit = async()=>{
    try {
      await axios.post('http://localhost:8080/new',{postForm},{withCredentials:true}).then(()=>{
        alert('New post added');
        navigate('/');
      });
    } catch (error) {
      console.log("Errro",error);
    }
  }
  const handleGetHtml = (value)=>{
    setValue(value);
    setPostForm({...postForm,description:value})
  }

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={8}>
          {user && 
          <form
            action="http://localhost:8080/new"
            method="post"
            className="flex justify-center items-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-col w-full gap-3 ">
              <TextField
                id="outlined-basic"
                name="title"
                label="Title"
                variant="outlined"
                onChange={handleInput}
                required
              />
              <ReactQuill theme="snow" value={value} onChange={handleGetHtml}  style={{ height:'400px'}} />
              <FormControl sx={{ m: 0, maxWidth: 120, marginTop: 6 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  className="w-40 "
                  labelId="demo-simple-select-helper-label"
                  id="demo-select-small"
                  label="Category"
                  name="category"
                  onChange={handleInput}
                  value={postForm.category}
                  required
                >
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                  <MenuItem value="culture">Culture</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="politics">Politics</MenuItem>
                  <MenuItem value="opinion">Opinion</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="health">Health</MenuItem>
                  <MenuItem value="style">Style</MenuItem>
                  <MenuItem value="travel">Travel</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="outlined"
                className="w-20"
                size="medium"
              >
                Create
              </Button>
            </div>
          </form>}
          {!user &&<Sorry message={"You should login first"}/>}
        </Grid>
        <Sidebar />
      </Grid>
    </>
  );
  }
 
export default NewPost;
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Logged from './Logged';
import axios from 'axios';

function Header(props) {
  const { title} = props;
  const [user,setUser] = React.useState({});

  const handleSignup = ()=>{
    window.open("http://localhost:8080/google/callback","_self");
  }
  const handleLogout = ()=>{
    window.open("http://localhost:8080/logout","_self");
  }
  const getUser = async ()=>{
    try {
      const response = await axios.get("http://localhost:8080/login/success",{withCredentials:true});
      setUser(response.data.user);
    } catch (error) {
      console.log("error",error); 
    }
  }
  React.useEffect(()=>{
    getUser();
  },[]);

  return (
    <div className="flex items-center justify-between py-2 border-b-2 sticky top-0 z-10 bg-white">
        <div className="flex gap-4">
        <a href="/">
            <Button variant="text" size='small'>Home</Button>
        </a>
        {Object?.keys(user).length>0 && <a href="/new">
            <Button variant="text" size='small'>Create</Button>
        </a>}
        </div>
        <p className='text-2xl font-semibold absolute top-3 left-[550px]'>Blogneed</p>
        <div>
          {Object?.keys(user).length>0 ? 
          <div className='flex items-center gap-2'>
            <p className='text-lg p-1.5 '>{user?.displayName}</p>
            <img src={user?.photos[0].value} className='h-8 w-8 rounded-full' alt="userImg" />
            <Button size='small' onClick={handleLogout}>Logout</Button>
          </div>
            :<Button variant='outlined' size='small' onClick={handleSignup}>Login</Button>
          }
        </div>
    </div>
  );
}
export default Header;

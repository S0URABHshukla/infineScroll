import React from 'react'
import navbar from './Navbar.module.css'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { authLogoutAction } from '../../Redux/Auth/authAction';
function Navbar() {
  const dispatch=useDispatch();
  const handleLogout=()=>
  {      
      dispatch(authLogoutAction(false));
  }
  return (
    <div className={navbar.container}>
        <div className={navbar.navbar}>
            <span className={navbar.head} >List Of Users</span>
            <Button className={navbar.button}  onClick={handleLogout} sx={{ position:"absolute",right:"0",top:"0" }} variant="contained" endIcon={<LogoutIcon />}>
              Log Out
            </Button>
        </div>
    </div>
  )
}

export default Navbar
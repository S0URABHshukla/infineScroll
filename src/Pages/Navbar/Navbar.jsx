import React from 'react'
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
    <div style={{position:"relative"}}>
        <div style={{background:"orange",height:"37px"}}>
            <span style={{fontSize:"25px",fontWeight:"700"}}>List Of Users</span>
            <Button onClick={handleLogout} sx={{ position:"absolute",right:"0",top:"0" }} variant="contained" endIcon={<LogoutIcon />}>
              Log Out
            </Button>
        </div>
    </div>
  )
}

export default Navbar
import React, { useContext, useState } from 'react'
import login from './Login.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLoginAction } from '../../Redux/Auth/authAction';
import Notification from '../../components/Notification/Notification';
import { AuthContext } from '../../components/Auth/Auth';

function Login() {
  const { notify, setNotify } = useContext(AuthContext);
  // console.log(notify);
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [input,setInput]=useState(
    {
      email:"",
      password:""
    }
  )

  const dispatch=useDispatch();

  const handleInput=(e)=>
  {
    setInput({...input,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>
  {
    if(input.email==='foo' && input.password==='bar')
    {
      dispatch(authLoginAction(true));
      setNotify({
        isOpen: true,
        message: "Logged in Successfully.",
        type: "success",
        position: "top",
      });
      setTimeout(()=>
      {
        navigate('/home');
      },1201)
      
    }
    else{
      setNotify({
        isOpen: true,
        message: " Wrong Credential ",
        type: "error",
        position: "top",
      });
    }    
  }
  return (
    <div style={{backgroundColor:'ghostwhite',height:"100vh",display:"flex",justifyContent:"center",margin:"auto"}}>
      <div className={login.loginContainer}>
      <Notification notify={notify} setNotify={setNotify} />
        <Avatar sx={{ width: '4ch',margin:"auto",marginTop:"10px"}}>
          <LockIcon />
        </Avatar>
        <h2 className={login.login}>LOGIN</h2>
        <TextField
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '35ch' }}
            name="email"
            onChange={handleInput}            
          />
          <br />
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={handleInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                
              }
              label="Password"
            />            
            </FormControl>
            <Button onClick={handleSubmit} sx={{ width: '15ch',margin:"auto",marginTop:"15px" }} variant="contained" endIcon={<LoginIcon />}>
              Login
            </Button>

      </div>
    </div>
    
  )
}

export default Login
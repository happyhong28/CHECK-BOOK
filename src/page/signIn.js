import * as React from "react";
import "../common/reset.css";
import "./style/signIn.sass";
import SwitchPage from "../component/switchPage";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function SignIn({ page }) {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="signInForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="36"
          height="37"
          fill="none"
          viewBox="0 0 36 37"
        >
          <path fill="url(#pattern0)" d="M0 36.52h36v-36H0v36z"></path>
          <defs>
            <pattern
              id="pattern0"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.01563)" xlinkHref="#image0_47_69"></use>
            </pattern>
            <image
              id="image0_47_69"
              width="64"
              height="64"
              xlinkHref="data:image/png;base64,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"
            ></image>
          </defs>
        </svg>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="아이디" variant="standard" />
        </Box>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">비밀번호</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button className="imgBasicSignIn" variant="contained">이메일 로그인</Button>
        <Button className="imgKakaoSignIn"><img alt="login button" src="img/kakao_signin_medium_wide.png" /></Button>

      </div>
      
      <div className="signUpBox">
        <div>계정이 없으신가요?</div>
        <SwitchPage page={page}>
          <Button className="imgBasicSignUp" variant="contained">이메일 회원가입</Button>
        </SwitchPage>
        <Button className="imgKakaoSignUp"><img alt="login button" src="img/kakao_signup_medium_wide.png" /></Button>


      </div>

    </>
  );
}

export default SignIn;



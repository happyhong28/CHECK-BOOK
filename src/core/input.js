import React, { useState,useEffect,useRef } from 'react';
import "../common/reset.css";
import "../common/common.sass";

import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5"
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027"
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  width: 400px;
  height : 16px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.0;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 10px;
  padding: 12px 12px;
  margin-left: 6px;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }
`
);



const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    >
    </InputUnstyled>
  );
});

function Input(props) {
  console.log("Input is Ready!");

  return (
    <>
      <CustomInput
        aria-label="search input"
        placeholder="검색어를 입력해주세요."
      ></CustomInput>
    </>
  );
}


export default React.memo(Input);
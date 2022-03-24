import * as React from "react";
import "../common/reset.css";
import "../common/common.sass";
import "./style/gridList.sass";
import Card from "./card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="CPNT-gridList box">
      <div className="result">
        <span>가나다</span>님을 위한 <span>1권</span>의 책을 발견했습니다!
      </div>
      <Grid container columnSpacing={0} rowSpacing={8} className="container">
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
        <Grid className="grid" item xs={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}

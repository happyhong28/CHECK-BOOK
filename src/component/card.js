import React from "react";
import "../common/reset.css";
import "../common/common.sass";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import "./style/card.sass";


const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    alignItems: "center",
    width: "160px",
    height: "220px",
    // width: "200px",
    // height: "280px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "column"
    },
  },

  media: {
    width: "80%",
    height: "70%",
    top: "-20px",
    paddingBottom: "100%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "80%",
      marginTop: spacing(-2)
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  content: {
    padding: 8
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  },
  btnList: {
    // top: -240,
    // left: 102,
    // position: "relative"
  },
  button: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#00c48c",
    fontWeight: 400,
    fontSize: 13,
    color: "#FFFFFF",
    borderStyle: "none",
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.1)"
  }
}));


const handleClick = function(url){
  if(url != ""){
    window.open(url, '_blank');
  }
}


//gridList 로 부터 받아온 데이터
export const BlogCardDemo = React.memo(function BlogCard({data}) {
  const getStyles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();


  return (
      <>
      <Card className={`CPNT-card ${getStyles.root}`}>
        <CardMedia
          className={getStyles.media}
          image={data.thumbnail != "" ? data.thumbnail : "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http://search1.daumcdn.net/search/statics/common/img/noimg/4grid.png"}
        />
        <div className="desc">
          <div className="title">{data.title}</div>
          <div className="datetime">| {data.datetime.substr(0,4)}</div>
          <div className="authors">| {data.authors.length == 1 ? data.authors[0] : data.authors[0]+" 외"}</div>
          <div className="publisher">| {data.publisher}</div>
         </div>
        <div className="btnList">
          <button className={getStyles.button} onClick={()=>handleClick(data.url)}>상세</button>
          <button className={getStyles.button}>구매</button>
          <button className={getStyles.button}>대여</button>
          <button className={getStyles.button}>관심</button>
          <button className={getStyles.button}>읽음</button>
        </div>
      </Card>
      <a></a>
    </>
  );
});

export default BlogCardDemo;

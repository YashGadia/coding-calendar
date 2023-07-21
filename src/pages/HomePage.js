import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Carousel from '../components/Carousel';
import HomePageImage from '../images/Computer 2.jpg';

const useStyles = makeStyles ((theme) => ({
    container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
    },
    HomePageCarousel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    leftSide: {
        width: "50%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 12,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 120,
        marginLeft: 80,
    },
    headlineTop: {
      marginBottom: -29,
      fontFamily: "Rubik",
      fontWeight: "bold",
      fontSize: [55],
      [theme.breakpoints.down("md")]: {
        marginBottom: -20,
        fontSize: [37],
        display: "flex",
        justifyContent: "center",
      },
    },
    headlineBottom: {
      fontFamily: "Rubik",
      fontWeight: "bold",
      fontSize: [55],
      [theme.breakpoints.down("md")]: {
        fontSize: [37],
        display: "flex",
        justifyContent: "center",
      },
    },
    HomePagePara: {
      fontFamily: "Rubik",
      fontWeight: "normal",
      fontSize: [20],
      [theme.breakpoints.down("md")]: {
        fontSize: [15],
      },
    },
    homeImage: {
      [theme.breakpoints.down("md")]: {
        width: "55%",
        height: "55%",
      },
    },
    Btn: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    HomePageBtn: {
      backgroundColor: "#5129f2",
      color: "white",
      marginTop: 10,
      "&:hover": {
        backgroundColor: "#08c1c4",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: [13],
      },
    },
    rightSide: {
      [theme.breakpoints.down("md")]: {
        alignItems: "center",
        marginTop: 15,
        display: "flex",
        justifyContent: "center",
      },
    },
    carouselHeading: {
      fontFamily: "Rubik",
      fontWeight: "semi-bold",
      fontSize: 35,
      display: "flex",
      justifyContent: "center",
      textTransform: "uppercase",
      [theme.breakpoints.down("md")]: {
        fontSize: 25,
      },
    },
}))

const HomePage = () => {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <div>
            <div className={classes.headlineTop} style={{color: "#08c1c4",}}>
              PROGRAMMING
            </div>
            <div className={classes.headlineBottom}>
              AND CODING
            </div>
            <div className={classes.HomePagePara}>
              Coding Calendar is a website which helps competitive programmers to get latest information about upcoming contest in one place!
              Platforms supported are <b>Codeforces, CodeChef, Leetcode, Atcoder, Hackerrank, HackerEarth, TopCoder, CS Academy and Toph.</b><br />
              Go, find your contest down!
            </div>
            <div className={classes.Btn}>
              <Button variant='outlined' className={classes.HomePageBtn}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <img src={HomePageImage} alt='Computer Img' className={classes.homeImage} height={500} width={550} />
        </div>
      </div>
      <div>
        <div className={classes.carouselHeading}>
          Trending Contests
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default HomePage

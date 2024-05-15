import {
  Card,
  Container,
  Grid,
  Box,
  Badge,
  CardHeader,
  Avatar,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Switch,
  IconButton,
  Slider,
  Typography,
  Stack,
} from "@mui/material";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import style from "../style components/playarea.module.css";
import { styled, useTheme } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import * as React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import logo3 from "/resourses/logo3.png";

const label = { inputProps: { "aria-label": "Switch demo" } };

function valuetext(value) {
  return `${value}°C`;
}

function HomePage() {
  const theme = useTheme();
  const [paused, setPaused] = React.useState(false);
  const mainIconColor = theme.palette.mode === !"dark" ? "#fff" : "#000";
  return (
    <>
      <Container
        maxWidth="xl"
        Spacing={1}
        sx={{
          bgcolor: "black",
          height: "85vh",
          justifyContent: "space-around",
        }}
      >
        <Grid
          container
          spacing={1}
          style={{ height: "100%" }}
          bgcolor={"black"}
        >
          <Grid item xl={2} lg={2} md={2} xs={0} sm={2}>
            <Box
              style={{
                background: "#1D1D1D",
                height: "98%",
                width: "100%",
                margin: "1%",
              }}
            >
              <img
                src="../../public/resourses/logo3.png"
                alt="logo"
                style={{
                  height: "120px",
                  width: "120px",
                  marginTop: "-30px",
                  paddingLeft: "10px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} md={8} xs={12} sm={8}>
            <Box
              style={{ background: "#1D1D1D", height: "98%", width: "100%" }}
            >
              <Box
                style={{ background: "#1D1D1D", height: "10%", width: "100%" }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    marginRight: "2%",
                    paddingTop: "1%",
                    marginTop: "2px",
                    paddingRight: "5px",
                  }}
                  direction={"row"}
                  spacing={2}
                >
                  <Switch
                    className={style.buttonhover}
                    {...label}
                    defaultChecked
                  />
                  <Badge
                    className={style.buttonhover}
                    pcolor="secondary"
                    variant="dot"
                  >
                    <NotificationsNoneIcon sx={{ color: "white" }} />
                  </Badge>
                  <Avatar
                    className={style.buttonhover}
                    alt="Remy Sharp"
                    src="https://img.freepik.com/premium-vector/retro-wave-music-album-cover-template-with-african-american-girl-sunglasses-retro-futuristic_490886-321.jpg"
                  />
                </Stack>
              </Box>
              <Box
                spacing={1}
                style={{ background: "#1D1D1D", height: "90%", width: "100%" }}
              >
                <h6
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    left: "20px",
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  Bollywood Playlist
                </h6>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "auto",
                  }}
                >
                  <Grid item sm={3}>
                    <item>
                      <Card
                        className={style.musiccard}
                        sx={{ maxWidth: 180, bgcolor: "#1D1D1D" }}
                      >
                        <CardContent>
                          <CardMedia
                            style={{ height: "150px", borderRadius: "5px" }}
                            component="img"
                            image="https://i1.sndcdn.com/artworks-5m5KwEnQsyUXxPaD-juuvfQ-t500x500.jpg"
                            alt="Satranag"
                          ></CardMedia>

                          <FaCirclePlay
                            style={{ fontSize: "50px" }}
                            className={style.playb}
                          />
                          {/* <FaPlay
                          style={{ fontSize: "50px" }}
                          className={style.playb}
                        /> */}

                          <p
                            style={{
                              fontSize: "18px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Animal
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Ranbir Kapur,Arijit Singh
                          </p>
                        </CardContent>
                      </Card>
                    </item>
                  </Grid>
                  <Grid item sm={3}>
                    <item>
                      <Card
                        className={style.musiccard}
                        sx={{ maxWidth: 180, bgcolor: "#1D1D1D" }}
                      >
                        <CardContent>
                          <CardMedia
                            style={{ height: "150px", borderRadius: "5px" }}
                            component="img"
                            image="https://i1.sndcdn.com/artworks-5m5KwEnQsyUXxPaD-juuvfQ-t500x500.jpg"
                            alt="Satranag"
                          ></CardMedia>

                          <FaCirclePlay
                            style={{ fontSize: "50px" }}
                            className={style.playb}
                          />
                          {/* <FaPlay
                          style={{ fontSize: "50px" }}
                          className={style.playb}
                        /> */}

                          <p
                            style={{
                              fontSize: "18px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Animal
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Ranbir Kapur,Arijit Singh
                          </p>
                        </CardContent>
                      </Card>
                    </item>
                  </Grid>
                  <Grid item sm={3}>
                    <item>
                      <Card
                        className={style.musiccard}
                        sx={{ maxWidth: 180, bgcolor: "#1D1D1D" }}
                      >
                        <CardContent>
                          <CardMedia
                            style={{ height: "150px", borderRadius: "5px" }}
                            component="img"
                            image="https://i1.sndcdn.com/artworks-5m5KwEnQsyUXxPaD-juuvfQ-t500x500.jpg"
                            alt="Satranag"
                          ></CardMedia>

                          <FaCirclePlay
                            style={{ fontSize: "50px" }}
                            className={style.playb}
                          />
                          {/* <FaPlay
                          style={{ fontSize: "50px" }}
                          className={style.playb}
                        /> */}

                          <p
                            style={{
                              fontSize: "18px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Animal
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#ffffff",
                              position: "relative",
                              top: "-20px",
                            }}
                          >
                            Ranbir Kapur,Arijit Singh
                          </p>
                        </CardContent>
                      </Card>
                    </item>
                  </Grid>
                </Grid>
              </Box>
              <Grid item></Grid>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} xs={0} sm={2}>
            <Box
              style={{
                background: "#1D1D1D",
                height: "98%",
                width: "100%",
                marginTop: "2px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
      {/* This is the separate container for Bottom Grid */}
      <Container
        maxWidth="xl"
        style={{ height: "17vh", background: "#000000" }}
      >
        <Grid container spacing={1}>
          <Grid item xl={4} lg={4} md={4} xs={2}>
            <Card
              className={style.mycard}
              sx={{ height: 80, maxWidth: 400, bgcolor: "black" }}
            >
              <CardHeader
                className={style.buttonhover}
                sx={{ color: "white", bgcolor: "black" }}
                avatar={
                  <Avatar
                    style={{ height: "60px", width: "60px" }}
                    src="https://i1.sndcdn.com/artworks-5m5KwEnQsyUXxPaD-juuvfQ-t500x500.jpg"
                    variant="square"
                  />
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              ></CardHeader>
            </Card>
          </Grid>
          <Grid item xl={4} lg={4} md={4} xs={8}>
            <Card
              className={style.mycard}
              sx={{ height: 80, maxWidth: 400, bgcolor: "black" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: -1,
                  marginTop: "0px",
                }}
              >
                <IconButton
                  className={style.buttonhover}
                  aria-label="previous song"
                >
                  <FastRewindRounded fontSize="large" htmlColor="white" />
                </IconButton>
                <IconButton
                  className={style.buttonhover}
                  aria-label={paused ? "play" : "pause"}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: "3rem" }}
                      htmlColor="white"
                    />
                  ) : (
                    <PauseRounded sx={{ fontSize: "3rem" }} htmlColor="white" />
                  )}
                </IconButton>
                <IconButton
                  className={style.buttonhover}
                  aria-label="next song"
                >
                  <FastForwardRounded fontSize="large" htmlColor="white" />
                </IconButton>
              </Box>
              <Slider
                style={{
                  width: "80%",
                  justifyItems: "center",
                  marginLeft: "10%",
                  marginTop: "-12px",
                  height: "3px",
                }}
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                color="secondary"
              />
            </Card>
          </Grid>
          <Grid item xl={4} lg={4} md={4} xs={2}>
            <Card
              className={style.mycard}
              sx={{ height: 80, maxWidth: 400, bgcolor: "black" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                This is controles
              </Typography>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default HomePage;

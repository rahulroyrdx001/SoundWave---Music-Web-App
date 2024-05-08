import { useTypewriter, Cursor } from "react-simple-typewriter";
import style from "../style components/LandingPage.module.css";
import VideoPage from "../assets/Video.mp4";
import logo1 from "/resourses/logo1.png";

function LandingPage() {
  const [text] = useTypewriter({
    words: ["Welcome to Tuneify!", "Unlimited music", "Anytime Anywhere"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <>
      <div className={style.videoPage}>
        <video
          className={style.video}
          src={VideoPage}
          autoPlay
          loop
          muted
        ></video>
        <div className={style.mytext}>
          <h1
            style={{
              marginTop: "0px",
              margin: "0px",
              padding: "0px",
              paddingLeft: "100px",
              paddingTop: "100px",
              fontSize: "135px",
              width: "100px",
            }}
          >
            {" "}
            <span style={{ fontWeight: "bold", color: "white" }}>{text}</span>
            <span style={{ color: "#1DD962" }}>
              <Cursor cursorStyle="|"></Cursor>
            </span>
          </h1>
        </div>
        <img className={style.mylogo} src={logo1}></img>
      </div>
    </>
  );
}

export default LandingPage;

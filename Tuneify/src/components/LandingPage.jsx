import { useTypewriter, Cursor } from "react-simple-typewriter";
import style from "../style components/LandingPage.module.css";
import VideoPage from "../assets/Video.mp4";
function LandingPage() {
  const [text] = useTypewriter({
    words: ["Welcome to Tuneify !", "Unlimited music", "Anytime", "Anywhere"],
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
        <h1 style={{marginTop:"0px",  margin: "0px", padding: "50px", fontSize: "70px" }}>
          {" "}
          <span style={{ fontWeight: "bold", color: "#1DDA63" }}>{text}</span>
          <span style={{ color: "red" }}>
            <Cursor cursorStyle="|"></Cursor>
          </span>
        </h1>
      </div>
    </>
  );
}

export default LandingPage;

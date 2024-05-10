import { useTypewriter, Cursor } from "react-simple-typewriter";
import style from "../style components/LandingPage.module.css";
import VideoPage from "../assets/Video.mp4";
import logo1 from "/resourses/logo1.png";
import logo2 from "/resourses/logo2.png";

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
        <div className={style.mylogo}>
          <img className={style.mlogo} src={logo1}></img>
        </div>
      </div>
      <div className={style.login}>
        <div className={style.logoelement}>
          <img className={style.mlogo} src={logo2}></img>
          <h1
            style={{
              color: "white",
              display: "inline-block",
              paddingLeft: "30px",
              fontSize: "64px",
            }}
          >
            Unlimited{" "}
            <span style={{ color: "#1DD961", fontSize: "100px" }}>Music</span>
          </h1>
          <h1
            style={{
              color: "white",
              display: "inline-block",
              paddingLeft: "30px",
              fontSize: "45px",
            }}
          >
            Anytime, AnyWhere!
          </h1>
        </div>
        <div className={style.loginelement}>
          <video
            className={style.videoo}
            src={VideoPage}
            autoPlay
            loop
            muted
          ></video>
          <form className={style.myinput}>
            <span
              style={{
                fontSize: "34px",
                color: "white",
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <h5>Join Us for Free</h5>
            </span>
            <span style={{ color: "white", fontSize: "18px" }}>
              <p>One-stop solution, For all moods.</p>
            </span>

            <input
              style={{
                height: "40px",
                width: "300px",
                borderRadius: "25px",
                marginTop: "30%",
                fontSize: "18px",
              }}
              type="email"
              placeholder="Enter Email"
            ></input>
            <input
              style={{
                height: "40px",
                width: "300px",
                borderRadius: "25px",
                fontSize: "18px",
              }}
              type="password"
              placeholder="Password"
            ></input>
            <span style={{ display: "flex", flexDirection: "row " }}>
              <button
                style={{
                  height: "35px",
                  width: "80px",
                  borderRadius: "25px",
                  marginTop: "20px",
                  padding: "10px",
                  background: "#1DD961",
                }}
              >
                LogIn
              </button>
              <button
                style={{
                  height: "35px",
                  width: "80px",
                  borderRadius: "25px",
                  marginTop: "20px",
                  padding: "10px",
                  background: "#1DD961",
                }}
              >
                SignUp
              </button>
            </span>
          </form>
        </div>
        <div className={style.myfooter}>
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

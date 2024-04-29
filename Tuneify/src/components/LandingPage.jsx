import style from "../style components/LandingPage.module.css";
import VideoPage from "../assets/Video.mp4";
function LandingPage() {
  return (
    <div className={style.videoPage}>
      <video
        className={style.video}
        src={VideoPage}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default LandingPage;

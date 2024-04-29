import { useTypewriter, Cursor } from "react-simple-typewriter";
function LandingPage() {
  const [text] = useTypewriter({
    words: ["Welcome to Tuneify !", "Unlimited music", "Anytime", "Anywhere"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <>
      <div>
        <h1 style={{ margin: "50px", fontSize: "70px" }}>
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

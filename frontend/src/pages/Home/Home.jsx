import Footer from "../../components/Footer/Footer";
import resumeImg from "../../assets/images/Resume-pana.png";
import footballgoalImg from "../../assets/images/Football Goal-pana.png";
import OrthopedicImg from "../../assets/images/Orthopedic-pana.png";
import "./Home.css";
import { useState, useEffect } from "react";
import img1 from "../../assets/showcase/1.png";
import img2 from "../../assets/showcase/2.png";
import img3 from "../../assets/showcase/3.png";
import img4 from "../../assets/showcase/4.png";
import img5 from "../../assets/showcase/5.png";
import img6 from "../../assets/showcase/6.png";
import { useNavigate } from "react-router-dom";
import meow from "../../assets/icons/5.png";
import coachIcon from "../../assets/icons/3.png";
import doc from "../../assets/icons/6.png";
import ball from "../../assets/icons/4.png";
import bell from "../../assets/icons/1.png";
import bull from "../../assets/icons/3.png";
import med from "../../assets/icons/6.png";
import mud from "../../assets/icons/5.png";
import mad from "../../assets/icons/2.png";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showcaseImages = [img1, img2, img3, img4, img5, img6];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % showcaseImages.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    
      {/* ================= HERO SECTION ================= */}

<section
  style={{
    minHeight: "75vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1px 8% 30px",
    background: "#ffffff",
    gap: "70px",
    flexWrap: "wrap",
  }}
>
  {/* LEFT */}

  {/* LEFT */}

{/* ================= LEFT ================= */}

<div
  style={{
    flex: "0.9",
    maxWidth: "580px",
    minWidth: "420px",
  }}
>
  <h1
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "62px",
      fontWeight: "500",
      lineHeight: "1.05",
      letterSpacing: "-3px",
      color: "#111111",
      marginBottom: "36px",
    }}
  >
    The AI injury
    <br />
    predictor
    <br />
    made for
    <br />
    <span
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "62px",
    fontStyle: "italic",
    fontWeight: 100,
    color: "#00226b",
    letterSpacing: "-4px",
  }}
>
  football players
</span>
  </h1>

  <div
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "15px",
      fontWeight: "500",
      color: "#080000",
      lineHeight: "2",
      marginBottom: "50px",
    }}
  >
    ✓ Predict injury risk before it happens
    <br />
    ✓ Personalized prevention strategies
    <br />
    ✓ AI-powered performance insights
    <br />
    ✓ Stay match ready all season
  </div>

  <div
    style={{
      display: "flex",
      gap: "18px",
    }}
  >
    <button
     onClick={() => navigate("/assessment")}
      style={{
        background: "#000000",
        color: "#ffffff",
        border: "none",
        padding: "16px 36px",
        borderRadius: "12px",
        fontSize: "17px",
        fontWeight: "700",
        fontFamily: "'Manrope', sans-serif",
        cursor: "pointer",
        boxShadow: "0 15px 35px rgba(37,99,235,.22)",
        transition: "all .3s ease",
      }}
    >
      Start Assessment
    </button>

    <button
      style={{
        background: "#ffffff",
        color: "#00030b",
        border: "2px solid #010610",
        padding: "16px 36px",
        borderRadius: "12px",
        fontSize: "17px",
        fontWeight: "700",
        fontFamily: "'Manrope', sans-serif",
        cursor: "pointer",
        transition: "all .3s ease",
      }}
    >
      Learn More
    </button>
  </div>
</div>

  {/* RIGHT */}

  {/* RIGHT IMAGE */}

<div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "420px",
    position: "relative",
    height: "650px",
  }}
>
  <img
  src={showcaseImages[currentImage]}
  alt="Football Equipment"
  style={{
    width: "720px",
    height: "720px",
    objectFit: "contain",
    marginTop: "65px", // move image down
    animation: "fadeIn 0.3s ease",
    filter:"drop-shadow(0 45px 90px rgba(17,24,39,.22))",
    transition: "all .3s ease",
  }}
/>
</div>
</section>
      {/* ================= ABOUT SECTION ================= */}

<section
  style={{
    padding: "20px 8%",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    {/* Heading */}

    <h2
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "56px",
        fontWeight: "500",
        letterSpacing: "-2px",
        lineHeight: "1.05",
        color: "#111111",
        marginBottom: "26px",
      }}
    >
      About
      <br />
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "#000103",
          fontWeight: "400",
        }}
      >
        Flexora
      </span>
    </h2>

    {/* Description */}

    <p
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "18px",
        fontWeight: "500",
        color: "#555555",
        lineHeight: "1.9",
        maxWidth: "760px",
        marginBottom: "90px",
      }}
    >
      Flexora is an intelligent injury prediction platform
      designed for football players. Using AI-driven analysis of player
      history, workload, recovery habits, training intensity and medical
      indicators, it predicts potential injury risks before they become
      serious and provides personalized prevention strategies.
    </p>

    {/* Stats */}

    <div
      style={{
        display: "flex",
        gap: "70px",
        flexWrap: "wrap",
      }}
    >
      {/* 1 */}

{/* Card 1 */}

<div
  style={{
    flex: 1,
    minWidth: "250px",
    background: "#ffffff",
    border: "1px solid #ececec",
    borderRadius: "24px",
    padding: "40px 35px",
    boxShadow: "0 15px 35px rgba(15,23,42,.06)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 25px 60px rgba(0,34,107,.10)";
    e.currentTarget.style.borderColor = "#00226B";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 15px 35px rgba(15,23,42,.06)";
    e.currentTarget.style.borderColor = "#ececec";
  }}
>

  <h1
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "72px",
      fontWeight: "700",
      color: "#000000",
      margin: "0 0 18px 0",
      letterSpacing: "-3px",
      lineHeight: "1",
    }}
  >
    100+
  </h1>

  <div
    style={{
      width: "70px",
      height: "4px",
      background: "#000613",
      borderRadius: "20px",
      marginBottom: "22px",
    }}
  />

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "17px",
      color: "#555555",
      lineHeight: "1.8",
      margin: 0,
    }}
  >
    Injury assessments completed across amateur and professional football players.
  </p>

</div>

      {/* Card 2 */}

<div
  style={{
    flex: 1,
    minWidth: "250px",
    background: "#ffffff",
    border: "1px solid #ececec",
    borderRadius: "24px",
    padding: "40px 35px",
    boxShadow: "0 15px 35px rgba(15,23,42,.06)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 25px 60px rgba(0,34,107,.10)";
    e.currentTarget.style.borderColor = "#000000";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 15px 35px rgba(15,23,42,.06)";
    e.currentTarget.style.borderColor = "#ececec";
  }}
>

  <h1
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "72px",
      fontStyle: "italic",
      fontWeight: "400",
      color: "#000000",
      margin: "0 0 18px 0",
      lineHeight: "1",
    }}
  >
    AI
  </h1>

  <div
    style={{
      width: "70px",
      height: "4px",
      background: "#00226B",
      borderRadius: "20px",
      marginBottom: "22px",
    }}
  />

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "17px",
      color: "#555555",
      lineHeight: "1.8",
      margin: 0,
    }}
  >
    Intelligent prediction engine trained to identify personalized injury risks.
  </p>

</div>

      {/* Card 3 */}

<div
  style={{
    flex: 1,
    minWidth: "250px",
    background: "#ffffff",
    border: "1px solid #ececec",
    borderRadius: "24px",
    padding: "40px 35px",
    boxShadow: "0 15px 35px rgba(15,23,42,.06)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 25px 60px rgba(0,34,107,.10)";
    e.currentTarget.style.borderColor = "#00226B";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 15px 35px rgba(15,23,42,.06)";
    e.currentTarget.style.borderColor = "#ececec";
  }}
>

  <h1
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "72px",
      fontWeight: "700",
      color: "#111111",
      margin: "0 0 18px 0",
      lineHeight: "1",
    }}
  >
    24/7
  </h1>

  <div
    style={{
      width: "70px",
      height: "4px",
      background: "#00226B",
      borderRadius: "20px",
      marginBottom: "22px",
    }}
  />

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "17px",
      color: "#555555",
      lineHeight: "1.8",
      margin: 0,
    }}
  >
    Instant AI-powered analysis available whenever you complete an assessment.
  </p>

</div>
    </div>
  </div>
</section>
{/* ================= HOW IT WORKS ================= */}

<section
  style={{
    padding: "80px 8%",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "58px",
        fontWeight: "500",
        lineHeight: "1.05",
        letterSpacing: "-2px",
        color: "#111111",
        marginBottom: "22px",
      }}
    >
      How it
      <br />
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "#00226B",
          fontWeight: "400",
        }}
      >
        works
      </span>
    </h2>

    <p
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "18px",
        fontWeight: "500",
        color: "#666",
        lineHeight: "1.9",
        maxWidth: "700px",
        marginBottom: "70px",
      }}
    >
      Complete a short AI-powered assessment. FootballGuard analyzes
      your workload, recovery, medical history and lifestyle before
      generating a personalized injury risk report with prevention
      recommendations.
    </p>

    <div
  style={{
    display: "flex",
    gap: "28px",
    overflowX: "auto",
    paddingBottom: "12px",
    scrollBehavior: "smooth",
  }}
>

      {/* CARD 1 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    Enter Player Details
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Add your age, position, height, weight, and playing experience before
    starting the assessment.
  </p>

  <img
    src={ball}
    alt="Player Details"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>

      {/* CARD 2 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    Training Load
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Tell us about your weekly sessions, match frequency and overall training workload.
  </p>

  <img
    src={bell}
    alt="Training Load"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>

      {/* CARD 3 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    Recovery & Lifestyle
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Monitor your sleep quality, hydration, nutrition, and recovery habits to
    ensure peak performance and reduce injury risk.
  </p>

  <img
    src={bull}
    alt="Recovery & Lifestyle"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>
      {/* CARD 4 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    Medical History
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Record previous injuries, surgeries, and your current pain level to improve injury prediction accuracy.
  </p>

  <img
    src={med}
    alt="Medical History"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>
      {/* CARD 5 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    AI Prediction
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Our machine learning model analyzes your assessment and predicts your personalized football injury risk instantly.
  </p>

  <img
    src={mud}
    alt="AI Prediction"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>

      {/* CARD 6 */}

<div
  className="assessment-card"
  style={{
    minWidth: "360px",
    background: "#fff",
    border: "1px solid rgba(0,34,107,.08)",
    borderRadius: "30px",
    padding: "38px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(15,23,42,.08)",
    transition: "all .35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 28px 60px rgba(0,34,107,.15)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(15,23,42,.08)";
    e.currentTarget.style.border =
      "1px solid rgba(0,34,107,.08)";
  }}
>
  <h3
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "28px",
      fontWeight: "600",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    Get Recommendations
  </h3>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      color: "#666",
      marginBottom: "40px",
    }}
  >
    Receive a detailed injury report with personalized prevention strategies,
    recovery guidance, and AI-powered recommendations.
  </p>

  <img
    src={mad}
    alt="Recommendations"
    style={{
      width: "230px",
      objectFit: "contain",
      display: "block",
      margin: "40px auto 0",
      transition: "0.35s ease",
    }}
  />
</div>
    </div>
  </div>
</section>
{/* ================= WHO IS THIS FOR ================= */}

<section
  style={{
    padding: "130px 8%",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    {/* Heading */}

    <h2
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "56px",
        fontWeight: "500",
        letterSpacing: "-2px",
        color: "#111111",
        marginBottom: "18px",
      }}
    >
      Who is this for?
    </h2>

    <p
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "17px",
        fontWeight: "500",
        color: "#666",
        lineHeight: "1.9",
        maxWidth: "720px",
        marginBottom: "70px",
      }}
    >
      Flexora is designed for everyone involved in football,
      from players looking to stay injury-free to coaches and medical
      teams making smarter performance decisions.
    </p>

    <div
      style={{
        display: "flex",
        gap: "28px",
        flexWrap: "wrap",
      }}
    >

      {/* ================= CARD 1 ================= */}

      <div
        className="assessment-card"
        style={{
          flex: 1,
          minWidth: "320px",
          background: "#fbfbfb",
          border: "1px solid #ececec",
          borderRadius: "30px",
          padding: "42px",
          transition: ".35s",
        }}
      >
        <div
  style={{
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    overflow: "visible",
  }}
>
  <img
    src={meow}
    alt="Player"
    style={{
      width: "200px",   // change this to make the image bigger
      height: "200px",
      objectFit: "contain",
    }}
  />
</div>
        <h3
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "30px",
            fontWeight: "600",
            color: "#111",
            marginBottom: "24px",
          }}
        >
          Players
        </h3>

        <ul
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#555",
            lineHeight: "2.1",
            fontSize: "16px",
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          <li>AI injury risk prediction</li>
          <li>Personalized prevention plans</li>
          <li>Performance monitoring</li>
          <li>Recovery guidance</li>
        </ul>
      </div>

      {/* ================= CARD 2 ================= */}

      <div
        className="assessment-card"
        style={{
          flex: 1,
          minWidth: "320px",
          background: "#fbfbfb",
          border: "1px solid #ececec",
          borderRadius: "30px",
          padding: "42px",
          transition: ".35s",
        }}
      >
        <div
  style={{
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    overflow: "visible",
  }}
>
  <img
    src={coachIcon}
    alt="Coach"
    style={{
      width: "190px", // Increase or decrease as needed
      height: "190px",
      objectFit: "contain",
    }}
  />
</div>

        <h3
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "30px",
            fontWeight: "600",
            color: "#111",
            marginBottom: "24px",
          }}
        >
          Coaches
        </h3>

        <ul
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#555",
            lineHeight: "2.1",
            fontSize: "16px",
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          <li>Track squad fitness</li>
          <li>Reduce injury occurrence</li>
          <li>Training workload analysis</li>
          <li>Player availability insights</li>
        </ul>
      </div>

      {/* ================= CARD 3 ================= */}

      <div
        className="assessment-card"
        style={{
          flex: 1,
          minWidth: "320px",
          background: "#fbfbfb",
          border: "1px solid #ececec",
          borderRadius: "30px",
          padding: "42px",
          transition: ".35s",
        }}
      >
        <div
  style={{
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    overflow: "visible",
  }}
>
  <img
    src={doc}
    alt="Coach"
    style={{
      width: "200px", // Increase or decrease as needed
      height: "200px",
      objectFit: "contain",
    }}
  />
</div>

        <h3
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "30px",
            fontWeight: "600",
            color: "#111",
            marginBottom: "24px",
          }}
        >
          Medical Staff
        </h3>

        <ul
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#555",
            lineHeight: "2.1",
            fontSize: "16px",
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          <li>Identify high-risk players</li>
          <li>Support rehabilitation</li>
          <li>Monitor recovery progress</li>
          <li>Evidence-based decisions</li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/* ================= DISCLAIMER & CONTACT ================= */}

{/* ================= PREMIUM FOOTER ================= */}

<section
  style={{
    background: "#000000",
    color: "#ffffff",
    padding: "110px 8% 40px",
    marginTop: "100px",
  }}
>
  <div
    style={{
      maxWidth: "1350px",
      margin: "0 auto",
    }}
  >
    {/* TOP */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "90px",
        flexWrap: "wrap",
        marginBottom: "90px",
      }}
    >
      {/* LEFT */}

      <div style={{ flex: 1, minWidth: "420px" }}>
        <h2
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "62px",
            fontWeight: "500",
            lineHeight: "1",
            letterSpacing: "-3px",
            marginBottom: "25px",
            color: "#ffffff",
          }}
        >
          Play smarter.
          <br />
          Stay healthier.
        </h2>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "34px",
            color: "#ffffff",
            marginBottom: "35px",
          }}
        >
          Flexora
        </div>

        <h3
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            marginBottom: "18px",
            color: "#ffffff",
          }}
        >
          Disclaimer
        </h3>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#bfbfbf",
            fontSize: "16px",
            lineHeight: "1.9",
            maxWidth: "620px",
          }}
        >
          Flexora provides AI-assisted injury risk predictions
          for educational and performance-support purposes only. It is
          not intended to replace professional medical advice,
          diagnosis, or treatment. Always consult a qualified physician,
          physiotherapist, or sports medicine professional before making
          health-related decisions.
        </p>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#8f8f8f",
            fontSize: "15px",
            lineHeight: "1.9",
            marginTop: "25px",
            maxWidth: "620px",
          }}
        >
          Although our AI model evaluates multiple performance and
          injury indicators, no prediction system can guarantee complete
          accuracy. Users remain responsible for all training,
          rehabilitation and medical decisions.
        </p>
      </div>

      {/* RIGHT */}

      <div
        style={{
          display: "flex",
          gap: "90px",
          flexWrap: "wrap",
        }}
      >
        {/* PLATFORM */}

        <div>
          <h3
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              marginBottom: "22px",
              color: "#ffffff",
            }}
          >
            Platform
          </h3>

          {[
            "Home",
            "Assessment",
            "Dashboard",
            "Reports",
          ].map((item) => (
            <p
              key={item}
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "#bdbdbd",
                fontSize: "16px",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* CONTACT */}

        <div>
          <h3
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              marginBottom: "22px",
              color: "#ffffff",
            }}
          >
            Contact
          </h3>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: "#bdbdbd",
              marginBottom: "15px",
            }}
          >
            support@flexora
          </p>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: "#bdbdbd",
              marginBottom: "15px",
            }}
          >
            +91 9655937415
          </p>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: "#bdbdbd",
            }}
          >
            @manuroszonero
          </p>
        </div>

        {/* LEGAL */}

        <div>
          <h3
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              marginBottom: "22px",
              color: "#ffffff",
            }}
          >
            Legal
          </h3>

          {[
            "Privacy Policy",
            "Terms & Conditions",
            "Help Center",
          ].map((item) => (
            <p
              key={item}
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "#bdbdbd",
                fontSize: "16px",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>

    {/* BIG BRAND */}

    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,.08)",
        paddingTop: "55px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "130px",
          fontWeight: 500,
          letterSpacing: "-7px",
          color: "#ffffff",
          lineHeight: ".9",
          marginBottom: "15px",
        }}
      >
        FLEXORA{" "}
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          
        </span>
      </h1>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          color: "#7d7d7d",
          fontSize: "15px",
          marginTop: "30px",
        }}
      >
        © 2026 Flexora. All Rights Reserved.
      </p>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}

export default Home;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { ResultContext } from "../../context/ResultContext";

import mad from "../../assets/icons/12.png";

function Report() {
  const navigate = useNavigate();

  const { result } = useContext(ResultContext);

  const finalResult =
    result || JSON.parse(localStorage.getItem("footballguard_result"));

  const averagePlayer = 75;
  const highRiskPlayer = 42;

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "28px",
    padding: "32px",
    border: "1px solid #ececec",
    boxShadow: "0 18px 45px rgba(0,0,0,.05)",
  };

  if (!finalResult) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f3",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "34px",
            padding: "60px",
            boxShadow: "0 25px 70px rgba(0,0,0,.08)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              color: "#111",
              marginBottom: "18px",
            }}
          >
            No Report Found
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Complete your Assessment first to generate your
            professional report.
          </p>

          <button
            onClick={() => navigate("/assessment")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "16px 40px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  let yourScore = 0;

  if (finalResult.risk_level === "Low") yourScore = 91;
  else if (finalResult.risk_level === "Moderate") yourScore = 67;
  else yourScore = 42;

  const player = finalResult.assessment?.playerInfo || {};

  const now = new Date();

  const reportId =
    "FG-" +
    now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    "-" +
    Math.floor(1000 + Math.random() * 9000);

  const reportTime = now.toLocaleString();

  const getColor = (risk) => {
    if (risk === "High") return "#000000";
    if (risk === "Moderate") return "#0124d2";
    return "#667ffd";
  };

  const injuryPoints = [
    {
      x: 190,
      y: 729,
      color: getColor(finalResult.bodyPartRisk?.Knee),
    },
    {
      x: 118,
      y: 729,
      color: getColor(finalResult.bodyPartRisk?.Knee),
    },
    {
      x: 460,
      y: 600,
      color: getColor(finalResult.bodyPartRisk?.Hamstring),
    },
    {
      x: 550,
      y: 600,
      color: getColor(finalResult.bodyPartRisk?.Hamstring),
    },
    {
      x: 195,
      y: 950,
      color: getColor(finalResult.bodyPartRisk?.Ankle),
    },
    {
      x: 110,
      y: 950,
      color: getColor(finalResult.bodyPartRisk?.Ankle),
    },
  ];

  const downloadPDF = async () => {
    const input = document.getElementById("report-content");
    const noPrint = document.getElementById("no-print");

    if (noPrint) noPrint.style.display = "none";

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    if (noPrint) noPrint.style.display = "flex";

    pdf.save(`FootballGuard_Report_${reportId}.pdf`);
  };

  return (
  <div
    id="report-content"
    style={{
      minHeight: "100vh",
      background: "#f5f5f3",
      padding: "30px 0 60px",
      fontFamily: '"Manrope", sans-serif',
      color: "#111111",
    }}
  >
    <div
      style={{
        width: "92%",
        maxWidth: "1450px",
        margin: "0 auto",
      }}
    >
        {/* HERO */}

        <section
  style={{
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: "20px",
    alignItems: "center",
    marginBottom: "1px",
    fontFamily: "Manrope, sans-serif",
  }}
>
  <div>
    <p
      style={{
        color: "#000000",
        fontWeight: "800",
        fontSize: "13px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "1px",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      Flexora
    </p>

    <h1
      style={{
        fontSize: "74px",
        lineHeight: "0.94",
        fontWeight: "700",
        letterSpacing: "-3px",
        color: "#111111",
        marginBottom: "3px",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      Injury
      <br />
      Assessment
      <br />
      Report
    </h1>

    <p
      style={{
        width: "100%",
        color: "#666666",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "1.8",
        maxWidth: "620px",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      Your complete Flexora injury analysis, AI predictions,
      personalized recommendations, and professional football report.
    </p>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={mad}
      alt="Flexora"
      style={{
        width: "90%",
        maxWidth: "420px",
        filter: "drop-shadow(0 30px 60px rgba(15,23,42,.18))",
      }}
    />
  </div>
</section>

        {/* ================= PLAYER PROFILE ================= */}

<section
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "55px",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    border: "1px solid #ececec",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Player Information
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "600",
      color: "#111111",
      marginBottom: "38px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Player Profile
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
      gap: "24px",
    }}
  >
    {[
      ["Full Name", player.fullName || "-"],
      ["Age", player.age],
      ["Gender", player.gender],
      ["Playing Position", player.position],
      ["Height", `${player.height} cm`],
      ["Weight", `${player.weight} kg`],
      ["Competition Level", player.competitionLevel],
    ].map(([title, value]) => (
      <div
        key={title}
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "26px",
          border: "1px solid #ececec",
          boxShadow: "0 10px 25px rgba(15,23,42,.04)",
        }}
      >
        <p
          style={{
            color: "#666666",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "10px",
            fontFamily: '"Manrope", sans-serif',
          }}
        >
          {title}
        </p>

        <h3
          style={{
            fontSize: "24px",
            color: "#111111",
            fontWeight: "400",
            margin: 0,
            fontFamily: '"Manrope", sans-serif',
          }}
        >
          {value}
        </h3>
      </div>
    ))}
  </div>
</section>

{/* ================= REPORT INFO ================= */}

<section
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    marginBottom: "55px",
  }}
>
  <div
    style={{
      background: "#000000",
      color: "#fff",
      borderRadius: "30px",
      padding: "35px",
    }}
  >
    <p
      style={{
        opacity: ".8",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "13px",
      }}
    >
      Report ID
    </p>

    <h2
      style={{
        fontSize: "34px",
        marginTop: "10px",
      }}
    >
      {reportId}
    </h2>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "30px",
      padding: "35px",
      border: "1px solid rgba(36,85,63,.08)",
    }}
  >
    <p
      style={{
        color: "#000000",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "13px",
      }}
    >
      Generated On
    </p>

    <h2
      style={{
        fontSize: "30px",
        marginTop: "10px",
        color: "#111",
      }}
    >
      {reportTime}
    </h2>
  </div>
</section>

{/* ================= ASSESSMENT SUMMARY ================= */}

<section
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "55px",
    border: "1px solid #ececec",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Assessment Result
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      color: "#000000",
      marginBottom: "40px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Assessment Summary
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "24px",
    }}
  >
    {/* Risk */}

    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "35px",
        border: "1px solid #ececec",
        boxShadow: "0 10px 25px rgba(15,23,42,.04)",
      }}
    >
      <p
        style={{
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontWeight: "700",
          fontSize: "13px",
          marginBottom: "10px",
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        Injury Risk
      </p>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "50px",
          fontWeight: "700",
          fontFamily: '"Manrope", sans-serif',
          color:
            finalResult.risk_level === "High"
              ? "#000000"
              : finalResult.risk_level === "Moderate"
              ? "#000000"
              : "#000000",
        }}
      >
        {finalResult.risk_level}
      </h1>
    </div>

    {/* Confidence */}

    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "35px",
        border: "1px solid #ececec",
        boxShadow: "0 10px 25px rgba(15,23,42,.04)",
      }}
    >
      <p
        style={{
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontWeight: "700",
          fontSize: "13px",
          marginBottom: "10px",
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        Confidence
      </p>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "50px",
          fontWeight: "700",
          color: "#111111",
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        {finalResult.confidence}%
      </h1>
    </div>

    {/* Match */}

    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "35px",
        border: "1px solid #ececec",
        boxShadow: "0 10px 25px rgba(15,23,42,.04)",
      }}
    >
      <p
        style={{
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontWeight: "700",
          fontSize: "13px",
          marginBottom: "10px",
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        Match Availability
      </p>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "38px",
          fontWeight: "700",
          fontFamily: '"Manrope", sans-serif',
          color:
            finalResult.risk_level === "High"
              ? "#000000"
              : finalResult.risk_level === "Moderate"
              ? "#000000"
              : "#000000",
        }}
      >
        {finalResult.risk_level === "Low"
          ? "Available"
          : finalResult.risk_level === "Moderate"
          ? "Monitor"
          : "Rest"}
      </h1>
    </div>
  </div>
</section>
{/* ================= PREDICTION ANALYTICS ================= */}

<section
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "55px",
    border: "1px solid #ececec",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Machine Learning Output
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      color: "#111111",
      marginBottom: "45px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Prediction Analytics
  </h2>

  {Object.entries(finalResult.probabilities).map(([key, value]) => (
    <div
      key={key}
      style={{
        marginBottom: "35px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#111111",
            fontFamily: '"Manrope", sans-serif',
          }}
        >
          {key} Risk
        </span>

        <span
          style={{
            fontWeight: "700",
            fontSize: "20px",
            fontFamily: '"Manrope", sans-serif',
            color:
              key === "High"
                ? "#060607"
                : key === "Moderate"
                ? "#000000"
                : "#000000",
          }}
        >
          {value}%
        </span>
      </div>

      <div
        style={{
          height: "18px",
          borderRadius: "999px",
          background: "#edf1ef",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            transition: "width .7s ease",

            background:
              key === "High"
                ? "linear-gradient(90deg,#001165,#001165)"
                : key === "Moderate"
                ? "linear-gradient(90deg,#0021c5,#0021c5)"
                : "linear-gradient(90deg,#7bc8ff,#7bc8ff)",
          }}
        />
      </div>
    </div>
  ))}
</section>
{/* ================= BODY PART ANALYSIS ================= */}

<section
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "55px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Injury Mapping
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      color: "#111111",
      marginBottom: "45px",
      fontFamily: '"Manrope", sans-serif',
    }}
  >
    Body Part Risk Analysis
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    }}
  >
    {Object.entries(finalResult.bodyPartRisk).map(([part, risk]) => (
      <div
        key={part}
        style={{
          background: "#F8F8F8",
          borderRadius: "24px",
          padding: "28px",
          border: "1px solid #ECECEC",
          boxShadow: "0 10px 25px rgba(15,23,42,.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              color: "#111111",
              fontWeight: "700",
              fontFamily: '"Manrope", sans-serif',
            }}
          >
            {part}
          </h3>

          <span
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              fontWeight: "700",
              fontSize: "14px",
              fontFamily: '"Manrope", sans-serif',

              background:
                risk === "High"
                  ? "#000000"
                  : risk === "Moderate"
                  ? "#000000"
                  : "#010202",

              color: "#ffffff",
            }}
          >
            {risk}
          </span>
        </div>

        <div
          style={{
            height: "12px",
            background: "#EDF1EF",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width:
                risk === "High"
                  ? "100%"
                  : risk === "Moderate"
                  ? "65%"
                  : "30%",

              height: "100%",

              borderRadius: "999px",

              background:
                risk === "High"
                  ? "#000000"
                  : risk === "Moderate"
                  ? "#000000"
                  : "#000000",
            }}
          />
        </div>
      </div>
    ))}
  </div>
</section>
{/* ================= PLAYER SCORE COMPARISON ================= */}

<section
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "55px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
    }}
  >
    Comparison
  </p>

  <h2
    style={{
      fontSize: "44px",
      color: "#111111",
      marginBottom: "45px",
      fontWeight: "800",
    }}
  >
    Injury Score Comparison
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "25px",
    }}
  >
    {[
      {
        title: "You",
        value: yourScore,
        bg: "#000000",
        color: "#ffffff",
      },

      {
        title: "Average Player",
        value: averagePlayer,
        bg: "#F8F8F8",
        color: "#111111",
      },

      {
        title: "High Risk",
        value: highRiskPlayer,
        bg: "#F8F8F8",
        color: "#111111",
      },
    ].map((item) => (
      <div
        key={item.title}
        style={{
          background: item.bg,
          color: item.color,
          borderRadius: "26px",
          padding: "35px",
          textAlign: "center",
          border:
            item.title === "You"
              ? "none"
              : "1px solid #ECECEC",
          boxShadow:
            item.title === "You"
              ? "0 15px 35px rgba(0,17,101,.20)"
              : "0 8px 20px rgba(15,23,42,.04)",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          {item.title}
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            margin: 0,
          }}
        >
          {item.value}
        </h1>
      </div>
    ))}
  </div>

  <div
    style={{
      marginTop: "45px",
      background: "#F8F8F8",
      borderRadius: "24px",
      padding: "32px",
      textAlign: "center",
      border: "1px solid #ECECEC",
    }}
  >
    <h2
      style={{
        color: "#111111",
        fontSize: "30px",
        fontWeight: "700",
        lineHeight: "1.5",
        margin: 0,
      }}
    >
      {yourScore > averagePlayer
        ? `You are ${yourScore - averagePlayer} points safer than the average football player`
        : `You are ${averagePlayer - yourScore} points riskier than the average football player`}
    </h2>
  </div>
</section>
{/* ================= AI INTERPRETATION ================= */}

<div
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "65px",
    marginBottom: "45px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
    }}
  >
    AI Intelligence
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      color: "#111111",
      marginBottom: "32px",
    }}
  >
    AI Interpretation
  </h2>

  <div
    style={{
      background: "#F8F8F8",
      padding: "35px",
      borderRadius: "22px",

      borderLeft: `7px solid ${
        finalResult.risk_level === "High"
          ? "#000000"
          : finalResult.risk_level === "Moderate"
          ? "#000000"
          : "#000000"
      }`,

      lineHeight: "2",
      fontSize: "18px",
      color: "#555555",
      border: "1px solid #ECECEC",
    }}
  >
    {finalResult.risk_level === "High" && (
      <>
        <p style={{ marginBottom: "18px" }}>
          Your assessment indicates a{" "}
          <strong style={{ color: "#000000" }}>
            high probability of football-related injury.
          </strong>
        </p>

        <p style={{ marginBottom: "18px" }}>
          The AI model detected several contributing factors including recovery
          quality, workload and injury history.
        </p>

        <p>
          Reducing training intensity temporarily together with guided
          rehabilitation is strongly advised.
        </p>
      </>
    )}

    {finalResult.risk_level === "Moderate" && (
      <>
        <p style={{ marginBottom: "18px" }}>
          Your injury probability is currently{" "}
          <strong style={{ color: "#000000" }}>
            moderate.
          </strong>
        </p>

        <p style={{ marginBottom: "18px" }}>
          Although no immediate danger exists, your recovery habits and training
          load should be monitored closely.
        </p>

        <p>
          Small improvements in sleep, hydration and workload management could
          significantly reduce future injury risk.
        </p>
      </>
    )}

    {finalResult.risk_level === "Low" && (
      <>
        <p style={{ marginBottom: "18px" }}>
          Excellent news.
        </p>

        <p style={{ marginBottom: "18px" }}>
          Your current injury profile is considered{" "}
          <strong style={{ color: "#000000" }}>
            low risk
          </strong>{" "}
          according to Flexora.
        </p>

        <p>
          Continue maintaining healthy recovery, hydration and strength training
          routines to preserve this condition.
        </p>
      </>
    )}
  </div>
</div>

{/* ================= PREVENTION PLAN ================= */}

<div
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "65px",
    marginBottom: "45px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
    }}
  >
    Prevention Strategy
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      marginBottom: "38px",
      color: "#111111",
    }}
  >
    Personalized Prevention Plan
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    }}
  >
    <div
      style={{
        background: "#F8F8F8",
        padding: "32px",
        borderRadius: "22px",
        border: "1px solid #ECECEC",
      }}
    >
      <h3
        style={{
          marginBottom: "18px",
          fontWeight: "700",
          fontSize: "26px",
          color: "#000000",
        }}
      >
        Recovery
      </h3>

      <p
        style={{
          lineHeight: "1.9",
          color: "#555555",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Drink adequate water throughout the day and prioritize 7–9 hours of
        quality sleep.
      </p>
    </div>

    <div
      style={{
        background: "#F8F8F8",
        padding: "32px",
        borderRadius: "22px",
        border: "1px solid #ECECEC",
      }}
    >
      <h3
        style={{
          marginBottom: "18px",
          fontWeight: "700",
          fontSize: "26px",
          color: "#000000",
        }}
      >
        Strength
      </h3>

      <p
        style={{
          lineHeight: "1.9",
          color: "#555555",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Improve lower body strength through hamstring, glute and core stability
        exercises.
      </p>
    </div>

    <div
      style={{
        background: "#F8F8F8",
        padding: "32px",
        borderRadius: "22px",
        border: "1px solid #ECECEC",
      }}
    >
      <h3
        style={{
          marginBottom: "18px",
          fontWeight: "700",
          fontSize: "26px",
          color: "#000000",
        }}
      >
        Match Load
      </h3>

      <p
        style={{
          lineHeight: "1.9",
          color: "#555555",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Gradually increase training intensity while allowing proper recovery
        between sessions.
      </p>
    </div>
  </div>
</div>

{/* ================= AI RECOMMENDATIONS ================= */}

<div
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "65px",
    marginBottom: "45px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
    }}
  >
    Smart Suggestions
  </p>

  <h2
    style={{
      fontSize: "44px",
      fontWeight: "800",
      marginBottom: "38px",
      color: "#111111",
    }}
  >
    AI Recommendations
  </h2>

  <div
    style={{
      display: "grid",
      gap: "20px",
    }}
  >
    {finalResult.recommendations.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          background: "#F8F8F8",
          padding: "24px 30px",
          borderRadius: "22px",
          border: "1px solid #ECECEC",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#000000",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
            fontSize: "16px",
            flexShrink: 0,
          }}
        >
          {index + 1}
        </div>

        <p
          style={{
            margin: 0,
            fontSize: "17px",
            fontWeight: "500",
            lineHeight: "1.9",
            color: "#555555",
          }}
        >
          {item}
        </p>
      </div>
    ))}
  </div>
</div>
{/* ================= DOWNLOAD BUTTON ================= */}

<div
  id="no-print"
  data-html2canvas-ignore="true"
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
    marginBottom: "60px",
  }}
>
  <button
    onClick={downloadPDF}
    style={{
      background: "black",
      color: "#fff",
      border: "none",
      padding: "20px 48px",
      borderRadius: "999px",
      cursor: "pointer",
      fontWeight: "850",
      fontSize: "18px",
      letterSpacing: ".5px",
      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.3)",
      transition: ".35s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "translateY(-3px)";
      e.target.style.boxShadow =
        "0 22px 45px rgba(0, 0, 0, 0.38)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "translateY(0px)";
      e.target.style.boxShadow =
        "0 18px 40px rgba(36,85,63,.30)";
    }}
  >
     Download Report
  </button>
</div>

{/* ================= REPORT INFO ================= */}

<div
  style={{
    background: "#ffffff",
    borderRadius: "34px",
    padding: "55px",
    marginBottom: "45px",
    border: "1px solid #ECECEC",
    boxShadow: "0 20px 60px rgba(15,23,42,.06)",
    fontFamily: '"Manrope", sans-serif',
  }}
>
  <p
    style={{
      color: "#000000",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "12px",
    }}
  >
    Report Details
  </p>

  <h2
    style={{
      fontSize: "44px",
      color: "#111111",
      marginBottom: "40px",
      fontWeight: "800",
    }}
  >
    Report Information
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "24px",
    }}
  >
    {[
      ["Report ID", reportId],
      ["Generated On", reportTime],
      ["Prediction Engine", "FootballGuard AI v2.0"],
      ["ML Model", "RFC"],
    ].map(([title, value]) => (
      <div
        key={title}
        style={{
          background: "#F8F8F8",
          borderRadius: "22px",
          padding: "24px",
          border: "1px solid #ECECEC",
          
        }}
      >
        <p
          style={{
            color: "#666666",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {title}
        </p>

        <h3
          style={{
            fontSize: "23px",
            color: "#000000",
            fontWeight: "700",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          {value}
        </h3>
      </div>
    ))}
  </div>
</div>

{/* ================= FOOTER ================= */}

<div
  style={{
    background: "#000000",
    color: "#fff",
    padding: "70px 60px",
    borderRadius: "34px",
    marginBottom: "40px",
    fontFamily: "Manrope, sans-serif",
  }}
>
  <h1
    style={{
      fontSize: "50px",
      marginBottom: "18px",
      fontWeight: "500",
      letterSpacing: "-2px",
      fontFamily: "Manrope, sans-serif",
    }}
  >
    Flexora
  </h1>

  <p
    style={{
      color: "#DCE8FF",
      lineHeight: "2",
      fontSize: "17px",
      maxWidth: "900px",
      fontWeight: "400",
      fontFamily: "Manrope, sans-serif",
    }}
  >
    Flexora combines Artificial Intelligence,
    Sports Science and Machine Learning to assist football
    players, physiotherapists and coaches in identifying
    potential injury risks before they become serious.

    <br />
    <br />

    This report is intended for educational and preventive
    purposes only and should not replace professional
    medical evaluation or diagnosis.
  </p>

  <hr
    style={{
      border: "none",
      borderTop: "1px solid rgba(255,255,255,.15)",
      margin: "45px 0",
    }}
  />

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      alignItems: "center",
    }}
  >
    <div>
      <p
        style={{
          color: "#DCE8FF",
          margin: 0,
          fontWeight: "500",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        © 2026 Flexora
      </p>

      <p
        style={{
          color: "#AFCBFF",
          marginTop: "8px",
          fontWeight: "400",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        AI Powered Football Injury Risk Assessment Platform
      </p>
    </div>

    <div
      style={{
        textAlign: "right",
      }}
    >
      <p
        style={{
          color: "#DCE8FF",
          margin: 0,
          fontWeight: "400",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Developed by
      </p>

      <h3
        style={{
          marginTop: "10px",
          color: "#ffffff",
          fontWeight: "500",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Manuroszonero
      </h3>
    </div>
  </div>
</div>

</div>
</div>
);
}

export default Report;
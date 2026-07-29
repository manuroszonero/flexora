import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../context/ResultContext";
import mad from "../../assets/icons/12.png";

function Dashboard() {
  const { result } = useContext(ResultContext);
  const navigate = useNavigate();

  const savedResult =
    result ||
    JSON.parse(localStorage.getItem("footballguard_result"));

  if (!savedResult) {
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
    padding: "10px",
    marginTop: "-60px",
    boxShadow: "0 25px 70px rgba(0,0,0,.08)",
    textAlign: "center",
  }}
>
          <h1
            style={{
              fontSize: "46px",
              color: "#111",
              marginBottom: "15px",
            }}
          >
            No Assessment Found
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              marginBottom: "35px",
            }}
          >
            Complete your Assessment first.
          </p>

          <button
            onClick={() => navigate("/assessment")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "16px 38px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  const probabilities = savedResult.probabilities || {};

  const getColor = (risk) => {
    if (risk === "High") return "#001165";

    if (risk === "Moderate") return  "#0021c5";
    return "#7bc8ff";
  };

  let fatigue = 0;
  let fatigueStatus = "";

  if (savedResult.risk_level === "Low") {
    fatigue = 21;
    fatigueStatus = "Fresh Legs";
  } else if (savedResult.risk_level === "Moderate") {
    fatigue = 58;
    fatigueStatus = "Moderate Fatigue";
  } else {
    fatigue = 88;
    fatigueStatus = "Exhausted";
  }

  const injuryPoints = [
    {
      x: 180,
      y: 729,
      color: getColor(savedResult.bodyPartRisk?.Knee),
    },
    {
      x: 110,
      y: 729,
      color: getColor(savedResult.bodyPartRisk?.Knee),
    },
    {
      x: 460,
      y: 620,
      color: getColor(savedResult.bodyPartRisk?.Hamstring),
    },
    {
      x: 540,
      y: 620,
      color: getColor(savedResult.bodyPartRisk?.Hamstring),
    },
    {
      x: 190,
      y: 950,
      color: getColor(savedResult.bodyPartRisk?.Ankle),
    },
    {
      x: 100,
      y: 950,
      color: getColor(savedResult.bodyPartRisk?.Ankle),
    },
  ];

  const pulseStyle = `
  @keyframes pulse{
      0%{
          transform:scale(1);
          opacity:1;
      }
      50%{
          transform:scale(1.4);
          opacity:.55;
      }
      100%{
          transform:scale(1);
          opacity:1;
      }
  }
  `;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f3",
        padding: "20px 0",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <style>{pulseStyle}</style>

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
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "6px",
            alignItems: "center",
            marginBottom: "-20px",
          }}
        >
          {/* LEFT */}

          <div>
            <p
              style={{
                color: "#030013",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "-30px",
              }}
            >
              Flexora
            </p>

            <h1
              style={{
                fontSize: "74px",
                lineHeight: ".94",
                color: "#111",
                fontWeight: "700",
                letterSpacing: "-3px",
                marginBottom: "30px",
              }}
            >
              AI Injury
              <br />
              Analytics
              <br />
              Dashboard
            </h1>

            <p
              style={{
                width: "102%",
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              Your complete injury profile performance insights
              
            </p>
          </div>

          {/* RIGHT */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={mad}
              alt="Dashboard"
              style={{
                width: "90%",
                maxWidth: "400px",
                filter:
                  "drop-shadow(0px 35px 60px rgba(0,0,0,.18))",
              }}
            />
          </div>
        </section>
                {/* AI READINESS SCORE */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "32px",
            padding: "35px",
            boxShadow: "0 20px 60px rgba(15,23,42,.06)",
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              color: "#000000",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            AI Readiness Score
          </p>

          <h1
            style={{
              fontSize: "110px",
              color: "#111",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
            {savedResult.confidence}%
          </h1>

          <h2
            style={{
              color:
                savedResult.risk_level === "Low"
                  ? "#0e161a"
                  : savedResult.risk_level === "Moderate"
                  ? "#000000"
                  : "#000000",
              fontSize: "34px",
              marginBottom: "30px",
            }}
          >
            {savedResult.risk_level === "Low"
              ? "MATCH READY"
              : savedResult.risk_level === "Moderate"
              ? "PLAY WITH CAUTION"
              : "REST RECOMMENDED"}
          </h2>

          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#ececec",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${savedResult.confidence}%`,
                height: "100%",
                background: "#111",
                borderRadius: "999px",
              }}
            />
          </div>
        </div>

        {/* PREMIUM STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "28px",
            marginBottom: "55px",
          }}
        >
          {/* Risk */}

          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "38px",
              border: "1px solid #ececec",
              boxShadow: "0 18px 40px rgba(0,0,0,.05)",
            }}
          >
            <p
              style={{
                color: "#777",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Risk Level
            </p>

            <h2
              style={{
                fontSize: "44px",
                margin: "18px 0",
                color:
                  savedResult.risk_level === "Low"
                    ? "#010203"
                    : savedResult.risk_level === "Moderate"
                    ? "#0d0c07"
                    : "#000000",
              }}
            >
              {savedResult.risk_level}
            </h2>

            <p
              style={{
                color: "#777",
              }}
            >
              Overall injury prediction
            </p>
          </div>

          {/* Confidence */}

          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "38px",
              border: "1px solid #ececec",
              boxShadow: "0 18px 40px rgba(0,0,0,.05)",
            }}
          >
            <p
              style={{
                color: "#777",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Confidence
            </p>

            <h2
              style={{
                fontSize: "50px",
                margin: "18px 0",
              }}
            >
              {savedResult.confidence}%
            </h2>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#ececec",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${savedResult.confidence}%`,
                  height: "100%",
                  background: "#111",
                }}
              />
            </div>
          </div>

          {/* Match */}

          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "38px",
              border: "1px solid #ececec",
              boxShadow: "0 18px 40px rgba(0,0,0,.05)",
            }}
          >
            <p
              style={{
                color: "#777",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Match Status
            </p>

            <h2
              style={{
                fontSize: "34px",
                margin: "18px 0",
                color:
                  savedResult.risk_level === "Low"
                    ? "#000000"
                    : savedResult.risk_level === "Moderate"
                    ? "#000000"
                    : "#000000",
              }}
            >
              {savedResult.risk_level === "Low"
                ? "Available"
                : savedResult.risk_level === "Moderate"
                ? "Monitor"
                : "Rest"}
            </h2>

            <p
              style={{
                color: "#777",
              }}
            >
              Current playing eligibility
            </p>
          </div>
        </div>
                {/* AI COACH + FATIGUE */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            gap: "30px",
            marginBottom: "50px",
          }}
        >

          {/* AI Coach */}

          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "40px",
              boxShadow: "0 18px 45px rgba(0,0,0,.05)",
              border: "1px solid #ececec",
            }}
          >

            <p
              style={{
                color: "#000000",
                fontWeight: "700",
                letterSpacing: "2px",
                fontSize: "13px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              AI Coach Summary
            </p>

            <h2
              style={{
                fontSize: "34px",
                color: "#111",
                marginBottom: "30px",
              }}
            >
              Match Intelligence
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "20px",
              }}
            >

              <div> Hydration Status: <b>Stable</b></div>

              <div> Training Status: <b>Safe</b></div>

              <div>
                 Fatigue:
                <b>
                  {" "}
                  {fatigueStatus}
                </b>
              </div>

              <div>
                 Highest Risk:
                <b>
                  {" "}
                  {Object.keys(savedResult.bodyPartRisk || {}).find(
                    key =>
                      savedResult.bodyPartRisk[key] === "High"
                  ) || "None"}
                </b>
              </div>

              <div> Recovery: <b>Good</b></div>

              <div>
                 Recommendation:
                <b>
                  {" "}
                  {savedResult.risk_level === "High"
                    ? "Recovery"
                    : "Continue Training"}
                </b>
              </div>

            </div>

          </div>

          {/* Fatigue Meter */}

          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "40px",
              boxShadow: "0 18px 45px rgba(0,0,0,.05)",
              border: "1px solid #ececec",
              textAlign: "center",
            }}
          >

            <p
              style={{
                color: "#24553f",
                fontWeight: "700",
                letterSpacing: "2px",
                fontSize: "13px",
                textTransform: "uppercase",
              }}
            >
              Fatigue Meter
            </p>

            <div
              style={{
                width: "210px",
                height: "210px",
                margin: "30px auto",
                borderRadius: "50%",
                background: `conic-gradient(
                  #111 ${fatigue * 3.6}deg,
                  #ececec 0deg
                )`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

              <div
                style={{
                  width: "165px",
                  height: "165px",
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >

                <h1
                  style={{
                    fontSize: "48px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  {fatigue}%
                </h1>

                <p
                  style={{
                    color: "#666",
                    marginTop: "10px",
                  }}
                >
                  {fatigueStatus}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* PREDICTION ANALYTICS */}

        <div
          style={{
            background: "#fff",
            borderRadius: "30px",
            padding: "40px",
            boxShadow: "0 18px 45px rgba(0,0,0,.05)",
            border: "1px solid #ececec",
            marginBottom: "50px",
          }}
        >

          <p
            style={{
              color: "#000000",
              fontWeight: "700",
              letterSpacing: "2px",
              fontSize: "13px",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Prediction Analytics
          </p>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "35px",
            }}
          >
            Injury Probability
          </h2>

          {Object.entries(probabilities).map(([label, value]) => (

            <div
              key={label}
              style={{
                marginBottom: "25px",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                <span>{label}</span>

                <span>{value}%</span>

              </div>

              <div
                style={{
                  height: "12px",
                  background: "#ececec",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width: `${value}%`,
                    height: "100%",
                    background:
                      label === "High"
                        ? "#001165"
                        : label === "Moderate"
                        ? "#0124d2"
                        : "#667ffd",
                  }}
                />

              </div>

            </div>

          ))}

        </div>
              {/* ================= AI SCORE CARD ================= */}

      <section
        style={{
          background: "#ffffff",
          borderRadius: "34px",
          padding: "60px",
          boxShadow: "0 20px 60px rgba(15,23,42,.08)",
          marginBottom: "35px",
        }}
      >
        <p
          style={{
            color: "#000000",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          AI Readiness Score
        </p>

        <h1
          style={{
            fontSize: "110px",
            lineHeight: "1",
            margin: "10px 0",
            color: "#111",
          }}
        >
          {savedResult.confidence}%
        </h1>

        <h2
          style={{
            color:
              savedResult.risk_level === "Low"
                ? "#000000"
                : savedResult.risk_level === "Moderate"
                ? "#010101"
                : "#0f0b0b",
            fontSize: "36px",
            marginBottom: "35px",
          }}
        >
          {savedResult.risk_level === "Low"
            ? "MATCH READY"
            : savedResult.risk_level === "Moderate"
            ? "PLAY WITH CAUTION"
            : "REST RECOMMENDED"}
        </h2>

        <div
          style={{
            background: "#ececec",
            height: "14px",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${savedResult.confidence}%`,
              background: "#111",
              height: "100%",
            }}
          />
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px",
          marginBottom: "45px",
        }}
      >
        {/* Risk */}

        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(15,23,42,.06)",
          }}
        >
          <p
            style={{
              color: "#777",
              marginBottom: "18px",
              fontWeight: "600",
            }}
          >
            Risk Level
          </p>

          <h2
            style={{
              fontSize: "42px",
              color:
                savedResult.risk_level === "Low"
                  ? "#000000"
                  : savedResult.risk_level === "Moderate"
                  ? "#000000"
                  : "#000000",
            }}
          >
            {savedResult.risk_level}
          </h2>
        </div>

        {/* Confidence */}

        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(15,23,42,.06)",
          }}
        >
          <p
            style={{
              color: "#777",
              marginBottom: "18px",
              fontWeight: "600",
            }}
          >
            Confidence
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#111",
            }}
          >
            {savedResult.confidence}%
          </h2>
        </div>

        {/* Match Status */}

        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(15,23,42,.06)",
          }}
        >
          <p
            style={{
              color: "#777",
              marginBottom: "18px",
              fontWeight: "600",
            }}
          >
            Match Status
          </p>

          <h2
            style={{
              fontSize: "30px",
              color: "#111",
            }}
          >
            {savedResult.risk_level === "Low"
              ? "Available"
              : savedResult.risk_level === "Moderate"
              ? "Monitor"
              : "Rest"}
          </h2>
        </div>

        {/* Fatigue */}

        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(15,23,42,.06)",
          }}
        >
          <p
            style={{
              color: "#777",
              marginBottom: "18px",
              fontWeight: "600",
            }}
          >
            Fatigue
          </p>

          <h2
            style={{
              fontSize: "32px",
              color: "#111",
            }}
          >
            {fatigueStatus}
          </h2>

          <div
            style={{
              marginTop: "18px",
              background: "#eee",
              height: "10px",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${fatigue}%`,
                background: "#111",
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>
            {/* ================= BODY HEATMAP ================= */}

      <div
        style={{
          background: "#fff",
          borderRadius: "30px",
          padding: "45px",
          boxShadow: "0 18px 55px rgba(15,23,42,.06)",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "35px",
            color: "#111",
          }}
        >
          Body Risk Heatmap
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "420px",
            }}
          >
            <img
              src="/anatomy.png"
              alt="Body"
              style={{
                width: "100%",
              }}
            />

            {injuryPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: `${(point.x / 675) * 100}%`,
                  top: `${(point.y / 1200) * 100}%`,
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: point.color,
                  boxShadow: `0 0 18px ${point.color}`,
                  animation: "pulse 1.8s infinite",
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          {Object.entries(savedResult.bodyPartRisk || {}).map(([part, risk]) => (
            <div
              key={part}
              style={{
                background: getColor(risk),
                padding: "12px 22px",
                borderRadius: "999px",
                color: risk === "Moderate" ? "#111" : "#fff",
                fontWeight: "700",
              }}
            >
              {part} • {risk}
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDATIONS */}

      <div
        style={{
          background: "#fff",
          borderRadius: "30px",
          padding: "45px",
          boxShadow: "0 18px 55px rgba(15,23,42,.06)",
          marginBottom: "45px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "30px",
          }}
        >
          AI Recommendations
        </h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {savedResult.recommendations.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#f7f7f5",
                padding: "22px 25px",
                borderRadius: "18px",
                fontSize: "18px",
                color: "#444",
                borderLeft: "5px solid #000101",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOAD CTA */}

      <div
        style={{
          background: "#111",
          color: "#fff",
          borderRadius: "34px",
          padding: "70px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "18px",
          }}
        >
          Your AI Report is Ready
        </h1>

        <p
          style={{
            color: "#cfcfcf",
            fontSize: "20px",
            maxWidth: "750px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
          }}
        >
          Download your complete FootballGuard AI report containing
          injury prediction, confidence score, body heatmap,
          personalized recommendations and recovery guidance.
        </p>

        <button
          onClick={() => navigate("/report")}
          style={{
            background: "#fff",
            color: "#111",
            border: "none",
            borderRadius: "999px",
            padding: "18px 42px",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          View & Download Report →
        </button>
      </div>

    </div>
  </div>
);

}

export default Dashboard;
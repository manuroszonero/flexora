import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AssessmentContext } from "../../context/AssessmentContext";
import { ResultContext } from "../../context/ResultContext";

import ProgressBar from "../../components/ProgressBar/ProgressBar";

import PlayerInfo from "./PlayerInfo";
import TrainingLoad from "./TrainingLoad";
import RecoveryLifestyle from "./RecoveryLifestyle";
import InjuryHistory from "./InjuryHistory";
import Symptoms from "./Symptoms";
import PhysicalCondition from "./PhysicalCondition";
import EquipmentEnvironment from "./EquipmentEnvironment";
import PlayerGoals from "./PlayerGoals";
import mad from "../../assets/icons/10.png";


import api from "../../services/api";

function Assessment() {
  const navigate = useNavigate();

  const { assessmentData } = useContext(AssessmentContext);
  const { setResult } = useContext(ResultContext);

  const [currentStep, setCurrentStep] = useState(1);
  const [showMeme, setShowMeme] = useState(false);

  const totalSteps = 8;
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentStep]);

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep === 6) {
      setShowMeme(true);
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/assessment", assessmentData);

      const completeResult = {
        ...response.data,
        assessment: assessmentData,
      };

      setResult(completeResult);

      localStorage.setItem(
        "footballguard_result",
        JSON.stringify(completeResult)
      );

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert("❌ Failed to submit assessment.");
    }
  };

  return (
    <div
  style={{
    minHeight: "100vh",
    background: "#f5f5f3",
    padding: "1px 0 30px",
  }}
>
  <div
    style={{
      width: "92%",
      maxWidth: "1450px",
      margin: "0 auto",
    }}
  >
    {/* ================= HERO ================= */}

    <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 0.8fr",
    gap: "10px",
    alignItems: "start",
    marginBottom: "1px",
    paddingTop: "0px",
  }}
>
      {/* LEFT */}

      <div>

        <p
          style={{
            color: "#000101",
            letterSpacing: "2px",
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          Flexora
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "0.95",
            fontWeight: "700",
            color: "#111",
            marginBottom: "28px",
          }}
        >
          AI Injury
          <br />
          Assessment
        </h1>

        <p
          style={{
            width: "85%",
            color: "#666",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Complete all eight assessment stages to receive a personalized injury
          risk prediction, AI insights, and a professional prevention report
          tailored to your football profile.
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
          alt="Flexora"
          style={{
            width: "100%",
            maxWidth: "300px",
            filter:
              "drop-shadow(0px 40px 60px rgba(0,0,0,.18))",
          }}
        />
      </div>

    </div>
        {/* ================= MAIN CARD ================= */}

    <div
      style={{
        background: "#ffffff",
        borderRadius: "26px",
        padding: "30px",
        boxShadow: "0 25px 70px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "#111",
          marginBottom: "12px",
        }}
      >
        Player Assessment
      </h2>

      <p
        style={{
          color: "#777",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Complete every stage to generate your personalized FootballGuard AI
        injury prediction report.
      </p>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      {/* FORM CARD */}

      <div
        style={{
          marginTop: "5px",
          background: "#fafafa",
          border: "1px solid #ececec",
          borderRadius: "24px",
          padding: "30px",
          minHeight: "160px",
          transition: ".3s",
        }}
      >
        {currentStep === 1 && <PlayerInfo />}
        {currentStep === 2 && <TrainingLoad />}
        {currentStep === 3 && <RecoveryLifestyle />}
        {currentStep === 4 && <InjuryHistory />}
        {currentStep === 5 && <Symptoms />}
        {currentStep === 6 && <PhysicalCondition />}
        {currentStep === 7 && <EquipmentEnvironment />}
        {currentStep === 8 && <PlayerGoals />}
      </div>

      {/* BOTTOM NAVIGATION */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "45px",
        }}
      >
        <button
          onClick={previousStep}
          disabled={currentStep === 1}
          style={{
            padding: "16px 34px",
            borderRadius: "999px",
            border: "1px solid #ddd",
            background:
              currentStep === 1 ? "#ececec" : "#fff",
            color: "#111",
            cursor:
              currentStep === 1
                ? "not-allowed"
                : "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: ".25s",
          }}
        >
          ← Previous
        </button>

        <div
          style={{
            fontSize: "16px",
            color: "#666",
            fontWeight: "600",
          }}
        >
          Step {currentStep} of {totalSteps}
        </div>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "16px 36px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "16px",
              transition: ".25s",
            }}
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "16px 42px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        )}
      </div>

    </div>
        {/* ================= 67 MEME POPUP ================= */}

    {showMeme && (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.65)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: "430px",
            background: "#fff",
            borderRadius: "24px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 25px 70px rgba(0,0,0,.30)",
          }}
        >
          <div style={{ fontSize: "70px" }}>
            🗿
          </div>

          <h2
            style={{
              marginTop: "15px",
              color: "#198754",
            }}
          >
            6️⃣ ➜ 7️⃣
          </h2>

          <p
            style={{
              margin: "22px 0",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            If you know...
            <br />
            you know.
          </p>

          <button
            onClick={() => {
              setShowMeme(false);
              setCurrentStep(7);
            }}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "14px 34px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    )}

  </div>
</div>

  );
}

export default Assessment;
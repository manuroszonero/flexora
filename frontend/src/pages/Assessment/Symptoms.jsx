import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function Symptoms() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const symptoms = assessmentData.symptoms;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      symptoms: {
        ...symptoms,
        [e.target.name]: e.target.value,
      },
    });
  };

  const pageStyle = {
    width: "100%",
    maxWidth: "1180px",
    marginLeft: "0",
    marginRight: "auto",
    paddingBottom: "40px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const titleStyle = {
    fontSize: "46px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "12px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const subtitleStyle = {
    color: "#666",
    fontSize: "18px",
    lineHeight: "1.7",
    marginBottom: "45px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const cardStyle = {
    width: "100%",
    background: "#fff",
    border: "1px solid #ececec",
    borderRadius: "24px",
    padding: "30px",
    marginBottom: "28px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
    boxSizing: "border-box",
  };

  const questionStyle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "10px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const helperStyle = {
    fontSize: "15px",
    color: "#777",
    marginBottom: "20px",
    lineHeight: "1.6",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "16px",
    border: "1px solid #dcdcdc",
    background: "#fff",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif",
    transition: "0.25s ease",
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>Current Symptoms</h2>

      <p style={subtitleStyle}>
        Tell us how you're feeling today. Current symptoms help FootballGuard AI
        understand your immediate injury risk.
      </p>

      {/* Current Pain */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Are you currently experiencing pain?
        </div>

        <div style={helperStyle}>
          Let us know whether you currently feel pain while resting,
          walking or training.
        </div>

        <select
          name="currentPain"
          value={symptoms.currentPain || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Pain Level */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Pain Level (0 – 10)
        </div>

        <div style={helperStyle}>
          0 means no pain while 10 represents the worst pain imaginable.
        </div>

        <input
          type="number"
          min="0"
          max="10"
          name="painLevel"
          placeholder="0 = No Pain | 10 = Worst Pain"
          value={symptoms.painLevel || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
            {/* Pain Location */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Where is the pain located?
        </div>

        <div style={helperStyle}>
          Select the area where you currently feel the most discomfort.
        </div>

        <select
          name="painLocation"
          value={symptoms.painLocation || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Head</option>
          <option>Neck</option>
          <option>Shoulder</option>
          <option>Back</option>
          <option>Hip</option>
          <option>Groin</option>
          <option>Thigh</option>
          <option>Knee</option>
          <option>Calf</option>
          <option>Ankle</option>
          <option>Foot</option>
          <option>No Pain</option>
        </select>
      </div>

      {/* Swelling */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Do you have any swelling?
        </div>

        <div style={helperStyle}>
          Swelling may indicate inflammation or an underlying injury.
        </div>

        <select
          name="swelling"
          value={symptoms.swelling || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Muscle Soreness */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Do you feel muscle soreness?
        </div>

        <div style={helperStyle}>
          Include soreness caused by training or muscle fatigue.
        </div>

        <select
          name="muscleSoreness"
          value={symptoms.muscleSoreness || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
            {/* Joint Stiffness */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Do you experience joint stiffness?
        </div>

        <div style={helperStyle}>
          Stiffness before or after activity may affect your movement and increase injury risk.
        </div>

        <select
          name="jointStiffness"
          value={symptoms.jointStiffness || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Fatigue */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          How would you rate your fatigue today?
        </div>

        <div style={helperStyle}>
          Consider both physical and mental tiredness before today's training.
        </div>

        <select
          name="fatigue"
          value={symptoms.fatigue || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Low</option>
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
          <option>Very High</option>
        </select>
      </div>

      {/* Can Train */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Can you train normally today?
        </div>

        <div style={helperStyle}>
          Choose the option that best reflects your current physical condition.
        </div>

        <select
          name="canTrain"
          value={symptoms.canTrain || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Partially</option>
        </select>
      </div>

    </div>
  );
}

export default Symptoms;
import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function InjuryHistory() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const injuryHistory = assessmentData.injuryHistory;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      injuryHistory: {
        ...injuryHistory,
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
    marginBottom: "42px",
    lineHeight: "30px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const cardStyle = {
  width: "100%",
  background: "#fff",
  border: "1px solid #e9e9e9",
  borderRadius: "24px",
  padding: "30px",
  marginBottom: "28px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
  boxSizing: "border-box",
};

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#111",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const helperText = {
    color: "#777",
    fontSize: "15px",
    marginBottom: "18px",
    lineHeight: "24px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid #dcdcdc",
    background: "#fafafa",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif",
    transition: "0.25s",
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundColor: "#fafafa",
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>
        Injury History
      </h2>

      <p style={subtitleStyle}>
        Tell us about your previous football injuries. Past injuries are one of
        the strongest indicators of future injury risk.
      </p>
            {/* Previous Injury */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Have you had a previous football injury?
        </label>

        <p style={helperText}>
          Previous injuries significantly increase the likelihood of future
          injuries.
        </p>

        <select
          name="previousInjury"
          value={injuryHistory.previousInjury || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Injury Count */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          How many injuries have you had?
        </label>

        <p style={helperText}>
          Include football-related injuries that required treatment or recovery.
        </p>

        <input
          type="number"
          min="0"
          name="injuryCount"
          placeholder="e.g. 2"
          value={injuryHistory.injuryCount || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Body Part */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Which body part was injured most recently?
        </label>

        <p style={helperText}>
          Select the body area that experienced your latest football injury.
        </p>

        <select
          name="bodyPart"
          value={injuryHistory.bodyPart || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose Body Part</option>
          <option>Head</option>
          <option>Neck</option>
          <option>Shoulder</option>
          <option>Arm</option>
          <option>Elbow</option>
          <option>Wrist</option>
          <option>Back</option>
          <option>Hip</option>
          <option>Groin</option>
          <option>Thigh</option>
          <option>Knee</option>
          <option>Calf</option>
          <option>Ankle</option>
          <option>Foot</option>
        </select>
      </div>

      {/* Injury Type */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Type of Injury
        </label>

        <p style={helperText}>
          Choose the injury that best matches your previous diagnosis.
        </p>

        <select
          name="injuryType"
          value={injuryHistory.injuryType || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose Injury Type</option>
          <option>Muscle Strain</option>
          <option>Ligament Sprain</option>
          <option>Tendon Injury</option>
          <option>Fracture</option>
          <option>Dislocation</option>
          <option>ACL Injury</option>
          <option>Meniscus Injury</option>
          <option>Hamstring Injury</option>
          <option>Groin Injury</option>
          <option>Other</option>
        </select>
      </div>
            {/* Surgery */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Did the injury require surgery?
        </label>

        <p style={helperText}>
          Surgical treatment usually indicates a more severe injury and longer
          recovery period.
        </p>

        <select
          name="surgery"
          value={injuryHistory.surgery || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Last Injury */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          How long ago was your last injury?
        </label>

        <p style={helperText}>
          Recent injuries generally have a greater impact on your current injury
          risk.
        </p>

        <select
          name="lastInjury"
          value={injuryHistory.lastInjury || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose a timeframe</option>
          <option>Less than 1 month</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>More than 1 year</option>
          <option>Never Injured</option>
        </select>
      </div>

      {/* Fully Recovered */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Have you fully recovered?
        </label>

        <p style={helperText}>
          Returning to play before complete recovery may increase the chance of
          reinjury.
        </p>

        <select
          name="fullyRecovered"
          value={injuryHistory.fullyRecovered || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not Sure</option>
        </select>
      </div>

    </div>
  );
}

export default InjuryHistory;
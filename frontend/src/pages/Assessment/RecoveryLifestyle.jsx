import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function RecoveryLifestyle() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const recoveryLifestyle = assessmentData.recoveryLifestyle;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      recoveryLifestyle: {
        ...recoveryLifestyle,
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
    marginBottom: "14px",
    fontSize: "17px",
    fontWeight: "600",
    color: "#111",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const helperText = {
    color: "#777",
    fontSize: "14px",
    marginBottom: "18px",
    lineHeight: "1.5",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "17px 18px",
    borderRadius: "16px",
    border: "1px solid #dcdcdc",
    background: "#fafafa",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.25s ease",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#111",
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 6 8 10 12 6'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 18px center",
    backgroundSize: "16px",
    paddingRight: "50px",
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
    lineHeight: "1.7",
    fontFamily: "Arial, Helvetica, sans-serif",
    maxWidth: "760px",
  };
    return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>Recovery & Lifestyle</h2>

      <p style={subtitleStyle}>
        Tell us about your recovery habits and daily lifestyle. Good recovery
        habits reduce fatigue, improve performance, and help lower the risk of
        football injuries.
      </p>

      {/* Sleep Hours */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Average Sleep Hours Per Night
        </label>

        <p style={helperText}>
          How many hours of sleep do you usually get each night?
        </p>

        <input
          type="number"
          name="sleepHours"
          placeholder="e.g. 8"
          min="0"
          max="24"
          value={recoveryLifestyle.sleepHours || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Sleep Quality */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Sleep Quality
        </label>

        <p style={helperText}>
          Rate the overall quality of your sleep.
        </p>

        <select
          name="sleepQuality"
          value={recoveryLifestyle.sleepQuality || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose Sleep Quality</option>
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

      {/* Water Intake */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Daily Water Intake (Liters)
        </label>

        <p style={helperText}>
          Enter your average daily water consumption.
        </p>

        <input
          type="number"
          step="0.1"
          name="waterIntake"
          placeholder="e.g. 2.5"
          value={recoveryLifestyle.waterIntake || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Nutrition */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Nutrition Quality
        </label>

        <p style={helperText}>
          How would you describe your daily eating habits?
        </p>

        <select
          name="nutritionQuality"
          value={recoveryLifestyle.nutritionQuality || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose Nutrition Quality</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

      {/* Recovery Days */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Recovery Days Per Week
        </label>

        <p style={helperText}>
          Number of complete recovery or rest days each week.
        </p>

        <input
          type="number"
          name="recoveryDays"
          min="0"
          max="7"
          placeholder="e.g. 2"
          value={recoveryLifestyle.recoveryDays || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
            {/* Recovery Method */}

      <div style={cardStyle}>
        <label style={labelStyle}>
          Recovery Method Used Most Often
        </label>

        <p style={helperText}>
          Select the recovery technique you rely on the most after training or
          matches.
        </p>

        <select
          name="recoveryMethod"
          value={recoveryLifestyle.recoveryMethod || ""}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Choose Recovery Method</option>
          <option>Stretching</option>
          <option>Foam Rolling</option>
          <option>Ice Bath</option>
          <option>Massage</option>
          <option>Compression</option>
          <option>Rest Only</option>
          <option>None</option>
        </select>
      </div>
    </div>
  );
}

export default RecoveryLifestyle;
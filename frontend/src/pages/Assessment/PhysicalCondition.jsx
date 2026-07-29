import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function PhysicalCondition() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const physicalCondition = assessmentData.physicalCondition;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      physicalCondition: {
        ...physicalCondition,
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
      <h2 style={titleStyle}>Physical Condition</h2>

      <p style={subtitleStyle}>
        Evaluate your current physical abilities. Better conditioning generally
        lowers injury risk and improves recovery.
      </p>

      {/* Fitness Level */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Overall Fitness Level
        </div>

        <div style={helperStyle}>
          Consider your current overall athletic condition based on your recent
          training and match performance.
        </div>

        <select
          name="fitnessLevel"
          value={physicalCondition.fitnessLevel || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

      {/* Flexibility */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Flexibility
        </div>

        <div style={helperStyle}>
          Good flexibility helps reduce muscle strains and improves movement efficiency.
        </div>

        <select
          name="flexibility"
          value={physicalCondition.flexibility || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>
            {/* Strength */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Strength Level
        </div>

        <div style={helperStyle}>
          Assess your current muscle strength based on your recent training and
          physical performance.
        </div>

        <select
          name="strength"
          value={physicalCondition.strength || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Weak</option>
          <option>Weak</option>
          <option>Average</option>
          <option>Strong</option>
          <option>Very Strong</option>
        </select>
      </div>

      {/* Balance */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Balance
        </div>

        <div style={helperStyle}>
          Good balance improves body control and helps reduce the likelihood of
          falls and awkward movements.
        </div>

        <select
          name="balance"
          value={physicalCondition.balance || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

      {/* Speed */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Speed
        </div>

        <div style={helperStyle}>
          Rate your sprinting speed and quickness during football activities.
        </div>

        <select
          name="speed"
          value={physicalCondition.speed || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Slow</option>
          <option>Slow</option>
          <option>Average</option>
          <option>Fast</option>
          <option>Very Fast</option>
        </select>
      </div>
            {/* Endurance */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Endurance
        </div>

        <div style={helperStyle}>
          Rate your ability to maintain performance throughout training sessions
          and full football matches without excessive fatigue.
        </div>

        <select
          name="endurance"
          value={physicalCondition.endurance || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Very Poor</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

    </div>
  );
}

export default PhysicalCondition;
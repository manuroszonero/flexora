import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function PlayerGoals() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const playerGoals = assessmentData.playerGoals;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      playerGoals: {
        ...playerGoals,
        [e.target.name]: e.target.value,
      },
    });
  };

  const pageStyle = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "10px 0 40px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const cardStyle = {
    background: "#fff",
    border: "1px solid #ececec",
    borderRadius: "20px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
  };

  const questionStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "8px",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const helperStyle = {
    fontSize: "15px",
    color: "#666",
    marginBottom: "20px",
    lineHeight: "1.6",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #ddd",
    background: "#fafafa",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif",
    transition: "all 0.25s ease",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <h2
        style={{
          fontSize: "46px",
          fontWeight: "700",
          color: "#111",
          marginBottom: "12px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Player Goals
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
          lineHeight: "1.7",
          maxWidth: "900px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Tell Flexora what you want to achieve so we can personalize
        your injury prevention insights, recommendations, and training
        suggestions.
      </p>

      {/* Primary Goal */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          What is your primary goal?
        </div>

        <div style={helperStyle}>
          Select the objective that best matches what you're aiming to achieve.
        </div>

        <select
          name="primaryGoal"
          value={playerGoals.primaryGoal || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Prevent Injuries</option>
          <option>Improve Performance</option>
          <option>Return After Injury</option>
          <option>Maintain Fitness</option>
        </select>
      </div>

      {/* Biggest Concern */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          What is your biggest concern?
        </div>

        <div style={helperStyle}>
          Choose the issue that worries you the most while playing football.
        </div>

        <select
          name="biggestConcern"
          value={playerGoals.biggestConcern || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Getting Injured</option>
          <option>Poor Recovery</option>
          <option>Low Fitness</option>
          <option>Recurring Injuries</option>
          <option>Performance</option>
        </select>
      </div>

      {/* Desired Training Days */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Desired Training Days Per Week
        </div>

        <div style={helperStyle}>
          Enter how many days you would ideally like to train each week.
        </div>

        <input
          type="number"
          name="desiredTrainingDays"
          min="1"
          max="7"
          placeholder="e.g. 5"
          value={playerGoals.desiredTrainingDays || ""}
          onChange={handleChange}
          style={{
            ...inputStyle,
            cursor: "text",
          }}
        />
      </div>
            {/* Target Fitness */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Target Fitness Level
        </div>

        <div style={helperStyle}>
          Choose the level of fitness you hope to reach through your training
          and injury prevention plan.
        </div>

        <select
          name="targetFitness"
          value={playerGoals.targetFitness || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Elite</option>
        </select>
      </div>

      {/* Personalized Recommendations */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Personalized Injury Prevention Recommendations
        </div>

        <div style={helperStyle}>
          Flexora can generate recommendations based on your assessment
          to help reduce injury risk and improve your overall performance.
        </div>

        <select
          name="recommendations"
          value={playerGoals.recommendations || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
            {/* Additional Comments */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Additional Comments
        </div>

        <div style={helperStyle}>
          Share anything else that could help FootballGuard AI better understand
          your goals, concerns, or current condition.
        </div>

        <textarea
          name="comments"
          rows="6"
          placeholder="Type any additional information here..."
          value={playerGoals.comments || ""}
          onChange={handleChange}
          style={{
            ...inputStyle,
            cursor: "text",
            resize: "vertical",
            minHeight: "170px",
            lineHeight: "1.7",
          }}
        />
      </div>

    </div>
  );
}

export default PlayerGoals;
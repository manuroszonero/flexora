import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function PlayerInfo() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const playerInfo = assessmentData.playerInfo;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      playerInfo: {
        ...playerInfo,
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
    marginBottom: "18px",
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
    transition: "all .25s ease",
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
        Player Information
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Tell Flexora about yourself.
      </p>

      {/* Full Name */}

      <div style={cardStyle}>
        <div style={questionStyle}>Full Name</div>

        <input
          style={inputStyle}
          type="text"
          name="fullName"
          placeholder="Manu LTN"
          value={playerInfo.fullName || ""}
          onChange={handleChange}
        />
      </div>

      {/* Age */}

      <div style={cardStyle}>
        <div style={questionStyle}>Age</div>

        <input
          style={inputStyle}
          type="number"
          name="age"
          placeholder="67"
          value={playerInfo.age || ""}
          onChange={handleChange}
        />
      </div>

      {/* Gender */}

      <div style={cardStyle}>
        <div style={questionStyle}>Gender</div>

        <select
          style={inputStyle}
          name="gender"
          value={playerInfo.gender || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
            {/* Height */}

      <div style={cardStyle}>
        <div style={questionStyle}>Height (cm)</div>

        <input
          style={inputStyle}
          type="number"
          name="height"
          placeholder="170"
          value={playerInfo.height || ""}
          onChange={handleChange}
        />
      </div>

      {/* Weight */}

      <div style={cardStyle}>
        <div style={questionStyle}>Weight (kg)</div>

        <input
          style={inputStyle}
          type="number"
          name="weight"
          placeholder="70"
          value={playerInfo.weight || ""}
          onChange={handleChange}
        />
      </div>

      {/* Playing Position */}

      <div style={cardStyle}>
        <div style={questionStyle}>Playing Position</div>

        <select
          style={inputStyle}
          name="position"
          value={playerInfo.position || ""}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option>Goalkeeper</option>
          <option>Defender</option>
          <option>Midfielder</option>
          <option>Forward</option>
        </select>
      </div>

      {/* Dominant Foot */}

      <div style={cardStyle}>
        <div style={questionStyle}>Dominant Foot</div>

        <select
          style={inputStyle}
          name="dominantFoot"
          value={playerInfo.dominantFoot || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>Right</option>
          <option>Left</option>
          <option>Both</option>
        </select>
      </div>
            {/* Competition Level */}

      <div style={cardStyle}>
        <div style={questionStyle}>Competition Level</div>

        <select
          style={inputStyle}
          name="competitionLevel"
          value={playerInfo.competitionLevel || ""}
          onChange={handleChange}
        >
          <option value="">Select Level</option>
          <option>Recreational</option>
          <option>School</option>
          <option>College</option>
          <option>Amateur Club</option>
          <option>Semi Professional</option>
          <option>Professional</option>
        </select>
      </div>

    </div>
  );
}

export default PlayerInfo;
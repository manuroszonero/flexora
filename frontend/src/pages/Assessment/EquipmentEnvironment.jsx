import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function EquipmentEnvironment() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const equipmentEnvironment = assessmentData.equipmentEnvironment;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      equipmentEnvironment: {
        ...equipmentEnvironment,
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
    fontSize: "16px",
    background: "#fafafa",
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
        Equipment & Environment
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
        Your equipment and playing environment have a direct impact on
        performance, comfort, and injury prevention. Answer the following
        questions based on your current playing conditions.
      </p>

      {/* Playing Surface */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Playing Surface
        </div>

        <div style={helperStyle}>
          Select the surface where you train or play most frequently.
        </div>

        <select
          name="playingSurface"
          value={equipmentEnvironment.playingSurface || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Natural Grass</option>
          <option>Artificial Turf</option>
          <option>Indoor Court</option>
          <option>Mixed Surfaces</option>
        </select>
      </div>

      {/* Football Boots Age */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Football Boots Age
        </div>

        <div style={helperStyle}>
          Older boots may lose grip and support, increasing injury risk.
        </div>

        <select
          name="bootsAge"
          value={equipmentEnvironment.bootsAge || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Less than 6 months</option>
          <option>6–12 months</option>
          <option>1–2 years</option>
          <option>More than 2 years</option>
        </select>
      </div>

      {/* Boot Comfort */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Boot Comfort
        </div>

        <div style={helperStyle}>
          Properly fitted football boots help improve stability and reduce foot
          and ankle injuries.
        </div>

        <select
          name="bootComfort"
          value={equipmentEnvironment.bootComfort || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Sometimes</option>
        </select>
      </div>
            {/* Shin Guards */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Do You Wear Shin Guards?
        </div>

        <div style={helperStyle}>
          Wearing shin guards consistently helps reduce the severity of impact
          injuries during training and matches.
        </div>

        <select
          name="shinGuards"
          value={equipmentEnvironment.shinGuards || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Always</option>
          <option>Sometimes</option>
          <option>Never</option>
        </select>
      </div>

      {/* Weather Conditions */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Weather Conditions
        </div>

        <div style={helperStyle}>
          The weather can affect your performance, hydration, and injury risk
          during football activities.
        </div>

        <select
          name="weather"
          value={equipmentEnvironment.weather || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Hot</option>
          <option>Cold</option>
          <option>Rainy</option>
          <option>Mixed</option>
        </select>
      </div>

      {/* Uneven Training Surface */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Uneven Training Surface
        </div>

        <div style={helperStyle}>
          Training on uneven or damaged surfaces may increase the chance of
          ankle, knee, and muscle injuries.
        </div>

        <select
          name="unevenSurface"
          value={equipmentEnvironment.unevenSurface || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Sometimes</option>
        </select>
      </div>

      {/* Recovery Facilities */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Recovery Facilities Available
        </div>

        <div style={helperStyle}>
          Access to recovery equipment and facilities can improve recovery and
          lower the risk of future injuries.
        </div>

        <select
          name="recoveryFacilities"
          value={equipmentEnvironment.recoveryFacilities || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Limited Access</option>
        </select>
      </div>
            {/* Overall Training Environment */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Overall Training Environment
        </div>

        <div style={helperStyle}>
          Consider the overall quality of your training facilities, coaching,
          equipment, and playing conditions.
        </div>

        <select
          name="trainingEnvironment"
          value={equipmentEnvironment.trainingEnvironment || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Choose an option</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
          <option>Excellent</option>
        </select>
      </div>

    </div>
  );
}

export default EquipmentEnvironment;
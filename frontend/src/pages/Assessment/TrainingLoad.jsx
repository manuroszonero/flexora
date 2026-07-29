import { useContext } from "react";
import { AssessmentContext } from "../../context/AssessmentContext";

function TrainingLoad() {
  const { assessmentData, setAssessmentData } =
    useContext(AssessmentContext);

  const trainingLoad = assessmentData.trainingLoad;

  const handleChange = (e) => {
    setAssessmentData({
      ...assessmentData,
      trainingLoad: {
        ...trainingLoad,
        [e.target.name]: e.target.value,
      },
    });
  };

  const intensityLevels = [
    "Low",
    "Moderate",
    "High",
    "Very High",
  ];

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
    marginBottom: "22px",
    lineHeight: "1.6",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const sliderStyle = {
    width: "100%",
    accentColor: "#111",
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
        Training Load
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
        Tell us about your weekly workload. Training frequency, duration, and
        intensity all influence fatigue levels and overall injury risk.
      </p>

      {/* Training Days */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Training Days Per Week
        </div>

        <div style={helperStyle}>
          Move the slider to indicate how many days you usually train during a
          typical week.
        </div>

        <input
          type="range"
          min="0"
          max="7"
          name="trainingDays"
          value={trainingLoad.trainingDays || 0}
          onChange={handleChange}
          style={sliderStyle}
        />

        <div
          style={{
            marginTop: "18px",
            fontSize: "17px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          {trainingLoad.trainingDays || 0} Days
        </div>
      </div>

      {/* Training Hours */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Training Hours Per Day
        </div>

        <div style={helperStyle}>
          Estimate the average number of hours you spend training each day.
        </div>

        <input
          type="range"
          min="0"
          max="8"
          step="0.5"
          name="trainingHours"
          value={trainingLoad.trainingHours || 0}
          onChange={handleChange}
          style={sliderStyle}
        />

        <div
          style={{
            marginTop: "18px",
            fontSize: "17px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          {trainingLoad.trainingHours || 0} Hours
        </div>
      </div>
            {/* Match Minutes */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Match Minutes Per Week
        </div>

        <div style={helperStyle}>
          Approximately how many minutes do you spend playing competitive
          matches during a typical week?
        </div>

        <input
          type="range"
          min="0"
          max="180"
          step="10"
          name="matchMinutes"
          value={trainingLoad.matchMinutes || 0}
          onChange={handleChange}
          style={sliderStyle}
        />

        <div
          style={{
            marginTop: "18px",
            fontSize: "17px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          {trainingLoad.matchMinutes || 0} Minutes
        </div>
      </div>

      {/* Training Intensity */}

      <div style={cardStyle}>
        <div style={questionStyle}>
          Training Intensity
        </div>

        <div style={helperStyle}>
          Choose the intensity that best represents your average training
          sessions.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
          }}
        >
          {intensityLevels.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() =>
                setAssessmentData({
                  ...assessmentData,
                  trainingLoad: {
                    ...trainingLoad,
                    trainingIntensity: level,
                  },
                })
              }
              style={{
                padding: "22px",
                borderRadius: "18px",
                border:
                  trainingLoad.trainingIntensity === level
                    ? "2px solid #111"
                    : "1px solid #e5e5e5",
                background:
                  trainingLoad.trainingIntensity === level
                    ? "#111"
                    : "#fff",
                color:
                  trainingLoad.trainingIntensity === level
                    ? "#fff"
                    : "#111",
                cursor: "pointer",
                transition: "all .25s ease",
                textAlign: "left",
                minHeight: "90px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {level}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  opacity:
                    trainingLoad.trainingIntensity === level ? 0.9 : 0.65,
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {level === "Low" 
                 }

                {level === "Moderate" 
                 }

                {level === "High" 
                  }

                {level === "Very High" 
                  }
              </div>
            </button>
          ))}
        </div>
      </div>
          </div>
  );
}

export default TrainingLoad;
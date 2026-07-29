function ProgressBar({ currentStep, totalSteps }) {

  const stepNames = [
    "Player",
    "Training",
    "Recovery",
    "Injury",
    "Symptoms",
    "Physical",
    "Equipment",
    "Goals",
  ];

  return (
    <div style={{ marginBottom: "35px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >

        {/* Background Line */}

        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "5%",
            right: "5%",
            height: "5px",
            background: "#ddd",
            zIndex: 0,
            borderRadius: "10px",
          }}
        />

        {/* Green Progress */}

        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "5%",
            height: "5px",
            width: `${((currentStep - 1) / (totalSteps - 1)) * 90}%`,
            background: "#09015f",
            zIndex: 1,
            transition: "0.4s",
            borderRadius: "10px",
          }}
        />

        {stepNames.map((name, index) => {

          const step = index + 1;

          const completed = step < currentStep;

          const active = step === currentStep;

          return (

            <div
              key={step}
              style={{
                zIndex: 2,
                textAlign: "center",
                width: "90px",
              }}
            >

              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  margin: "0 auto",

                  background: completed
                    ? "#09015f"
                    : active
                    ? "#00050c"
                    : "#ddd",

                  color: "white",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontWeight: "bold",

                  fontSize: "18px",

                  transition: "0.3s",
                }}
              >
                {completed ? "✓" : step}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  fontSize: "13px",
                  fontWeight: active ? "700" : "500",
                  color: active ? "#111" : "#666",
                }}
              >
                {name}
              </div>

            </div>

          );

        })}

      </div>

    </div>
  );

}

export default ProgressBar;
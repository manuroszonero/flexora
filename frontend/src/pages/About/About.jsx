import mad from "../../assets/icons/12.png";
import md from "../../assets/icons/10.png";
function About() {
  return (
    <div
      style={{
        background: "#fff",
        color: "#111",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "420px" }}>
          <p
            style={{
              color: "#00226B",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            ABOUT Flexora
          </p>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Smarter Football.
            <br />
            Safer Players.
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              maxWidth: "650px",
            }}
          >
            Flexora is an intelligent injury risk assessment platform
            designed to help football players, coaches and medical staff
            identify injury risks before they become serious. By combining
            sports science with artificial intelligence, we deliver
            personalized recommendations that improve player safety and
            performance.
          </p>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={mad}
            alt=""
            style={{
              width: "100%",
              maxWidth: "480px",
            }}
          />
        </div>
      </section>

      {/* MISSION */}
      <section
        style={{
          background: "#fafafa",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <img
            src={md}
            alt=""
            style={{
              width: "100%",
              maxWidth: "500px",
              justifySelf: "center",
            }}
          />

          <div>
            <h2
              style={{
                fontSize: "46px",
                marginBottom: "25px",
              }}
            >
              Our Mission
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#666",
                lineHeight: "1.9",
              }}
            >
              Every season, thousands of football players suffer preventable
              injuries due to excessive workload, poor recovery, fatigue and
              unnoticed warning signs.
              <br />
              <br />
              Flexora was created to bridge the gap between sports
              science and everyday football by providing accessible AI-powered
              injury prediction and recovery guidance.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "100px auto",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Why Flexora?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "AI Injury Prediction",
              text: "Machine learning identifies potential injury risks before they happen.",
            },
            {
              title: "Personalized Reports",
              text: "Every player receives a detailed injury risk report with recommendations.",
            },
            {
              title: "Body Risk Heatmap",
              text: "Visualize vulnerable body parts instantly with interactive heatmaps.",
            },
            {
              title: "Performance Insights",
              text: "Monitor workload, recovery and lifestyle to optimize performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #ececec",
                borderRadius: "28px",
                padding: "35px",
                transition: ".3s",
                boxShadow: "0 12px 35px rgba(0,0,0,.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 45px rgba(0,34,107,.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,0,0,.05)";
              }}
            >
              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      {/* ================= CREATOR ================= */}

<section
  style={{
    maxWidth: "1200px",
    margin: "120px auto 0",
    padding: "0 30px",
  }}
>
  <h2
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "54px",
      fontWeight: "700",
      color: "#111",
      marginBottom: "18px",
    }}
  >
    About the Creator
  </h2>

  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "18px",
      color: "#666",
      lineHeight: "1.9",
      maxWidth: "760px",
      marginBottom: "60px",
    }}
  >
    Flexora was independently designed and developed by <strong>Manu Vinu</strong>,
    a B.Tech Artificial Intelligence & Data Science student with a passion for
    sports technology, machine learning and modern web development.
  </p>

  <div
    style={{
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
      alignItems: "center",
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "32px",
      padding: "45px",
      boxShadow: "0 20px 55px rgba(15,23,42,.06)",
    }}
  >
    {/* Profile Image */}
    <div
      style={{
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid #080a0f",
        flexShrink: 0,
      }}
    >
      <img
        src={md}
        alt="Creator"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Content */}
    <div style={{ flex: 1 }}>
      <h3
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "36px",
          fontWeight: "700",
          color: "#111",
          marginBottom: "12px",
        }}
      >
        Manu rossonero
      </h3>

      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "26px",
          color: "#000000",
          marginBottom: "22px",
        }}
      >
        Creator • AI Developer • Football Enthusiast
      </p>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "17px",
          color: "#666",
          lineHeight: "1.9",
          maxWidth: "700px",
        }}
      >
        My goal with Flexora is to make injury prediction accessible
        using Artificial Intelligence. By combining football science, machine
        learning and intuitive design, this platform helps players understand
        their injury risk and take preventive action before stepping onto the
        field.
      </p>
    </div>
    
  </div>
</section>
    </div>
  );
}

export default About;
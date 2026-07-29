from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils.database import Base, engine
#from api.auth import router as auth_router

import os
import joblib
import pandas as pd

app = FastAPI(title="FootballGuard AI API")

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://flexora-six.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

#app.include_router(auth_router, prefix="/auth", tags=["Authentication"])


# ----------------------------------
# Load ML Model
# ----------------------------------

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "models",
    "injury_model.pkl"
)

model = joblib.load(MODEL_PATH)

print("=" * 50)
print("Flexora ML Model Loaded!")
print("=" * 50)


# ----------------------------------
# Helper Functions
# ----------------------------------

def rating_to_number(value):

    mapping = {
        "Very Poor": 2,
        "Poor": 4,
        "Average": 6,
        "Good": 8,
        "Excellent": 10,

        "Very Weak": 2,
        "Weak": 4,
        "Strong": 8,
        "Very Strong": 10,

        "Very Slow": 2,
        "Slow": 4,
        "Fast": 8,
        "Very Fast": 10,
    }

    return mapping.get(value, 6)


def fatigue_to_number(value):

    mapping = {
        "Very Low": 2,
        "Low": 4,
        "Moderate": 6,
        "High": 8,
        "Very High": 10,
    }

    return mapping.get(value, 6)


# ----------------------------------
# Root Endpoint
# ----------------------------------

@app.get("/")
def root():
    return {
        "message": "Flexora API is running!"
    }


# ----------------------------------
# Assessment Endpoint
# ----------------------------------

@app.post("/assessment")
def create_assessment(data: dict):

    player = data.get("playerInfo", {})
    training = data.get("trainingLoad", {})
    recovery = data.get("recoveryLifestyle", {})
    injury = data.get("injuryHistory", {})
    symptoms = data.get("symptoms", {})
    physical = data.get("physicalCondition", {})

    # ----------------------------------
    # Convert Frontend Data
    # ----------------------------------

    model_input = pd.DataFrame([{

        "Age": int(player.get("age") or 18),

        "Height": int(player.get("height") or 170),

        "Weight": int(player.get("weight") or 70),

        "Position": player.get("position") or "Midfielder",

        "TrainingDays": int(training.get("trainingDays") or 3),

        "TrainingHours": float(training.get("trainingHours") or 2),

        "SleepHours": float(recovery.get("sleepHours") or 8),

        "WaterIntake": float(recovery.get("waterIntake") or 3),

        "PreviousInjury": injury.get("previousInjury") or "No",

        "InjuryCount": int(injury.get("injuryCount") or 0),

        "FullyRecovered": injury.get("fullyRecovered") or "Yes",

        "PainLevel": int(symptoms.get("painLevel") or 0),

        "Fatigue": fatigue_to_number(
            symptoms.get("fatigue")
        ),

        "Flexibility": rating_to_number(
            physical.get("flexibility")
        )

    }])

    # ----------------------------------
    # ML Prediction
    # ----------------------------------

    prediction = model.predict(model_input)[0]

    probability = model.predict_proba(model_input)[0]

    confidence = round(max(probability) * 100)

    probability_dict = {
        cls: round(prob * 100)
        for cls, prob in zip(model.classes_, probability)
    }

    # ----------------------------------
    # Body Part Risk Prediction
    # ----------------------------------

    bodyPartRisk = {
        "Knee": "Low",
        "Hamstring": "Low",
        "Ankle": "Low"
    }

    body_part = injury.get("bodyPart", "")

    injury_type = injury.get("injuryType", "")

    pain = int(symptoms.get("painLevel") or 0)
        # -------------------------------
    # Previous Injured Body Part
    # -------------------------------

    if body_part == "Knee":
        bodyPartRisk["Knee"] = "Moderate"

    elif body_part in ["Thigh", "Calf", "Groin"]:
        bodyPartRisk["Hamstring"] = "Moderate"

    elif body_part in ["Ankle", "Foot"]:
        bodyPartRisk["Ankle"] = "Moderate"

    # -------------------------------
    # Injury Type
    # -------------------------------

    if injury_type == "ACL Injury":
        bodyPartRisk["Knee"] = "High"

    elif injury_type == "Meniscus Injury":
        bodyPartRisk["Knee"] = "High"

    elif injury_type == "Hamstring Injury":
        bodyPartRisk["Hamstring"] = "High"

    elif injury_type == "Ligament Sprain":
        bodyPartRisk["Ankle"] = "High"

    # -------------------------------
    # Surgery
    # -------------------------------

    if injury.get("surgery") == "Yes":

        if body_part == "Knee":
            bodyPartRisk["Knee"] = "High"

        elif body_part in ["Thigh", "Calf", "Groin"]:
            bodyPartRisk["Hamstring"] = "High"

        elif body_part in ["Ankle", "Foot"]:
            bodyPartRisk["Ankle"] = "High"

    # -------------------------------
    # Recovery Status
    # -------------------------------

    if injury.get("fullyRecovered") == "No":

        if body_part == "Knee":
            bodyPartRisk["Knee"] = "High"

        elif body_part in ["Thigh", "Calf", "Groin"]:
            bodyPartRisk["Hamstring"] = "High"

        elif body_part in ["Ankle", "Foot"]:
            bodyPartRisk["Ankle"] = "High"

    # -------------------------------
    # Pain Level
    # -------------------------------

    if pain >= 7:

        if body_part == "Knee":
            bodyPartRisk["Knee"] = "High"

        elif body_part in ["Thigh", "Calf", "Groin"]:
            bodyPartRisk["Hamstring"] = "High"

        elif body_part in ["Ankle", "Foot"]:
            bodyPartRisk["Ankle"] = "High"

    elif pain >= 4:

        if body_part == "Knee" and bodyPartRisk["Knee"] == "Low":
            bodyPartRisk["Knee"] = "Moderate"

        elif body_part in ["Thigh", "Calf", "Groin"] and bodyPartRisk["Hamstring"] == "Low":
            bodyPartRisk["Hamstring"] = "Moderate"

        elif body_part in ["Ankle", "Foot"] and bodyPartRisk["Ankle"] == "Low":
            bodyPartRisk["Ankle"] = "Moderate"

    # -------------------------------
    # Heavy Training Load
    # -------------------------------

    intensity = training.get("trainingIntensity")

    if intensity in ["High", "Very High"]:

        if body_part == "Knee" and bodyPartRisk["Knee"] == "Moderate":
            bodyPartRisk["Knee"] = "High"

        elif body_part in ["Thigh", "Calf", "Groin"] and bodyPartRisk["Hamstring"] == "Moderate":
            bodyPartRisk["Hamstring"] = "High"

        elif body_part in ["Ankle", "Foot"] and bodyPartRisk["Ankle"] == "Moderate":
            bodyPartRisk["Ankle"] = "High"

    # ----------------------------------
    # Recommendations
    # ----------------------------------

    recommendations = []

    if prediction == "Low":

        recommendations = [
            "Continue your current training routine.",
            "Maintain good hydration and sleep habits.",
            "Keep performing warm-up and cool-down exercises."
        ]

    elif prediction == "Moderate":

        recommendations = [
            "Reduce training intensity for a few days.",
            "Improve sleep and recovery quality.",
            "Monitor any pain or fatigue closely."
        ]

    else:

        recommendations = [
            "High injury risk detected.",
            "Reduce training workload immediately.",
            "Consult a physiotherapist or sports doctor.",
            "Avoid high-intensity sessions until fully recovered."
        ]

    # ----------------------------------
    # Response
    # ----------------------------------

    return {

        "success": True,

        "risk_level": prediction,

        "confidence": confidence,

        "probabilities": probability_dict,

        "bodyPartRisk": bodyPartRisk,

        "recommendations": recommendations

    }
            
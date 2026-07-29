from fastapi import APIRouter

router = APIRouter()


@router.post("/assessment")
def create_assessment(data: dict):

    print("========== ASSESSMENT RECEIVED ==========")
    print(data)
    print("=========================================")

    # Get sections
    player = data.get("playerInfo", {})
    training = data.get("trainingLoad", {})
    recovery = data.get("recoveryLifestyle", {})
    injury = data.get("injuryHistory", {})

    score = 0
    breakdown = {}
    recommendations = []

    # -------------------------
    # Age
    # -------------------------
    age = int(player.get("age") or 0)

    if age >= 30:
        score += 10
        breakdown["Age"] = 10

    # -------------------------
    # Training Days
    # -------------------------
    training_days = int(training.get("trainingDays") or 0)

    if training_days >= 6:
        score += 20
        breakdown["Training Load"] = 20
        recommendations.append("Reduce weekly training load.")

    # -------------------------
    # Sleep
    # -------------------------
    sleep = float(recovery.get("sleepHours") or 8)

    if sleep < 7:
        score += 20
        breakdown["Recovery"] = 20
        recommendations.append("Sleep at least 8 hours every night.")

    # -------------------------
    # Water Intake
    # -------------------------
    water = float(recovery.get("waterIntake") or 2.5)

    if water < 2:
        score += 10
        breakdown["Hydration"] = 10
        recommendations.append("Increase daily water intake.")

    # -------------------------
    # Previous Injury
    # -------------------------
    if injury.get("previousInjury") == "Yes":
        score += 25
        breakdown["Previous Injury"] = 25
        recommendations.append(
            "Continue injury prevention exercises."
        )

    # -------------------------
    # Injury Count
    # -------------------------
    injury_count = int(injury.get("injuryCount") or 0)

    if injury_count >= 3:
        score += 15
        breakdown["Injury Count"] = 15
        recommendations.append(
            "Consult your physiotherapist before increasing workload."
        )

    # -------------------------
    # Fully Recovered
    # -------------------------
    if injury.get("fullyRecovered") == "No":
        score += 10
        breakdown["Recovery Status"] = 10
        recommendations.append(
            "Complete rehabilitation before returning to full training."
        )

    # -------------------------
    # Limit score
    # -------------------------
    score = min(score, 100)

    # -------------------------
    # Risk Level
    # -------------------------
    if score < 30:
        risk_level = "🟢 Low"

    elif score < 60:
        risk_level = "🟡 Moderate"

    else:
        risk_level = "🔴 High"

    if len(recommendations) == 0:
        recommendations.append(
            "Excellent! Keep maintaining your current training and recovery habits."
        )

    return {
        "success": True,
        "message": "Assessment received successfully!",
        "risk_score": score,
        "risk_level": risk_level,
        "recommendations": recommendations,
        "breakdown": breakdown,
    }
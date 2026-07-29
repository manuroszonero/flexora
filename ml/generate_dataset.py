import random
import pandas as pd
import os

NUM_PLAYERS = 5000

positions = [
    "Goalkeeper",
    "Defender",
    "Midfielder",
    "Forward"
]

risk_levels = []

players = []

for _ in range(NUM_PLAYERS):

    age = random.randint(14, 40)

    height = random.randint(155, 200)

    weight = random.randint(50, 100)

    position = random.choice(positions)

    training_days = random.randint(1, 7)

    training_hours = random.randint(1, 4)

    sleep_hours = round(random.uniform(4, 10), 1)

    water_intake = round(random.uniform(1, 5), 1)

    previous_injury = random.choice(["Yes", "No"])

    injury_count = random.randint(0, 5)

    fully_recovered = random.choice([
        "Yes",
        "No",
        "Not Sure"
    ])

    pain_level = random.randint(0, 10)

    fatigue = random.randint(0, 10)

    flexibility = random.randint(1, 10)

    score = 0

    if age >= 30:
        score += 10

    if training_days >= 6:
        score += 20

    if training_hours >= 3:
        score += 15

    if sleep_hours < 7:
        score += 20

    if water_intake < 2:
        score += 10

    if previous_injury == "Yes":
        score += 25

    if injury_count >= 3:
        score += 15

    if fully_recovered == "No":
        score += 10

    if pain_level >= 7:
        score += 20

    if fatigue >= 7:
        score += 15

    score = min(score, 100)

    if score < 30:
        risk = "Low"
    elif score < 60:
        risk = "Moderate"
    else:
        risk = "High"

    players.append({
        "Age": age,
        "Height": height,
        "Weight": weight,
        "Position": position,
        "TrainingDays": training_days,
        "TrainingHours": training_hours,
        "SleepHours": sleep_hours,
        "WaterIntake": water_intake,
        "PreviousInjury": previous_injury,
        "InjuryCount": injury_count,
        "FullyRecovered": fully_recovered,
        "PainLevel": pain_level,
        "Fatigue": fatigue,
        "Flexibility": flexibility,
        "RiskScore": score,
        "RiskLevel": risk
    })

os.makedirs("dataset", exist_ok=True)

df = pd.DataFrame(players)

df.to_csv(
    "dataset/football_injury_dataset.csv",
    index=False
)

print("=" * 50)
print("Football dataset generated successfully!")
print(f"Total players: {len(df)}")
print("Saved to dataset/football_injury_dataset.csv")
print("=" * 50)
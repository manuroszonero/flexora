import os
import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# -------------------------
# Load Dataset
# -------------------------

df = pd.read_csv("dataset/football_injury_dataset.csv")

print("=" * 50)
print("Dataset Loaded")
print(df.head())
print("=" * 50)

# -------------------------
# Features and Target
# -------------------------

X = df.drop(columns=["RiskLevel", "RiskScore"])
y = df["RiskLevel"]

# -------------------------
# Categorical Columns
# -------------------------

categorical_features = [
    "Position",
    "PreviousInjury",
    "FullyRecovered"
]

# -------------------------
# Numeric Columns
# -------------------------

numeric_features = [
    "Age",
    "Height",
    "Weight",
    "TrainingDays",
    "TrainingHours",
    "SleepHours",
    "WaterIntake",
    "InjuryCount",
    "PainLevel",
    "Fatigue",
    "Flexibility"
]

# -------------------------
# Preprocessing
# -------------------------

preprocessor = ColumnTransformer(
    transformers=[
        (
            "cat",
            OneHotEncoder(handle_unknown="ignore"),
            categorical_features,
        ),
        (
            "num",
            "passthrough",
            numeric_features,
        ),
    ]
)

# -------------------------
# Model
# -------------------------

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
)

pipeline = Pipeline(
    [
        ("preprocessor", preprocessor),
        ("model", model),
    ]
)

# -------------------------
# Train Test Split
# -------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

# -------------------------
# Train
# -------------------------

pipeline.fit(X_train, y_train)

# -------------------------
# Predict
# -------------------------

predictions = pipeline.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print("\nAccuracy:", round(accuracy * 100, 2), "%\n")

print(classification_report(y_test, predictions))

# -------------------------
# Save Model
# -------------------------

os.makedirs("models", exist_ok=True)

joblib.dump(
    pipeline,
    "models/injury_model.pkl",
)

print("=" * 50)
print("Model Saved Successfully!")
print("Location: models/injury_model.pkl")
print("=" * 50)
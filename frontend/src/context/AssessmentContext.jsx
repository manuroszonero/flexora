import { createContext, useState } from "react";

export const AssessmentContext = createContext();

export function AssessmentProvider({ children }) {
  const [assessmentData, setAssessmentData] = useState({
    playerInfo: {},
    trainingLoad: {},
    recoveryLifestyle: {},
    injuryHistory: {},
    symptoms: {},
    physicalCondition: {},
    equipmentEnvironment: {},
    playerGoals: {},
  });

  return (
    <AssessmentContext.Provider
      value={{ assessmentData, setAssessmentData }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}
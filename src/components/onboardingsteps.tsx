"use client";

import { useRecoilValue } from "recoil";
import { currentStepState } from "../store/onboarding";
import { CompanyStep } from "./steps/companystep";
import { DetailsStep } from "./steps/detailsstep";
import { ProfileStep } from "./steps/profilestep";
import { TeamStep } from "./steps/teamstep";

export function OnboardingSteps() {
  const currentStep = useRecoilValue(currentStepState);

  return (
    <>
      {currentStep === "company" && <CompanyStep />}
      {currentStep === "details" && <DetailsStep />}
      {currentStep === "profile" && <ProfileStep />}
      {currentStep === "team" && <TeamStep />}
    </>
  );
}

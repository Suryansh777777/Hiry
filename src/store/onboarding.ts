import { atom, selector, useSetRecoilState } from "recoil";
import type { OnboardingData, OnboardingStep } from "../types/onboarding";

// Base onboarding data state
export const onboardingDataState = atom<OnboardingData>({
  key: "onboardingData",
  default: {
    company: {
      name: "",
      website: "",
      linkedinProfile: "",
      logo: null,
    },
    details: {
      about: "",
      industry: "",
      location: "",
      languages: [],
      timezone: "",
    },
    profile: {
      firstName: "",
      lastName: "",
      position: "",
      avatar: null,
    },
    team: [],
  },
});

// Current step state
export const currentStepState = atom<OnboardingStep>({
  key: "currentStep",
  default: "company",
});

// Step completion state
export const completedStepsState = atom<Record<OnboardingStep, boolean>>({
  key: "completedSteps",
  default: {
    company: false,
    details: false,
    profile: false,
    team: false,
  },
});

// Validation errors state
export const errorsState = atom<Record<string, Record<string, string>>>({
  key: "errors",
  default: {},
});

// Selector to check if a step is complete
export const isStepCompleteState = selector({
  key: "isStepComplete",
  get: ({ get }) => get(completedStepsState),
});

// Action to mark step as complete
export const useMarkStepComplete = () => {
  const setCompletedSteps = useSetRecoilState(completedStepsState);
  return (stepId: OnboardingStep) => {
    setCompletedSteps((prev: Record<OnboardingStep, boolean>) => ({
      ...prev,
      [stepId]: true,
    }));
  };
};
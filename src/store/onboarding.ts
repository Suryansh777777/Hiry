import { atom, selector } from "recoil";
import type { OnboardingData, OnboardingStep } from "../types/onboarding";

const defaultData: OnboardingData = {
  company: { logo: null, name: "", website: "", linkedinProfile: "" },
  details: {
    about: "",
    industry: "",
    location: "",
    languages: [],
    timezone: "",
  },
  profile: { avatar: null, firstName: "", lastName: "", position: "" },
  team: [],
};

export const currentStepState = atom<OnboardingStep>({
  key: "currentStepState",
  default: "company",
});

export const onboardingDataState = atom<OnboardingData>({
  key: "onboardingDataState",
  default: defaultData,
});

export const errorsState = atom<Record<OnboardingStep, Record<string, string>>>(
  {
    key: "errorsState",
    default: {
      company: {},
      details: {},
      profile: {},
      team: {},
    },
  }
);

export const isStepCompleteState = selector<Record<OnboardingStep, boolean>>({
  key: "isStepCompleteState",
  get: ({ get }) => {
    const data = get(onboardingDataState);
    
    return {
      company: Boolean(
        data.company.name &&
        data.company.website &&
        data.company.linkedinProfile
      ),
      details: Boolean(
        data.details.about &&
        data.details.industry &&
        data.details.location &&
        data.details.timezone
      ),
      profile: Boolean(
        data.profile.firstName &&
        data.profile.lastName &&
        data.profile.position
      ),
      team: true, // Team step is optional
    };
  },
});

export const stepTransitionState = atom({
  key: 'stepTransitionState',
  default: {
    isTransitioning: false,
    from: null as OnboardingStep | null,
    to: null as OnboardingStep | null,
  },
});

// Helper function to handle step transitions
export const transitionToNextStep = selector({
  key: 'transitionToNextStep',
  get: ({ get }) => {
    const currentStep = get(currentStepState);
    const stepOrder: OnboardingStep[] = ["company", "details", "profile", "team"];
    const currentIndex = stepOrder.indexOf(currentStep);
    return stepOrder[currentIndex + 1];
  },
});

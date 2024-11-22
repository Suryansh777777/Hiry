export type OnboardingStep = "company" | "details" | "profile" | "team";

export interface CompanyInfo {
  logo: string | null;
  name: string;
  website: string;
  linkedinProfile: string;
}

export interface CompanyDetails {
  about: string;
  industry: string;
  location: string;
  languages: string[];
  timezone: string;
}

export interface UserProfile {
  avatar: string | null;
  firstName: string;
  lastName: string;
  position: string;
}

export interface TeamMember {
  email: string;
  role: "Member" | "Admin";
}

export interface OnboardingData {
  company: CompanyInfo;
  details: CompanyDetails;
  profile: UserProfile;
  team: TeamMember[];
}

export interface StepProps {
  onNext: () => void;
  onPrevious: () => void;
}

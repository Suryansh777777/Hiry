import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
  markStepCompleteAction,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";
import { AboutField } from "../forms/AboutField";
import { SelectField } from "../forms/SelectField";
import { LanguageSelect } from "../forms/LanguageSelect";
import { BackButton } from "../steps/BackButton";

const INDUSTRY_OPTIONS = [
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "retail", label: "Retail" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

const LOCATION_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "eu", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "other", label: "Other" },
];

const TIMEZONE_OPTIONS = [
  { value: "gmt-8", label: "(GMT-8) Pacific Time" },
  { value: "gmt-5", label: "(GMT-5) Eastern Time" },
  { value: "gmt+0", label: "(GMT+0) Greenwich Mean Time" },
  { value: "gmt+5.5", label: "(GMT+5:30) India Standard Time" },
  { value: "other", label: "Other" },
];

export function DetailsStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const setStepComplete = useSetRecoilState(markStepCompleteAction);
  const { toast } = useToast();

  const { details } = data;
  const detailsErrors = errors.details || {};

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!details.about?.trim()) {
      newErrors.about = "About company is required";
    } else if (details.about.length > 500) {
      newErrors.about = "About company must be less than 500 characters";
    }
    if (!details.industry) newErrors.industry = "Industry is required";
    if (!details.location) newErrors.location = "Location is required";
    if (!details.languages?.length)
      newErrors.languages = "At least one language is required";
    if (!details.timezone) newErrors.timezone = "Timezone is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors((prev) => ({ ...prev, details: validationErrors }));
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields before proceeding.",
      });
      return;
    }

    try {
      setStepComplete("details");
      setCurrentStep("profile");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save company details. Please try again.",
      });
    }
  };

  const updateDetailsData = (field: keyof typeof details, value: any) => {
    setData((prev) => ({
      ...prev,
      details: { ...prev.details, [field]: value },
    }));
  };

  return (
    <StepLayout
      step={2}
      title="Details"
      description="Provide additional information to help us find you better matches."
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="space-y-6 text-gray-900">
          <div className="space-y-5">
            <AboutField
              value={details.about}
              onChange={(value) => updateDetailsData("about", value)}
            />

            <SelectField
              id="industry"
              label="Industry"
              description="What industry does your company operate in?"
              value={details.industry}
              onChange={(value) => updateDetailsData("industry", value)}
              options={INDUSTRY_OPTIONS}
              placeholder="Select industry"
              error={detailsErrors.industry}
            />

            <SelectField
              id="location"
              label="Location"
              value={details.location}
              onChange={(value) => updateDetailsData("location", value)}
              options={LOCATION_OPTIONS}
              placeholder="Select location"
              error={detailsErrors.location}
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 8.75C12.5 10.1307 11.3807 11.25 10 11.25C8.61929 11.25 7.5 10.1307 7.5 8.75C7.5 7.36929 8.61929 6.25 10 6.25C11.3807 6.25 12.5 7.36929 12.5 8.75Z"
                    stroke="#71717A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.25 8.75C16.25 14.7018 10 18.125 10 18.125C10 18.125 3.75 14.7018 3.75 8.75C3.75 5.29822 6.54822 2.5 10 2.5C13.4518 2.5 16.25 5.29822 16.25 8.75Z"
                    stroke="#71717A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <LanguageSelect
              value={details.languages || []}
              onChange={(languages) =>
                updateDetailsData("languages", languages)
              }
              error={detailsErrors.languages}
            />

            <SelectField
              id="timezone"
              label="Timezone"
              value={details.timezone}
              onChange={(value) => updateDetailsData("timezone", value)}
              options={TIMEZONE_OPTIONS}
              placeholder="Select timezone"
              error={detailsErrors.timezone}
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#71717A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-12">
          <Button
            type="submit"
            className="flex-1 rounded-3xl py-3 bg-electric-dark"
          >
            Continue
          </Button>
          <BackButton onClick={() => setCurrentStep("company")} />
        </div>
      </form>
    </StepLayout>
  );
}

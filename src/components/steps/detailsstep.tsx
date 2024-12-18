import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
  completedStepsState,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";
import { AboutField } from "../forms/AboutField";
import { SelectField } from "../forms/SelectField";
import { LanguageSelect } from "../forms/LanguageSelect";
import { BackButton } from "../forms/BackButton";
import {
  INDUSTRY_OPTIONS,
  LOCATION_OPTIONS,
  TIMEZONE_OPTIONS,
} from "@/store/data";
import { LocationIcon, TimezoneIcon } from "../icons";

export function DetailsStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const setCompletedSteps = useSetRecoilState(completedStepsState);
  const { toast } = useToast();

  const { details } = data;
  const detailsErrors = errors.details || {};

  const markStepComplete = () => {
    setCompletedSteps((prev) => ({
      ...prev,
      details: true,
    }));
  };

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
      markStepComplete();
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
              icon={<LocationIcon />}
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
              icon={<TimezoneIcon />}
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

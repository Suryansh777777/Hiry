"use client";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
  markStepCompleteAction,
  completedStepsState,
} from "../../store/onboarding";
import { LogoUpload } from "../ui/logoupload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";
import { FormField } from "../forms/FormField";

export function CompanyStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const setErrors = useSetRecoilState(errorsState);
  const errors = useRecoilValue(errorsState);
  const setStepComplete = useSetRecoilState(markStepCompleteAction);
  const { toast } = useToast();

  const { company } = data;
  const companyErrors = errors?.company || {};

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!company.name) newErrors.name = "Company name is required";
    if (!company.website) newErrors.website = "Website is required";
    if (!company.linkedinProfile)
      newErrors.linkedinProfile = "LinkedIn profile is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors((prev) => ({ ...prev, company: validationErrors }));
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields before proceeding.",
      });
      return;
    }

    try {
      setStepComplete("company");
      setCurrentStep("details");

      // toast({
      //   title: "Success",
      //   description: "Company information saved successfully.",
      // });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save company information. Please try again.",
      });
    }
  };

  const updateCompanyData = (
    field: keyof typeof company,
    value: string | null
  ) => {
    setData((prev) => ({
      ...prev,
      company: { ...prev.company, [field]: value },
    }));
  };

  return (
    <StepLayout
      step={1}
      title="Company info"
      description="To build a trusted community, we verify all companies on our platform.Providing your website and Linkedin Profile allows us to confirm legitimacy and keep standards"
    >
      <form onSubmit={handleSubmit} className="flex  flex-col">
        <div className="space-y-6 text-gray-900">
          <LogoUpload
            onUpload={(file) =>
              updateCompanyData("logo", URL.createObjectURL(file))
            }
            onRemove={() => updateCompanyData("logo", null)}
            logo={company.logo}
            companyInitial={company.name.charAt(0)}
          />

          <div className="space-y-5">
            <FormField
              id="name"
              label="Company name"
              error={companyErrors.name}
            >
              <Input
                id="name"
                className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400"
                value={company.name}
                onChange={(e) => updateCompanyData("name", e.target.value)}
                placeholder="Acme Inc."
              />
            </FormField>

            <FormField
              id="website"
              label="Website"
              error={companyErrors.website}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <Link className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="website"
                  value={company.website}
                  onChange={(e) => updateCompanyData("website", e.target.value)}
                  className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400 pl-9"
                  placeholder="acme.inc"
                />
              </div>
            </FormField>

            <FormField
              id="linkedin"
              label="LinkedIn profile"
              error={companyErrors.linkedinProfile}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  linkedin.com/
                </div>
                <Input
                  id="linkedin"
                  value={company.linkedinProfile}
                  onChange={(e) =>
                    updateCompanyData("linkedinProfile", e.target.value)
                  }
                  className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400 pl-28"
                  placeholder="username"
                />
              </div>
            </FormField>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <Button
            type="submit"
            className="flex-1 rounded-3xl py-3 bg-electric-dark"
          >
            Continue
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

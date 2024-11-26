"use client";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
  markStepCompleteAction,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoUpload } from "../ui/logoupload";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { FormField } from "../forms/FormField";
import { BackButton } from "./BackButton";

export function ProfileStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const setStepComplete = useSetRecoilState(markStepCompleteAction);

  const { toast } = useToast();

  const { profile, company } = data;
  const profileErrors = errors.profile || {};

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!profile.firstName) newErrors.firstName = "First name is required";
    if (!profile.lastName) newErrors.lastName = "Last name is required";
    if (!profile.position) newErrors.position = "Position is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors((prev) => ({ ...prev, profile: validationErrors }));
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields before proceeding.",
      });
      return;
    }

    try {
      setStepComplete("profile");

      setCurrentStep("team");

      // toast({
      //   title: "Success",
      //   description: "Profile information saved successfully.",
      // });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save profile information. Please try again.",
      });
    }
  };

  const updateProfileData = (
    field: keyof typeof profile,
    value: string | null
  ) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  return (
    <StepLayout
      step={3}
      title="Your profile"
      description="Tell us about yourself"
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="space-y-6 text-gray-900">
          <LogoUpload
            onUpload={(file) =>
              updateProfileData("avatar", URL.createObjectURL(file))
            }
            onRemove={() => updateProfileData("avatar", null)}
            logo={profile.avatar}
            companyInitial={profile.firstName.charAt(0)}
          />

          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                id="firstName"
                label="First name"
                error={profileErrors.firstName}
              >
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) =>
                    updateProfileData("firstName", e.target.value)
                  }
                  placeholder="Jane"
                  className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400"
                />
              </FormField>

              <FormField
                id="lastName"
                label="Last name"
                error={profileErrors.lastName}
              >
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) =>
                    updateProfileData("lastName", e.target.value)
                  }
                  placeholder="Doe"
                  className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400"
                />
              </FormField>
            </div>

            <FormField
              id="position"
              label={`What do you do at ${company.name || "your company"}?`}
              error={profileErrors.position}
            >
              <Input
                id="position"
                value={profile.position}
                onChange={(e) => updateProfileData("position", e.target.value)}
                placeholder="Your position"
                className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400"
              />
            </FormField>
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-12">
          <Button
            type="submit"
            className="flex-1 rounded-3xl py-3 bg-electric-dark"
          >
            Continue
          </Button>
          <BackButton onClick={() => setCurrentStep("details")} />
        </div>
      </form>
    </StepLayout>
  );
}

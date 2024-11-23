"use client";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoUpload } from "../ui/logoupload";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";

export function ProfileStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const setErrors = useSetRecoilState(errorsState);
  const { profile, company } = data;
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!profile.firstName) newErrors.firstName = "First name is required";
    if (!profile.lastName) newErrors.lastName = "Last name is required";
    if (!profile.position) newErrors.position = "Position is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, profile: newErrors }));
    } else {
      if (!profile.firstName || !profile.lastName || !profile.position) {
        toast({
          variant: "destructive",
          title: "Incomplete Profile",
          description: "Please fill in all profile information before continuing.",
        });
        return;
      }
      setCurrentStep("team");
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <LogoUpload
          onUpload={(file) =>
            updateProfileData("avatar", URL.createObjectURL(file))
          }
          onRemove={() => updateProfileData("avatar", null)}
          logo={profile.avatar}
          companyInitial={profile.firstName.charAt(0)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={profile.firstName}
              onChange={(e) => updateProfileData("firstName", e.target.value)}
              placeholder="Jane"
              aria-describedby="firstName-error"
            />
          </div>

          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={profile.lastName}
              onChange={(e) => updateProfileData("lastName", e.target.value)}
              placeholder="Doe"
              aria-describedby="lastName-error"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="position">
            What do you do at {company.name || "your company"}?
          </Label>
          <Input
            id="position"
            value={profile.position}
            onChange={(e) => updateProfileData("position", e.target.value)}
            placeholder="Your position"
            aria-describedby="position-error"
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep("details")}
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Continue
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

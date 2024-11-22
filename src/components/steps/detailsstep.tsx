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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StepLayout } from "../steplayout";

export function DetailsStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const setErrors = useSetRecoilState(errorsState);
  const { details } = data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!details.about) newErrors.about = "About company is required";
    if (!details.industry) newErrors.industry = "Industry is required";
    if (!details.location) newErrors.location = "Location is required";
    if (!details.timezone) newErrors.timezone = "Timezone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, details: newErrors }));
    } else {
      setCurrentStep("profile");
    }
  };

  const updateDetailsData = (
    field: keyof typeof details,
    value: string | string[]
  ) => {
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="about">About company</Label>
            <Textarea
              id="about"
              value={details.about}
              onChange={(e) => updateDetailsData("about", e.target.value)}
              placeholder="What does your company do?"
              className="h-32"
              aria-describedby="about-error"
            />
            <div className="mt-1 flex justify-between">
              <p className="text-sm text-gray-500">
                {`${details.about.length}/100`}
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="industry">Industry</Label>
            <Select
              value={details.industry}
              onValueChange={(value) => updateDetailsData("industry", value)}
            >
              <SelectTrigger id="industry" aria-describedby="industry-error">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Select
              value={details.location}
              onValueChange={(value) => updateDetailsData("location", value)}
            >
              <SelectTrigger id="location" aria-describedby="location-error">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="eu">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timezone">Timezone</Label>
            <Select
              value={details.timezone}
              onValueChange={(value) => updateDetailsData("timezone", value)}
            >
              <SelectTrigger id="timezone" aria-describedby="timezone-error">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="ist">India (IST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep("company")}
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

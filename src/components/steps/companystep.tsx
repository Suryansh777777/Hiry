"use client";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  errorsState,
} from "../../store/onboarding";
import { LogoUpload } from "../ui/logoupload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { StepLayout } from "../steplayout";

export function CompanyStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const setErrors = useSetRecoilState(errorsState);

  const { company } = data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!company.name) newErrors.name = "Company name is required";
    if (!company.website) newErrors.website = "Website is required";
    if (!company.linkedinProfile)
      newErrors.linkedinProfile = "LinkedIn profile is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, company: newErrors }));
    } else {
      setCurrentStep("details");
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
      description="To build a trusted community, we verify all companies on our platform. Providing your website and LinkedIn profile allows us to confirm legitimacy and keep standards high."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <LogoUpload
          onUpload={(file) =>
            updateCompanyData("logo", URL.createObjectURL(file))
          }
          onRemove={() => updateCompanyData("logo", null)}
          logo={company.logo}
          companyInitial={company.name.charAt(0)}
        />

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Company name</Label>
            <Input
              id="name"
              value={company.name}
              onChange={(e) => updateCompanyData("name", e.target.value)}
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Link className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="website"
                value={company.website}
                onChange={(e) => updateCompanyData("website", e.target.value)}
                className="pl-9"
                placeholder="acme.inc"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="linkedin">LinkedIn profile</Label>
            <Input
              id="linkedin"
              value={company.linkedinProfile}
              onChange={(e) =>
                updateCompanyData("linkedinProfile", e.target.value)
              }
              placeholder="linkedin.com/company/acme-inc"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </StepLayout>
  );
}

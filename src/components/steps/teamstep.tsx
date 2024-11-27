import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { StepLayout } from "../steplayout";
import { useToast } from "@/components/ui/use-toast";
import { TeamMemberField } from "../forms/TeamMemberField";
import type { TeamMember } from "@/types/onboarding";
import { useMarkStepComplete } from "../../store/onboarding";

export function TeamStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<number, string>>({});
  const markStepComplete = useMarkStepComplete();

  useState(() => {
    if (data.team.length === 0) {
      setData((prev) => ({
        ...prev,
        team: [{ email: "", role: "Member" }],
      }));
    }
  });

  const validateMember = (email: string, index: number) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Invalid email format";

    const duplicateIndex = data.team.findIndex(
      (member, i) =>
        i !== index && member.email.toLowerCase() === email.toLowerCase()
    );
    if (duplicateIndex !== -1) {
      return "This team member has already been added";
    }
    return null;
  };

  const addMember = () => {
    setData((prev) => ({
      ...prev,
      team: [...prev.team, { email: "", role: "Member" }],
    }));
  };

  const removeMember = (index: number) => {
    if (data.team.length <= 1) {
      toast({
        variant: "destructive",
        description: "You must have at least one team member.",
      });
      return;
    }

    setData((prev) => ({
      ...prev,
      team: prev.team.filter((_, i) => i !== index),
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const updateMember = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      team: prev.team.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      ),
    }));

    if (field === "email") {
      const error = validateMember(value, index);
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (error) {
          newErrors[index] = error;
        } else {
          delete newErrors[index];
        }
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all members
    const newErrors: Record<number, string> = {};
    let hasErrors = false;

    data.team.forEach((member, index) => {
      const error = validateMember(member.email, index);
      if (error) {
        newErrors[index] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check all team member details are valid.",
      });
      return;
    }

    try {
      markStepComplete("team");
      toast({
        title: "Success",
        description: "Onboarding completed successfully!",
      });
      console.log("Final onboarding data:", data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to complete onboarding. Please try again.",
      });
    }
  };

  const handleSkip = () => {
    markStepComplete("team");
    toast({
      title: "Skipped",
      description: "You can always add team members later.",
    });
  };

  return (
    <StepLayout
      step={4}
      title="Invite team members"
      description="Get your team on Hiry to keep everyone up to date in your hiring process."
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="space-y-6 text-gray-900">
          <div className="space-y-5">
            {data.team.map((member, index) => (
              <TeamMemberField
                key={index}
                member={member}
                index={index}
                error={errors[index]}
                onUpdate={updateMember}
                onRemove={removeMember}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addMember}
              className="flex items-center gap-2 h-10 rounded-3xl shadow-none"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add invite
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <Button
            type="submit"
            className="flex-1 rounded-3xl py-3 bg-electric-dark"
          >
            Continue
          </Button>
          <div className="flex justify-between items-center gap-4">
            <div
              onClick={() => setCurrentStep("profile")}
              className="text-gray-500 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </div>
            <Button
              type="button"
              variant="ghost"
              onClick={handleSkip}
              className="text-gray-500"
            >
              Skip for now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </form>
    </StepLayout>
  );
}

"use client";

import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  onboardingDataState,
  currentStepState,
  markStepCompleteAction,
} from "../../store/onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import type { TeamMember } from "../../types/onboarding";
import { StepLayout } from "../steplayout";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

export function TeamStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const setStepComplete = useSetRecoilState(markStepCompleteAction);
  const [newMember, setNewMember] = useState<TeamMember>({
    email: "",
    role: "Member",
  });
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateMember = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format";
    if (data.team.some((member) => member.email === email)) {
      return "This team member has already been added";
    }
    return null;
  };

  const addMember = () => {
    const validationError = validateMember(newMember.email);
    if (validationError) {
      setError(validationError);
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: validationError,
      });
      return;
    }

    setData((prev) => ({
      ...prev,
      team: [...prev.team, newMember],
    }));
    setNewMember({ email: "", role: "Member" });
    setError(null);
    toast({
      title: "Success",
      description: "Team member added successfully.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // For the final step, we'll mark it complete even if there are no team members
      setStepComplete("team");

      toast({
        title: "Success",
        description: "Onboarding completed successfully!",
      });

      // Here you would typically submit the final data to your backend
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
    setStepComplete("team");
    toast({
      title: "Skipped",
      description: "You can always add team members later.",
    });
    // Handle skip action (e.g., redirect to dashboard)
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
            <div className="space-y-2">
              <Label>Team member details</Label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={newMember.email}
                    onChange={(e) => {
                      setNewMember({ ...newMember, email: e.target.value });
                      setError(null);
                    }}
                    placeholder="example@email.com"
                    className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400"
                    aria-invalid={error ? "true" : "false"}
                    aria-describedby={error ? "email-error" : undefined}
                  />
                  {error && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {error}
                    </p>
                  )}
                </div>
                <Select
                  value={newMember.role}
                  onValueChange={(value) =>
                    setNewMember({
                      ...newMember,
                      role: value as "Member" | "Admin",
                    })
                  }
                >
                  <SelectTrigger className="w-[140px] h-10 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={addMember}
              className="flex items-center gap-2 h-10 rounded-xl"
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
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

"use client";

import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { onboardingDataState, currentStepState } from "../../store/onboarding";
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

export function TeamStep() {
  const [data, setData] = useRecoilState(onboardingDataState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const [newMember, setNewMember] = useState<TeamMember>({
    email: "",
    role: "Member",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
    console.log("Final onboarding data:", data);
  };

  const addMember = () => {
    if (newMember.email) {
      setData((prev) => ({
        ...prev,
        team: [...prev.team, newMember],
      }));
      setNewMember({ email: "", role: "Member" });
      setError(null);
    } else {
      setError("Email is required");
    }
  };

  return (
    <StepLayout
      step={4}
      title="Invite team members"
      description="Get your team on Hiry to keep everyone up to date in your hiring process."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
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
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Member">Member</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={addMember}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add invite
          </Button>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep("profile")}
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Continue
          </Button>
          <Button type="button" variant="ghost">
            Skip for now
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

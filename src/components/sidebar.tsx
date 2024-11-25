"use client";

import { useRecoilValue } from "recoil";
import { currentStepState, completedStepsState } from "../store/onboarding";
import type { OnboardingStep } from "../types/onboarding";
import { cn } from "@/lib/utils";
import { CompanyIcon, DetailsIcon, ProfileIcon, TeamIcon } from "./icons";
import { Check } from "lucide-react";

interface SidebarItem {
  id: OnboardingStep;
  icon: React.FC<{ className?: string }>;
  label: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "company", icon: CompanyIcon, label: "Company info" },
  { id: "details", icon: DetailsIcon, label: "Details" },
  { id: "profile", icon: ProfileIcon, label: "Your profile" },
  { id: "team", icon: TeamIcon, label: "Invite team" },
];

export function Sidebar() {
  const currentStep = useRecoilValue(currentStepState);
  const completedSteps = useRecoilValue(completedStepsState);

  const getStepStatus = (stepId: OnboardingStep) => {
    const stepIndex = sidebarItems.findIndex(item => item.id === stepId);
    const currentIndex = sidebarItems.findIndex(item => item.id === currentStep);

    if (completedSteps[stepId]) return "completed";
    if (stepId === currentStep) return "current";
    if (stepIndex < currentIndex) return "past";
    return "upcoming";
  };

  return (
    <aside className="w-96 bg-white px-10 py-10">
      <nav className="relative">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const status = getStepStatus(item.id);

          return (
            <div key={item.id} className="relative">
              <div className="flex items-center gap-1">
                <div
                  className={cn(
                    "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
                    {
                      "bg-neon": status === "completed",
                      "bg-white rounded-full border border-gray-200 shadow-xl": status === "current",
                      "bg-lavender": status === "upcoming" || status === "past",
                    }
                  )}
                >
                  {status === "completed" ? (
                    <Check className="h-5 w-5 text-lime transition-all duration-300" />
                  ) : (
                    <Icon
                      className={cn("h-5 w-5 transition-all duration-300", {
                        "text-white": status === "current",
                        "text-gray-400": status === "upcoming" || status === "past",
                      })}
                    />
                  )}
                </div>

                <span
                  className={cn("text-md transition-all duration-300", {
                    "font-semibold text-gray-900": status === "current",
                    "text-gray-900": status === "completed",
                    "text-gray-500": status === "upcoming" || status === "past",
                  })}
                >
                  {item.label}
                </span>
              </div>

              {index < sidebarItems.length - 1 && (
                <div className="relative ml-4 h-8">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 w-0.5 transition-all duration-500",
                      {
                        "bg-emerald-500": status === "completed",
                        "border-l-2 border-dashed border-gray-200": status !== "completed",
                      }
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

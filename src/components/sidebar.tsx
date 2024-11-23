"use client";

import { Building2, PenLine, UserCircle, Users, Check } from "lucide-react";
import { useRecoilValue } from "recoil";
import { currentStepState, isStepCompleteState } from "../store/onboarding";
import type { OnboardingStep } from "../types/onboarding";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: OnboardingStep;
  icon: typeof Building2;
  label: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "company", icon: Building2, label: "Company info" },
  { id: "details", icon: PenLine, label: "Details" },
  { id: "profile", icon: UserCircle, label: "Your profile" },
  { id: "team", icon: Users, label: "Invite team" },
];

export function Sidebar() {
  const currentStep = useRecoilValue(currentStepState);
  const isStepComplete = useRecoilValue(isStepCompleteState);

  const getStepStatus = (stepId: OnboardingStep) => {
    const stepIndex = sidebarItems.findIndex(item => item.id === stepId);
    const currentIndex = sidebarItems.findIndex(item => item.id === currentStep);
    
    if (isStepComplete[stepId]) return "completed";
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
              <div className="flex items-center gap-1 ">
                {/* Icon Container */}
                <div
                  className={cn(
                    "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
                    {
                      "bg-emerald-50": status === "completed",
                      "bg-blue-600": status === "current",
                      "bg-gray-100": status === "upcoming" || status === "past",
                    }
                  )}
                >
                  {status === "completed" ? (
                    <Check className="h-5 w-5 text-emerald-500 transition-all duration-300" />
                  ) : (
                    <Icon
                      className={cn("h-5 w-5 transition-all duration-300", {
                        "text-white": status === "current",
                        "text-gray-400": status === "upcoming" || status === "past",
                      })}
                    />
                  )}
                </div>

                {/* Label */}
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

              {/* Connector Line */}
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

"use client";

import { OnboardingSteps } from "@/components/onboardingsteps";
import { Sidebar } from "@/components/sidebar";
import { RecoilRoot } from "recoil";
import Navbar from "@/components/Navbar";

export default function CompanyOnboarding() {
  return (
    <RecoilRoot>
      <Navbar />
      <div className="flex min-h-screen bg-white pt-16">
        <Sidebar />
        <main className="px-20 py-8">
          <OnboardingSteps />
        </main>
      </div>
    </RecoilRoot>
  );
}

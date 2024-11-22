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
        <main className="flex-1 px-6 py-12 lg:px-12 xl:px-24 max-w-[1200px]">
          <OnboardingSteps />
        </main>
      </div>
    </RecoilRoot>
  );
}

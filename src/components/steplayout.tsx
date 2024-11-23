import { PropsWithChildren } from "react";

interface StepLayoutProps {
  step: number;
  title: string;
  description: string;
}

export function StepLayout({
  step,
  title,
  description,
  children,
}: PropsWithChildren<StepLayoutProps>) {
  return (
    <div className="px-10 max-w-lg ">
      <div className="mb-8 ">
        <h2 className="mb-3 text-md font-medium text-gray-500">
          Step {step}/4
        </h2>
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">{title}</h1>
        <p className="text-base text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  );
}

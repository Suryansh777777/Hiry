import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <div
      onClick={onClick}
      className="pl-3 text-gray-500 font-semibold flex items-center gap-2 cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </div>
  );
}

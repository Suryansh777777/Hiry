import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
    return (
        <div
            onClick={onClick}
            className="text-gray-500 font-semibold flex items-center gap-1 cursor-pointer"
        >
            <ArrowLeft className="w-4 h-4" />
            Back
        </div>
    );
}
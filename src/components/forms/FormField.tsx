import React from 'react';
import { Label } from "@/components/ui/label";

interface FormFieldProps {
    id: string;
    label: string;
    description?: string;
    children: React.ReactNode;
    error?: string;
}

export function FormField({ id, label, description, children, error }: FormFieldProps) {
    return (
        <div className="space-y-1 pt-0.5 ">
            <Label className="tracking-tight" htmlFor={id}>{label}</Label>
            {description && (
                <p className="text-xs tracking-tight text-gray-500">{description}</p>
            )}
            {children}
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FormField } from './FormField';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    id: string;
    label: string;
    description?: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    icon?: React.ReactNode;
    placeholder?: string;
    error?: string;
}

export function SelectField({
    id,
    label,
    description,
    value,
    onChange,
    options,
    icon,
    placeholder = "Select an option",
    error
}: SelectFieldProps) {
    return (
        <FormField id={id} label={label} description={description} error={error}>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger id={id} className="h-10 rounded-xl shadow-none">
                    <div
                        className={`flex items-center gap-2 text-base ${value ? "text-black" : "text-gray-500"
                            }`}
                    >
                        {icon}
                        <SelectValue placeholder={placeholder} />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FormField>
    );
}
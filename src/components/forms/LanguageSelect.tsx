import React, { useState } from 'react';
import { Languages, X, ChevronDown } from 'lucide-react';
import { FormField } from '../forms/FormField';

const LANGUAGES = [
    'English',
    'French',
    'Spanish',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Portuguese',
    'Italian',
    'Hindi'
];

interface LanguageSelectProps {
    value: string[];
    onChange: (languages: string[]) => void;
    error?: string;
}

export function LanguageSelect({ value, onChange, error }: LanguageSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (language: string) => {
        onChange(
            value.includes(language)
                ? value.filter(l => l !== language)
                : [...value, language]
        );
    };

    const removeLanguage = (e: React.MouseEvent, language: string) => {
        e.stopPropagation();
        onChange(value.filter(l => l !== language));
    };

    return (
        <div className="w-full">
            <FormField
                id="languages"
                label="Languages"
                description="Select languages that you speak professionally"
                error={error}
            >
                <div className="relative">
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }}
                        className={`bg-white relative w-full cursor-pointer rounded-xl  border ${isOpen ? 'border-gray-300 ring-0 ring-gray-400' : 'border-gray-300'
                            } min-h-11 px-3 py-0 flex items-center gap-2 flex-wrap`}
                    ><div className="flex items-center text-gray-500 gap-2">
                            <Languages className="w-5 h-5" />
                            {value.length === 0 && (
                                <span>Select languages</span>

                            )}
                        </div>
                        {value.map(lang => (
                            <span
                                key={lang}
                                className="inline-flex items-center gap-1 border border-gray-200 rounded-3xl pl-3 pr-2 py-1 text-sm"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {lang}
                                <button
                                    type="button"
                                    onClick={(e) => removeLanguage(e, lang)}
                                    className="hover:bg-gray-200 rounded-full p-0.5"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            }}
                        >
                            <ChevronDown
                                className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg border border-gray-200 shadow-lg max-h-60 overflow-auto">
                            {LANGUAGES.map(language => (
                                <div
                                    key={language}
                                    onClick={() => toggleLanguage(language)}
                                    className={`px-4 py-2 cursor-pointer flex items-center justify-between ${value.includes(language)
                                        ? 'bg-gray-50 text-gray-600'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >
                                    {language}
                                    {value.includes(language) && (
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-600 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-600" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </FormField>
        </div>
    );
}
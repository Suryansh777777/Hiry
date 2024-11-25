export const LANGUAGE_OPTIONS = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Italian", label: "Italian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Russian", label: "Russian" },
  { value: "Chinese", label: "Chinese (Mandarin)" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Arabic", label: "Arabic" },
  { value: "Hindi", label: "Hindi" },
  { value: "Dutch", label: "Dutch" },
  { value: "Swedish", label: "Swedish" },
  { value: "Polish", label: "Polish" },
].sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically

export const TIMEZONE_OPTIONS = [
    { value: "GMT-12", label: "(GMT-12:00) International Date Line West" },
    { value: "GMT-11", label: "(GMT-11:00) Midway Island, Samoa" },
    { value: "GMT-10", label: "(GMT-10:00) Hawaii" },
    { value: "GMT-9", label: "(GMT-09:00) Alaska" },
    { value: "GMT-8", label: "(GMT-08:00) Pacific Time (US & Canada)" },
    { value: "GMT-0", label: "(GMT-0) Greenwich Mean Time" },
    // Add more 
  ];
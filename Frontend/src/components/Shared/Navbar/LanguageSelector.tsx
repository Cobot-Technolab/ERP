import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Icons for dropdown
import Flag from "react-world-flags";
import clsx from "clsx"; // For conditional styling (optional)
import { cn } from "@/lib/utils";

// Language options with flag icons
const languageOptions = [
  { value: "en", label: "English", flag: <Flag code="US" style={{ width: 22, aspectRatio: 5/3 }}/>},
  { value: "fr", label: "Français", flag: <Flag code="FR" style={{ width: 22, aspectRatio: 5/3 }}/>},
  { value: "es", label: "Español", flag: <Flag code="ES" style={{ width: 22, aspectRatio: 5/3 }}/>},
  { value: "np", label: "नेपाली", flag: <Flag code="NP" style={{ width: 22, aspectRatio: 5/3 }}/>},
];

function LanguageSelector({className}: {className?: string}) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center justify-between border rounded-lg px-4 py-[10px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg w-[25px]">
              {
                languageOptions.find((lang) => lang.value === selectedLanguage)
                  ?.flag
              }
            </span>
            <span>
              {
                languageOptions.find((lang) => lang.value === selectedLanguage)
                  ?.value.toUpperCase()
              }
            </span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-500 ml-2" />
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-[160px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {languageOptions.map((lang) => (
              <button
                key={lang.value}
                className={clsx(
                  "w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-100",
                  selectedLanguage === lang.value && "bg-gray-200"
                )}
                onClick={() => {
                  setSelectedLanguage(lang.value);
                  setIsOpen(false);
                }}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSelector;

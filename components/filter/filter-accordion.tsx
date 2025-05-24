"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import type { FilterSection } from "@/types";
import { PriceRangeFilter } from "./price-range-filter";

interface FilterAccordionProps {
  section: FilterSection;
  onToggleSection: (sectionId: string) => void;
  onToggleOption: (optionId: string) => void;
}

export function FilterAccordion({
  section,
  onToggleSection,
  onToggleOption,
}: FilterAccordionProps) {
  const selectedPriceRange =
    section.type === "price-range"
      ? section.options.find((option) => option.checked)?.id || null
      : null;

  const handlePriceRangeChange = (value: string) => {
    onToggleOption(value);
  };

  return (
    <div className="border-t pt-4 first:border-t-0 first:pt-0">
      <button
        onClick={() => onToggleSection(section.id)}
        className="flex items-center justify-between w-full mb-2 text-left hover:text-blue-main transition-colors"
      >
        <h4 className="font-medium">{section.title}</h4>
        {section.isOpen ? (
          <FaChevronUp className="h-4 w-4" />
        ) : (
          <FaChevronDown className="h-4 w-4" />
        )}
      </button>

      {section.isOpen && (
        <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
          {section.type === "price-range" ? (
            <PriceRangeFilter
              selectedValue={selectedPriceRange}
              onChange={handlePriceRangeChange}
            />
          ) : (
            section.options.map((option) => (
              <div key={option.id} className="flex items-center">
                <Checkbox
                  id={`${section.id}-${option.id}`}
                  checked={option.checked}
                  onCheckedChange={() => onToggleOption(option.id)}
                  className="mr-2"
                />
                <label
                  htmlFor={`${section.id}-${option.id}`}
                  className="text-sm cursor-pointer flex-1 flex justify-between items-center hover:text-blue-main transition-colors"
                >
                  <span>{option.label}</span>
                  <span className="text-gray-400 text-xs">
                    ({option.count})
                  </span>
                </label>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

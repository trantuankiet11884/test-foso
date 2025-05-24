"use client";

import { filterSections as initialFilterSections } from "@/data/filters";
import type { FilterOption, FilterSection } from "@/types";
import { useCallback, useState } from "react";

export function useFilters() {
  const [filterSections, setFilterSections] = useState<FilterSection[]>(
    initialFilterSections
  );

  const toggleSection = useCallback((sectionId: string) => {
    setFilterSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, isOpen: !section.isOpen }
          : section
      )
    );
  }, []);

  const toggleOption = useCallback((sectionId: string, optionId: string) => {
    setFilterSections((prev) =>
      prev.map((section) => {
        if (section.id === sectionId && section.type === "price-range") {
          return {
            ...section,
            options: section.options.map((option) => ({
              ...option,
              checked: option.id === optionId,
            })),
          };
        }

        if (section.id === sectionId) {
          return {
            ...section,
            options: section.options.map((option) =>
              option.id === optionId
                ? { ...option, checked: !option.checked }
                : option
            ),
          };
        }

        return section;
      })
    );
  }, []);

  const getActiveFilters = useCallback(() => {
    const active: { [key: string]: FilterOption[] } = {};

    filterSections.forEach((section) => {
      const checkedOptions = section.options.filter((option) => option.checked);
      if (checkedOptions.length > 0) {
        active[section.id] = checkedOptions;
      }
    });

    return active;
  }, [filterSections]);

  const clearAllFilters = useCallback(() => {
    setFilterSections((prev) =>
      prev.map((section) => ({
        ...section,
        options: section.options.map((option) => ({
          ...option,
          checked: false,
        })),
      }))
    );
  }, []);

  return {
    filterSections,
    toggleSection,
    toggleOption,
    getActiveFilters,
    clearAllFilters,
  };
}

"use client";

import { FaFilter, FaTimes, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FilterAccordion } from "./filter-accordion";
import { FilterSkeleton } from "./filter-skeleton";
import { useFilters } from "@/hooks/useFilters";
import { useState } from "react";

interface FilterSidebarProps {
  onFiltersChange?: (filters: any) => void;
  loading?: boolean;
  filterSummary?: {
    totalFilters: number;
    totalProducts: number;
    displayedProducts: number;
  };
}

export function FilterSidebar({
  onFiltersChange,
  loading = false,
  filterSummary,
}: FilterSidebarProps) {
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  const {
    filterSections,
    toggleSection,
    toggleOption,
    getActiveFilters,
    clearAllFilters,
  } = useFilters();

  const handleFilterChange = () => {
    const activeFilters = getActiveFilters();
    onFiltersChange?.(activeFilters);
  };

  const handleClearAll = () => {
    clearAllFilters();
    onFiltersChange?.({});
  };

  const toggleMobileFilters = () => {
    setMobileFiltersVisible(!mobileFiltersVisible);
  };

  if (loading) {
    return <FilterSkeleton />;
  }

  const activeFilterCount = filterSummary?.totalFilters || 0;

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="md:hidden mb-4">
        <Button
          onClick={toggleMobileFilters}
          variant="outline"
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center">
            <FaFilter className="h-4 w-4 mr-2 text-blue-main" />
            <span>Bộ Lọc</span>
            {activeFilterCount > 0 && (
              <Badge className="ml-2 bg-blue-main text-white">
                {activeFilterCount}
              </Badge>
            )}
          </div>
          {mobileFiltersVisible ? (
            <FaChevronUp className="h-3 w-3" />
          ) : (
            <FaChevronDown className="h-3 w-3" />
          )}
        </Button>
      </div>

      <div
        className={`bg-white rounded-lg shadow-sm p-4 mb-4 ${
          mobileFiltersVisible ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold flex items-center text-blue-main">
            <FaFilter className="h-4 w-4 mr-2 text-blue-main" />
            Bộ Lọc
            {activeFilterCount > 0 && (
              <Badge className="ml-2 bg-blue-main text-white">
                {activeFilterCount}
              </Badge>
            )}
          </h3>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-xs text-gray-500 hover:text-red-600 flex items-center"
            >
              <FaTimes className="h-3 w-3 mr-1" />
              Xóa tất cả
            </Button>
          )}
        </div>

        {filterSummary && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-sm">
              <p className="font-medium text-blue-800">
                Tìm thấy {filterSummary.totalProducts} sản phẩm
              </p>
              <p className="text-blue-main text-xs">
                Hiển thị {filterSummary.displayedProducts} sản phẩm
              </p>
            </div>
          </div>
        )}

        {activeFilterCount > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Bộ lọc đang áp dụng:</h4>
            <div className="flex flex-wrap gap-1">
              {Object.entries(getActiveFilters()).map(
                ([sectionId, options]) => {
                  return (options as any[]).map((option) => (
                    <Badge
                      key={`${sectionId}-${option.id}`}
                      variant="secondary"
                      className="text-xs flex items-center"
                    >
                      {option.label}
                      <button
                        onClick={() => {
                          toggleOption(sectionId, option.id);
                          handleFilterChange();
                        }}
                        className="ml-1 hover:text-red-600"
                      >
                        <FaTimes className="h-2 w-2" />
                      </button>
                    </Badge>
                  ));
                }
              )}
            </div>
          </div>
        )}

        <div className="space-y-2">
          {filterSections.map((section) => (
            <FilterAccordion
              key={section.id}
              section={section}
              onToggleSection={toggleSection}
              onToggleOption={(optionId: string) => {
                toggleOption(section.id, optionId);
                handleFilterChange();
              }}
            />
          ))}
        </div>

        <div className="md:hidden mt-4">
          <Button
            className="w-full bg-blue-main hover:bg-blue-700 text-white"
            onClick={() => setMobileFiltersVisible(false)}
          >
            Áp dụng
          </Button>
        </div>
      </div>
    </div>
  );
}

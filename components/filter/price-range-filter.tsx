"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

interface PriceRangeOption {
  id: string;
  label: string;
  value: string;
}

interface PriceRangeFilterProps {
  selectedValue: string | null;
  onChange: (value: string) => void;
}

const priceRangeOptions: PriceRangeOption[] = [
  { id: "under-100k", label: "Dưới 100,000 đ", value: "under-100k" },
  { id: "100k-300k", label: "100,000 đ - 300,000 đ", value: "100k-300k" },
  { id: "300k-500k", label: "300,000 đ - 500,000 đ", value: "300k-500k" },
  { id: "over-500k", label: "Trên 500,000 đ", value: "over-500k" },
];

export function PriceRangeFilter({
  selectedValue,
  onChange,
}: PriceRangeFilterProps) {
  return (
    <div className="flex flex-col gap-2">
      {priceRangeOptions.map((option) => (
        <Button
          variant="outline"
          className="w-full text-textPrimary"
          key={option.id}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

import type { FilterSection, CategoryItem } from "@/types";

export const filterSections: FilterSection[] = [
  {
    id: "categories",
    title: "Danh mục sản phẩm",
    isOpen: true,
    options: [
      {
        id: "air-filter",
        label: "Lọc gió động cơ - Air Filter",
        count: 24,
        checked: false,
      },
      {
        id: "fuel-filter",
        label: "Lọc Nhiên Liệu - Fuel Filter",
        count: 24,
        checked: false,
      },
      { id: "oil-filter", label: "Bộ lọc dầu", count: 24, checked: false },
      {
        id: "cabin-filter",
        label: "Chưa phân loại",
        count: 24,
        checked: false,
      },
      { id: "other", label: "Khác", count: 24, checked: false },
    ],
  },
  {
    id: "price",
    title: "Khoảng giá",
    isOpen: true,
    type: "price-range",
    options: [
      { id: "under-100k", label: "Dưới 100,000 đ", count: 15, checked: false },
      {
        id: "100k-300k",
        label: "100,000 đ - 300,000 đ",
        count: 25,
        checked: false,
      },
      {
        id: "300k-500k",
        label: "300,000 đ - 500,000 đ",
        count: 18,
        checked: false,
      },
      { id: "over-500k", label: "Trên 500,000 đ", count: 10, checked: false },
    ],
  },
  {
    id: "brands",
    title: "Thương hiệu",
    isOpen: false,
    options: [
      { id: "bosch", label: "Bosch", count: 15, checked: false },
      { id: "mann", label: "Mann Filter", count: 12, checked: false },
      { id: "mahle", label: "Mahle", count: 10, checked: false },
      { id: "denso", label: "Denso", count: 8, checked: false },
    ],
  },
  {
    id: "years",
    title: "Năm sản xuất",
    isOpen: false,
    options: [
      { id: "2024", label: "2024", count: 5, checked: false },
      { id: "2023", label: "2023", count: 8, checked: false },
      { id: "2022", label: "2022", count: 12, checked: false },
      { id: "2021", label: "2021", count: 15, checked: false },
    ],
  },
  {
    id: "origins",
    title: "Xuất xứ",
    isOpen: false,
    options: [
      { id: "germany", label: "Đức", count: 20, checked: false },
      { id: "japan", label: "Nhật Bản", count: 18, checked: false },
      { id: "korea", label: "Hàn Quốc", count: 10, checked: false },
      { id: "usa", label: "Mỹ", count: 8, checked: false },
    ],
  },
];

export const categoryItems: CategoryItem[] = [
  {
    id: "oil-filter",
    name: "Bộ Lọc Dầu",
    icon: "/placeholder.svg?height=40&width=40",
    subcategories: ["Lọc dầu động cơ", "Lọc dầu hộp số"],
  },
  {
    id: "air-filter",
    name: "Bộ Lọc Không Khí",
    icon: "/placeholder.svg?height=40&width=40",
    subcategories: ["Lọc gió động cơ", "Lọc gió cabin"],
  },
  {
    id: "fuel-filter",
    name: "Bộ Lọc Nhiên Liệu",
    icon: "/placeholder.svg?height=40&width=40",
    subcategories: ["Lọc xăng", "Lọc dầu diesel"],
  },
  {
    id: "cabin-filter",
    name: "Bộ Lọc Trong Cabin",
    icon: "/placeholder.svg?height=40&width=40",
    subcategories: ["Lọc điều hòa", "Lọc không khí cabin"],
  },
];

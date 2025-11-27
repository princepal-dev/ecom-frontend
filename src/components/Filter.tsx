import { useState } from "react";
import { FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";

import type { SelectChangeEvent } from "@mui/material/Select";

const categories = [
  { categoryId: 1, categoryName: "Electronics" },
  { categoryId: 2, categoryName: "Clothing" },
  { categoryId: 3, categoryName: "Furniture" },
  { categoryId: 4, categoryName: "Books" },
  { categoryId: 5, categoryName: "Toys" },
];

export default function Filter() {
  const [category, setCategory] = useState<string>("all");

  function handleCategoryChange(event: SelectChangeEvent) {
    setCategory(event.target.value);
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      {/* Search Bar */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input
          type="text"
          placeholder="Search Products"
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch className="absolute left-3 text-slate-800" size={20} />
      </div>

      {/* Category Selection */}
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl
          size="small"
          variant="outlined"
          className="text-slate-800 border-slate-700"
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            value={category}
            label={category}
            labelId="category-select-label"
            onChange={handleCategoryChange}
            className="min-w-[120px] text-slate-800 border-slate-700"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem value={item.categoryName} key={item.categoryId}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* SORT Button & Clear Filter */}
        <Tooltip title="Sorted by price: asc">
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
          >
            Sort By
            <FiArrowUp size={20} />
          </Button>
        </Tooltip>
        <button className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-sm transition-all cursor-pointer duration-300 ease-in shadow-md focus:outline-none">
          <FiRefreshCw size={16} className="font-semibold" />
          <span className="font-semibold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import type { Category } from "../../types/types.ts";

interface FilterProps {
  categories?: Category[] | [];
}

export default function Filter({ categories }: FilterProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const params = new URLSearchParams(searchParams);
  const [category, setCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    const currentSearchTerm = searchParams.get("keyword") || "";
    const currentSortOrder = searchParams.get("sortby") || "asc";
    const currentCategory = searchParams.get("category") || "all";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSearchTerm);
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        searchParams.set("keyword", searchTerm);
      } else {
        searchParams.delete("keyword");
      }
      navigate(`${pathname}?${searchParams.toString()}`);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [searchParams, searchTerm, navigate, pathname]);

  function handleCategoryChange(event: SelectChangeEvent) {
    const selectedCategory: string = event.target.value;
    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname}?${params}`);
    setCategory(event.target.value);
  }

  function toggleSortOrder() {
    setSortOrder((prev) => {
      const newOrder = prev === "asc" ? "desc" : "asc";
      params.set("sortby", newOrder);
      navigate(`${pathname}?${params}`);
      return newOrder;
    });
  }

  function handleClearFilter() {
    navigate({ pathname: window.location.pathname });
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      {/* Search Bar */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            {categories &&
              categories.map((item) => (
                <MenuItem value={item.categoryName} key={item.categoryId}>
                  {item.categoryName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        {/* SORT Button & Clear Filter */}
        <Tooltip
          title={`Sorted by price: ${sortOrder === "asc" ? "asc" : "desc"}`}
        >
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
            onClick={toggleSortOrder}
          >
            Sort By
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button
          onClick={handleClearFilter}
          className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-sm transition-all cursor-pointer duration-300 ease-in shadow-md focus:outline-none"
        >
          <FiRefreshCw size={16} className="font-semibold" />
          <span className="font-semibold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
}

import Filter from "./Filter.tsx";
import ProductCard from "../shared/ProductCard.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";
import { FaExclamationTriangle } from "react-icons/fa";
import useProductFilter from "../../hook/useProductFilter.ts";
import { useEffect } from "react";
import { fetchCategories } from "../../store/actions";
import Loader from "../shared/Loader.tsx";
import type { Products } from "../../types/types.ts";
import Paginations from "../shared/Paginations.tsx";

export default function Products() {
  useProductFilter();
  const dispatch = useAppDispatch();
  const { products, categories, pagination } = useAppSelector(
    (state) => state.products,
  );
  const { isLoading, errorMessage } = useAppSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      <Filter categories={Array.isArray(categories) ? categories : []} />
      {isLoading ? (
        <Loader text="Products loading..." />
      ) : errorMessage ? (
        <div className="flex justify-center items-center h-[200px]">
          <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
          <span className="text-slate-800 text-lg font-medium">
            {errorMessage ?? ""}
          </span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products?.length &&
              products.map((item: Products, i: number) => (
                <ProductCard key={i} {...item} />
              ))}
          </div>
          <div className="flex justify-center pt-10">
            <Paginations
              numOfPage={pagination.totalPages ?? 1}
              _totalProducts={pagination.totalElements ?? 0}
            />
          </div>
        </div>
      )}
    </div>
  );
}

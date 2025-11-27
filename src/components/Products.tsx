import ProductCard from "./ProductCard.tsx";
import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import Filter from "./Filter.tsx";

export default function Products() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const { isLoading, errorMessage } = useAppSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      <Filter />
      {isLoading ? (
        <p>We are cooking the products....</p>
      ) : errorMessage ? (
        <div className="flex justify-center items-center h-[200px]">
          <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
          <span className="text-slate-800 text-lg font-medium">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products &&
              products.map((item, i) => <ProductCard key={i} {...item} />)}
          </div>
        </div>
      )}
    </div>
  );
}

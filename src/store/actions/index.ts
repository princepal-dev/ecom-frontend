import type { Dispatch } from "redux";
import api from "../../api/api.ts";
import type { AppActions } from "../../types/types.ts";
import type { AxiosError } from "axios";

export const fetchProducts =
  (queryString: string) =>
  async (dispatch: Dispatch<AppActions>): Promise<void> => {
    try {
      dispatch({ type: "IS_FETCHING" });
      const { data } = await api.get(`/public/products?${queryString}`);
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.content,
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      });
      dispatch({ type: "IS_SUCCESS" });
    } catch (e: unknown) {
      const err = e as AxiosError<{ message: string }>;

      dispatch({
        type: "IS_ERROR",
        payload: err?.response?.data.message || "Failed to fetch products",
      });
    }
  };

export const fetchCategories =
  () =>
  async (dispatch: Dispatch<AppActions>): Promise<void> => {
    try {
      dispatch({ type: "CATEGORY_LOADER" });
      const { data } = await api.get(`/public/categories`);
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: data.content,
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      });
      dispatch({ type: "CATEGORY_SUCCESS" });
    } catch (e: unknown) {
      const err = e as AxiosError<{ message: string }>;

      dispatch({
        type: "IS_ERROR",
        payload: err?.response?.data.message || "Failed to fetch categories",
      });
    }
  };

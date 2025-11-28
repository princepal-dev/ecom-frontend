import type {
  Category,
  FetchCategoriesAction,
  ProductReducerAction,
  Products,
} from "../../types/types.ts";
import type { UnknownAction } from "@reduxjs/toolkit";

export interface Pagination {
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}

export interface ProductState {
  products: Products[] | null;
  categories: Category[] | null;
  pagination: Pagination;
}

const initialState: ProductState = {
  products: null,
  categories: [],
  pagination: {},
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductReducerAction | UnknownAction,
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      const a = action as Extract<
        ProductReducerAction,
        { type: "FETCH_PRODUCTS" }
      >;
      return {
        ...state,
        products: a.payload,
        pagination: {
          pageNumber: a.pageNumber,
          pageSize: a.pageSize,
          totalElements: a.totalElements,
          totalPages: a.totalPages,
        },
      };
    }
    case "FETCH_CATEGORIES": {
      const a = action as FetchCategoriesAction;
      return {
        ...state,
        categories: a.payload,
      };
    }

    default:
      return state;
  }
};

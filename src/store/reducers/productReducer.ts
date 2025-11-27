import type { FetchProductsAction, Products } from "../../types/types.ts";

export interface Pagination {
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}

export interface ProductState {
  products: Products[] | null;
  categories: string[] | null;
  pagination: Pagination;
}

const initialState: ProductState = {
  products: null,
  categories: null,
  pagination: {},
};

export const productReducer = (
  state: ProductState = initialState,
  action: FetchProductsAction,
) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action.totalElements,
          totalPages: action.totalPages,
        },
      };

    default:
      return state;
  }
};

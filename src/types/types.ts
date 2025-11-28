export interface Products {
  productId: number;
  productName: string;
  image: string;
  description: string;
  quantity: number;
  price: number;
  discount: number;
  specialPrice: number;
}

export interface ErrorState {
  isLoading: boolean;
  errorMessage: string | null;
  categoryError: string | null;
  categoryLoader: boolean;
}

export interface Category {
  categoryName: string;
  categoryId: number;
}

export type ErrorAction =
  | { type: "IS_FETCHING" }
  | { type: "IS_SUCCESS" }
  | { type: "CATEGORY_LOADER" }
  | { type: "CATEGORY_SUCCESS" }
  | { type: "CATEGORY_ERROR"; payload: string | null }
  | { type: "IS_ERROR"; payload: string | null };

export interface FetchProductsAction {
  type: "FETCH_PRODUCTS";
  payload: Products[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface FetchCategoriesAction {
  type: "FETCH_CATEGORIES";
  payload: Category[];
}

export type ProductReducerAction =
  | FetchProductsAction
  | FetchCategoriesAction
  | ErrorAction;

export type AppActions = ProductReducerAction;

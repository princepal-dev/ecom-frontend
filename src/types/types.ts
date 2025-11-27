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

export interface ProductsResponse {
  content: Products[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface ErrorResponse {
  message: string;
}

export interface ErrorState {
  isLoading: boolean;
  errorMessage: string | null;
}

export interface FetchProductsAction {
  type: "FETCH_PRODUCTS";
  payload: Products[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export type ErrorAction =
  | { type: "IS_FETCHING" }
  | { type: "IS_SUCCESS" }
  | { type: "IS_ERROR"; payload: string };

export type ProductAction = FetchProductsAction;
type LoadingAction = { type: "IS_FETCHING" } | { type: "IS_SUCCESS" };
export type AppActions = FetchProductsAction | LoadingAction | ErrorAction;

import type { ErrorAction, ErrorState } from "../../types/types.ts";
import type { UnknownAction } from "@reduxjs/toolkit";

const initialState: ErrorState = {
  isLoading: false,
  errorMessage: null,
  categoryError: null,
  categoryLoader: false,
};

export const errorReducer = (
  state: ErrorState = initialState,
  action: ErrorAction | UnknownAction,
): ErrorState => {
  switch (action.type) {
    case "IS_FETCHING":
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case "IS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      };
    case "IS_ERROR": {
      const errorAction = action as Extract<ErrorAction, { type: "IS_ERROR" }>;
      return {
        ...state,
        isLoading: false,
        errorMessage: errorAction.payload,
      };
    }
    case "CATEGORY_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        categoryError: null,
        errorMessage: null,
      };
    case "CATEGORY_LOADER":
      return {
        ...state,
        categoryLoader: true,
        errorMessage: null,
        categoryError: null,
      };
    default:
      return state;
  }
};

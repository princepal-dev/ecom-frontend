import api from "../../api/api.ts";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "IS_FETCHING" });
    const { data } = await api.get("/public/products");
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
    });
    dispatch({ type: "IS_SUCCESS" });
  } catch (e) {
    dispatch({
      type: "IS_ERROR",
      payload: e?.response?.data.message || "Failed to fetch products",
    });
  }
};

import api from "../../api/api.ts";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.get("/public/products");
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
    });
  } catch (e) {
    console.log(e);
  }
};

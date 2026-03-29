import api from "../../api/api";

export const fetchProducts = (query) => async (dispatch) => {
    try {
        dispatch({
            type: "IS_FETCHING",
        });
        const { data } = await api.get(`/public/products?${query}`);
        dispatch({ 
            type: "FETCH_PRODUCTS", 
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            isLast: data.isLast
        });
        dispatch({
            type: "IS_SUCCESS",
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "An error occurred while fetching products.",
        });
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: "CATEGORIES_LOADER",
        });
        const { data } = await api.get(`/public/categories`);
        dispatch({ 
            type: "FETCH_CATEGORIES", 
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            isLast: data.isLast
        });
        dispatch({
            type: "IS_SUCCESS",
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "An error occurred while fetching categories.",
        });
    }
};
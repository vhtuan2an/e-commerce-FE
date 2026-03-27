import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";

const useProductFilter = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams()

        const currentPage = searchParams.get("pageNumber")
            ? Number(searchParams.get("pageNumber"))
            : 1;

        params.set("pageNumber", currentPage - 1);

        const sortOrder = searchParams.get("sortBy") || "asc";
        const category = searchParams.get("category") || "all";
        const query = searchParams.get("query") || "";

        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder);

        if (category) {
            params.set("category", category);
        }

        if (query) {
            params.set("query", query);
        }

        const queryString = params.toString();
        console.log("Query String:", queryString);

        dispatch(fetchProducts(queryString));
        
    }, [searchParams, dispatch])

};

export default useProductFilter;
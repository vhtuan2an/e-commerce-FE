
import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


const Filter = ({ categories }) => {
    

    const [searchParams, setSearchParams] = useSearchParams();
    const pathName = useLocation().pathname;
    const navigate = useNavigate();
    const params = new URLSearchParams(searchParams);

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSort = searchParams.get("sort") || "asc";
        const currentSearch = searchParams.get("query") || "";
        
        // setCategory(currentCategory);
        // setSortOrder(currentSort);
        // setSearchTerm(currentSearch);
    }, [searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                searchParams.set("query", searchTerm);
            } else {
                searchParams.delete("query");
            }
            navigate(`${pathName}?${searchParams.toString()}`);
        }, 500);

        return () => {
            clearTimeout(handler);
        }
    }, [searchParams, pathName, navigate, searchTerm]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathName}?${params.toString()}`);
        setCategory(event.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            params.set("sortBy", newOrder);
            navigate(`${pathName}?${params.toString()}`);
            return newOrder;
        });
    };

    const handleClearFilter = () => {
        navigate({pathName: window.location.pathname});
        // setCategory("all");
        
    }


    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* Search bar */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-96"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
                {/* Category Filter */}
            <div className="flex sm:flex-row ">
                <FormControl 
                    className="text-slate-800 border-slate-700"
                    variant="outlined"
                    size="small">
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            value={category}
                            onChange={handleCategoryChange}
                            className="min-w-30 text-slate-800 border-slate-700"
                        >
                            <MenuItem value="all">All</MenuItem>
                            {categories.map((cat) => (
                                <MenuItem key={cat.categoryId} value={cat.categoryName}>
                                    {cat.categoryName}
                                </MenuItem>
                            ))}
                        </Select>
                    
                </FormControl>

                {/* Sort Pattern */}
                <Tooltip title="Sorted by price">
                    <Button variant="contained" 
                        onClick={toggleSortOrder}
                        color="primary" 
                        className="flex items-center gap-2 h-10">
                        {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
                        Sort by 
                    </Button>
                </Tooltip>
                <button
                 onClick={handleClearFilter}
                 className="flex items-center gap-2 h-10 text-white bg-rose-900 hover:bg-rose-700 transition-colors duration-300 px-3 py-2">
                    <RiRefreshLine className="font-semibold"  />
                    <span className="font-semibold">Clear Filter</span>
                </button>


            </div>
        </div>
    )
};

export default Filter;
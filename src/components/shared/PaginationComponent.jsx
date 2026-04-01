import { Pagination } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const PaginationComponent = ({ totalPages }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();

    const paramsValue = params.get("pageNumber") ? Number(params.get("pageNumber")) : 1;

    const handlePageChange = (event, page) => {
        params.set("pageNumber", page);
        // setSearchParams(params);
        navigate(`${pathname}?${params.toString()}`);
    }
    
    return (
        <div>
            <Pagination 
                count={totalPages} shape="circle" 
                page={paramsValue} 
                siblingCount={3}
                boundaryCount={2}
                onChange={handlePageChange} />
        </div>
    )
}

export default PaginationComponent;
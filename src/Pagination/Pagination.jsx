import React,{useContext} from "react";
import clasess from "./Pagination.module.scss";
import Pagination from '@mui/material/Pagination';
import PaginationContext from "../Context/PaginationContext";

const PaginationFunction = ({ totalPosts, postsPerPage, paginate,  }) => {
  const  ctxPagination = useContext(PaginationContext) 
  return (
    <nav className={clasess["App__navigation"]}>

      <Pagination count={ctxPagination.pageNumber} variant="outlined"  onChange={(e, value)=>{ctxPagination.setCurrentPage(value)}}/>
    </nav>
  );
};
export default PaginationFunction;

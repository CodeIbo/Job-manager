import React,{useContext} from "react";
import clasess from "./Pagination.module.scss";
import PaginationContext from "../Context/PaginationContext";
import CustomPagination from "../CustomComponents/CustomPagination";

const PaginationFunction = () => {
  const  ctxPagination = useContext(PaginationContext) 
  return (
    <nav className={clasess["App__navigation"]}>
      <CustomPagination count={ctxPagination.pageNumber} variant="outlined"  onChange={(e, value)=>{ctxPagination.setCurrentPage(value)}} />
    </nav>
  );
};
export default PaginationFunction;

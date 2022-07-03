import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

const CustomPagination = styled(Pagination)({
  ul: {
    "& .Mui-selected" :{
      backgroundColor: "#5452ab",
      color: "#ccd4eb",
    },
    "& .MuiPaginationItem-root":{
        '&:hover':{
            backgroundColor: "#a7b8ee",
            color:'#000000'
        }
    }

  },
});

export default CustomPagination;


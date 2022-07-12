import { styled } from "@mui/system";
import Pagination from "@mui/material/Pagination";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  ul: {

    "& .MuiPaginationItem-root": {
      backgroundColor: theme.palette.mainBoldAccent.contrastText,
      color: theme.palette.mainBoldAccent.main,    
      fontSize:"1.3em",
      '&:hover': {
        backgroundColor: "#a7b8ee",
        color: theme.palette.mainBoldAccent.contrastText,    
      },      
    },
    "& .Mui-selected": {
      backgroundColor: theme.palette.interactiveColor.main,
      color: theme.palette.interactiveColor.contrastText,
    },
      
    }

  }
));

export default CustomPagination;


import styled from "@emotion/styled";
import { Button } from "@mui/material";

const EditModeButton = styled(Button)({
    backgroundColor: "#5452ab",
    color: "#f5f5f5",
    width: "50%",
    maxWidth: "200px",
    margin:'5px',
    padding: '5px',
    transition: 'background linear 0.2s',
    "&:hover": {
      backgroundColor: "#f5f5f5",
      transition: 'background linear 0.2s',
      color: "#5452ab",
    },

});
export default EditModeButton
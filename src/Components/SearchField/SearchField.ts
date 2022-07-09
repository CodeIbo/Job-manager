import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const SearchField = styled(TextField)({
    maxWidth: '350px',
    alignSelf: 'center',
    '& .MuiInputBase-input': {
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight:'400'
    }

})

export default SearchField
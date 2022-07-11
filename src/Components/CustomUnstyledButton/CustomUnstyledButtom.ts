import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomUnstyledButton = styled(ButtonUnstyled)(() =>({
    all: "unset",
    cursor: "pointer"
}));
export default CustomUnstyledButton;
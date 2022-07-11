import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';

const BaseIcon = styled(ArrowForwardIosIcon)(({theme})=> ({
    color: theme.palette.mainBoldAccent.main
}));
export const RollDownIcon = styled(BaseIcon)(()=> ({
    transform: "rotate(90deg)"
}));

export const RollUpIcon = styled(BaseIcon)(() => ({
    transform:"rotate(270deg)"
}));
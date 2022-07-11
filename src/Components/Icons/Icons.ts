import { styled } from "@mui/system";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";


export const CommentIcon = styled(TextsmsOutlinedIcon)(() => ({
    transform: ' scaleX(-1)',
    width: '1.3em',
    height: '1.3em',
    color: "",
}));

export const TagIcon = styled(LocalOfferOutlinedIcon)(() => ({
    transform: 'rotate(135deg)',
    width: '1.3em',
    height: '1.3em'
}));

export const LinkIcon = styled(InsertLinkOutlinedIcon)(() => ({
    width: '1.3em',
    height: '1.3em'
}));

export const CompanyNameIcon = styled(ApartmentOutlinedIcon)(() => ({
    width: '1.3em',
    height: '1.3em'
}))


export const SearchFieldIcon = styled(SearchIcon)(() => ({
    transform: ' scaleX(-1)'
}));
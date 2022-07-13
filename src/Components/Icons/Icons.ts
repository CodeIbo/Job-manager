import { styled } from "@mui/system";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";


export const CommentIcon = styled(TextsmsOutlinedIcon)(({ theme }) => ({
    transform: ' scaleX(-1)',
    width: '1.3em',
    height: '1.3em',
    [theme.breakpoints.down("md")]: {
        width: '1.2em',
        height: '1.2em',
    }
}));

export const TagIcon = styled(LocalOfferOutlinedIcon)(({ theme }) => ({
    transform: 'rotate(135deg)',
    width: '1.3em',
    height: '1.3em',
    [theme.breakpoints.down("md")]: {
        width: '1.2em',
        height: '1.2em',
    }

}));

export const LinkIcon = styled(InsertLinkOutlinedIcon)(({ theme }) => ({
    width: '1.3em',
    height: '1.3em',
    [theme.breakpoints.down("md")]: {
        width: '1.2em',
        height: '1.2em',
    }
}));

export const CompanyNameIcon = styled(ApartmentOutlinedIcon)(({ theme }) => ({
    width: '1.3em',
    height: '1.3em',
    [theme.breakpoints.down("md")]: {
        width: '1.2em',
        height: '1.2em',
    }
}))


export const SearchFieldIcon = styled(SearchIcon)(({ theme }) => ({
    transform: ' scaleX(-1)'
}));


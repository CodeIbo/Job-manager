import company from '../images/Main/Company.png';
import tag from "../images/Main/Tags.png";
import descriptionIMG from "../images/Main/Description.png";
import searchBar from "../images/Main/Search.png";
import LinkSearch from "../images/Main/LinkSearch.png";
import AddNewButtonIMG from "../images/Main/AddNewButton.png";
import PaginationIMG from "../images/Main/Pagination.png";
import OtherButtonsIMG from "../images/Main/interactiveButtonsJOBS.png"

export interface helpObject {
    title: string,
    description: string,
    img: string
}


export const mainHelperData: helpObject[] = [
    {
        title: "Welocome in Job Manager!",
        description: "You can manage your job aplication from one place! I have some tips for better use. To add new job click here.",
        img: AddNewButtonIMG
    },
    {
        title: "Search bar ",
        description: "There you can filter your list of jobs",
        img: searchBar
    },
    {
        title: "Search by company name ",
        description: "Click to search for an offer by company name.",
        img: company
    },
    {
        title: "Search by tags",
        description: "Click to search for an offer by tags.",
        img: tag
    },
    {
        title: "Search by description",
        description: "Click to search for an offer by description.",
        img: descriptionIMG
    },
    {
        title: "Search by link",
        description: "Click to search for an offer by link.",
        img: LinkSearch
    },
    {
        title: "Jobs per page",
        description: "If you want change limit jobs on page, click here. ",
        img: PaginationIMG
    },
    {
        title: "Other interactive buttons",
        description: "First one (from left to right), show more details about job. Second (link), on click transfer you to your job in other page which you declarate. Third (pen), give you access to edit mode job. Last one (trash), it removing job.",
        img: OtherButtonsIMG
    },
]
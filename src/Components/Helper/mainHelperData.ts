import company from '../../images/Main/Company.png';
import tag from "../../images/Main/Tags.png";
import descriptionIMG from "../../images/Main/Description.png";
import searchBar from "../../images/Main/Search.png";
import LinkSearch from "../../images/Main/LinkSearch.png";
import AddNewButtonIMG from "../../images/Main/AddNewButton.png";
import PaginationIMG from "../../images/Main/Pagination.png";
import OtherButtonsIMG from "../../images/Main/interactiveButtonsJOBS.png"
import AddCompanyIMG from "../../images/ADD/AddCompanyLink.png";
import AddTagIMG from "../../images/ADD/AddTag.png";
import AddDescriptionIMG from "../../images/ADD/AddDescription.png";
import EditCompanyIMG from "../../images/EDIT/editCompanyLink.png";
import EditTagIMG from "../../images/EDIT/EditTag.png";
import EditDescriptionIMG from "../../images/EDIT/editDescription.png";

export interface helpObject {
    title: string,
    description: string,
    img: string
};
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
];
export const AddHelperData: helpObject[] = [
    {
        title: "Add section!",
        description: "Add section have three categories company tags and description. Last one is optional you don't need to fill ",
        img: AddCompanyIMG
    },
    {
        title: "Tag section ",
        description: "In tag section. One thing is important. To generate more than one tag you need to use comma betwen tags",
        img: AddTagIMG
    },
    {
        title: "Description and status ",
        description: "Description in this section as I said is optional, more important is status. If you add new job default status is blue(sent).If you want change this state use radio buttons to manage it. ",
        img: AddDescriptionIMG
    },
];
export const EditHelperData: helpObject[] = [
    {
        title: "Edit section!",
        description: "Edit section have three categories company tags and description. Last one is optional you don't need to fill ",
        img: EditCompanyIMG
    },
    {
        title: "Tag section ",
        description: "In tag section. One thing is important. To generate more than one tag you need to use comma betwen tags",
        img: EditTagIMG
    },
    {
        title: "Description and status ",
        description: "Description in this section as I said is optional, more important is status. If you want change this state use radio buttons to manage it. ",
        img: EditDescriptionIMG
    },
];
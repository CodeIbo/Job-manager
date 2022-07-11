import React, { useState } from "react";
import { OneJob } from "../../../State/Reducers/DataManager";
import { TableRow } from "@mui/material";
import EditorJobHandler from "../../EditRowButton/EditJobHandler";
import DeleteJobHandler from "../../DeleteButton/DeleteJobHandler";
import {
  RightCustomTableCell,
  SkillTableCell,
  LeftCustomTableCellContent,
  DescriptionTableCell,
} from "../../TableComponents/CustomTableCell";
import SkillTag from "../../DataComponents/SkillTag";
import { LinkIcon } from "../../Icons/Icons";
import { CustomIconContainer } from "../../TableComponents/TableCellWrapper";
import LinkWrapper from "../../TableComponents/LinkWrapper";
import CustomUnstyledButton from "../../CustomUnstyledButton/CustomUnstyledButtom";
import { RollDownIcon, RollUpIcon } from "../../TableComponents/ShowMoreIcon";
import ShowMoreRow from "./ShowMoreRow";
import theme from "../../../Theme/Theme";
const ViewOnlyMode: React.FC<{ object: OneJob }> = ({ object }) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  let numberToShowMore = object.skills.slice(3, object.skills.length).length;
  //@ts-ignore start
  console.log(theme.palette.activeJob.main);
  let color;

  if (object.status === "offer") {
    color = theme.palette.activeJob.main
  }
  if (object.status === "canceled") {
    color = theme.palette.rejectedJob.main;
  }
  if (object.status === "opened") {
    color = theme.palette.pendingJob.main;
  }
  const sxBorder = {
    borderTop: `5px solid ${color}`,
  };
  return (
    <>
      <TableRow key={object.id}>
        <LeftCustomTableCellContent color="contentBox" sx={sxBorder}>
          <CustomUnstyledButton onClick={handleClick} sx={{marginRight:"0.5em"}}>
            {showMore ? <RollUpIcon /> : <RollDownIcon />}
          </CustomUnstyledButton>
          {object.companySite}
        </LeftCustomTableCellContent>
        <SkillTableCell sx={sxBorder}>
          {object.skills.slice(0, 3).map((skill: string) => (
            <SkillTag>{skill}</SkillTag>
          ))}
          {numberToShowMore > 0 && <span> {numberToShowMore} more...</span>}
        </SkillTableCell>
        <DescriptionTableCell sx={sxBorder}>
          {object.customDescription}
        </DescriptionTableCell>
        <RightCustomTableCell sx={sxBorder}>
          <CustomIconContainer>
            <LinkWrapper href={`${object.link}`}>
              <LinkIcon
                color="mainBoldAccent"
                sx={{ height: "1.5em", width: "1.5em" }}
              />
            </LinkWrapper>
            <EditorJobHandler id={object.id} />
            <DeleteJobHandler id={object.id} />
          </CustomIconContainer>
        </RightCustomTableCell>
      </TableRow>
      {showMore && <ShowMoreRow object={object} />}
    </>
  );
};

export default ViewOnlyMode;

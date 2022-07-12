import React, { useState } from "react";
import { OneJob } from "../../../State/Reducers/DataManager";
import { TableRow } from "@mui/material";
import EditorJobHandler from "../../EditRowButton/EditJobHandler";
import DeleteJobHandler from "../../DeleteButton/DeleteJobHandler";
import {
  RightCustomTableCell,
  RolledTableCell,
  LeftCustomTableCellContent,
  DescriptionTableCell,
} from "../../TableComponents/CustomTableCell";
import SkillTag from "../../DataComponents/SkillTag";
import { LinkIcon } from "../../Icons/Icons";
import {
  CustomIconContainer,
  CustomSkillTableContainer,
} from "../../TableComponents/TableCellWrapper";
import LinkWrapper from "../../TableComponents/LinkWrapper";
import CustomUnstyledButton from "../../CustomUnstyledButton/CustomUnstyledButtom";
import { RollDownIcon, RollUpIcon } from "../../TableComponents/ShowMoreIcon";
import ShowMoreRow from "./ShowMoreRow";
import theme from "../../../Theme/Theme";
import useColorRecognize from "../../../Hooks/use-recognizeColor";
const ViewOnlyMode: React.FC<{ object: OneJob }> = ({ object }) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  let numberToShowMore = object.skills.slice(3, object.skills.length).length;
  console.log(theme.palette.activeJob.main);
  const colorType = useColorRecognize(object.status)
  const sxBorder = {
    borderTop: `5px solid ${colorType}`,
  };
  return (
    <>
      <TableRow key={object.id}>
        <LeftCustomTableCellContent color="contentBox" sx={sxBorder}>
          <CustomUnstyledButton
            onClick={handleClick}
            sx={{ marginRight: "0.5em" }}
          >
            {showMore ? <RollUpIcon /> : <RollDownIcon />}
          </CustomUnstyledButton>
          {object.companySite}
        </LeftCustomTableCellContent>
        <RolledTableCell sx={sxBorder}>
          <CustomSkillTableContainer>
            {object.skills.slice(0, 3).map((skill: string) => (
              <SkillTag>{skill}</SkillTag>
            ))}
            {numberToShowMore > 0 && <span> {numberToShowMore} more...</span>}
          </CustomSkillTableContainer>
        </RolledTableCell>
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

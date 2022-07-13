import { TableRow } from "@mui/material";
import {
  LeftFullTableCell,
  DescriptionFullTableCell,
  FulledTableCell,
  RightFullTableCell,
} from "../../TableComponents/CustomTableCell";
import { OneJob } from "../../../State/Reducers/DataManager";
import SkillTag from "../../DataComponents/SkillTag";
import { CustomSkillTableContainer } from "../../TableComponents/TableCellWrapper";
const ShowMoreRow: React.FC<{ object: OneJob }> = ({ object }) => {
  return (
    <TableRow>
      <LeftFullTableCell>{object.companySite}</LeftFullTableCell>
      <FulledTableCell>
        <CustomSkillTableContainer>
          {object.skills.slice(3).map((skill,index:number) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </CustomSkillTableContainer>
      </FulledTableCell>
      <DescriptionFullTableCell>
        {object.customDescription}
      </DescriptionFullTableCell>
      <RightFullTableCell />
    </TableRow>
  );
};

export default ShowMoreRow;

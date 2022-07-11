import { TableRow } from "@mui/material";
import {
  LeftFullTableCell,
  DescriptionFullTableCell,
  SkillTabFullCell,
  RightFullTableCell,
} from "../../TableComponents/CustomTableCell";
import { OneJob } from "../../../State/Reducers/DataManager";
import SkillTag from "../../DataComponents/SkillTag";
const ShowMoreRow: React.FC<{ object: OneJob }> = ({ object }) => {
  let restSkillArray = object.skills.slice(3).length;
  return (
    <TableRow>
      <LeftFullTableCell />
      <SkillTabFullCell
        sx={{
          display: restSkillArray > 0 ? "flex" : "table-cell",
        }}
      >
        {object.skills.slice(3).map((skill) => (
          <SkillTag>{skill}</SkillTag>
        ))}
      </SkillTabFullCell>
      <DescriptionFullTableCell>
        {object.customDescription}
      </DescriptionFullTableCell>
      <RightFullTableCell />
    </TableRow>
  );
};

export default ShowMoreRow;

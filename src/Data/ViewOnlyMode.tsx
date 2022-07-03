import React from 'react'
import { OneJob } from '../State/Reducers/DataManager';
import { TableRow } from '@mui/material';
import EditorJobHandler from '../Components/EditRowButton/EditJobHandler';
import DeleteJobHandler from '../Components/DeleteButton/DeleteJobHandler';
import CustomTableCell from '../CustomComponents/Style/MuiCustomComponents/CustomTableCell';

const ViewOnlyMode: React.FC<{ object: OneJob }> = ({ object }) => {
    return (
        <TableRow key={object.id}>
            <CustomTableCell >{object.status}</CustomTableCell>
            <CustomTableCell>{object.companySite}</CustomTableCell>
            <CustomTableCell>{object.skills.join(",")}</CustomTableCell>
            <CustomTableCell>
                <a href={`${object.link}`}>Link</a>
            </CustomTableCell>
            <CustomTableCell>{object.customDescription}</CustomTableCell>
            <CustomTableCell>
                <EditorJobHandler id={object.id} />
                <DeleteJobHandler id={object.id} />
            </CustomTableCell>
        </TableRow>
    )
}

export default ViewOnlyMode
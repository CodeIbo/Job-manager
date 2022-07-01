import React from 'react'
import { OneJob } from '../State/Reducers/DataManager';
import { TableCell,TableRow } from '@mui/material';
import EditorJobHandler from '../CustomComponents/Logic/EditJobHandler';
import DeleteJobHandler from '../CustomComponents/Logic/DeleteJobHandler';

const ViewOnlyMode: React.FC<{ object: OneJob }> = ({ object }) => {
    return (
        <TableRow key={object.id}>
            <TableCell >{object.status}</TableCell>
            <TableCell>{object.companySite}</TableCell>
            <TableCell>{object.skills.join(",")}</TableCell>
            <TableCell>
                <a href={`${object.link}`}>Link</a>
            </TableCell>
            <TableCell>{object.customDescription}</TableCell>
            <TableCell>
                <EditorJobHandler id={object.id} />
                <DeleteJobHandler id={object.id} />
            </TableCell>
        </TableRow>
    )
}

export default ViewOnlyMode
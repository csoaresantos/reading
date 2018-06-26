import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "material-ui";

export const DataTable = ({data}) => {
    return <React.Fragment>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Pags</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>
                                {item.title}
                            </TableCell>
                            <TableCell>{item.author}</TableCell>
                            <TableCell>{item.pag}/{item.pags}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};
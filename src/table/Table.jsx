import React, { useMemo } from 'react';
import { COLUMNS } from './columns';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';

export default function Table() {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    return (
        <div>
            <table {...getTableProps()} >
                <thead>
                    {
                        headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps() } >
                        {
                            headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()} >{ column.render('Header') }  </th>
                            ))
                        }
                    </tr>
                        ))
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

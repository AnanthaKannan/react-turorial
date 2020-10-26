import React, { useMemo, useEffect } from 'react';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import { useTable, useSortBy } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';

export default function SortingTable() {

    const columns = useMemo(() => COLUMNS, []);
    // const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA.filter((obj, index) => {
        if(index < 20)
            return obj;
    }), []);

    const tableInstance = useTable({ columns, data }, useSortBy);
    const { getTableProps, getTableBodyProps,
        footerGroups,
         headerGroups, rows, prepareRow } = tableInstance;

    return (
        <div>
            <table {...getTableProps()}  className='table table-hover table-bordered text-center'>
                <thead className='bg-success'>
                    {
                        headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps() } >
                        {
                            headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                                    { column.render('Header') }  
                                    <span className='bg-danger'>
                                        { column.isSort ? (column.isSortDesc ? '||s>' : '<s||') : '' }
                                    </span>
                                </th>
                            ))
                        }
                    </tr>
                        ))
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>{
                    rows.map(row => {
                    prepareRow(row)
                    return(
                    <tr {...row.getRowProps()} >{
                        row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{ cell.render('Cell') }</td>
                        })
                    }
                    </tr>
                    )
                    })
                }
                    
                </tbody>
                <tfoot className='bg-success'>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps}>
                                            {
                                                column.render('Footer')
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>
    )
}

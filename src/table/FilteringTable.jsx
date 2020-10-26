import React, { useMemo, useEffect } from 'react';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import { useTable, useGlobalFilter } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { GlobalFilter } from './GlobalFilter';

export default function FilteringTable() {

    const columns = useMemo(() => COLUMNS, []);
    // const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA.filter((obj, index) => {
        if(index < 20)
            return obj;
    }), []);

    useEffect(() => {
        document.title = "React Table"
    }, [])

    const tableInstance = useTable({ columns, data }, useGlobalFilter);


    const { 
        getTableProps,
        getTableBodyProps,
        footerGroups,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow
     } = tableInstance;

     const { globalFilter } = state;

    return (
        <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}  className='table table-hover table-bordered text-center'>
                <thead className='bg-success'>
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

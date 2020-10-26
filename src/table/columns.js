export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Footer: 'Id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Footer:'First Name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Footer:'Last Name',
        Cell: ({value}) => { return value.toUpperCase() }
    },
    {
        Header: 'Email',
        accessor: 'email',
        Footer:'Email'
    },
    {
        Header: 'Gender',
        accessor:'gender',
        Footer:'Gender'
    },
    {
        Header: 'Ip Address',
        accessor:'ip_address',
        Footer:'Ip Address'
    }
]


export const GROUPED_COLUMNS =[
    {
        Header: 'Id',
        accessor: 'id',
        Footer: 'Id'
    },
    {
        Header: 'Name',
        Footer:'Name',
        columns: [    {
            Header: 'First Name',
            accessor: 'first_name',
            Footer:'First Name'
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
            Footer:'Last Name'
        }]
    }   ,
    {
        Header:'Info',
        Footer: 'Info',
        columns:[
            {
                Header: 'Email',
                accessor: 'email',
                Footer:'Email'
            },
            {
                Header: 'Gender',
                accessor:'gender',
                Footer:'Gender'
            },
            {
                Header: 'Ip Address',
                accessor:'ip_address',
                Footer:'Ip Address'
            }
        ]
    }
]
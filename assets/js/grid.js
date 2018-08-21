var url = "../datafile.json";
// prepare the data
var source =
    {
        datatype: "json",
        datafields: [
            { name: 'id', type: 'int' },
            { name: 'first_name', type: 'string' },
            { name: 'last_name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'gender',type: 'string' },
            { name: 'ip_address', type: 'string' }
        ],
        url: url
    };
var dataAdapter =new $.jqx.dataAdapter(source);
// create grid.
$("#grid").jqxGrid(
    {
        width: 700,
        height: 450,
        source: dataAdapter,
        rtl: true,
        columns: [
            { text: 'ID',  datafield: 'id', width: 250, align: 'right', cellsalign: 'right' },
            { text: 'FirstName', datafield: 'first_name', width: 100, align: 'right',  cellsalign: 'right', },
            { text: 'LastName', datafield: 'last_name', width: 80, align: 'right'  , cellsalign: 'right' },
            { text: 'Email', datafield: 'email', align: 'right',  width: 350, cellsalign: 'right' },
            { text: 'Gender', datafield: 'gender', width: 100, align: 'right',  cellsalign: 'right' },
            { text: 'IP_Address', datafield: 'ip_address', align: 'right',  cellsalign: 'right' }
        ]
    });
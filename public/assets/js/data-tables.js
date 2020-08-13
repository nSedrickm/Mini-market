
//start all data tables
$(document).ready(function () {
    $('#basic-data-table').DataTable();

    var buttonCommon = {
        exportOptions: {
            format: {
                body: function (data, row, column, node) {
                    // Strip $ from salary column to make it numeric
                    return column === 5 ?
                        data.replace(/[$,]/g, '') :
                        data;
                }
            }
        }
    };

    /* products report generation */
    $('#products-report-table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            $.extend(true, {}, buttonCommon, {
                extend: 'csvHtml5',
                className: 'btn text-light shadow border-0 bg-secondary ',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'excelHtml5',
                className: 'btn text-light shadow border-0 bg-success',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'pdfHtml5',
                className: 'btn text-light shadow border-0 bg-danger',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'print',
                autoPrint: false,
                className: 'btn text-light shadow border-0 bg-primary',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            })
        ]
    });

    /* orders report generation */
    $('#orders-report-table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            $.extend(true, {}, buttonCommon, {
                extend: 'csvHtml5',
                className: 'btn text-light shadow border-0 bg-secondary ',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'excelHtml5',
                className: 'btn text-light shadow border-0 bg-success',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'pdfHtml5',
                className: 'btn text-light shadow border-0 bg-danger',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'print',
                autoPrint: false,
                className: 'btn text-light shadow border-0 bg-primary',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            })
        ]
    });
});


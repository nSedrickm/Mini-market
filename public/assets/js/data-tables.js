
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
            },
            modifier: {
                page: 'current'
            }
        }
    };

    /* products report generation */
    $('#products-report-table').DataTable({
        dom: "<'row'<'col-md-3'l><'col-md-4'f><'col-md-5 text-md-right'B>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [
            $.extend(true, {}, buttonCommon, {
                extend: 'csvHtml5',
                className: 'btn px-4 py-1 shadow btn-secondary ',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'excelHtml5',
                className: 'btn px-4 py-1 shadow btn-success',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'pdfHtml5',
                className: 'btn px-4 py-1 shadow btn-danger',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'print',
                className: 'btn px-4 py-1 shadow btn-primary',
                title: 'Products Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            })
        ],
        initComplete: function () {
            $('.dataTables_filter input[type="search"]').css({ 'width': '350px', 'display': 'inline-block', 'float': 'none !important', 'padding': '1rem', 'margin': '0 auto !important' });
        }
    });

    /* orders report generation */
    $('#orders-report-table').DataTable({
        dom: "<'row'<'col-md-3'l><'col-md-4'f><'col-md-5 text-md-right'B>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [
            $.extend(true, {}, buttonCommon, {
                extend: 'csvHtml5',
                className: 'btn px-4 py-1 shadow btn-secondary ',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'excelHtml5',
                className: 'btn px-4 py-1 shadow btn-success',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'pdfHtml5',
                className: 'btn px-4 py-1 shadow btn-danger',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            }),
            $.extend(true, {}, buttonCommon, {
                extend: 'print',
                className: 'btn px-4 py-1 shadow btn-primary',
                title: 'Orders Report',
                messageTop: 'Generated : ' + new Date().toUTCString(),
            })
        ],
        initComplete: function () {
            $('.dataTables_filter input[type="search"]').css({ 'width': '350px', 'display': 'inline-block', 'float': 'none !important', 'padding': '1rem', 'margin': '0 auto !important' });
        }
    });
});


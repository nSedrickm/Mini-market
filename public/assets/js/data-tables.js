
//start all data tables 
$(document).ready(function () {
    $('#basic-data-table').DataTable({
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });

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


    $("#example-report").append('<caption style="caption-side: bottom">Products Report</caption>');

    $('#example-report').DataTable({
        ajax: 'http://localhost:8001/objects.txt',
        columns: [
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'extn' },
            { data: 'start_date' },
            { data: 'salary' }
        ],
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
});


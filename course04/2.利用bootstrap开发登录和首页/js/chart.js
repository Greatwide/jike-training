
    $(function () {
        Highcharts.chart('chart-container', {
            chart: {
                type: 'column'
            },
            title: {
                text: '告警统计'
            },
            subtitle: {
                text: '按等级 '
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '告警次数'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 次</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '一级告警',
                data: [49, 71, 4, 22, 67, 78, 55, 67, 98, 87, 95, 54]

            }, {
                name: '二级告警',
                data: [83, 78, 98, 93, 56, 84, 89, 87, 91, 83, 93, 92]

            }, {
                name: '三级告警',
                data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51]

            }, {
                name: '四级告警',
                data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51]

            }]


        });
    });

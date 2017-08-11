/**
 * Created by Administrator on 2017/3/1.
 */
$(function () {
    Highcharts.chart('pie-container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '设备告警分布'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '服务器',
                y: 56.33
            }, {
                name: '路由器',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '交换机',
                y: 10.38
            }, {
                name: '空调',
                y: 4.77
            }, {
                name: '电源',
                y: 0.91
            }, {
                name: '其他',
                y: 0.2
            }]
        }]
    });
});

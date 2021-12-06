import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import Logo from '../../logo.svg';

export const Bar =() => {

    const options = {
    //     chart: {
    //         type: 'bar',
    //         height: 600
    //     },
    //     title: {
    //         text: 'Server Monitoring Demo'
    //     },
    //     legend: {
    //         enabled: false
    //     },
    //     subtitle: {
    //         text: 'Instance Load'
    //     },
    //     data: {
    //         csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv',
    //         enablePolling: true,
    //         dataRefreshRate: 1
    //     },
    //     plotOptions: {
    //         bar: {
    //             colorByPoint: true
    //         },
    //         series: {
    //             zones: [{
    //                 color: '#4CAF50',
    //                 value: 0
    //             }, {
    //                 color: '#8BC34A',
    //                 value: 10
    //             }, {
    //                 color: '#CDDC39',
    //                 value: 20
    //             }, {
    //                 color: '#CDDC39',
    //                 value: 30
    //             }, {
    //                 color: '#FFEB3B',
    //                 value: 40
    //             }, {
    //                 color: '#FFEB3B',
    //                 value: 50
    //             }, {
    //                 color: '#FFC107',
    //                 value: 60
    //             }, {
    //                 color: '#FF9800',
    //                 value: 70
    //             }, {
    //                 color: '#FF5722',
    //                 value: 80
    //             }, {
    //                 color: '#F44336',
    //                 value: 90
    //             }, {
    //                 color: '#F44336',
    //                 value: Number.MAX_VALUE
    //             }],
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '{point.y:.0f}%'
    //             }
    //         }
    //     },
    //     tooltip: {
    //         valueDecimals: 1,
    //         valueSuffix: '%'
    //     },
    //     xAxis: {
    //         type: 'category',
    //         labels: {
    //             style: {
    //                 fontSize: '10px'
    //             }
    //         }
    //     },
    //     yAxis: {
    //         max: 100,
    //         title: false,
    //         plotBands: [{
    //             from: 0,
    //             to: 30,
    //             color: '#E8F5E9'
    //         }, {
    //             from: 30,
    //             to: 70,
    //             color: '#FFFDE7'
    //         }, {
    //             from: 70,
    //             to: 100,
    //             color: "#FFEBEE"
    //         }]
    //     }
    // }
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
      };
    
    return(
        <div classNameName="mt-5 pt-5">
            {/* <img src={Logo} /> */}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
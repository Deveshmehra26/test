import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import $ from 'jquery';


export const Spline =() => {

    // const xAxisSampleData = [1.0, 10.0, 5.5, 67.5, 18.2, 21.5, 25.2, {
    //     y: 26.5,
    //     marker: {
    //         symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
    //     }
    // }, 23.3, 18.3, 13.9, 9.6];

    // const yAxisSampleData = [{
    //     y: 3.9,
    //     marker: {
    //         symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
    //     }
    // }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8];
    
    const options ={
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Tokyo',
            marker: {
                symbol: 'square'
            },
            // data: xAxisSampleData
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                y: 26.5,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                }
            }, 23.3, 18.3, 13.9, 9.6]
    
        }, {
            name: 'London',
            marker: {
                symbol: 'diamond'
            },
            // data: yAxisSampleData
            data: [{
                y: 3.9,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                }
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }
    return(
        <div className="mt-5 p-5" id="container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

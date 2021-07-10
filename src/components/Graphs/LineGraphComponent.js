import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {sortFunctionReverse} from "../../utils/dateSort";



const LineChart = ({priceSet, title}) => {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };


    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: `${title} Prices Line Chart`
            }
        },
        scales: {
            yAxes: {
                min: 0,
                max: 20,
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                title: {
                    display: true,
                    text: 'Cost of Gallon In Belize Dollars',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                }
            },
            xAxis: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                }
            }
        },
        grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
    };

    const [graphData, setGraphData] = useState(data)
    const [dataTitle, setdataTitle] = useState("")




    useEffect(() => {
       const labels = [];
       const datasets = [];
       const data = []
       const obj = {}
       const subObj = {}

       priceSet.sort(sortFunctionReverse).forEach(item => {
           labels.unshift(item.pubDate)
           data.unshift(item.price)
       })

       obj.labels = labels
       subObj.label = title
       subObj.data = data
       subObj.fill = false
       subObj.backgroundColor = 'rgb(255, 99, 132)'
       subObj.borderColor = 'rgba(255, 99, 132, 0.2)'
       datasets.push(subObj)
       obj.datasets = datasets
       setGraphData(obj)
    }, [priceSet, title])

    return (
        <>
            <Line data={graphData} options={options}/>
        </>
    );
}

export default LineChart;
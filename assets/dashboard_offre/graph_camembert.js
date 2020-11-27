import Chart from 'chart.js';

var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');



var myPieChart;
myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: global_label,
        datasets: [{
            label: '# of Votes',
            data: global_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgb(235,54,117)',
                'rgba(255,206,86,0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgb(235,54,117)',
                'rgba(255,206,86,0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],


        }],

        options: {

            maintainAspectRatio: false,


            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 50,
                    bottom: 0
                }
            }
        }
    },
});
var myPieChart;
myPieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: global_label,
        datasets: [{
            label: '# of Votes',
            data: global_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgb(235,54,117)',
                'rgba(255,206,86,0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgb(235,54,117)',
                'rgba(255,206,86,0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],


        }],

        options: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'black'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 50,
                    bottom: 0
                }
            }
        }
    },
});

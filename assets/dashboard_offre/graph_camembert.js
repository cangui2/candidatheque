import Chart from 'chart.js';

var ctx = document.getElementById('myChart').getContext('2d');

var test = document.getElementById('test');









var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: global_label,
        datasets: [{
            label: '# of Votes',
            data: global_data,



        }],
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    },
});
console.log(test);
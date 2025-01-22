// script.js

// Chart.js setup for dynamic data
const ctx = document.getElementById('forexChart').getContext('2d');
const forexChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Profit Trend',
            data: [120, 190, 300, 500, 200, 300],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
    }
});

// Function to update chart data dynamically
function updateChartData(newData, newLabels) {
    forexChart.data.labels = newLabels;
    forexChart.data.datasets[0].data = newData;
    forexChart.update();
}

// Example: Update chart data with a button click
document.getElementById('updateChart').addEventListener('click', () => {
    const newLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const newData = [400, 600, 700, 800, 900, 1000];
    updateChartData(newData, newLabels);
});

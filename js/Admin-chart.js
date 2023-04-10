// Setup data for first chart
const data1 = {
  labels: ['5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40'],
  datasets: [{
    label: 'Ср/р +',
    data: [0, 0.2, 0.6, 0.8, 1],
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(255, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'y'
  },{
    label: 'Ср/р врем',
    data: [100, 200, 300, 400, 500, 600, 700],
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(0, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'percentage'
  }]
};

// Setup data for second chart
const data2 = {
  labels: ['5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40'],
  datasets: [{
    label: 'Ср/р +',
    data: [0, 0.4, 0.8, 1],
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(255, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'y'
  },{
    label: 'Ср/р врем',
    data: [200, 400, 600, 800],
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(0, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'percentage'
  }]
};

// Setup options for both charts
const options = {
  scales: {
    y: {
      beginAtZero: true,
      type: 'linear',
      position: 'left'
    },
    percentage: {
      beginAtZero: true,
      type: 'linear',
      position: 'right',
      grid:{
          drawOnChartArea: false
      },
      ticks: {
          callback: function(value, index, values){
              return `${value}мс`
          }
      }
    },
  }
};

// Render first chart
const chart1 = new Chart(
  document.getElementById('myChart1'),
  {
    type: 'line',
    data: data1,
    options: options
  }
);

// Render second chart
const chart2 = new Chart(
  document.getElementById('myChart2'),
  {
    type: 'line',
    data: data2,
    options: options
  }
);

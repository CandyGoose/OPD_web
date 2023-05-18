// Setup data for first chart

dataXMM = [];
dataYMM = [];
dataXLM = [];
dataYLM = [];

// const data11 = {
//   labels: [],
//   datasets: [{
//     label: 'Ср/р +',
//     data: dataXMM,
//     backgroundColor: 'rgba(255, 26, 104, 0.2)',
//     borderColor: 'rgba(255, 26, 104, 1)',
//     tension: 0.4,
//     yAxisID: 'y'
//   },{
//     label: 'Ср/р врем',
//     data: dataYMM,
//     backgroundColor: 'rgba(255, 26, 104, 0.2)',
//     borderColor: 'rgba(0, 26, 104, 1)',
//     tension: 0.4,
//     yAxisID: 'percentage'
//   }]
// };

// Setup data for second chart
const data22 = {
  labels: [],
  datasets: [{
    label: 'Ср/р +',
    data: dataXLM,
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(255, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'y'
  },{
    label: 'Ср/р врем',
    data: dataYLM,
    backgroundColor: 'rgba(255, 26, 104, 0.2)',
    borderColor: 'rgba(0, 26, 104, 1)',
    tension: 0.4,
    yAxisID: 'percentage'
  }]
};

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}


// Setup options for both charts
// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//       type: 'linear',
//       position: 'left'
//     },
//     percentage: {
//       beginAtZero: true,
//       type: 'linear',
//       position: 'right',
//       grid:{
//           drawOnChartArea: false
//       },
//       ticks: {
//           callback: function(value, index, values){
//               return `${value}мс`
//           }
//       }
//     },
//   }
// };

// Render first chart
// const chart1 = new Chart(
//   document.getElementById('myChart1'),
//   {
//     type: 'line',
//     data: data11,
//     options: options
//   }
// );

// Render second chart
const chart2 = new Chart(
  document.getElementById('myChart2'),
  {
    type: 'line',
    data: data22,
    options: options
  }
);


async function init(){
  var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
  
  // const data = await response.json();
  let labels = ['5-11', '11-15', '15-18', '19', '20', '21', '22+'];

  // // alert(data);

  // dataXM = [];
  // dataYM = [];

  // for(let i = 0; i < 7; i++){
  //   dataXM[i] = [];
  //   dataYM[i] = [];
  // }


  // for (let i = 0; i < data2.length; i++) {
  //   if(data2[i]['age']>=5 && data2[i]['age']<11){
  //     dataXM[0].push(data2[i]['correct']/5.0);
  //     dataYM[0].push(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=11 && data2[i]['age']<15){
  //     dataXM[1].push(data2[i]['correct']/5.0);
  //     dataYM[1].push(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=15 && data2[i]['age']<18)  {
  //     dataXM[2].push(data2[i]['correct']/5.0);
  //     dataYM[2].push(parseFloat(data2[i]['result']));
  //     // alert(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=18 && data2[i]['age']<19){
  //     dataXM[3].push(data2[i]['correct']/5.0);
  //     dataYM[3].push(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=19 && data2[i]['age']<20){
  //     dataXM[4].push(data2[i]['correct']/5.0);
  //     dataYM[4].push(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=20 && data2[i]['age']<21){
  //     dataXM[5].push(data2[i]['correct']/5.0);
  //     dataYM[5].push(parseFloat(data2[i]['result']));
  //   }else if(data2[i]['age']>=21){
  //     dataXM[6].push(data2[i]['correct']/5.0);
  //     dataYM[6].push(parseFloat(data2[i]['result']));
  //   }
    
  // }

  // // dataXMM = [];
  // // dataYMM = [];

  // for(let i = 0; i < 7; i++){
  //   if(dataXM[i].length>0){
  //     let res = 0;
  //     for(let j = 0; j < dataXM[i].length; j++){
  //       res += dataXM[i][j];
  //     }
  //     // alert(res);
  //     dataXMM.push(res/dataXM[i].length);
  //     // alert(dataXMM);
  //   }else{
  //     dataXMM.push(NaN);
  //   }
  //   if(dataYM[i].length>0){
  //     let res = 0;
  //     for(let j = 0; j < dataYM[i].length; j++){
  //       res += dataYM[i][j];
  //     }
  //     // alert(res);
  //     dataYMM.push(res/dataYM[i].length);
  //   }else{
  //     dataYMM.push(NaN);
  //   }
  // }


  // addData(chart1, labels[0], data11);
  // addData(chart1, labels[1], data11);
  // addData(chart1, labels[2], data11);
  // addData(chart1, labels[3], data11);
  // addData(chart1, labels[4], data11);
  // addData(chart1, labels[5], data11);
  // addData(chart1, labels[6], data11);
  // addData(chart1, labels[7], data11);
  // alert(dataXMM);
  // alert(dataYMM);


  const response2 = await fetch('/backend/get_resuslt_test.php?sex=1&test='+$_GET['id']);
  const data2 = await response2.json();
  // alert(data2);
  dataXL = [];
  dataYL = [];

  for(let i = 0; i < 7; i++){
    dataXL[i] = [];
    dataYL[i] = [];
  }

  for (let i = 0; i < data2.length; i++) {
    if(data2[i]['age']>=5 && data2[i]['age']<11){
      dataXL[0].push(data2[i]['correct']/5.0);
      dataYL[0].push(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=11 && data2[i]['age']<15){
      dataXL[1].push(data2[i]['correct']/5.0);
      dataYL[1].push(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=15 && data2[i]['age']<18)  {
      dataXL[2].push(data2[i]['correct']/5.0);
      dataYL[2].push(parseFloat(data2[i]['result']));
      // alert(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=18 && data2[i]['age']<19){
      dataXL[3].push(data2[i]['correct']/5.0);
      dataYL[3].push(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=19 && data2[i]['age']<20){
      dataXL[4].push(data2[i]['correct']/5.0);
      dataYL[4].push(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=20 && data2[i]['age']<21){
      dataXL[5].push(data2[i]['correct']/5.0);
      dataYL[5].push(parseFloat(data2[i]['result']));
    }else if(data2[i]['age']>=21){
      dataXL[6].push(data2[i]['correct']/5.0);
      dataYL[6].push(parseFloat(data2[i]['result']));
    }
  }

  // dataXLM = [];
  // dataYLM = [];
  
  for(let i = 0; i < 7; i++){
    if(dataXL[i].length>0){
      let res = 0;
      for(let j = 0; j < dataXL[i].length; j++){
        res += dataXL[i][j];
      }
      dataXLM.push(res/dataXL[i].length);
    }else{
      dataXLM.push(NaN);
    }
    if(dataYL[i].length>0){
      let res = 0;
      for(let j = 0; j < dataYL[i].length; j++){
        res += dataYL[i][j];
      }
      dataYLM.push(res/dataYL[i].length);
    }else{
      dataYLM.push(NaN);
    }
  }

  addData(chart2, labels[0], data22);
  addData(chart2, labels[1], data22);
  addData(chart2, labels[2], data22);
  addData(chart2, labels[3], data22);
  addData(chart2, labels[4], data22);
  addData(chart2, labels[5], data22);
  addData(chart2, labels[6], data22);
}

init();

// данные для графика
const data = {
    datasets: [
      {
        label: '10-15 лет',
        data: [
          // {x: 155, y: 5, name: 'Вася'},
          // другие данные для этой группы
        ],
        backgroundColor: 'blue',
      },
      {
        label: '16-18 лет',
        data: [
          // {x: 302, y: 0.8, name: 'Вася'},
          // другие данные для этой группы
        ],
        backgroundColor: 'green',
      },
      {
        label: '19-20 лет',
        data: [
          // {x: 400, y: 0.6, name: 'Вася'},
          // другие данные для этой группы
        ],
        backgroundColor: 'pink',
      },
      {
        label: '21+',
        data: [
          // {x: 235, y: 0.4, name: 'Вася'},
          // другие данные для этой группы
        ],
        backgroundColor: 'orange',
      },
    ],
  };
  
  // данные для графика
  const data2 = {
    datasets: [
      {
        label: '10-15 лет',
        data: [
          // {x: 349, y: 5, name: 'Катя'},
          // другие данные для этой группы
        ],
        backgroundColor: 'blue',
      },
      {
        label: '16-18 лет',
        data: [
          // {x: 290, y: 0.8, name: 'Катя'},
          // другие данные для этой группы
        ],
        backgroundColor: 'green',
      },
      {
        label: '19-20 лет',
        data: [
          // {x: 250, y: 0.2, name: 'Катя'},
          // другие данные для этой группы
        ],
        backgroundColor: 'pink',
      },
      {
        label: '21+',
        data: [
          // {x: 348, y: 5, name: 'Катя'},
          // другие данные для этой группы
        ],
        backgroundColor: 'orange',
      },
    ],
  };
  
  // опции для графиков
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Среднее время (м/с)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Верность (количество "Верно" на все попытки)',
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        external: (context) => {
          const tooltip = document.getElementById('tooltip');
          if (!tooltip){
            return;
          }
          if (context.tooltip.opacity === 0) {
            tooltip.style.display = 'none';
            return;
          }
  
          const { offsetLeft: canvasLeft, offsetTop: canvasTop } =
            context.chart.canvas;
          const { x, y, name } = context.tooltip.dataPoints[0].parsed;
          const left = canvasLeft + x + 10;
          const top = canvasTop + y + 10;
          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${top}px`;
          tooltip.innerHTML = `${name}: Время - ${x} м/с, Верность - ${y}`;
  
          tooltip.style.display = 'block';
        },
        callbacks: {
          label: (context) => {
            const { x, y, name } = context.raw;
            return `${name}: Время - ${x} м/с, Верность - ${y}`;
          },
        },
        onHover: (event, chartElement) => {
          event.target.style.cursor = chartElement.length ? 'pointer' : 'default';
        },
      },
    },
  };
  
  // создание графика 1
  const ctx = document.getElementById('myChart1').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: options,
  });
  
  // создание графика 2
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const chart2 = new Chart(ctx2, {
    type: 'scatter',
    data: data2,
    options: options,
  });

  function addNewDataPoint(chartIndex, datasetIndex, x, y, name) {
    // alert(name);
    if(chartIndex == 0){
      data.datasets[datasetIndex].data.push({x, y, name});
    }else{
      data2.datasets[datasetIndex].data.push({x, y, name});
    }
    let chart1;
    if(chartIndex == 0){
      chart1 = chart;
    }else{
      chart1 = chart2;
    }
    chart1.update();
  }

async function init(){
  var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
  const response = await fetch('/backend/get_resuslt_test.php?test='+$_GET['id']);
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let current = data[i];
    let sex = 0;

    if(current['sex'] == 1){
      sex=1;
    }
    // alert(current['name']);
    let a = JSON.parse(current['result']);
    const sum = a.reduce((a, b) => a + b);
    const x = sum / a.length;
    let b = JSON.parse(current['correct']);
    let y;
    if(b!=null){
      let sum2 = 0;
      for (let j = 0; j < b.length; j++) {
        sum2 += b[j];
      }
      y = sum2/b.length;
    }else{
      y = 0;
    }
    if(current['age'] < 16){
      addNewDataPoint(sex,0,x,y,current['name']);
    }else if (current['age'] < 19){
      // alert(current['name '].type);
      addNewDataPoint(sex,1,x,y,current['name']);
    }
    else if (current['age'] < 21){
      addNewDataPoint(sex,2,x,y,current['name']);
    }else{
      addNewDataPoint(sex,3,x,y,current['name']);
    }
  }
}
init();
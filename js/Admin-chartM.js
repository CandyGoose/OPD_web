// данные для графика
const data = {
  datasets: [
    {
      label: '10-15 лет',
      data: [
        {x: 155, y: 5, name: 'Вася'},
        // другие данные для этой группы
      ],
      backgroundColor: 'blue',
    },
    {
      label: '16-21 лет',
      data: [
        {x: 302, y: 0.8, name: 'Вася'},
        // другие данные для этой группы
      ],
      backgroundColor: 'green',
    },
    {
      label: '22-27 лет',
      data: [
        {x: 400, y: 0.6, name: 'Вася'},
        // другие данные для этой группы
      ],
      backgroundColor: 'pink',
    },
    {
      label: '28-33 года',
      data: [
        {x: 235, y: 0.4, name: 'Вася'},
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
        {x: 349, y: 5, name: 'Катя'},
        // другие данные для этой группы
      ],
      backgroundColor: 'blue',
    },
    {
      label: '16-21 лет',
      data: [
        {x: 290, y: 0.8, name: 'Катя'},
        // другие данные для этой группы
      ],
      backgroundColor: 'green',
    },
    {
      label: '22-27 лет',
      data: [
        {x: 250, y: 0.2, name: 'Катя'},
        // другие данные для этой группы
      ],
      backgroundColor: 'pink',
    },
    {
      label: '28-33 года',
      data: [
        {x: 348, y: 5, name: 'Катя'},
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




dataXMM = [];
dataYMM = [];
dataXLM = [];
dataYLM = [];


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
  let labels = ['5-11', '11-15', '15-18', '19', '20', '21', '22+'];

  // alert(data);

  dataXM = [];
  dataYM = [];

  for(let i = 0; i < 7; i++){
    dataXM[i] = [];
    dataYM[i] = [];
  }


  for (let i = 0; i < data.length; i++) {
    if(data[i]['sex']!=0){
      continue;
    }
    if(data[i]['age']>=5 && data[i]['age']<11){
      dataXM[0].push(data[i]['correct']/5.0);
      dataYM[0].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=11 && data[i]['age']<15){
      dataXM[1].push(data[i]['correct']/5.0);
      dataYM[1].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=15 && data[i]['age']<=18)  {
      dataXM[2].push(data[i]['correct']/5.0);
      dataYM[2].push(parseFloat(data[i]['result']));
      // alert(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=19 && data[i]['age']<20){
      dataXM[3].push(data[i]['correct']/5.0);
      dataYM[3].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=20 && data[i]['age']<21){
      dataXM[4].push(data[i]['correct']/5.0);
      dataYM[4].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=21 && data[i]['age']<22){
      dataXM[5].push(data[i]['correct']/5.0);
      dataYM[5].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=22){
      dataXM[6].push(data[i]['correct']/5.0);
      dataYM[6].push(parseFloat(data[i]['result']));
    }
    
  }

  // dataXMM = [];
  // dataYMM = [];

  for(let i = 0; i < 7; i++){
    if(dataXM[i].length>0){
      let res = 0;
      for(let j = 0; j < dataXM[i].length; j++){
        res += dataXM[i][j];
      }
      // alert(res);
      dataXMM.push(res/dataXM[i].length);
      // alert(dataXMM);
    }else{
      dataXMM.push(NaN);
    }
    if(dataYM[i].length>0){
      let res = 0;
      for(let j = 0; j < dataYM[i].length; j++){
        res += dataYM[i][j];
      }
      // alert(res);
      dataYMM.push(res/dataYM[i].length);
    }else{
      dataYMM.push(NaN);
    }
  }


  
  // addData(chart1, labels[7], data11);
  // alert(dataXMM);
  // alert(dataYMM);


  // const response2 = await fetch('/backend/get_resuslt_test.php?sex=1');
  // const data2 = await response2.json();
  // alert(data2);
  dataXL = [];
  dataYL = [];

  for(let i = 0; i < 7; i++){
    dataXL[i] = [];
    dataYL[i] = [];
  }

  for (let i = 0; i < data.length; i++) {
    if(data[i]['sex']!=1){
      continue;
    }
    if(data[i]['age']>=5 && data[i]['age']<11){
      dataXL[0].push(data[i]['correct']/5.0);
      dataYL[0].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=11 && data[i]['age']<15){
      dataXL[1].push(data[i]['correct']/5.0);
      dataYL[1].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=15 && data[i]['age']<19)  {
      dataXL[2].push(data[i]['correct']/5.0);
      dataYL[2].push(parseFloat(data[i]['result']));
      // alert(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=19 && data[i]['age']<20){
      dataXL[3].push(data[i]['correct']/5.0);
      dataYL[3].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=20 && data[i]['age']<21){
      dataXL[4].push(data[i]['correct']/5.0);
      dataYL[4].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=21 && data[i]['age']<22){
      dataXL[5].push(data[i]['correct']/5.0);
      dataYL[5].push(parseFloat(data[i]['result']));
    }else if(data[i]['age']>=22){
      dataXL[6].push(data[i]['correct']/5.0);
      dataYL[6].push(parseFloat(data[i]['result']));
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
  addData(chart1, labels[0], data11);
  addData(chart1, labels[1], data11);
  addData(chart1, labels[2], data11);
  addData(chart1, labels[3], data11);
  addData(chart1, labels[4], data11);
  addData(chart1, labels[5], data11);
  addData(chart1, labels[6], data11);
  addData(chart2, labels[0], data22);
  addData(chart2, labels[1], data22);
  addData(chart2, labels[2], data22);
  addData(chart2, labels[3], data22);
  addData(chart2, labels[4], data22);
  addData(chart2, labels[5], data22);
  addData(chart2, labels[6], data22);
}

init();


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
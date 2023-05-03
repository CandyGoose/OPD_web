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
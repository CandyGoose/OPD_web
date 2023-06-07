<!DOCTYPE html>
<html>
<head>
  <title>T-критерий Стьюдента</title>
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expert</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>
  <h1>T-критерий Стьюдента</h1>

  <div id="results"></div>

  <script>
    // Функция для применения t-критерия Стьюдента и вывода результатов
    function performTTest(data1, data2, data3) {
      // Расчет средних значений
      const mean1 = data1.reduce((a, b) => a + b) / data1.length;
      const mean2 = data2.reduce((a, b) => a + b) / data2.length;
      const mean3 = data3.reduce((a, b) => a + b) / data3.length;

      // Расчет разницы между средними значениями
      const diff1 = mean1 - mean2;
      const diff2 = mean1 - mean3;
      const diff3 = mean2 - mean3;

      // Расчет стандартного отклонения
      const variance1 = data1.reduce((a, b) => a + Math.pow(b - mean1, 2), 0) / (data1.length - 1);
      const variance2 = data2.reduce((a, b) => a + Math.pow(b - mean2, 2), 0) / (data2.length - 1);
      const variance3 = data3.reduce((a, b) => a + Math.pow(b - mean3, 2), 0) / (data3.length - 1);
      const pooledVariance = (variance1 + variance2 + variance3) / 3;
      const standardDeviation = Math.sqrt(pooledVariance);

      // Расчет t-статистики
      const tStatistic1 = diff1 / (standardDeviation / Math.sqrt(data1.length));
      const tStatistic2 = diff2 / (standardDeviation / Math.sqrt(data1.length));
      const tStatistic3 = diff3 / (standardDeviation / Math.sqrt(data2.length));

      // Расчет степеней свободы
      const degreesOfFreedom1 = data1.length + data2.length - 2;
      const degreesOfFreedom2 = data1.length + data3.length - 2;
      const degreesOfFreedom3 = data2.length + data3.length - 2;

      // Расчет p-значения (двухстороннее)
      const pValue1 = (1 - Math.abs(tcdf(tStatistic1, degreesOfFreedom1))) * 2;
      const pValue2 = (1 - Math.abs(tcdf(tStatistic2, degreesOfFreedom2))) * 2;
      const pValue3 = (1 - Math.abs(tcdf(tStatistic3, degreesOfFreedom3))) * 2;

      // Вывод результатов
      const results = document.getElementById("results");
      results.innerHTML = `
        <p>Среднее значение группы DB: ${mean1}</p>
        <p>Среднее значение группы 3D: ${mean2}</p>
        <p>Среднее значение группы Web: ${mean3}</p>
        <p>Стандартное отклонение группы DB: ${Math.sqrt(variance1)}</p>
        <p>Стандартное отклонение группы 3D: ${Math.sqrt(variance2)}</p>
        <p>Стандартное отклонение группы Web: ${Math.sqrt(variance3)}</p>
        <p>Разница между средними значениями (группа DB и 3D): ${diff1}</p>
        <p>Разница между средними значениями (группа DB и Web): ${diff2}</p>
        <p>Разница между средними значениями (группа 3D и Web): ${diff3}</p>
        <p>t-статистика (группа DB и 3D): ${tStatistic1}</p>
        <p>t-статистика (группа DB и Web): ${tStatistic2}</p>
        <p>t-статистика (группа 3D и Web): ${tStatistic3}</p>
        <p>Степени свободы (группа DB и 3D): ${degreesOfFreedom1}</p>
        <p>Степени свободы (группа DB и Web): ${degreesOfFreedom2}</p>
        <p>Степени свободы (группа 3D и Web): ${degreesOfFreedom3}</p>
        <p>p-значение (группа DB и группа 3D): ${pValue1}</p>
        <p>p-значение (группа DB и Web): ${pValue2}</p>
        <p>p-значение (группа 3D и Web): ${pValue3}</p>
      `;
    }

    // Функция для расчета значения функции распределения Стьюдента
    function tcdf(t, df) {
      const x = df / (t * t + df);
      let approx = Math.pow(1 - x, df / 2);

      if ((df % 2) === 1 && t < 0) {
        approx = -approx;
      }

      return 1 - approx;
    }

    // Получение данных из базы данных
    const userIds = [1, 2, 3]; 

    let lightReactionTimesDB = []
    let lightReactionTimesWeb = []
    let lightReactionTimes3D = []
// Цикл для выполнения запросов с разными userId
userIds.forEach(userId => {
  fetch('backend/get_test_values_prof.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `testId=1&userId=${userId}`, // Замените значение testId на необходимые
  })
  .then(response => response.json())
  .then(data => {
    const testValues = data.testValues;
    let array = JSON.parse(testValues[0]);

    console.log(array);
    if (userId === 1){
      lightReactionTimesDB = array;
    } else if (userId === 2){
    lightReactionTimes3D = array;
    } else {
      lightReactionTimesWeb = array;
      performTTest(lightReactionTimesDB, lightReactionTimes3D, lightReactionTimesWeb);
    }

    // Вызов функции для выполнения t-критерия Стьюдента
  })
  .catch(error => {
    console.error('Ошибка получения данных:', error);
  });
});


  </script>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
  <title>Корреляционный анализ и уравнение регрессии</title>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
  <h1>Корреляционный анализ и уравнение регрессии</h1>

  <div id="resultsContainer"></div>

  <script>
    let weight = [];

    function calculateCorrelation(testId, testValues) {
      var resultsContainer = document.getElementById('resultsContainer');

      var resultContainer = document.createElement('div');
      resultContainer.innerHTML = '<h3>Результаты для testId=' + testId + ':</h3>';
      resultsContainer.appendChild(resultContainer);

      var testValue = document.createElement('p');
      resultContainer.appendChild(testValue);

      var scoreValue = document.createElement('p');
      resultContainer.appendChild(scoreValue);

      var correlationResult = document.createElement('p');
      resultContainer.appendChild(correlationResult);

      var regressionEquation = document.createElement('p');
      resultContainer.appendChild(regressionEquation);

      var regressionPlot = document.createElement('div');
      resultContainer.appendChild(regressionPlot);

      var scoreValues = [];

      // Выводим значения testValues для текущего теста
      $.ajax({
        url: '/backend/get_test_values.php',
        method: 'POST',
        data: { testId: testId },
        success: function(response) {
          var data = JSON.parse(response);

          if (data.error) {
            testValue.innerHTML = 'Ошибка: ' + data.error;
            return;
          }

          testValues = data.testValues;
          testValue.innerHTML = testValues.join(', ');

          // Выводим значения scoreValues для текущего теста
          scoreValue.innerHTML = 'Введите значения баллов через запятую: <input type="text" id="scoreInput' + testId + '" />';
          var button = document.createElement('button');
          button.innerHTML = 'Анализировать';
          button.addEventListener('click', function() {
            var input = document.getElementById('scoreInput' + testId);
            var scores = input.value.split(',').map(function(score) {
              return parseInt(score.trim(), 10);
            });

            if (scores.length !== testValues.length) {
              correlationResult.innerHTML = 'Ошибка: количество значений тестов и баллов должно быть одинаковым.';
              return;
            }

            scoreValues = scores;

            // Расчет корреляции
            var correlationCoefficient = calculateCorrelationCoefficient(testValues, scoreValues);
            correlationResult.innerHTML = 'Коэффициент корреляции: ' + correlationCoefficient.toFixed(2);

            // Расчет уравнения регрессии
            var regressionModel = calculateRegressionEquation(testValues, scoreValues);
            var slope = regressionModel.slope;
            var intercept = regressionModel.intercept;
            regressionEquation.innerHTML = 'Уравнение регрессии: y = ' + slope.toFixed(2) + 'x + ' + intercept.toFixed(2);

            // Сохранение значения коэффициента наклона в переменную weight
            weight.push(slope.toFixed(2));

            // Визуализация графика регрессии
            var trace = {
              x: testValues,
              y: scoreValues[testId - 1],
              mode: 'markers',
              type: 'scatter',
              name: 'Данные'
            };

            var x = testValues;
            var y = [];
            for (var i = 0; i < x.length; i++) {
              y.push(slope * x[i] + intercept);
            }

            var regressionTrace = {
              x: x,
              y: y,
              mode: 'lines',
              type: 'scatter',
              name: 'Регрессия'
            };

            var data = [trace, regressionTrace];

            var layout = {
              title: 'График регрессии',
              xaxis: {
                title: 'Значения тестов'
              },
              yaxis: {
                title: 'Значения баллов'
              }
            };

            Plotly.newPlot(regressionPlot, data, layout);
          });
          resultContainer.appendChild(button);
        },
        error: function(xhr, status, error) {
          console.error(error);
          testValue.innerHTML = 'Ошибка при получении данных из базы данных.';
        }
      });
    }

    function calculateCorrelationCoefficient(x, y) {
      var sumX = 0;
      var sumY = 0;
      var sumXY = 0;
      var sumX2 = 0;
      var sumY2 = 0;
      var n = x.length;

      for (var i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumX2 += x[i] * x[i];
        sumY2 += y[i] * y[i];
      }

      var numerator = (n * sumXY) - (sumX * sumY);
      var denominator = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY)));

      return numerator / denominator;
    }

    function calculateRegressionEquation(x, y) {
      var sumX = 0;
      var sumY = 0;
      var sumXY = 0;
      var sumX2 = 0;
      var n = x.length;

      for (var i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumX2 += x[i] * x[i];
      }

      var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      var intercept = (sumY - slope * sumX) / n;

      return { slope: slope, intercept: intercept };
    }

    // Вызываем функцию calculateCorrelation() для каждого значения testId от 1 до 12
    for (var testId = 1; testId <= 12; testId++) {
      calculateCorrelation(testId);
      if (testId === 12) {
        save(weight)
      }
    } 
  </script>
</body>
</html>

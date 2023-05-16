document.getElementById('pulse-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем отправку формы

    var pulseInput = document.getElementById('pulse-input');
    var pulseValue = pulseInput.value.trim(); // Получаем значение пульса и удаляем лишние пробелы

    // Преобразуем пульс в вид массива
    var pulseArray = pulseValue.split(' ').map(Number);

    // Проверяем условия для каждого значения пульса
    var isValid = pulseArray.every(function(value) {
        return value >= 40 && value <= 220 && Number.isInteger(value);
    });

    if (!isValid) {
        // Выводим ошибку
        alert('Неправильно введены данные пульса. Пожалуйста, проверьте значения.');

        // Очищаем поле ввода
        pulseInput.value = '';
    } else {
        // Устанавливаем преобразованный пульс в поле формы
        pulseInput.value = JSON.stringify(pulseArray);

        // Отправляем форму
        this.submit();
    }
});

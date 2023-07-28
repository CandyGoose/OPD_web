# Основы профессиональной деятельности, ОПД
ИТМО Программная инженерия (Нейротехнологии и программирование) 

---

## OPD_web
1) Валявина Валерия Константиновна Р3123
2) Касьяненко Вера Михайловна P3120
3) Кремпольская Екатерина Александровна Р3121
2) Лукьянчук Ярослав Евгеньевич Р3123
3) Сергеев Михаил Александрович Р3123

---

## Инструкция по запуску проекта

1. Скачайте весь проект, для этого вы, например, можете скачать его в zip формате, а затем распаковать в удобном месте

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/04baa174-3f89-451d-adb0-bc497075a946)

2. Скачайте MAMP по [ссылке](https://www.mamp.info/en/downloads/) и установите его

***Интерфейс в MAMP может отличаться от скриншотов, однако результат от этого не изменится***

3. Откройте MAMP, перейдите во вкладку `MAMP - Preferences`, зайдите в раздел `Ports` и поменяйте следующие настройки:
- Apache Port: `8888`
- Nginx Port: `8888`
- MySQL Port: `8889`

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/c8adb6d2-dc16-40b3-921f-f0fb3bd6bc5e)

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/4e79dcc7-433c-4884-8fc0-976f298af7de)

4. Здесь же зайдите в раздел `Server` и поменяйте `Document Root` на полный путь к распакованному проекту, затем нажмите OK

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/490f2e5a-64f0-4f5e-944d-a4d13221a0dc)

5. Перейдите в браузер и откройте [phpMyAdmin](http://localhost:8888/phpMyAdmin/)

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/73218753-7370-4a60-b225-8d8fcc9f3fd4)

6. Нажмите на Создать БД слева

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/c09af69e-be9f-4db2-95c1-1a24394f4a7e)

7. Введите имя базы данных `proratings`, потом нажмите `Создать`

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/39b08c6f-7f91-42c1-95bc-b702707ed443)

8. Сверху выберите `Импорт`, потом нажмите на `Выберите файл`, далее найдите в распакованном архиве папку `db` и файл `db.sql`, после этого нажмите внизу `Вперед`

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/63823327-3889-4a25-a00f-0e574ee396ab)

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/7d654b6c-bcaf-400a-a086-6b3e3df2bafd)

9. Если все успешно выполнено, можно пользоваться нашим [сайтом для пользователей](http://localhost:8888/) и [сайтом для админа](http://localhost:8888/admin.php)

**Примечание.** Чтобы попасть на сайт админа, предварительно надо [войти](http://localhost:8888/loginIndex.php). По умолчанию для админа
- логин: `user1`
- пароль: `admin`

![image](https://github.com/VeraKasianenko/OPD_web/assets/112972833/8b66c1bd-351c-46a2-95e6-b5ae9c5db0af)

<h3>Всем удачи!</h3>

<img src="https://github.com/VeraKasianenko/OPD_web/assets/112972833/d914e7f4-d6ca-4e5c-8fab-5f76c68ebdf8" height="700"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AboutUs</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
  include "menu.php";
?>

    <div class="container">
      <div class="title">Login</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="Enter your name" required>
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" placeholder="Enter your password" required>
            </div>
            <div class="input-box">
              <div class="select-box">
                <select>
                  <option hidden>Your qualification</option>
                  <option>Respondent</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Login">
          </div>
        </form>
      </div>
    </div>
  <script src="./js/menu.js"></script>
  </body>
</html>


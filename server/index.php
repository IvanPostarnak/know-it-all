<?php
  define('USERS_CARDS_FILE_URL', './../database/usersCards.json');
  define('USERS_CATEGORIES_FILE_URL', './../database/usersCategories.json');
  define('DEFAULT_CARDS_FILE_URL', './../database/defaultCards.json');
  define('DEFAULT_CATEGORIES_FILE_URL', './../database/defaultCategories.json');

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = file_get_contents("php://input");
    
    if ($_POST["categories"] == "users") {

      $responce = file_put_contents(USERS_CATEGORIES_FILE_URL, $data, FILE_APPEND | LOCK_EX);

    } else if ($_POST["cards"] == "users") {

      $responce = file_put_contents(USERS_CARDS_FILE_URL, $data, FILE_APPEND | LOCK_EX);

    } else {

      $responce = null;

    }

    if ($responce == false) {

      echo "Error: '" . $data . "' was NOT saved!";

    } else if ($responce == null) {

      echo "Error: 'POST-request' has INCORRECT parameters. '" . $data . "' was NOT saved!";

    } else {

      echo "Success! '" . $data . "' was saved!";

    }

  } else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    if ($_GET["categories"] == "users") {

      $responce = file_get_contents(USERS_CATEGORIES_FILE_URL);

    } else if ($_GET["categories"] == "default") {

      $responce = file_get_contents(DEFAULT_CATEGORIES_FILE_URL);

    } else if ($_GET["categories"] == "users&default") {

      $responce = file_get_contents(USERS_CATEGORIES_FILE_URL) . file_get_contents(DEFAULT_CATEGORIES_FILE_URL);

    } else if ($_GET["cards"] == "users") {

      $responce = file_get_contents(USERS_CARDS_FILE_URL);

    } else if ($_GET["cards"] == "default") {

      $responce = file_get_contents(DEFAULT_CARDS_FILE_URL);

    } else if ($_GET["cards"] == "users&default") {

      $responce = file_get_contents(USERS_CARDS_FILE_URL) . file_get_contents(DEFAULT_CARDS_FILE_URL);

    } else {

      $responce = null;
      
    }

    if ($responce == false) {

      echo "Error: Info was not read!";

    } else if ($responce == null) {

      echo "Error: 'GET-request' has INCORRECT parameters. Info was not read!";

    } else {

      echo $responce;

    }

  } else {

    echo "ERROR: request method is incorrect. It should be either POST or GET!";

  }
?>
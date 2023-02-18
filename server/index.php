<?php
  $currentTime = date("Y-m-d");
  define("SERVER_LOG_FILE_URL", $_SERVER['DOCUMENT_ROOT'] . "/server/logs/" . $currentTime . "_index-log.txt");
  $serverLog = fopen(SERVER_LOG_FILE_URL, "a");

  define("ROOT", $_SERVER['DOCUMENT_ROOT']);
  define("USERS_CARDS_FILE_URL", ROOT . "/database/usersCards.json");
  define("USERS_CATEGORIES_FILE_URL", ROOT . "/database/usersCategories.json");
  define("DEFAULT_CARDS_FILE_URL", ROOT . "/database/defaultCards.json");
  define("DEFAULT_CATEGORIES_FILE_URL", ROOT . "/database/defaultCategories.json");

    fwrite($serverLog, "# Enter index.php at: " . date("H-i-s") . "\n\n");

    fwrite($serverLog, "\t\tSERVER_LOG_FILE_URL: " . SERVER_LOG_FILE_URL . "\n");
    fwrite($serverLog, "\t\tROOT: " . ROOT . "\n");
    fwrite($serverLog, "\t\tUSERS_CARDS_FILE_URL: " . USERS_CARDS_FILE_URL . "\n");
    fwrite($serverLog, "\t\tUSERS_CATEGORIES_FILE_URL: " . USERS_CATEGORIES_FILE_URL . "\n");
    fwrite($serverLog, "\t\tDEFAULT_CARDS_FILE_URL: " . DEFAULT_CARDS_FILE_URL . "\n");
    fwrite($serverLog, "\t\tDEFAULT_CATEGORIES_FILE_URL: " . DEFAULT_CATEGORIES_FILE_URL . "\n\n");

    fwrite($serverLog, "\t!=SERVER[REQUEST_METHOD]: " . $_SERVER["REQUEST_METHOD"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_NAME]: " . $_SERVER["SERVER_NAME"] . "\n");
    fwrite($serverLog, "\t\tSERVER[REMOTE_ADDR]: " . $_SERVER["REMOTE_ADDR"] . "\n\n");

  $response = "1";
    fwrite($serverLog, "\t\t(initialization) RESPONSE = " . $response . "\n\n");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = file_get_contents("php://input");
    $dataArray = json_decode($data, true);
    $lastKey = array_key_last($dataArray);
    $lastValue = array_pop($dataArray);  
    $dataJSON = json_encode($dataArray);

      fwrite($serverLog, "\t\t\tDATA (php://input): " . $data . "\n");
      fwrite($serverLog, "\t\t\tDATA (Array): " . $dataArray . "\n");
      fwrite($serverLog, "\t\t\tLAST KEY: " . $lastKey . "\n");
      fwrite($serverLog, "\t\t\tVALUE of LAST KEY: " . $lastValue . "\n");
      fwrite($serverLog, "\t\t\tCLEANED DATA(json): " . $dataJSON . "\n");

    if ($lastKey == "categories" && $lastValue == "users") {

      $response = file_put_contents(USERS_CATEGORIES_FILE_URL, $dataJSON . "\n", FILE_APPEND);
        fwrite($serverLog, "\t\t\tPOST [categories] = 'users' branch\n");

    } else if ($lastKey == "cards" && $lastValue == "users") {

      $response = file_put_contents(USERS_CARDS_FILE_URL, $dataJSON . "\n", FILE_APPEND);
        fwrite($serverLog, "\t\t\tPOST [cards] = 'users' branch\n");

    } else {

      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = NULL branch\n");

    }

    if ($response == false) {

      echo "Error: '" . $data . "' was NOT saved!";
        fwrite($serverLog, "\t\t\tif (RESPONSE = FALSE) branch\n");

    } else if ($response == null) {

      echo "Error: 'POST-request' has INCORRECT parameters. '" . $data . "' was NOT saved!";
        fwrite($serverLog, "\t\t\tif (RESPONSE = NULL) branch\n");

    } else {

      echo "Success! '" . $data . "' was saved!";
        fwrite($serverLog, "\t\t\tSUCCESS branch\n");

    }

  } else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    if ($_GET["categories"] == "users") {

      $response = file_get_contents(USERS_CATEGORIES_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [categories] = 'users' branch\n");

    } else if ($_GET["categories"] == "default") {

      $response = file_get_contents(DEFAULT_CATEGORIES_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [categories] = 'default' branch\n");

    } else if ($_GET["categories"] == "users&default") {

      $response = file_get_contents(USERS_CATEGORIES_FILE_URL) . file_get_contents(DEFAULT_CATEGORIES_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [categories] = 'users&default' branch\n");

    } else if ($_GET["cards"] == "users") {

      $response = file_get_contents(USERS_CARDS_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [cards] = 'users' branch\n");

    } else if ($_GET["cards"] == "default") {

      $response = file_get_contents(DEFAULT_CARDS_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [cards] = 'default' branch\n");

    } else if ($_GET["cards"] == "users&default") {

      $response = file_get_contents(USERS_CARDS_FILE_URL) . file_get_contents(DEFAULT_CARDS_FILE_URL);
        fwrite($serverLog, "\t\t\tGET [cards] = 'users&default' branch\n");

    } else {

      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = NULL branch\n");
      
    }

    if ($response == false) {

      echo "Error: Info was not read!";
        fwrite($serverLog, "\t\t\tRESPONSE = FALSE branch\n");

    } else if ($response == null) {

      echo "Error: 'GET-request' has INCORRECT parameters. Info was not read!";
        fwrite($serverLog, "\t\t\tRESPONSE = NULL branch\n");

    } else {

      echo $response;
        fwrite($serverLog, "\t\t\tSUCCESS branch\n");

    }

  } else {

    echo "ERROR: request method is incorrect. It should be either POST or GET!";
      fwrite($serverLog, "\t\t\tERROR: request method is incorrect\n");

  }

    fwrite($serverLog, "\n# Exit(0) index.php and closing server-log.txt\n\n\n");
  fclose($serverLog);
  exit(0);
?>
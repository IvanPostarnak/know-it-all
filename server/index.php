<?php
  $currentTime = date("Y-m-d");
  $serverLog = fopen($_SERVER['DOCUMENT_ROOT'] . "/server/logs/" . $currentTime . "_server-log.txt", "a");
  fwrite($serverLog, "# Enter index.php at: " .date("H-i-s") . "\n");
  fwrite($serverLog, "\n");

  define("ROOT", $_SERVER['DOCUMENT_ROOT']);
  fwrite($serverLog, "\t\troot: " . ROOT . "\n");

  define("USERS_CARDS_FILE_URL", ROOT . "/database/usersCards.json");
  define("USERS_CATEGORIES_FILE_URL", ROOT . "/database/usersCategories.json");
  define("DEFAULT_CARDS_FILE_URL", ROOT . "/database/defaultCards.json");
  define("DEFAULT_CATEGORIES_FILE_URL", ROOT . "/database/defaultCategories.json");

  fwrite($serverLog, "\t\tUSERS_CARDS_FILE_URL: " . USERS_CARDS_FILE_URL . "\n");
  fwrite($serverLog, "\t\tUSERS_CATEGORIES_FILE_URL: " . USERS_CATEGORIES_FILE_URL . "\n");
  fwrite($serverLog, "\t\tDEFAULT_CARDS_FILE_URL: " . DEFAULT_CARDS_FILE_URL . "\n");
  fwrite($serverLog, "\t\tDEFAULT_CATEGORIES_FILE_URL: " . DEFAULT_CATEGORIES_FILE_URL . "\n");
  fwrite($serverLog, "\n");

  fwrite($serverLog, "\t=!SERVER[REQUEST_METHOD]: " . $_SERVER["REQUEST_METHOD"] . "\n");
  fwrite($serverLog, "\t\tSERVER[SERVER_NAME]: " . $_SERVER["SERVER_NAME"] . "\n");
  fwrite($serverLog, "\t\tSERVER[REMOTE_ADDR]: " . $_SERVER["REMOTE_ADDR"] . "\n");
  fwrite($serverLog, "\n");

  $responce = "1";
  fwrite($serverLog, "\t\t(initialization) RESPONCE = " . $responce . "\n");
  fwrite($serverLog, "\n");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = file_get_contents("php://input");
    fwrite($serverLog, "\t\t\tDATA (php://input): " . $data . "\n");
  
    $dataArray = json_decode($data, true);
    fwrite($serverLog, "\t\t\tDATA (Array): " . $dataArray . "\n");
    $lastKey = array_key_last($dataArray);
    fwrite($serverLog, "\t\t\tLAST KEY: " . $lastKey . "\n");
    $lastValue = array_pop($dataArray);
    fwrite($serverLog, "\t\t\tVALUE of LAST KEY: " . $lastValue . "\n");
    $dataJSON = json_encode($dataArray);
    fwrite($serverLog, "\t\t\tCLEANED DATA(json): " . $dataJSON . "\n");

    if ($lastKey == "categories" && $lastValue == "users") {

      fwrite($serverLog, "\t\t\tPOST[categories] = users branch\n");
      $responce = file_put_contents(USERS_CATEGORIES_FILE_URL, $dataJSON . "\n", FILE_APPEND);

    } else if ($lastKey == "cards" && $lastValue == "users") {

      fwrite($serverLog, "\t\t\tPOST[cards] = users branch\n");
      $responce = file_put_contents(USERS_CARDS_FILE_URL, $dataJSON . "\n", FILE_APPEND);

    } else {

      fwrite($serverLog, "\t\t\tRESPONCE = NULL branch\n");
      $responce = null;

    }

    if ($responce == false) {

      fwrite($serverLog, "\t\t\tif RESPONCE = FALSE branch\n");
      echo "Error: '" . $data . "' was NOT saved!";

    } else if ($responce == null) {

      fwrite($serverLog, "\t\t\tif RESPONCE = NULL branch\n");
      echo "Error: 'POST-request' has INCORRECT parameters. '" . $data . "' was NOT saved!";

    } else {

      fwrite($serverLog, "\t\t\tSUCCESS branch\n");
      echo "Success! '" . $data . "' was saved!";

    }

  } else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    if ($_GET["categories"] == "users") {

      fwrite($serverLog, "\t\t\tGET[categories] = users branch\n");
      $responce = file_get_contents(USERS_CATEGORIES_FILE_URL);

    } else if ($_GET["categories"] == "default") {

      fwrite($serverLog, "\t\t\tGET[categories] = default branch\n");
      $responce = file_get_contents(DEFAULT_CATEGORIES_FILE_URL);

    } else if ($_GET["categories"] == "users&default") {

      fwrite($serverLog, "\t\t\tGET[categories] = users&default branch\n");
      $responce = file_get_contents(USERS_CATEGORIES_FILE_URL) . file_get_contents(DEFAULT_CATEGORIES_FILE_URL);

    } else if ($_GET["cards"] == "users") {

      fwrite($serverLog, "\t\t\tGET[cards] = users branch\n");
      $responce = file_get_contents(USERS_CARDS_FILE_URL);

    } else if ($_GET["cards"] == "default") {

      fwrite($serverLog, "\t\t\tGET[cards] = default branch\n");
      $responce = file_get_contents(DEFAULT_CARDS_FILE_URL);

    } else if ($_GET["cards"] == "users&default") {

      fwrite($serverLog, "\t\t\tGET[cards] = users&default branch\n");
      $responce = file_get_contents(USERS_CARDS_FILE_URL) . file_get_contents(DEFAULT_CARDS_FILE_URL);

    } else {

      fwrite($serverLog, "\t\t\tRESPONCE = NULL branch\n");
      $responce = null;
      
    }

    if ($responce == false) {

      fwrite($serverLog, "\t\t\tRESPONCE = FALSE branch\n");
      echo "Error: Info was not read!";

    } else if ($responce == null) {

      fwrite($serverLog, "\t\t\tRESPONCE = NULL branch\n");
      echo "Error: 'GET-request' has INCORRECT parameters. Info was not read!";

    } else {

      fwrite($serverLog, "\t\t\tSUCCESS branch\n");
      echo $responce;

    }

  } else {

    fwrite($serverLog, "\t\t\tERROR: request method is incorrect\n");
    echo "ERROR: request method is incorrect. It should be either POST or GET!";

  }

  fwrite($serverLog, "\n\n");
  fclose($serverLog);
?>
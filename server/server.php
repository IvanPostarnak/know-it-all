<?php
  require_once "log-handler.php";
  require_once "database-manager.php";

  global $serverLog;

    fwrite($serverLog, "# ENTER index.php at: " . date("H-i-s") . "\n\n");    
    fwrite($serverLog, "\t!=SERVER[REQUEST_METHOD]: >> " . $_SERVER["REQUEST_METHOD"] . " <<\n");
    fwrite($serverLog, "\t\tSERVER[REQUEST_TIME]: " . $_SERVER["REQUEST_TIME"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_NAME]: " . $_SERVER["SERVER_NAME"] . "\n");
    fwrite($serverLog, "\t\tSERVER[REMOTE_ADDR]: " . $_SERVER["REMOTE_ADDR"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_SOFTWARE]: " . $_SERVER["SERVER_SOFTWARE"] . "\n");
    fwrite($serverLog, "\t\tSERVER[GATEWAY_INTERFACE]: " . $_SERVER["GATEWAY_INTERFACE"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_PROTOCOL]: " . $_SERVER["SERVER_PROTOCOL"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_ADMIN]: " . $_SERVER["SERVER_ADMIN"] . "\n");
    fwrite($serverLog, "\t\tSERVER[SERVER_PORT]: " . $_SERVER["SERVER_PORT"] . "\n\n");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $response = "1";
      fwrite($serverLog, "\t\t(initialization) RESPONSE = " . $response . "\n\n");

    $data = file_get_contents("php://input");
    $dataArray = json_decode($data, true);
    $lastKey = array_key_last($dataArray);
    $lastValue = array_pop($dataArray);
    $dataJSON = json_encode($dataArray);

      fwrite($serverLog, "\t\t\tDATA (php://input): " . $data . "\n");
      fwrite($serverLog, "\t\t\tDATA (Array): " . $dataArray . "\n");
      fwrite($serverLog, "\t\t\tLAST KEY: " . $lastKey . "\n");
      fwrite($serverLog, "\t\t\tVALUE of LAST KEY: " . $lastValue . "\n");
      fwrite($serverLog, "\t\t\tCLEANED DATA(json): " . $dataJSON . "\n\n");

    if ($lastKey == "categories" && $lastValue == "users") {

      $response = save_users_category($dataJSON);

    } else if ($lastKey == "cards" && $lastValue == "users") {

      $response = save_users_cards($dataJSON);

    } else {

      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");

    }

    if ($response == false) {

      echo "Server Error: Card was NOT saved!";
        fwrite($serverLog, "\t\t\tif (RESPONSE = false) branch\n");

    } else if ($response == null) {

      echo "Error: 'POST-request' has INCORRECT parameters. Card was NOT saved!";
        fwrite($serverLog, "\t\t\tif (RESPONSE = null) branch\n");

    } else {

      echo "Success! Card was saved!";
        fwrite($serverLog, "\t\t\tSUCCESS branch\n");

    }

  } else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    if ($_GET["categories"] == "users") {

      $response = get_users_categories();

    } else if ($_GET["categories"] == "default") {

      $response = get_default_categories();

    } else if ($_GET["categories"] == "users&default") {

      $response = get_users_and_default_categories();

    } else if ($_GET["cards"] == "users") {

      $response = get_users_cards();

    } else if ($_GET["cards"] == "default") {

      $response = get_default_cards();

    } else if ($_GET["cards"] == "users&default") {

      $response = get_users_and_default_cards();

    } else {

      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");
      
    }

    if ($response == false) {

      echo "Server Error: Info was not read!";
        fwrite($serverLog, "\t\t\tRESPONSE = false branch\n");

    } else if ($response == null) {

      echo "Error: 'GET-request' has INCORRECT parameters. Info was not read!";
        fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");

    } else {

      echo $response;
        fwrite($serverLog, "\t\t\tSUCCESS branch\n");

    }

  } else {

    echo "ERROR: request method is incorrect. It should be either POST or GET!";
      fwrite($serverLog, "\t\t\tERROR: request method is incorrect\n");

  }

    fwrite($serverLog, "\n# EXIT(0) index.php and closing server-log.txt\n\n\n");
  fclose($serverLog);
  exit(0);
?>
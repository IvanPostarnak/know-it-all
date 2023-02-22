<?php
  require_once "log-handler.php";
  require_once "database-manager.php";
  require_once "server-util.php";

  global $serverLog;
    fwrite($serverLog, "# ENTER server.php at: " . date("H-i-s") . "\n\n");

  save_metadata_about_request($serverLog);

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
      fwrite($serverLog, "\t\t\tCLEANED DATA(json): " . $dataJSON . "\n\n");

    $databaseManagerResponse = save_data($dataJSON, $lastKey, $lastValue);

    switch ($databaseManagerResponse) {
      case false:
        echo "Server Error: Card was NOT saved!";
          fwrite($serverLog, "\t\t\tif (RESPONSE = false) branch\n");
        break;
      case null:
        echo "Error: 'POST-request' has INCORRECT parameters. Card was NOT saved!";
          fwrite($serverLog, "\t\t\tif (RESPONSE = null) branch\n");
        break;
      default:
        echo "Success! Card was saved!";
          fwrite($serverLog, "\t\t\tSUCCESS branch\n");
        break;
    }

  } else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    switch (isset($_GET["categories"])) {
      case true:
        $databaseManagerResponse = get_data("categories", $_GET["categories"]);
        break;
      case false:
        if (isset($_GET["cards"])) {
          $databaseManagerResponse = get_data("cards", $_GET["cards"]);
        } else {
          $databaseManagerResponse = get_data("meta", $_GET["meta"]);
        }
        break;
      default:
        $databaseManagerResponse = null;
          fwrite($serverLog, "\t\t\tRESULT = null branch\n");
        break;
    }

    switch ($databaseManagerResponse) {
      case false:
        echo "Server Error: Info was not read!";
          fwrite($serverLog, "\t\t\tRESPONSE = false branch\n");
        break;
      case null:
        echo "Error: 'GET-request' has INCORRECT parameters. Info was not read!";
          fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");
        break;
      default:
        echo $databaseManagerResponse;
          fwrite($serverLog, "\t\t\tSUCCESS branch\n");
        break;
    }

  } else {

    echo "ERROR: request method is incorrect. It should be either POST or GET!";
      fwrite($serverLog, "\t\t\tERROR: request method was incorrect\n");

  }

    fwrite($serverLog, "\n# EXIT(0) index.php and closing server-log.txt\n\n\n");
  fclose($serverLog);
  exit(0);
?>
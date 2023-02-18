<?php
  $currentDate = date("Y-m-d");
  define("ROOT", $_SERVER['DOCUMENT_ROOT']);
  define("SERVER_LOG_FILE_URL", $_SERVER['DOCUMENT_ROOT'] . "/server/logs/" . $currentDate . "_server-log.txt");
  define("USERS_CARDS_FILE_URL", ROOT . "/database/usersCards.json");
  define("USERS_CATEGORIES_FILE_URL", ROOT . "/database/usersCategories.json");
  define("DEFAULT_CARDS_FILE_URL", ROOT . "/database/defaultCards.json");
  define("DEFAULT_CATEGORIES_FILE_URL", ROOT . "/database/defaultCategories.json");


  function open_daily_server_log_file_stream()
  {
    $serverLog = fopen(SERVER_LOG_FILE_URL, "a");
    $isEmpty = file_get_contents(SERVER_LOG_FILE_URL, false, null, 0, 1);

    if ($isEmpty == false) {
      initializate_empty_daily_server_log($serverLog);
    }

    return $serverLog;
  }

  function initializate_empty_daily_server_log($fs)
  {
    global $currentDate;
    fwrite($fs, "- Start daily session " . $currentDate . ". Time: " . date("H-i-s") . "\n\n");
    fwrite($fs, "\tserver CONSTANTS:\n");
    fwrite($fs, "\t\tROOT: " . ROOT . "\n");
    fwrite($fs, "\t\tSERVER_LOG_FILE_URL: " . SERVER_LOG_FILE_URL . "\n");
    fwrite($fs, "\t\tUSERS_CARDS_FILE_URL: " . USERS_CARDS_FILE_URL . "\n");
    fwrite($fs, "\t\tUSERS_CATEGORIES_FILE_URL: " . USERS_CATEGORIES_FILE_URL . "\n");
    fwrite($fs, "\t\tDEFAULT_CARDS_FILE_URL: " . DEFAULT_CARDS_FILE_URL . "\n");
    fwrite($fs, "\t\tDEFAULT_CATEGORIES_FILE_URL: " . DEFAULT_CATEGORIES_FILE_URL . "\n\n\n");
  }
?>
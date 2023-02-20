<?php
  require_once "log-handler.php";

  function get_database_meta()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\t\tenter: get_meta_database() function\n");
    
    $metaString = file_get_contents(DATABASE_META_FILE_URL);
      fwrite($serverLog, "\t\t\t\tmetaString: " . $metaString . "\n");

      fwrite($serverLog, "\t\t\t\texit: get_meta_database() function\n");
    return $metaString;
  }

  function set_database_meta($data)
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\t\tenter: set_meta_database() function\n");
    
    file_put_contents(DATABASE_META_FILE_URL, $data);

      fwrite($serverLog, "\t\t\t\texit: set_meta_database() function\n");
  }
?>
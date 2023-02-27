<?php
  function save_metadata_about_request($fs)
  {
    fwrite($fs, "\t!=SERVER[REQUEST_METHOD]: >> " . $_SERVER["REQUEST_METHOD"] . " <<\n");
    fwrite($fs, "\t\tSERVER[REQUEST_TIME]: " . $_SERVER["REQUEST_TIME"] . "\n");
    fwrite($fs, "\t\tSERVER[SERVER_NAME]: " . $_SERVER["SERVER_NAME"] . "\n");
    fwrite($fs, "\t\tSERVER[REMOTE_ADDR]: " . $_SERVER["REMOTE_ADDR"] . "\n");
    fwrite($fs, "\t\tSERVER[SERVER_SOFTWARE]: " . $_SERVER["SERVER_SOFTWARE"] . "\n");
    fwrite($fs, "\t\tSERVER[GATEWAY_INTERFACE]: " . $_SERVER["GATEWAY_INTERFACE"] . "\n");
    fwrite($fs, "\t\tSERVER[SERVER_PROTOCOL]: " . $_SERVER["SERVER_PROTOCOL"] . "\n");
    fwrite($fs, "\t\tSERVER[SERVER_ADMIN]: " . $_SERVER["SERVER_ADMIN"] . "\n");
    fwrite($fs, "\t\tSERVER[SERVER_PORT]: " . $_SERVER["SERVER_PORT"] . "\n\n");
  }

  function provide_integrity_of_files($fs) {
      fwrite($fs, "\t\tenter provide_integrity_of_files() function\n");
      
    $checkingFile = fopen(USERS_CARDS_FILE_URL, "a+");
    fclose($checkingFile);

    $checkingFile = fopen(USERS_CATEGORIES_FILE_URL, "a+");
    fclose($checkingFile);

    $checkingFile = fopen(DATABASE_META_FILE_URL, "a+");
    fclose($checkingFile);

    $result = file_get_contents(DATABASE_META_FILE_URL, false, null, 0, 1);
    if ($result == false) {
        fwrite($fs, "\t\t\tdatabaseMeta.json file is empty - creating\n");
      $response = file_put_contents(DATABASE_META_FILE_URL, "{\"defaultCategories\":21,\"defaultCards\":3,\"usersCategories\":0,\"usersCards\":0,\"nextCardId\":4}");
        fwrite($fs, "\t\t\t" . $response . "\n");
    }

      fwrite($fs, "\t\texit provide_integrity_of_files() function\n\n");
  }
?>
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
?>
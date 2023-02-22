<?php
  require_once "log-handler.php";
  require_once "database-util.php";


  function save_data($dataJSON, $lastKey, $lastValue) 
  {
    global $serverLog;
      fwrite($serverLog, "\t\tEnter: save_data() function\n");

    $response = "1";
      fwrite($serverLog, "\t\t\t(initialization) RESPONSE = " . $response . "\n");

    if ($lastKey == "categories" && $lastValue == "users") {

      $response = save_users_category($dataJSON);

    } else if ($lastKey == "cards" && $lastValue == "users") {

      $response = save_users_cards($dataJSON);

    } else {

      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");
    }

      fwrite($serverLog, "\t\tExit: save_data() function\n");
    
    return $response;
  }

  function get_data($getParameter, $parameterValue) 
  {
    global $serverLog;
      fwrite($serverLog, "\t\tEnter: get_data() function\n");

    if ($getParameter === "categories" &&  $parameterValue === "users") {

      $response = get_users_categories();
  
    } else if ($getParameter === "categories" &&  $parameterValue === "default") {
  
      $response = get_default_categories();
  
    } else if ($getParameter === "categories" &&  $parameterValue === "users&default") {
  
      $response = get_users_and_default_categories();
  
    } else if ($getParameter === "cards" &&  $parameterValue === "users") {
  
      $response = get_users_cards();
  
    } else if ($getParameter === "cards" &&  $parameterValue === "default") {
  
      $response = get_default_cards();
  
    } else if ($getParameter === "cards" &&  $parameterValue === "users&default") {
  
      $response = get_users_and_default_cards();

    } else if ($getParameter === "meta" &&  $parameterValue === "1") {
      
      $response = get_database_meta();
  
    } else {
  
      $response = null;
        fwrite($serverLog, "\t\t\tRESPONSE = null branch\n");
        
    } 

      fwrite($serverLog, "\t\tExit: get_data() function\n");

    return $response;
  }
?>
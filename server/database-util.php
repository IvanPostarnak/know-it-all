<?php
  require_once "log-handler.php";

  function save_users_category($category)
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: save_users_category() function\n");
      // fwrite($serverLog, "\t\t\tsaving categoty: " . $category . "\n");
    
    $status = file_put_contents(USERS_CATEGORIES_FILE_URL, $category . "\n", FILE_APPEND);
      fwrite($serverLog, "\t\t\tsaving status: " . $status . "\n");
      fwrite($serverLog, "\t\t\texit: save_users_category() function\n");
    
      return $status;
  }

  function save_users_cards($card)
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: save_users_cards() function\n");
      // fwrite($serverLog, "\t\t\tsaving card: " . $card . "\n");
    
    $status = file_put_contents(USERS_CARDS_FILE_URL, $card . "\n", FILE_APPEND);
      fwrite($serverLog, "\t\t\tsaving status: " . $status . "\n");
      fwrite($serverLog, "\t\t\texit: save_users_cards() function\n");
    
    return $status;
  }

  function get_users_categories()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_users_categories() function\n");
    
    $usersCategories = file_get_contents(USERS_CATEGORIES_FILE_URL);
      // fwrite($serverLog, "\t\t\tUser's Categories: " . $usersCategories . "\n");
      fwrite($serverLog, "\t\t\texit: get_users_categories() function\n");
    
    return $usersCategories;
  }

  function get_default_categories()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_default_categories() function\n");
    
    $defaultCategories = file_get_contents(DEFAULT_CATEGORIES_FILE_URL);
      // fwrite($serverLog, "\t\t\tDefault Categories: " . $defaultCategories . "\n");
      fwrite($serverLog, "\t\t\texit: get_default_categories() function\n");
    
    return $defaultCategories;
  }

  function get_users_and_default_categories()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_users_and_default_categories() function\n");
    
    $usersCategories = get_users_categories();
    $defaultCategories = get_default_categories();
    $usersAndDefaultCategories = $usersCategories . $defaultCategories;
      // fwrite($serverLog, "\t\t\tUsers and Default Categories: " . $usersAndDefaultCategories . "\n");
      fwrite($serverLog, "\t\t\texit: get_users_and_default_categories() function\n");
    
    return $usersAndDefaultCategories;
  }

  function get_users_cards()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_users_cards() function\n");
    
    $usersCards = file_get_contents(USERS_CARDS_FILE_URL);
      // fwrite($serverLog, "\t\t\tUser's cards: " . $usersCards . "\n");
      fwrite($serverLog, "\t\t\texit: get_users_cards() function\n");
    
    return $usersCards;
  }

  function get_default_cards()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_default_cards() function\n");
    
    $defaultCards = file_get_contents(DEFAULT_CARDS_FILE_URL);
      // fwrite($serverLog, "\t\t\tDefault cards: " . $defaultCards . "\n");
      fwrite($serverLog, "\t\t\texit: get_default_cards() function\n");
    
    return $defaultCards;
  }

  function get_users_and_default_cards()
  {
    global $serverLog;
      fwrite($serverLog, "\t\t\tenter: get_users_and_default_cards() function\n");
    
    $usersCards = get_users_cards();
    $defaultCards = get_default_cards();
    $usersAndDefaultCards = $usersCards . $defaultCards;
      // fwrite($serverLog, "\t\t\tUsers and Default Cards: " . $usersAndDefaultCards . "\n");
      fwrite($serverLog, "\t\t\texit: get_users_and_default_cards() function\n");
    
    return $usersAndDefaultCards;
  }
?>
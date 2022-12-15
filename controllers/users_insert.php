<?php 
  include('../models/connection/connection.php');
  $connection = new Connection();
  // $connection->setConn('172.106.0.125','lading_page_btc', 'users_lead', 'Jesus&&77');
  try {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $location = $data['location'];
    $key = true;

    $formInfos = array($name, $email, $phone, $location);
    foreach($formInfos as $info) {
      if($info == null && $info == '') {
        $key = false;
      } 
    }

    function registerUser($connection, $key, $name, $email, $phone, $location) {
      if($key) {
        $SQL_COMMAND = "INSERT INTO {$connection->getDB_TABLE()}(name, email, phone, location)
        VALUES ('$name','$email', '$phone', '$location')";
        $connection->getConn()->query($SQL_COMMAND);
        echo 'sucess';
      } else {
        echo 'error';
      }
    }
    registerUser($connection, $key, $name, $email, $phone, $location);
  } catch(PDOException $error) {
    echo $error->getMessage();
  }
?>
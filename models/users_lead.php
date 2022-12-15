<?php 
  include('../models/connection/connection.php');
  $connection = new Connection();
  // $connection->setConn('172.106.0.125','donations_db', 'padrinhos', 'Jesus&&77');

  $SQL_COMMAND = "SELECT * FROM {$connection->getDB_TABLE()}";
  $querySelect = $connection->getConn()->query($SQL_COMMAND);
  $infos = $querySelect->fetchAll(/*Foi definido no início da conexão*/);

  echo json_encode($infos);
?>
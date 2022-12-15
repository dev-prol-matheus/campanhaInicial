<?php 
  include('../models/connection/connection.php');
  include('../models/connection/localOrProduction.php');

  $SQL_COMMAND = "SELECT * FROM {$connection->getDB_TABLE()}";
  $querySelect = $connection->getConn()->query($SQL_COMMAND);
  $infos = $querySelect->fetchAll(/*Foi definido no início da conexão*/);

  echo json_encode($infos);
?>
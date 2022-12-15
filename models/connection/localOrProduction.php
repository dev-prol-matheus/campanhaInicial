<?php 
  if($_SERVER['SERVER_NAME'] == 'localhost') {
    $connection = new Connection();
  } else {
    header("Access-Control-Allow-Origin: https://querobolsadeestudos.com.br");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
    $connection->setConn('172.106.0.125','lading_page_b2c', 'tech_', 'Jesus&&77');
  }
?>
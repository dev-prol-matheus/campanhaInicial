<?php 
  final class Connection extends PDO {
    private $DB_HOST = "127.0.0.1";
    private $DB_USER = "root";
    private $DB_PASSWORD = "";
    private $DB_NAME = "landing_page_b2c";
    private $DB_TABLE = "users";

    private $conn;

    public function __construct() {
      try {
        header("Access-Control-Allow-Origin: http://127.0.0.1");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
        header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

        $this->conn = new PDO(
          "mysql:host=$this->DB_HOST;
          dbname=",
          $this->DB_USER,
          $this->DB_PASSWORD,
          array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'", PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC)
        );
        $this->conn->setAttribute(
          PDO::ATTR_ERRMODE, 
          PDO::ERRMODE_EXCEPTION  
        );

        $SQL_COMMAND = "CREATE DATABASE IF NOT EXISTS $this->DB_NAME;";
        $this->getConn()->query($SQL_COMMAND);

        $SQL_COMMAND = "USE $this->DB_NAME; 
        CREATE TABLE IF NOT EXISTS $this->DB_TABLE (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(40), email VARCHAR(40), phone VARCHAR(20), location VARCHAR(40), date_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id));";
        $this->getConn()->query($SQL_COMMAND);
      } catch (PDOException $err) {
        echo 'ERROR: '. $err->getMessage();
      }
    }

    public function setConn($DB_HOST, $DB_NAME, $DB_USER, $DB_PASSWORD) {
      try {
        $this->conn = new PDO(
          "mysql:host=$DB_HOST;
          dbname=$DB_NAME",
          $DB_USER,
          $DB_PASSWORD,
          array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'", PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC)
        );
        $this->conn->setAttribute(
          PDO::ATTR_ERRMODE, 
          PDO::ERRMODE_EXCEPTION  
        );

        $SQL_COMMAND = "CREATE TABLE IF NOT EXISTS $this->DB_TABLE (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(40), email VARCHAR(40), phone VARCHAR(20), location VARCHAR(40), date_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id));";
        $this->getConn()->query($SQL_COMMAND);

      } catch (PDOException $err) {
        echo 'ERROR: '. $err->getMessage();
      }
    }

    public function getConn() {
      return $this->conn;
    }
    public function getDB_NAME() {
      return $this->DB_NAME;
    }
    public function getDB_TABLE() {
      return $this->DB_TABLE;
    }
  }
  $connection = new Connection();
?>

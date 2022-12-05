<?php 
  header("Access-Control-Allow-Origin: http://localhost");
  // header("Access-Control-Allow-Origin: http://querobolsadeestudos.com.br/");
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
  header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
  header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

  $locale_array = ['caruaru', 'default', 'jaboatao_dos_guararapes', 'olinda', 'paulista', 'recife', 'sorocaba'];
  $id = 0;  
  $locale_state = array(
    'caruaru' => [],
    'default' => [],
    'jaboatao_dos_guararapes' => [],
    'olinda' => [],
    'paulista' => [],
    'recife' => [],
    'sorocaba' => []
  );

  foreach($locale_array as $locale) {
    $file = "../view/assets/image/school_prol_educa/$locale";
    $path = dir($file);
    while(($arch = $path->read()) !== false) {
      if($arch != "." && $arch != "..") {
        array_push($locale_state["$locale_array[$id]"], "$arch");
      }
    }
    $id++;
  }
  
  $path->close();
  echo json_encode($locale_state);
?>
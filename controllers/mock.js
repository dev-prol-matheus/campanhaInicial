const fs = require('fs').promises;
let arrayPrimary = {};
let filePosition = 0;
let http = require("http");

async function orderObject(path) {
  let listFiles = await fs.readdir(path);
  for(let file in listFiles) {
    eval(`arrayPrimary.${listFiles[file]} = []`);
  }
}
orderObject('../view/assets/image/school_prol_educa');

async function listFilesPath(path, files) {
  if(!files) {
    files = [];
  }
  let listFiles = await fs.readdir(path);
  const locale_array = ['caruaru', 'default', 'jaboatao_dos_guararapes', 'olinda', 'paulista', 'recife', 'sorocaba'];

  for(let file in listFiles) {
    let stat = await fs.stat(path + '/' + listFiles[file]);
    if(listFiles.length - 1 == file) {
      eval(`arrayPrimary.${locale_array[filePosition]} = listFiles`);
    }
    if(stat.isDirectory()) {
      await listFilesPath(path + '/' + listFiles[file], files);
    } else {
      files.push(path + '/' + listFiles[file]);
    }
  }
  filePosition++;
  return files;
}

async function getFiles() {
  files = await listFilesPath('../view/assets/image/school_prol_educa');
}

async function printFiles() {
  await getFiles();
  console.log(arrayPrimary);
  http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE'});
    response.end(JSON.stringify(arrayPrimary));
  }).listen(3001, '172.106.0.125'); //localhost: 127.0.0.1 | hostoo: 172.106.0.125
  
  // console.log('\n\nServidor executando em http://127.0.0.1:3001/');
}

printFiles();

const fs = require('fs').promises
let http = require("http");

console.log('Servidor executando em http://127.0.0.1:8000/');

async function listFilesPath(path, files) {
  if(!files) {
    files = [];
  }
  let listFiles = await fs.readdir(path);
  
  http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    listFiles.forEach((item) => {
      response.write(item+'\n');
    })
    response.end(listFiles+'\n');
 }).listen(3001, '127.0.0.1');

 http.get()

}
listFilesPath('./view/assets/image/school_prol_educa/default');
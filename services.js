const express = require('express')
const app = express()
const port = 3000


var body_parser = require('body-parser');
const clientes = {data : ['15','12','12', '21']}


app.use(body_parser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

var formulario = '<form method="post" action="/nacimiento">'
    + '<label for="edad">¿Qué edad tienes?</label>'
    + '<input type="text" name="edad" id="edad">'    
    + '<input type="submit" value="Enviar"/>'
    + '</form>';
 
var cabecera = '<h1>Naciste el año</h1>';
 
app.get('/nacimiento', function (req, res) {
 
    res.send('<html><body>'
            + cabecera
            + formulario
            + '</html></body>'
    );
 
});

app.post('/nacimiento', function (req, res) {
 
    var edad = req.body.edad || '';
    var nacimiento = '';
 
    if (edad != '')
        nacimiento = 2021 - edad;
 
    res.send('<html><body>'
            + cabecera
            + '<p>' + nacimiento + '</p>'
            + formulario
            + '</html></body>'
    );
 
});

app.delete('/nacimiento', function(req, res){
  var edad = req.body.edad || '';
  try {
    const found = array1.find(element => element > edad);
    if (found != '') {
      clientes.data.delete(found);
      console.log("edad borrada")
    }
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

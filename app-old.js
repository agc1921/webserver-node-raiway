
const http = require('http');

http.createServer( (req, res) => {

    console.log(req);

    res.setHeader('content-Disposition', 'attachment;filename=lista.csv');

    // res.writeHead(200, {'content-type': 'application/json'});
    res.writeHead(200, {'content-type': 'application/csv'});

    const persona = {
        id: 1,
        nombre: 'fernando'
    }

    res.write('id, nombre\n');
    res.write('1, fernando\n');
    res.write('2, maria\n');
    res.write('3, pedro\n');

    res.end();

})
.listen( 8080 );

console.log(`escuchando el puerto`, 8080);
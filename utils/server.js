var express = require('express');
var bodyParser = require('body-parser');
var os = require('os');
const { Pool } = require('pg');

const port = 3001;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))                                                                                                                                                             

let count = 0;

// handle requests                                                                                                                                                                                       

app.post('/new-deck', (request, response) => {
    console.log('Got request for new deck');
    let name = request.body.name ? request.body.name : 'placeholder';
    let entries = request.body.entries ? request.body.entries : [];

    console.log(`CREATING TABLE ${name}`);
    pool.query(`CREATE TABLE ${name} (
        id serial PRIMARY KEY,
        term text,
        def text
    )`)
        .then(res => {
            console.log('response: ' + res);
        })
        .catch(err => {
            console.error(err);
        });
    
    entries.forEach(entry => {
        if (entry.term && entry.def) {
            console.log(`INSERTING term: ${entry.term} def: ${entry.def} INTO ${name}`);
            pool.query(`INSERT INTO ${name} VALUES (DEFAULT, ${entry.term}, ${entry.def})`)
                .then(res => {console.log('response: ' + res)})
                .catch(err => {console.error(err)})
        } else {
            console.log('ENTRY HAS NO DATA, SKIPPING');
        }
    })
})


// RETRIEVE id - send array of all Terms in decks table  

app.get('/decks', (request, response) => {
    console.log(`Got request for decks`);
    pool.query('SELECT term,def FROM deck1')
        .then(res => {
            let arr = [];
            console.log('response: ');
            res.rows.forEach(({term, def}) => {
                console.log("Card Retrieved from DB");
                console.log("term: " + term + " def: " + def);
                arr.push({term: term, def: def});
            });
            response.status(200).send({cards: arr})
        })
        .catch(err =>
               setImmediate(() => {
                   console.error(err);
               }));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

// catch 404 and forward to error handler                                                                                                 
app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
    // set locals, only providing error in development                                                                                                                                                     
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};
  
    // render the error page                                                                                                                                                                               
    response.status(err.status || 500);
});
  
const pool = new Pool({
    user: 'casey2',
    host: 'csinparallel.cs.stolaf.edu',
    database: 'mca_s20',
    //password: '20L2zpH8BwR4qq5tVssCxAorv',
    port: 5432,
});

pool.on('connect', client => {
    client.query('SET search_path = mca_s20_flash, public;')
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log('IP addresses: ' + addresses);

module.exports = app;
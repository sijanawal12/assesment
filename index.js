
const express = require('express');
const cors = require('cors');

const app = express();

let corOptions = {
    origin: 'https://localhost:8081'
}


//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))
// router
const router = require('./route/routes.js')
app.use('/api', router)
// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello'})
})
//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`running on  ${PORT} `)
})




// app.use(bodyParser.json());

// app.use('/', VideoRoutes);

// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database: 'DB'

    
// });

// // // connecting

// db.connect((err) => {
//     if(err){
//         throw err;
//     }
    
//         console.log('connected');
    
// });

// //creating database

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE  DB';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('database created');
//     });
// });

// // creating table
// app.get('/createtable', (req,res) =>{
//     let sql = 'CREATE TABLE video(id int AUTO_INCREMENT, name VARCHAR(255), description VARCHAR(255), active VARCHAR(255), PRIMARY KEY(id)) ';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('table created');
//     })

// })

// app.get('/createtable2', (req,res) =>{
//     let sql = 'CREATE TABLE videolists(id int AUTO_INCREMENT, name VARCHAR(255), link VARCHAR(255), video_id int, PRIMARY KEY(id), FOREIGN KEY(video_id) REFERENCES video(id))' ;
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('table created');
//     })

// })

// app.get('/videopost', (req,res) =>{
//     let post = {name: 'nodejs', description: 'internship', active: 'yes'};
//     let sql = 'INSERT INTO video SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('posted in video');
//     });
// });

// app.get('/videolistpost', (req,res) =>{
//     let post = {name: 'nodejs', link: 'youtube'};
//     let sql = 'INSERT INTO videolists SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('posted in videolists');
//     });
// });

// app.get('/getvideo', (req,res) =>{
//     let sql = 'SELECT * FROM video';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('video display');
//     });
// });

// app.get('/getvideolist', (req,res) =>{
//     let sql = 'SELECT * FROM videolists';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('video list display');
//     });
// });

// app.listen(3000);
const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const database_name = "mydb" ; 
const collection_name = "form" ;

// For serving static files , we can access this files in browser using localhost:PORT/static/ANY_FILE_NAME    (e.g. localhost:80/static/index.html)
app.use('/static', express.static('static'))   // not safe for production

// requires for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'templates'))     // as we are specifying templetes directory in folder "templates"



app.get("/", (req, res) => {
    const content = " This is new content ";
    // res.status(200).render('mynew', { title: 'mytitle', message: 'Hello there and thanks for telling me how to use pubG!' }) 

    res.status(200).render('index', { 'title': 'PubG is the best game', "content": content });
    
});

var names , age , gender ;

function setd(names , age , gender){
    names = names ;
    age = age ;
    gender = gender ;
}

function getd(){
    return names , age , gender ; 
}


app.post('/sub', (req, res) => {
   
    names = req.body.name
    age = req.body.age
    gender = req.body.gen
    setd(names , age , gender)
    
    // let outputToWrite = `the name of the client is ${names},Age : ${age} years old,Gender is  ${gender}`
    // res.status(200).send(outputToWrite);
    res.status(200).render('sub', { "names" : names , "age" : age , "gender":gender });
    // fs.writeFileSync('output.txt', outputToWrite)
    // const params = {'message': 'Your form has been submitted successfully'}
    // res.status(200).render('index.pug', params);

})



app.get("/mongo", (req, res) => {
    names , age , gender = getd();
    dic  = { "names" : names , "age" : age , "gender":gender }
    stat = insert_data(dic);
    if(stat){

        res.send(" Successfully Saved in DB <br>" + "names " + names + "<br> age" +age+"<br> gender"+gender + "<br><br> <a href='/' >Home</a>" )
    }
    else{
        res.send(" not success" + dic)

    }
});


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});


const mongoose = require('mongoose');

var connected = false
function make_connection(){
    mongoose.connect('mongodb://localhost:27017/'+database_name);
    
}
function insert_data(data){
    if(!connected){

        make_connection();
        mysc = schema();
    }
    const docs = new mysc(data);  
    docs.save(function (err, docs) {
        if (err) return console.error(err);
     
    });
    return true;
}


function schema(){
    const mys = new mongoose.Schema({
      names: String,
      age: String,
      gender: String
    });
    const mysc = mongoose.model(collection_name, mys); 
    connected = true ;
    return mysc
}


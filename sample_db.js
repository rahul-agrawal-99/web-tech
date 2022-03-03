// getting-started.js
const mongoose = require('mongoose');

//  conncetion to mongodb  mongodb://localhost:PORT/DB_NAME
mongoose.connect('mongodb://localhost:27017/rahul');

//  getting status of connection
var m = mongoose.connection;


// creating schema to verify  datatype of data and keyfield is being stored in database collection is corect

const mys = new mongoose.Schema({
    name: String,
    age: Number
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
mys.methods.speak = function speak() {
    const greeting = "Name is :" + this.name + " and age is :" + this.age;

    console.log(greeting);
};

//    compiling schema into a Model.

const mysc = mongoose.model('mynewcol', mys);    // documnet objects stored in collection named as mynewcols 
//  , s will be appended to collection name automatically

//  create document 

const docs = new mysc({ name: 'Rahul', age: 23 });     //  creating document object according to defined schema
// console.log(docs.name);
docs.speak();                       // with speak we can get details about object ,optional

//  saving document in database

docs.save(function (err, docs) {
    if (err) return console.error(err);
    docs.speak();
});



// get all documents
// mysc.find({}, function(status , result){
//     if (status) return console.error(status);
//     console.log(result);

// }); 


// get documents from collection with filters
mysc.find({ name: "Rahul" }, function (status, result) {
    if (status) return console.error(status);
    console.log(result);

});


const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

//express server runs on this port:
const PORT=3000;

//create instance of express
const app=express();

//specify body-parser to handle json data
app.use(bodyParser.json())

//using cors package
app.use(cors());

//to test get request
app.get('/',function(req,res){
    res.send("Hello from server");

})

//Adding endpoint to which angular component will post form data to:
app.post('/register',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data received"});
})
//listen to request on port
app.listen(PORT,function(){
    console.log("Server running on localhost:"+PORT);
});
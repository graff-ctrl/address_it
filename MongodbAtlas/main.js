//cd MongodbAtlas 
//npm start 
//in postman  ex : GET http://localhost:3000/search?text=906 (FYI:database contains matching addresses for only "906 dexter avenue north")

const MongoClient = require('mongodb').MongoClient;
const Express = require("express");
const Cors = require("cors");
const { request, response } = require("express");

const app = Express();


const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(Cors());


const uri = "mongodb+srv://rajataks:Mercy123456@cluster0.qtsjt.mongodb.net/Address?retryWrites=true&w=majority"; //atlas uri
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var collection;

//search addresses 
app.get("/search", async (request, response) => {
    let queryParamStreet = request.query.street;
    let queryParamcountry =request.query.country;
    let result;
    // console.log(queryParam);
    if(queryParamcountry==null || queryParamcountry=='')
    {
    try {
         result = await collection.aggregate([
            {
            "$search": {
                "autocomplete": {
                    "query": `${queryParamStreet}`,
                    "path": "Street_Name",
                }
            }
        }
        ]).toArray();
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
}
else 
{
    try {
        result = await collection.aggregate([
            {
               "$search":{
                  "compound":{
                     "must":[
                        {
                           "autocomplete": {
                             "query": `${queryParamStreet}`,
                             "path": "Street_Name",//column name 
                         }
                        },
                        {
                           "text":{
                              "query":`${queryParamcountry}`,
                              "path":"Country"
                           }
                        }
                     ]
                  }
               }
            }
         ]).toArray();
       response.send(result);
   } catch (e) {
       response.status(500).send({ message: e.message });
   }  
}
});

//Retrieve all addresses
app.get("/addresses", async(request, response) => {
   collections.find().toArray((err, result)=>{
       if(err) throw err;
       response.json(result);
   });
});

//add an address
app.post("/addAddress", async (request,response)=>{
    console.log(request.body);
    const address= request.body;
    collection.insertOne(address, (err, result)=>{
        if(err)throw err;
        response.status(201).json(address);
    });
});

//Delete an address
app.delete("/deleteAddress/:id", async (request, response)=>{
    const addressId=request.params.id;
    console.log("Delete item with id:", addressId);
    collection.deleteOne({id: addressId}, function(err, result){
      if(err) throw err;  
    collection.find().toArray(function(_err, _result){
        if(_err) throw _err;
        response.json(_result);

    });
}); 
});


app.listen(3000, async () => {
    try {
        await client.connect();
        collection = client.db("Address").collection("global Address");
    } catch (e) {
        console.error(e);
    }
});

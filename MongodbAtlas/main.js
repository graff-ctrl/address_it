//cd MongodbAtlas 
//npm start 
//in postman  ex : GET http://localhost:3000/search?text=906 (FYI:database contains matching addresses for only "906 dexter avenue north")

const MongoClient = require('mongodb').MongoClient;
const Express = require("express");
const Cors = require("cors");
const { request } = require("express");


const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Cors());


const uri = "mongodb+srv://rajataks:Mercy123456@cluster0.xgngq.mongodb.net/Testsearch?retryWrites=true&w=majority"; //atlas uri
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var collection;
app.get("/search", async (request, response) => {
    let queryParamStreet = request.query.street;
    let queryParamcountry =request.query.country;
    let result;
    //console.log(queryParam);
    if(queryParamcountry==null)
    {
    try {
         result = await collection.aggregate([
            {
            "$search": {
                "text": {
                    "query": `${queryParamStreet}`,
                    "path": "Street_Name",//column name 
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
                           "text": {
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
app.get("/test", async(request, response) => {
    response.send("Hello world");
})
app.listen(3000, async () => {
    try {
        await client.connect();
        collection = client.db("Testsearch").collection("address");
    } catch (e) {
        console.error(e);
    }
});
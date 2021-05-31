"use strict";
exports.__esModule = true;
exports.AddressModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AddressModel = /** @class */ (function () {
    function AddressModel() {
        this.createSchema();
        this.createModel();
    }
    AddressModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            //1
            Street_Number: Number,
            //2
            //Also building Number on occasion 
            //House or building name
            House_or_Building_Name: String,
            //3
            Street_Number_Suffix: String,
            //4
            //Street Name
            Street_Name: String,
            //5
            Street_Type: String,
            //6
            //N, E, S, W, NE, SE, NW, SW
            Street_Direction: String,
            //7
            //PO Box, Apartment, Building, Floor, Office, Suite
            Address_Type: String,
            //8
            //Box Number, Apartment Number, Floor Number remember apartment numbers and offices sometimes have alphanumeric info - like 1A
            Address_Type_Identifier: String,
            //9
            //District
            //hamlet/village
            //For instance, if your hamlet/village appears in the address before the town
            Local_Municipality: String,
            //10
            //Municipal
            //Municipality
            //City_or_Town
            City_or_Town: String,
            //11
            //Region
            //District
            //Povince
            //prefecture 
            //State (U.S.), Povince (Canada), Federal District (Mexico), County (U.K.), etc...
            Governing_District: String,
            //12
            //Post Code
            //Zip (U.S.), Postal Code (Canada, Mexico), Postcode (U.K.)
            Postal_Area: String,
            //13
            //Country
            Country: String,
            //14
            //Name
            Name: String,
            //15
            //Parish 
            //Locality
            //Neighborhood
            //Subdistrict
            Neighborhood: String,
            //16
            //Additional Delivery Information
            // Son/Daughter Of (DO/SO) Or Husband/Wife Of (H/O or W/O)
            Recipient_Information: String,
            //17
            //Post_Office
            Post_Office: String,
            //18
            //Replace
            Building_Name: String,
            //19
            //Company
            Organization: String,
            //20
            //Spatial_dispatching_information
            Spatial_dispatching_information: String,
            //21
            //Occupation
            Job_Tittle: String
            /*
            Method for giving proper representation of address
            The positive number Represnets a necesary part of the address
            Negative numbers are optional attributes
            A "0" mean a new line
            
            Order: [
                {
                    add1: Number,
                    add2: Number,
                    add3: Number,
                    add4: Number,
                    add5: Number,
                    add6: Number,
                    add7: Number,
                    add8: Number,
                    add9: Number,
                    add10: Number,
                    add11: Number,
                    add12: Number,
                    add13: Number,
                    add14: Number
                }
            ],
            */
        }, { collection: 'Addresss' });
    };
    AddressModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Address", this.schema);
    };
    AddressModel.prototype.updateAddress = function (response, filter, document) {
        var query = this.model.updateOne(filter, document);
        query.exec(function (err, AddressResult) {
            response.json(AddressResult);
        });
    };
    AddressModel.prototype.deleteAddress = function (response, filter) {
        var query = this.model.deleteOne(filter);
        query.exec(function (err, AddressResult) {
            response.json(AddressResult);
        });
    };
    AddressModel.prototype.retrieveAllAddresss = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    AddressModel.prototype.retrieveAddressById = function (response, filter) {
        console.log('Filter passed through is:');
        console.log(filter);
        var query = this.model.findOne(filter);
        query.exec(function (err, userResult) {
            response.json(userResult);
        });
    };
    return AddressModel;
}());
exports.AddressModel = AddressModel;

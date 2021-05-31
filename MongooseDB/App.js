"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var UserModel_1 = require("./model/UserModel");
var AddressModel_1 = require("./model/AddressModel");
var options = {
    origin: '*'
};
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        this.Users = new UserModel_1.UserModel();
        this.Addresss = new AddressModel_1.AddressModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use('/', express.static(__dirname + '/dist/todoApp'));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(cors(options));
        // User APIs
        router.post('/app/user/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            _this.Users.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('User object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router["delete"]('/app/user', function (req, res) {
            console.log(req.body);
            var userId = req.body.userId;
            _this.Users.deleteUser(res, { userId: { $eq: userId } });
        });
        router.put('/app/user', function (req, res) {
            console.log('Updating user according to following request: ' + req.body);
            console.log(req.body);
            _this.Users.updateUser(res, req.body.userId, req.body.document);
        });
        router.get('/app/user/', function (req, res) {
            console.log('Query all users');
            _this.Users.retrieveAllUsers(res);
        });
        router.get('/app/user/:userId', function (req, res) {
            var userId = req.params.userId;
            console.log('Query user collection for the following id: ' + userId);
            _this.Users.retrieveUserById(res, { $and: [{ userId: { $eq: userId } }, { isActive: true }] });
        });
        //Secure Login
        router.get('/app/user/secure/login', function (req, res) {
            try {
                var id = req.body.userId;
                var name_1 = req.body.name;
                console.log('Query user collection for the following username an password: ' + id + " " + name_1);
                _this.Users.retrieveUserByNameandPassword(res, { userId: id, name: name_1 });
            }
            catch (_a) {
                res.status(404);
                res.send({ error: "This Name doesn't exist!" });
            }
        });
        // Address APIs
        router.post('/app/Address/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            _this.Addresss.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('Address object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router["delete"]('/app/Address', function (req, res) {
            console.log(req.body);
            var AddressId = req.body.AddressId;
            _this.Addresss.deleteAddress(res, { AddressId: { $eq: AddressId } });
        });
        router.put('/app/Address', function (req, res) {
            console.log('Updating Address according to following request: ' + req.body);
            _this.Addresss.updateAddress(res, req.body.AddressId, req.body.document);
        });
        router.get('/app/Address/', function (req, res) {
            console.log('Query all Addresss');
            _this.Addresss.retrieveAllAddresss(res);
        });
        router.get('/app/Address/:AddressId', function (req, res) {
            var AddressId = req.params.AddressId;
            console.log('Query user collection for the following id: ' + AddressId);
            _this.Addresss.retrieveAddressById(res, { AddressId: AddressId });
        });
        // Static Routes
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
        //this.expressApp.use('/Day', express.static(__dirname+'/pages/Address/Day.html'));
        this.expressApp.use('/Week', express.static(__dirname + '/pages/Address/Week.html'));
        this.expressApp.use('/Month', express.static(__dirname + '/pages/Address/Month.html'));
        this.expressApp.use('/Year', express.static(__dirname + '/pages/Address/Year.html'));
        //this.expressApp.use('/Schedule', express.static(__dirname+'/pages/Address/Schedules.html'));
        //this.expressApp.use('/Settings', express.static(__dirname+'/pages/Address/Settings.html'));
    };
    return App;
}());
exports.App = App;

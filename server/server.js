let express = require("express");
let session = require("express-session");
let bp = require("body-parser");
let app = express();
let PORT = 8080;
let clientDir = __dirname.substring(0, __dirname.length-6)+"client";

app.use(bp.urlencoded({extended:true}));
app.use(express.json());
app.use(session({secret:"HideMeDarling"}));
app.use(express.static(clientDir+"/dist/client"));

dbConfig = require("./config/db.js");
routeConfig = require("./config/routes.js")(app);


app.listen( PORT, ()=>{
    console.log("Server is up and listening on PORT", PORT);
});
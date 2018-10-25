let UserRoutes = require("../routes/UserRoutes.js");
let path = require("path");

module.exports=(app)=>{
    UserRoutes(app);

    app.all("*", (req, res, next)=>{
        res.sendFile(path.resolve("../client/dist/client/index.html"));
    });
}
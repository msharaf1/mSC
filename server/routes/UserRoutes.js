let UserController = require("../controllers/UserController.js");


module.exports = (app)=>{
    app.get("/api/users", UserController.all);
    app.post("/api/users", UserController.create);
    app.get("/api/users/:id", UserController.findById);
    app.patch("/api/users/:id", UserController.update);
    app.delete("/api/users/:id", UserController.delete);

    // app.get("/api/users/:email", UserController.findByEmail);
}
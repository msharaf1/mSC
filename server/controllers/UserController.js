let User = require("mongoose").model("User");

class UserController{
    create(req, res){
        User.findOne({ email: req.body.email}, (e, user)=>{
            if(user){
                return res.json({errors:{email:{message:"Already exists"}}});
            }else{
                let user = new User(req.body);
                user.save(e =>{
                    if(e) return res.json(e);
                    return res.json(user);
                });
            }
        })
    }

    all(req, res){
        User.find({}, (e, users)=>{
            if(!users) return res.json(e);
            return res.status(200).json(users);
        });
    }

    findById(req, res){
        User.findOne( {_id: req.params.id}, (e, user)=>{
            if(!user) return res.status(404).json("User not found");
            return res.status(200).json(user);
        });
    }
    // findByEmail(req, res){
    //     User.findOne({ _email: req.params.email}, (e, user)=>{
    //         if(!user) return res.status(404).json("Email doesn't exist");
    //         return res.status(200).json(user);
    //     });
    // }

    update(req, res){
        User.findOne({ _id: req.params.id}, (e,user)=>{
            if(!user) return res.status(404).json("User not found");
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.billingAddress = req.body.billingAddress;
            user.cellPhone = req.body.cellPhone;
            user.DoB = req.body.DoB;
            user.save(e =>{
                if(e) return res.json(e);
                return res.status(200).json(user);
            });
        });
    }

    delete(req, res){
        User.findOne( {_id: req.params.id}, (e, user)=>{
            if(!user) return res.status(404).json("User not found");
            User.deleteOne({ _id: req.params.id}, (e)=>{
                if(e) return res.status(500).json(e);
                return res.json(user);
            });
        })
    }






}
module.exports = new UserController();
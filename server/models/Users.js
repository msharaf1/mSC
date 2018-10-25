let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let User = new Schema(
    {
        firstName: {
            type:String,
            required: true,
            minlength: 3
        },
        lastName: {
            type:String,
            required: true,
            minlength:3
        },
        email: {
            type:String,
            required:true,
            minlength:5
            
        },
        billingAddress:{
            type:String,
            required: true,
            minlength:3
        },
        cellPhone:{
            type:Number,
            required:false,
            minlength:10
        },
        DoB:{
            type:Date,
            required:false
        }

    }
);

mongoose.model("User", User);
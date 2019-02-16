// require module for user-model

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


// create a new user - schema
let userSchema = mongoose.Schema({      //Advance config of the model
        username: {
            type: String,
            default: '',
            trim: true,
            required: 'User-Name is Required!'
        },

        password:{
            type: String,
            default: '',
            trim: true,
            required: 'Password is Required!'
        },

        email:{
            type: String,
            default: '',
            trim: true,
            required: 'E-mail is required'
        },

        displayName: {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required!'
        },

        created:{
            type: Date,
            default: Date.now, 
        },

        updated:{
            type: Date,
            default: Date.now, 
        }
},
{   //now we need to define the collection we will use
    collection: "users"
}
);

let options = ({
    missingPasswordError: "Wrong Password, Try Again!!"
});


//using the schema:
userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);
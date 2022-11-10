const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    }
},
 {timestamps: true}
);

const userModel = model("user", userSchema);

module.exports = userModel;

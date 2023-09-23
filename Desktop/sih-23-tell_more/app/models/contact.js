import mongoose, { Schema,model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2,"The name must be larger than two characters"],
        maxLength: [50, "Name must be smaller than 50 characters"],
        },
    state:
    {
        type: String,
        required: [true, "State is required"],
    },
        
    email: {
        type: String,
        required: [true,"Email address is required"],
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i,"invalid email address"],
    },
    phone: {
        type: String,
        required: [true,"Phone number is rerquired"],
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,"invalid phone number"],

    },
    
    benefits: {
        type: String,
        required: [true, "Message is required"],
        
    },
    terrain: {
        type: String,
        required: [true,"Terrain is required"],
    },

    files: [
        {
            name: String, //name of the file
            url: String,  //path of the file
        },
    ],
    side: {
        type: String,
    },
     date: {
        type: Date,
        default: Date.now,
     },
});
let contact;
try{
    contact = model("contact");
}catch(error)
{
contact = model("contact",contactSchema);
}
export default contact;
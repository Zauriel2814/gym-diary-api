const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntrySchema = new Schema(
    {
        summary: {
            type: String,
            required: true
        },
        currentDate: {
            type: Date,
            required: true
        },
        activity: {
            type: String,
            required: true
        },
        intensityRating: {
            type: Number,
            required: false
        }
    }
);

/*
    When you name the Mongoose model as "Entry", it will automatically infer the corresponding MongoDB collection name to be "entries". 
    Mongoose follows a naming convention where it converts the model name to lowercase and pluralizes it to determine the collection name. 
*/
module.exports = mongoose.model("Entry", EntrySchema);
const mongoose = require("mongoose");
// Define data schema (JSON)
const courseSchemaObj = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
};
// Create mongoose schema
const coursesSchema = mongoose.Schema(courseSchemaObj);
// Create and import mongoose model
module.exports = mongoose.model("Course", coursesSchema);
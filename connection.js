// Require necessary modules
const mongoose = require("mongoose");

// Define MongoDB connection URI
const mongoURI =
  "mongodb+srv://alexandrumaga2000:imibagpula@scoala.jzqwnsw.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define schema
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

// Create model
const Contact = mongoose.model("Contact", contactSchema);

// Handle form submission
const handleSubmit = async (formData) => {
  try {
    // Create new document based on form data
    const newContact = new Contact({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    // Save document to database
    await newContact.save();
    console.log("Contact saved successfully");
  } catch (error) {
    console.error("Error saving contact:", error);
  }
};

// Example usage
const formData = {
  name: "John Doe",
  email: "johndoe@example.com",
  message: "This is a test message",
};

handleSubmit(formData);

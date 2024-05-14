import Contact from "../models/contact.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, gender, message } = req.body;
    let contact = await Contact.findOne({ email });

    if (contact) {
        contact.messages.push(message);
      } else {
        // If contact doesn't exist, create a new one
        contact = new Contact({
          name,
          email,
          gender,
          messages: [message], // Save message as an array
        });
      }
    const newContact = await contact.save();
    res.status(200).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { createContact };

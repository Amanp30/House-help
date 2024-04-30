const { FormCollection } = require("../frameworks/database/collections");

async function acceptQueryForm(req, res, next) {
  try {
    const { name, mobileno, address, inquiry, problem } = req.body;

    if (!name) throw new Error("Name is required");
    if (!mobileno) throw new Error("Mobile Number is required");
    if (mobileno.toString().length !== 10)
      throw new Error("Mobile Number must be 10 digits");
    if (!address) throw new Error("Please provide your address");
    if (!inquiry) throw new Error("What you inquire for");

    await FormCollection.insertOne({
      name,
      mobileno: Number(mobileno),
      address,
      inquiry,
      problem,
    });

    const message = `Hello ${name}, thank you for submitting your query . We have received it and will respond to your inquiry shortly.`;

    res.json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = acceptQueryForm;

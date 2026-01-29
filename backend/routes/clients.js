const express = require("express");
const Client = require("../models/Client");
const upload = require("../multer");

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  const client = new Client({
    name: req.body.name,
    description: req.body.description,
    designation: req.body.designation,
    image: req.file.filename
  });
  await client.save();
  res.json(client);
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;

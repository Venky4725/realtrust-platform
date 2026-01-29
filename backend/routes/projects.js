const express = require("express");
const Project = require("../models/Project");
const upload = require("../multer");

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    image: req.file.filename
  });
  await project.save();
  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("Goals routes");
});

router.post("/", (req, res) => {
  res.status(201).send("Post Goals routes");
});

router.put("/:id", (req, res) => {
  res.status(201).send(`Update Goals routes ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.status(201).send(`Delete Goals routes ${req.params.id}`);
});

module.exports = router;

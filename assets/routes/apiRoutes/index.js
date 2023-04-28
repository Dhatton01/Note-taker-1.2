const { Router } = require("express");
const { uuid } = require("crypto");
const router = Router();

router.get("notes/:id", (req, res) => {
  const note = parsedNotes[req.params.id];
});

router.get("api", (req, res) => res.json(notes));

module.exports = router;

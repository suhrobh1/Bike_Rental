const express = require("express");
const router1 = express.Router();
const {
  getPeople,
  getPersonByID,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/peopleController");

router1.get("/", getPeople);
router1.get("/:id", getPersonByID);
router1.post("/", createPerson);
router1.put("/:id", updatePerson);
router1.delete("/:id", deletePerson);

module.exports = router1;

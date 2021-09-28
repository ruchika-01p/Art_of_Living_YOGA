const router = require("express").Router();
let Card = require("../models/card.model");

router.route("/form").get((req, res) => {
    Card.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/adult").post((req, res) => {
  const course = req.body.course;
  const description = req.body.description;
  const time = Number(req.body.time);
  const requirements = req.body.requirements;
  const registrationlink = req.body.registrationlink;
  const date = Date.parse(req.body.date);

  const newCards = new Card({ course, description, time, date ,requirements ,registrationlink});

  newCards
    .save()
    .then(() => res.json("Cards added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Card.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Card.findByIdAndDelete(req.params.id)
    .then(() => res.json("Cards deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Card.findById(req.params.id)
    .then((card) => {
      card.course = req.body.course;
      card.description = req.body.description;
      card.registrationlink = req.body.registrationlink;
      card.requirements = req.body.requirements;
      card.duration = Number(req.body.duration);
      card.date = Date.parse(req.body.date);

      card
        .save()
        .then(() => res.json("Cards updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

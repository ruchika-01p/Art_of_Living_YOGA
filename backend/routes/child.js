const router = require("express").Router();
let Child = require("../models/child.model");

router.route("/form1").get((req, res) => {
    Child.find()
    .then((childs) => res.json(childs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/children/add").post((req, res) => {
  const course = req.body.course;
  const description = req.body.description;
  const time = Number(req.body.time);
  const requirements = req.body.requirements;
  const registrationlink = req.body.registrationlink;
  const date = Date.parse(req.body.date);

  const newChilds = new Child({ course, description, time, date ,requirements ,registrationlink});

  newChilds
    .save()
    .then(() => res.json("Child added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Child.findById(req.params.id)
    .then((child) => res.json(child))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Child.findByIdAndDelete(req.params.id)
    .then(() => res.json("Childs deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Child.findById(req.params.id)
    .then((child) => {
        child.course = req.body.course;
        child.description = req.body.description;
        child.registrationlink = req.body.registrationlink;
        child.requirements = req.body.requirements;
        child.duration = Number(req.body.duration);
        child.date = Date.parse(req.body.date);

        child
        .save()
        .then(() => res.json("Child updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

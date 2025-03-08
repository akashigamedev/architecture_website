const Project = require("../models/Project");

const get_projects = (req, res) => {
  Project.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const add_project = (req, res) => {
  const project = Project(req.body);
  project
    .save()
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const delete_project = (req, res) => {
  const id = req.params.id;
  Project.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const update_project = (req, res) => {
  const id = req.params.id;
  Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

const get_project = (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = {
  get_projects,
  add_project,
  delete_project,
  update_project,
  get_project
};

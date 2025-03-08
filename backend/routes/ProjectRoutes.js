const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const controller = require("../controllers/ProjectController");
const auth = require('../Auth');
const router = express.Router();


router.post('/login')

// get all projects
router.get("/", controller.get_projects);
// add new project
router.post("/", auth, controller.add_project);
// delete project by id
router.delete("/:id", auth, controller.delete_project);
// update project by id
router.put("/:id", auth, controller.update_project);
// get a project by id
router.get("/:id", controller.get_project);

module.exports = router;

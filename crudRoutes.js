// const express = require('express');
// const router = express.Router();
// const crudController = require('../controllers/userController');

// // User routes
// router.post('/', crudController.createUser);
// router.get('/', crudController.getAllUsers);
// router.put('/:id', crudController.updateUser);
// router.delete('/:id', crudController.deleteUser);

// module.exports = router;

module.exports = app => {
    const crudController = require("../controllers/crudController.js");
  
    var router = require("express").Router();
  //create
    router.post("/", crudController.create);
//   //Retrive
//     router.get("/", crudController.findAll);
//   //Retive by ID
//     router.get("/:id", crudController.findOne);
//   //Update
//     router.put("/:id", crudController.update);
//   //Delete by ID
//     router.delete("/:id", crudController.delete);
//   //Delete
//     router.delete("/", crudController.deleteAll);
  
    app.use('/api/crudController', router);
  };
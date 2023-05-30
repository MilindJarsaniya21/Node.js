const { CRUD } = require("../model");

// Create
exports.create = (req, res) => {
  try {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const tutorial = {
      name: req.body.name ? req.body.name : "",
      email: req.body.email
    };
  
    // Save data in the database
    CRUD.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the data."
        });
      });
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the data."
    });
  }
    
  };


// Retrive by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    CRUD.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find data with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving data with id=" + id
        });
      });
  };

const express = require('express');
const app = express();
const cors = require('cors');
const db =  require('./model/index');


var corsOperation = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOperation));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("This works");
})

db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful.');
    return db.sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Database synced up!');
    require("./routes/crudRoutes")(app);
    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync db:', err);
  });

  
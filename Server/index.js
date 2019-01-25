require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

const port = 3001;

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    dbInstance.create_table();
    app.set("db", dbInstance);
  })

app.get("/api/inventory", controller.getInv);
app.post("/api/product", controller.addProd);
app.delete(`/api/product/:id`, controller.deleteProd)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

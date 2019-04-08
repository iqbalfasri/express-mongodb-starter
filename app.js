const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

/** Import Routes */
const UserRoute = require("./src/routes/main.route");

/** Initialize App */
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Routing User */
app.use(UserRoute);

/** Running server */
app.listen(5000, () => console.log(`Server runnig on port 5000`));
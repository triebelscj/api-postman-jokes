const express = require('express');
const cors = require('cors');
require("./config");
const port = 8000;

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

const allRoutes = require("./routes");
allRoutes(app);


app.listen(8000, () => console.log(`**connecting on port ${port}!`));
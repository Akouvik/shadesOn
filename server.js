const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("hey im express");
});

const express = require("express");
const app = express();

const port = 8000 || process.env.port;
const StartConnection = () => {
  try {
    app.listen(port, () => console.log("<> Server [Done]"));
  } catch (error) {
    process.exit(1);
  }
};

StartConnection();

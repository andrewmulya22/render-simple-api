const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Response Send");
});

app.listen(PORT, () => {
  console.log("server started");
});

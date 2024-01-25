const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Passkey authentication");
});

app.listen(PORT, ()=> {
  console.log(`Server is listening at port ${PORT}`);
});

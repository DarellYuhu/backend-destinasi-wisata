const express = require("express");
const adminController = require("./src/admin/admin.controller");

const app = express();
app.use(express.json());

app.use("/admin", adminController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

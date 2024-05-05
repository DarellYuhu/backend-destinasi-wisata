const express = require("express");

const adminController = require("./src/admin/admin.controller");
const object_wisata = require("./src/object_wisata/object_wisata.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/admin", adminController);
app.use("/destination", object_wisata);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const {
  createNewWisatawan,
  loginWisatawan,
  getWisatawan,
  getAllWisatawan,
  updateWisatawanData,
  removeWisatawan,
} = require("./wisatawan.service");

const router = express.Router();

router.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const wisatawan = await createNewWisatawan(data);
    return res.status(201).json({
      status: "success",
      message: "Wisatawan created",
      data: wisatawan,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const data = req.body;
  try {
    const wisatawan = await loginWisatawan(data);
    return res.status(200).json({
      status: "success",
      message: "Login success",
      data: wisatawan,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const wisatawan = await getWisatawan(id);
    return res.status(200).json({
      status: "success",
      message: "Wisatawan found",
      data: wisatawan,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await getAllWisatawan();
    return res.status(200).json({
      status: "success",
      message: "Wisatawan found",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const wisatawan = await updateWisatawanData(id, data);
    return res.status(200).json({
      status: "success",
      message: "Wisatawan updated",
      data: wisatawan,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Wisatawan not found",
      });
    }
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await removeWisatawan(id);
    return res.status(200).json({
      status: "success",
      message: "Wisatawan deleted",
      data,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Wisatawan not found",
      });
    }
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { createUser, getAllUsers, getUserById } = require("./user-Controller");

// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      message: "success",
      payload: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "failure",
      payload: error.message,
    });
  }
});

// GET /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({
      message: "success",
      payload: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "failure",
      payload: error.message,
    });
  }
});

// POST /api/users
router.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json({
      message: "success",
      payload: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "failure",
      payload: error.message,
    });
  }
});

module.exports = router;

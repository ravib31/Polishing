const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const showUser = await User.find();
      res.status(200).json(showUser);
    } catch (error) {
      res.send(500).json({ error: error.message });
      console.log(error)
    }
  });
  

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name,
      email,
      age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    res.send(400).json({ error: error.message });
    console.log(error)
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({_id:id});
    res.status(200).json(singleUser);
  } catch (error) {
    res.send(500).json({ error: error.message });
    console.log(error)
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({_id:id});
    res.status(200).json(deleteUser);
  } catch (error) {
    res.send(500).json({ error: error.message });
    console.log(error)
  }
});


//patch
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updateUser);
  } catch (error) {
    res.send(500).json({ error: error.message });
    console.log(error)
  }
});


module.exports = router;

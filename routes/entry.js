const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message:"GET OK"})
});

router.post("/", (req, res) => {
    res.json({message:"POST OK"})
});

module.exports = {router};
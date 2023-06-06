const express = require("express");
const router = express.Router();

const {create, readAll} = require("../controllers/entry-controller");

router.get("/", readAll);
router.post("/", create);

module.exports = {router};
const router = require("express").Router();
// const express = require('express');
// const router = express.Router();
// const { createQuestion } = require("./question.controller");

const {
  getQuestionById,
  getQuestions,
  createQuestion,
} = require("./question.controller");
// router.post("/api/questions", createQuestion);
router.post("/", createQuestion);
router.get("/:id", getQuestionById);
router.get("/", getQuestions);

module.exports = router;

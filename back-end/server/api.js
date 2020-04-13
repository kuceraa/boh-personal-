const express = require('express');
const router = express.Router();

const auth = require('./auth');

router.post(
  '/login',
  (req, res, next) => auth.login(req, res, next),
  (req, res) => auth.validate(req, res)
);

module.exports = router;
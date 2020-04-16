const express = require('express');
const router = express.Router();

const caseWorker = require('./caseWorker');

router.post('/clients', (req, res) => caseWorker.getAllClients(req, res));
router.post('/companies', (req, res) => caseWorker.getAllCompanies(req,res));

module.exports = router;
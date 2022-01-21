const router = require('express').Router();
const notes = require('./notesAPI');

router.use(notes);

module.exports = router;
const router = require('express').Router();
const path = require('path');


////Get requests////
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


///////////////////

module.exports = router;
const router = require('express').Router();
const path = require('path');
const fs = require('fs');


router.get('/notes', (req, res) => {
    //read db.json
    fs.readFile(path.join(__dirname, '../../db/db.json'), (err, data) => {
        if (err) {
            return console.error(err);
        }
        const results = JSON.parse(data);
        console.log('reading file notes');
        console.log('api/notes GET request received: ', results);
        res.json(results);
    })


});

router.post('/notes', (req, res) => {
    //receive new note in body and add to db.json
    //give each note a unique id
    //return new note to client
    let newNote = req.body;
    console.log('api/notes POST request received');
    res.send('api/notes POST request received');
});

module.exports = router;
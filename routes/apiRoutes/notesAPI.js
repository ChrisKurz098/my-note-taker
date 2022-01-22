const router = require('express').Router();
const path = require('path');
const fs = require('fs');


router.get('/notes', (req, res) => {
    //read db.json
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }

        res.json(data);
    })


});

router.post('/notes', (req, res) => {
    let notesJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));

   notesJson.push(req.body);
   const updatednotes = JSON.stringify(notesJson);

   fs.writeFileSync(path.join(__dirname, '../../db/db.json'), updatednotes)

    res.json(req.body);
});

module.exports = router;
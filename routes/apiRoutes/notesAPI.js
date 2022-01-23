const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    //read db.json
    let notesJson = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    res.send(notesJson);

});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    // let notesJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));

    notes.push(req.body);
    const updatednotes = JSON.stringify(notes);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), updatednotes)
    console.log(req.body);
    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));

    for (let i = 0; i < notes.length; i++) {
        const e = notes[i];

        if (e.id === id) {

            if (i === notes.length - 1) {
                notes.pop();
                fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes));
                res.json(notes);
                return;
            } else {

                const a = notes.slice(0, i);
                const b = notes.slice(i + 1);
                b.forEach(e => {
                    a.push(e);
                });

                fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(a));
                res.json(a);
                return;
            }
        }
    }
    res.json('no id found');
    return;
});

module.exports = router;
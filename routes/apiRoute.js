const router = require('express').Router();
const notes = require('../db/notes')

//create a get route that reads all the notes in the db json and cooresponds to /api/notes

router.get('/notes', (req, res)=>{
    notes.readNotes().then((data)=>{
        return res.json(data)
    }).catch(err=>res.status(500).json(err))
});

router.post('/notes', (req, res)=>{
    notes.addNote(req.body).then((data)=>{
        return res.json(data)
    }).catch(err=>res.status(500).json(err))
})

router.delete('/notes/:id', (req, res)=>{
    notes.deleteNote(req.params.id).then((data)=>{
        return res.json(data)
    }).catch(err=>res.status(500).json(err))
})

module.exports = router;
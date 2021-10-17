const path = require('path');
const router = require('express').Router();

///notes needs to read the notes.html file in the public folder

router.get('/notes',(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

//wildcard routes *

router.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;
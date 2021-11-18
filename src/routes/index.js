const { Router } = require("express");
const router= Router()

router.get('/', (req, res)=>{
    const data = {
        "Title": "Pelicula Hola mundo",
        "length": 60
    }
    res.json(data);
})

module.exports =router;
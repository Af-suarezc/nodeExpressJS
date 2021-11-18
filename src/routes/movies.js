const _ = require('underscore');
// const {each} = require('underscore')
const {Router} = require('express');
const router = Router();

const movieData=require('../movies.json');
// console.log(movieData);

router.get('/', (req, res)=>{
    res.json(movieData);
})

router.post('/', (req, res)=>{
    const {title, director, year, rating}=req.body;
    const id = movieData.length + 1;
    const newMovie = {id, ...req.body};
    if (title && director && year && rating){
        movieData.push(newMovie)
        res.json(movieData)
    }else{
        res.status(500).json({"request-error":'Wrong Request'})
    }
    res.send('received');
})

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {title, director, year, rating}=req.body;
    if(title && director && year && rating){
        _.each(movieData, (movie, i)=>{
            if(movie.id === id){
                movie.title = title;
                movie.director = director;
                movie.year = year
                movie.rating =rating
            }
        });
      res.json(movieData)
    } else {
        res.status(500).json({"request-error":'Wrong Request'})
    }
})


router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    if(id){
        _.each(movieData, (movie, i)=>{
            if (movie.id == id){
                movieData.splice(i, 1);
            }
        })
        res.send(movieData)
    }
    
})

module.exports =router;
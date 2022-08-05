const router = require('express').Router()

router.get('/search', async(req, res)=> {
    try{
        const db = req.app.locals.db;
        const collection = db.collection('results');

        const results = await collection.find({}).toArray()
        res.json(results)

    }catch (error){
        res.json(500).json({error: error.toString() });
    }
})

module.exports = router; 
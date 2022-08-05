const router = require('express').Router();

const bbad = require('../breakingbad-api');

const _characterList = (character) => {
    return character.map((characters) => {
        return {

           //characters.char_id
            id: characters.char_id,
            name: characters.name,

        };
    });
};


router.get('/search', async (req, res) => {
    try {
    
        
        const { name  } = req.query;

        const searchByKeyword = await bbad.getCategory( name )     
        

        const charObj = searchByKeyword.filter(obj=>{
            charactersName = obj.name;
            id = obj.char_id;
            return charactersName,id;
        });

        const userChoice = _characterList(charObj);

        const data = { 


            Characterlist : {
                info: userChoice  
            }
        
        
        };
      

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});


router.post('/search/char_id/details', async (req, res) => {
    try {
        // destructure the POST body
        const { char_id } = req.body;



        const uniqueCharacter = await bbad.getUniqueID(char_id);
        const countOfList = uniqueCharacter.length;


        //compose the JSON response
        const data = {

            Entry: uniqueCharacter[0].name,
            Number: countOfList,
            ID: char_id,
            Text: uniqueCharacter,
            Time: Date().toString()



        };

        // insert the results into MongoDB
        const db = req.app.locals.db;
        const collection = db.collection('results');

        await collection.insertOne(data);

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;

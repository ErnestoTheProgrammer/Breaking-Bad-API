const superagent = require('superagent');

const config = require('./config.json');

//get list of characters by name
const getCategory = async (searchCategory) => {

    try {

        const selectionURL = `${config.url}?name=${searchCategory}`;
        const response = await superagent.get(selectionURL);
        return response.body;

    } catch (error) {
        console.log(error);
    }
};

//get one character by name
const getUniqueID = async (charactersID) => {
    try { 

        const selectionURL = `${config.url}/${charactersID}`;
       
        const response = await superagent.get(selectionURL);
        return response.body;


    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getCategory,
    getUniqueID
}
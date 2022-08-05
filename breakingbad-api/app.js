const inquirer = require('inquirer');

//path to the index from custom module
const bbad = require('breakingbad-api');

const _printResults = (typeOfInput, selectedCategoryArray) => {

   
        console.log("--------------------------------------------------------------------------");
        console.log(`You've searched ${typeOfInput}: `);


            // for(const obj of )
            for (const obj of selectedCategoryArray) {
                for (const key in obj) {

                    if (!(key === 'img') && !(key === 'category') && !(key === 'better_call_saul_appearance')) {
                        if (key === 'appearance') {
                            console.log(`Seasons appeared: ${obj[key]}`);
                        } else {
                            console.log(`${key}: ${obj[key]}`);
                        }
                    }

                }
            
            console.log("--------------------------------------------------------------------------");


        


    }


}

const _selectionPrompt = async = (selectedCategory, typeOfInput) => {

    // let terms = [];

    const terms = [];

    if (typeOfInput === 'characters') {
        let count = 1;
        for (const obj of selectedCategory) {
            terms.push({
                name: `${obj['name']}`,
                value: `${count}`
            });
            count++;
        }

    } else if (typeOfInput === 'episodes') {
        let count = 1;
        for (const obj of selectedCategory) {
            terms.push({
                name: `${obj['title']}`,
                value: `${count}`
            });
            count++;
        }

    } else if (typeOfInput === 'quotes') {
        let count = 1;
        for (const obj of selectedCategory) {
            terms.push({
                name: `${obj['quote']}`,
                value: `${count}`
            });
            count++;
        }

    };


    return inquirer.prompt([{

        type: 'list',
        name: 'selectedOptions',
        message: `select which ever ${typeOfInput} searched for: `,
        choices: terms
    }]);

};
const _userList = async (charList) => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'userSelected',
            message: 'select the desired character for more details',
            choices: charList
        }
    ]);
};


const searchApi = async (args) => {

    try {

        /*const {
            search
        } = args;

        const breakingBadSelection = await bbad.getCategory(search);

        const selectedOption = await _selectionPrompt(breakingBadSelection, args.search);

        const uniqueCharacter = await bbad.getUniqueID(parseInt(selectedOption.selectedOptions), args.search);

        _printResults(args.search, uniqueCharacter);*/
        const {
            search
        } = args;
        console.log(search); //this is the user input name
        const searchByKeyword = await bbad.getCategory(search);
        const nameList = [];
        for(const obj of searchByKeyword) {
            const charObj = {};
            charObj['name'] = obj.name;
            charObj['id'] = obj.char_id;
            nameList.push(charObj);
        }
        console.log(nameList);
        
        const userChoice = await _userList(nameList);
        const uniqueParam = userChoice.userSelected.replace(/\s/g, '+')
        const uniqueChar = await bbad.getUniqueID(uniqueParam)

        _printResults(args.search, uniqueChar);


    } catch (error) {
        console.log(error);
    }



};

module.exports = {
    searchApi
}
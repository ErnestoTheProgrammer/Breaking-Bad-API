# BREAKING BAD API

## How to user the breaking-bad app cli dependencies

1. Make sure the `breakingbad-cli` and the `breakingbad-api` folders are next to each other in the directory.

2. Access `breakingbad-api` folder via terminal. Once inside the folder run: `npm install`. This will install all the dependencies listed in the package.json.

3. From inside the `breakingbad-cli` To view the help directions for the CLI run: `node cli.js --help`. To view help directions for the search command run: `node cli.js search --help`

4. To run the `breakingbad-cli` CLI:

```
    // run the search command with the search argument to return specific character by ID
    node cli.js search {characterfirstname}
    
```

![pinkmanSearch](https://user-images.githubusercontent.com/43262085/183027003-2ef15905-104f-4078-925e-60db412bba97.PNG)
```
    // run the search command with the last name argument and pass the second name as a single word to return list of characters with same last name
    node cli.js search {characterlastname} --s {secondWordTeamName}
    

    // EX returns single character by ID:
    node cli.js search jesse pinkman --s

    //EX returns list:
    node cli.js search pinkman --s

    // List of characters by last name pinkman (Breaking-Bad):
    Jesse Pinkman
    Mrs. Pinkman
    Adam Pinkman
    Jake Pinkman
    
    //when list is returned, select character for character's information
    

```

## Using Postman

1. Begin by starting the server using "npm windows"
![image](https://user-images.githubusercontent.com/43262085/183027825-4ebacd5c-8c1b-45c7-92c4-f404a856da29.png)

### GET method
2. Open Postman and set the function to "get" to retrieve information by ID (name)
  * make sure to select "raw" and "JSON" to get correct JSON format responses in the body
  * make sure the correct URL link is being used and type in with correct search parameters
  ![image](https://user-images.githubusercontent.com/43262085/183028991-d2c99473-0cd5-4915-a915-6d088e73eaed.png)
  * Retrieve list of JSON responses based of name
 
### POST method
3. Change postman function to "post" to begin search in body

![image](https://user-images.githubusercontent.com/43262085/183030472-7d5a0cce-dad7-487c-8871-b2f3dc702ada.png)

  * Change URL endpoint and search via "char_id" inside body
  
![image](https://user-images.githubusercontent.com/43262085/183031189-fa3447f8-d166-4ade-8b61-460cc15a6c60.png)

  * Retrieve JSON response in body for specific characters information
  
![image](https://user-images.githubusercontent.com/43262085/183031698-1db7082c-93d6-479d-9d1d-deb698466d36.png)

## Using MongoDB

* MongoDB stores character searches into it's database and is able to be accessed with "history/search" endpoint in postman
![image](https://user-images.githubusercontent.com/43262085/183032075-f2e58c69-aae2-4ab9-8620-38514d68b740.png)

## Actual MongoDB cluster from collections

![image](https://user-images.githubusercontent.com/43262085/183034273-b222400a-be9b-4803-a091-45b4cfd039f9.png)







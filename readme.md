### DOWNLOAD & INSTALL NODEJS

`'https://nodejs.org/en/'`

***
### VERIFY VERSION

```
$ node -v
```
***
### RUN NODEJS
```
$ node
```
***
### RUN A SCRIPT
```
$ node <file_name.js>
```
***
### LOAD MODULE || PACKAGE
```
$ const <module_artibrary_name> = require('<module_name>');
```
***
### EXPORT VARIABLES & FUNCTIONS
```
$ module.exports = <variable_name>;
```
***
### INITIALIZE NPM IN OUR PROJECT
```
$ npm init
```
***
### INITIALIZE NPM WITH DEFAULT VALUES
```
$ npm init -y
```
***
### INSTALL NPM
```
$ npm install
```
***
### INSTALL A NPM PACKAGE
```
$ npm i <dependency_name>
```
***
### INSTALL A NPM PACKAGE GLOBALLY
```
$ npm i <dependency_name> -g
```
***
### INSTALL/UNINSTALL NPM PACKAGE DEMON GLOBALLY TO RESTART APP AUTOMATICALLY AND SEE CHANGES
```
$ npm i nodemon -g | $ npm uninstall nodemon -g
```
```
$ nodemon <file_name.js>
```
***
### INSTALL/UNINSTALL NPM PACKAGE AS A DEV DEPENDENCY
```
$ nodemon i nodemon --save-dev
```
***
### WATCH CHANGES OF SPECIFIC EXTENSIONS WHEN SERVER IS RUNNING
```
$ nodemon src/app.js -e js,hbs
```
***
### GET VALUES PASSED VIA CONSOLE
```
$ node <file_name.js> <input> <option1> <option2>
```

Example: 
```
$node app.js article --title="article name" --createdAt="2020-04-22"
```
```
$ proces.argv // Output: An array containing node path, file path and input passed
```
***
### CREATE COMMANDS WITH YARGS PACKAGE
```
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Required or not
            type: 'string'
        },
        createdAt: {
            describe: 'Creation date',
            demandOption: true,
            type: 'string'
        },
        isActive: {
            describe: 'Is the note active?',
            demandOption: true,
            type: 'boolean'
        }
    },
    handler: (argv) => console.log(
        'Title: ' + argv.title, '\n',
        'Created at: ' + argv.createdAt, '\n',
        'This note is ' + argv.isActive ? 'active' : 'not active'
    )
});

yargs.parse() // = console.log(yargs.argv);
```
***
### USEFUL PACKAGES
`validator - chalk - nodemon - yargs`
***
### DEBUGGING IN NODEJS
In code
```
debugger
```

In console
```
$ node inspect add --title="Note 10" --body="This is the body"
```
```
$ debug> restart // to restart debugging if closed debugging window
```

In browser

Go to `'chrome://inspect'`

Click on `Settings` and make sure both `127.0.0.1` and `localhost` with same port are set
Click then on `inspect`
***
### NPM REQUEST
```
$ npm i request // (deprecated)
```
```
$ npm i postman-request
```

Example:

```
const request = require('request');

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body); // Convert json to object to access keys
    console.log(data.current);
});
```
***
### INSTALL EXPRESS, FRAMEWORK FOR NODE.JSON
```
$ npm i express
```
Website: `'expressjs.com'`
***
### IMPLEMENTATION OF EXPRESS
```
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello Express!');
});

app.listen(3000, () => console.log('server is up on port 3000.'));
```
***
### IMPLEMENTATION OF HANDLEBARS.JS, A TEMPLATING LANGUAGE
```
$ npm i hbs
```
***
### CREATE SSH KEY
```
$ ssh-keygen -t rsa -b 4096 -C "mail@mail.com"
```
- Verify whether key exists
```
$ ls -a -l ~/.ssh // Attended Output: "id_rsa", "id_rsa.pub"
```
- Check agent
```
$ eval $(ssh-agent -s) // On window. Output: "Agent pid <number>"
```
```
$ eval "$(ssh-agent -s)" // On Linux/Mac
```
- Add identity to facilitate ssh comunication
```
$ ssh-add ~/.ssh/id_rsa // Output: "Identity added: /c/Users/laheravilla/.ssh/id_rsa (mail@mail.com)" -- on Window/Linux
```
```
$ ssh-add -K ~/.ssh/id_rsa // Output: "Identity added: /c/Users/laheravilla/.ssh/id_rsa (mail@mail.com)" -- on Mac
```
- Get id_rsa.pub to comunicate with github
```
$ cat ~/.ssh/id_rsa.pub // Output: "ssh-rsa ... mail@mail.com" 
```
- Test ssh connection
```
$ ssh -T git@github.com
```
***
### HEROKU
- Download from https://www.heroku.com
- Create an account

- In console verify installation:
```
$ heroku -v
```
- Login from console:
```
$ heroku login
```
- Add ssh to heroku to send/update project
```
$ heroku keys:add
```
- Create project in heroku from command
```
$ heroku create <unique name in heroku app> // Output: "<project url>" and "<deployment repository>" 
```
- Tell heroku which file to run on `package.json`
```
"scripts": {
    "start": "node src/app.js"
  }
```
- On dev and prod we will run now
```
$ npm run start
```
- Push to HEROKU
```
$ git push heroku master
```
- Open project from console
```
$ heroku Open
```
***
### MONGODB
- Install
```
$ npm i mongodb
```
- Setting
```
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) return console.log('Unable to connet to database!')
    console.log('Successfully connected to database!')
});
```
- See Node.js MongoDB Driver API in http://mongodb.github.io/node-mongodb-native/3.5/api/' 
- Insert One document
```
db.collection('users').insertOne({object}, (error, result) => {
    if (error) return console.log('Unable to insert user.');
    console.log(result.ops);
});
```
- Insert Many documents
```
db.collection('users').insertMany([{object},{object}], (error, result) => {
    if (error) return console.log('Unable to insert user.');
    console.log(result.ops);
});
```
- Find One document by field/fields
```
db.collection('users').findOne({ name: 'Jane' }, (err, user) => {
    if (err) return console.log('Unable to fetch!');
    console.log(user);
});    
```
- Find One document by ID field
```
db.collection('users').findOne({ _id : ObjectID('5ead0c1f7c611a2584e11c8a') }, (err, user) => {
    if (err) return console.log('Unable to fetch!');
    console.log(user);
});    
```
- Find All documents
```
db.collection('users').find({}).toArray((err, users) => {
    if (err) return console.log('Unable to fetch documents!');
    console.log(users);
});   
```
- Find All documents with condition. See other cursor options: `.toArray(array)` `.max(int)...` in http://mongodb.github.io/node-mongodb-native/3.5/api/Cursor.html#collation
```
db.collection('users').find({ age: 36 }).toArray((err, users) => {
    if (err) return console.log('Unable to fetch documents!');
    console.log(users);
}); 
```
- Find All documents being older than 26. 
```
db.collection('users').find({}).toArray((err, users) => {
    if (err) return console.log('Unable to fetch documents!');
    console.log(users.filter(user => user.age > 26));
}); 
```
- Update one document by ID. See other update operators: `$set: {} $rename: {} $unset: {}...` in https://docs.mongodb.com/manual/reference/operator/update/
```
db.collection('users').updateOne({ _id: new ObjectID('5ead0c1f7c611a2584e11c8b') }, {
    $set: { name: 'Robert' }
}).then(result => console.log(result)).catch(err => console.log(err));
```
- Update many documents by age, by incrementing age in 1
```
db.collection('users').updateMany({ age: 26 }, {
    $inc: { age: 1 }
}).then(result => console.log(result)).catch(err => console.log(err));
```
- Delete one document by ID. Note: `.deletedCount` shows deletion quantity
```
db.collection('users').deleteOne({ _id: new ObjectID('5ead0dd4b7d91621d0af29ad') })
.then(result => console.log(result.deletedCount)).catch(err => console.log(err));
```
- Delete many documents by age
```
db.collection('users').deleteMany({ age: 27 })
.then(result => console.log(result.deletedCount)).catch(err => console.log(err));
```
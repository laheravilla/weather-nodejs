### DOWNLOAD & INSTALL NODEJS
`'https://nodejs.org/en/'`

### VERIFY VERSION
```
$ node -v
```

### RUN NODEJS
```
$ node
```

### RUN A SCRIPT
```
$ node <file_name.js>
```

### LOAD MODULE || PACKAGE
```
$ const <module_artibrary_name> = require('<module_name>');
```

### EXPORT VARIABLES & FUNCTIONS
```
$ module.exports = <variable_name>;
```

### INITIALIZE NPM IN OUR PROJECT
```
$ npm init
```

### INITIALIZE NPM WITH DEFAULT VALUES
```
$ npm init -y
```

### INSTALL NPM
```
$ npm install
```

### INSTALL A NPM PACKAGE
```
$ npm i <dependency_name>
```

### INSTALL A NPM PACKAGE GLOBALLY
```
$ npm i <dependency_name> -g
```

### INSTALL NPM PACKAGE DEMON GLOBALLY TO RESTART APP AUTOMATICALLY AND SEE CHANGES
```
$ npm i nodemon -g
```
```
$ nodemon <file_name.js>
```

### WATCH CHANGES OF SPECIFIC EXTENSIONS WHEN SERVER IS RUNNING
```
$ nodemon src/app.js -e js,hbs
```

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
### USEFUL PACKAGES
`validator - chalk - nodemon - yargs`

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

### INSTALL EXPRESS, FRAMEWORK FOR NODE.JSON
```
$ npm i express
```
Website: `'expressjs.com'`

### IMPLEMENTATION OF EXPRESS
```
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello Express!');
});

app.listen(3000, () => console.log('server is up on port 3000.'));
```
### IMPLEMENTATION OF HANDLEBARS.JS, A TEMPLATING LANGUAGE
```
$ npm i hbs
```

### HEROKU
- Download from https://www.heroku.com
- Create an account

In console verify installation:
```
$ heroku -v
```

Login from console:
```
$ heroku login
```

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
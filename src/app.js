const path = require('path');
const express = require('express');
const hbs = require('hbs');
const utils = require('./utils/utils');

// console.log(__dirname); // E:\FORMATIONS\node-course-udemy\web-server\src
// console.log(__filename); // E:\FORMATIONS\node-course-udemy\web-server\src\app.js

const app = express(); // Call server

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location. See more on 'https://expressjs.com/en/4x/api.html'
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Route '/'
app.get('', (req, res) => res.render('index',
    { 
        title: 'Weather',
        name: 'Yurniel'
    }
));

// Rouute '/about'
app.get('/about', (req, res) => res.render('about',
    {
        title: 'Weather',
        name: 'Yurniel'
    }
));

// Route '/help'
app.get('/help', (req, res) => res.render('help',
    {
        title: 'Weather',
        message: 'We are here to help you'
    }
));

// Route '/weather'
app.get('/weather', (req, res) => {
    if (req.query.location === '') {
        return res.send({ error: 'You must provide a location to get forecast' });
    } else if (!req.query.location) {
        return res.render('weather',
            {
                title: 'Weather',
                message: 'Enter a location to know forecast'
            }
        )
    }
    // console.log(req.query); // req.query = GET
 
    utils.geocode(req.query.location, (error, { latitude, longitude, location } = {}) => { // Destructred object with empty object by default
        if (error) {
            return res.send({ error });
        }
        
        utils.forecast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                query: req.query.location,
                location,
                forecast: forcastData
            });
        });
    }); 
});

// Route '/help/*'
app.get('/help/*', (req, res) => res.render('404',
    {
        filename: 'article-not-found.jpg'
    }
));

// Route '*'
app.get('*', (req, res) => res.render('404',
    {
        filename: 'page-not-found.jpg'
    }
));


// start server with port=3000
app.listen(3000, () => console.log('server is up on port 3000.')); 
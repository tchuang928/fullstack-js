// import our config.js file
import config from './config';

// import other api routing from our api module
import apiRouter from './api';

// import express 
import express from 'express';
const server = express();

// set "Effective JavaScript Templating" for dynamic content to server render our front end components
server.set('view engine', 'ejs');

// API: server side routing
server.get('/', (req, res) => {
	res.render('index', {
		content: '...'
	});
});

/*server.get('/about.html', (req, res) => {
	res.send('The about page');
}); */

// api routing
server.use('/api', apiRouter);
// express static middleware- serve static assets like .html files
// this is a simplistic way during development.
// during production, public assets should be managed separately from the node server.
server.use(express.static('public'));

// express server listening to the port in our config.js file. The callback function is a success handler.
server.listen(config.port, () => {
	console.info('Express listening on port ', config.port);
});


//console.log(config, nodeEnv);

//logStars('Function');

const express = require('express');
const morgan  = require('morgan');
const app     = express();

app.use(morgan('dev'));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));





// app.get('/go',(req, res) => {
//   res.redirect('/');
// });
// app.get('/google',(req, res) => {
//   res.redirect('http://www.google.co.uk');
// });

// app.all('*', (req, res, next) => {
//   res.writeHead(200, {'Content-Type': 'text/plain' });
//   next();
// });

app.get('/',(req, res,) => {
  res.render('index', {message: 'Hello World !'});
});

app.get('/about',(req, res,) => {
  res.end('Welcome to the Homepage');
});


// 404'd!
app.use((req, res) => {
  res.end('404 error!');
});

app.listen(3000, () => console.log('Express is up and running'));

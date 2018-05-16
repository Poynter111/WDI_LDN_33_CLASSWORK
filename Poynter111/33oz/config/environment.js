const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI ||
'mongodb://localhost/33ounce';

module.exports = { port, dbURI };

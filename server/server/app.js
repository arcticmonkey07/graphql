const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose.connect(`mongodb+srv://arctic:2130945@arctic-a7ck0.gcp.mongodb.net/graphql?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
  err ? console.log(error) : console.log('Server started!');
});
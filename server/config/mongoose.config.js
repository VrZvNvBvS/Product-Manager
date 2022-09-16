const mongoose = require("mongoose");
const database = "productsDB";

mongoose.connect(`mongodb+srv://Random:1234567890@supervirgo.m337wu3.mongodb.net/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Successfully connected to database: ${database}`))
    .catch(err => console.log(`Error connecting to database, ${database} `, err));

const mongoose = require( 'mongoose' );
const mongoURI = "mongodb://localhost:27017/dribbble";

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology:true})
        .then(() => {
            console.log("connected to mongoDB")
        })
        .catch((error) => {
            console.log("error connecting to mongo DB", error.message);
        });
};

module.exports = connectToMongo;
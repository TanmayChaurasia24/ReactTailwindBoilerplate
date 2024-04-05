const express = require('express')
const connectToMongo = require('./db')
const authRoutes = require('./routes/auth')
const cors = require( 'cors' ) 

const app = express();
const PORT = 5000;

connectToMongo();

app.use(cors())

app.use(express.json())

app.use('/auth', authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

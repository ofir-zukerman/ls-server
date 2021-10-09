require('dotenv').config();
const { MONGODB_URI, PORT} = process.env;
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');
const infoRoutes = require('./routes/info.routes');
const userAuthMiddleware = require('./middlewares/userAuth.middleware');

//----------------------------------DB Connection-------------------------------------
mongoose.connect(
    "mongodb+srv://ofirzuker:o123456@ls-project.hjlto.mongodb.net/test?authSource=admin&replicaSet=atlas-26h35g-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connected to MongoDB!"); })
    .catch((err) => { console.error(`Error connecting to the database. \n${err}`); })

//----------------------------------Middlewares Router-------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

// Enter app routes
app.use('/api/auth', authRoutes);

// Information routes
app.use('/api/info', infoRoutes);

// Auth middleware
app.use(userAuthMiddleware);


//----------------------------------Run Server---------------------------------------------

app.listen(PORT || 8080, () => {
    console.log(`Listening on port => ${PORT}`);
});


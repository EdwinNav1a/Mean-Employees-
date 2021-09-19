const mongoose = require('mongoose')

mongoose.connect("mongodb://Localhost/mean-employees",)
        .then(db=> console.log('Db is connected'))
        .catch(err => console.error(err))
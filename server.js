const app = require('./src/app.js');
const connect = require('./src/db/db');
connect();

const port = process.env.PORT || 3000

app.listen('3000',()=>{
    console.log('server is running on port 3000');
})
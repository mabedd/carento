import express from "express"
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import routes from './routes.js'

var port = 5000;

connectDB();
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.get('/', (req, res) => {
    res.send('API is running')
});

app.listen(port, console.log(`server running on port ${port}`));